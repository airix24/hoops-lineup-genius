import { Lineup, Position } from "@/types/basketball";
import { Card } from "@/components/ui/card";
import {
  calculateTeamRating,
  calculatePositionCoverageScore,
} from "@/data/players";

interface LineupDisplayProps {
  lineup: Lineup;
  wins: number;
  mode: "classic" | "positionless";
  selectedPlayers?: any[];
}

export const LineupDisplay = ({
  lineup,
  wins,
  mode,
  selectedPlayers = [],
}: LineupDisplayProps) => {
  // Calculate the rating only if lineup is complete
  const rating =
    Object.keys(lineup).length === 5 || selectedPlayers.length === 5
      ? calculateTeamRating(
          mode === "classic"
            ? (lineup as Required<Lineup>)
            : selectedPlayers.reduce((acc, player, index) => {
                acc[`P${index + 1}` as keyof Lineup] = player;
                return acc;
              }, {} as Lineup),
          mode
        )
      : 0;

  // Calculate position coverage for positionless mode
  const getPositionCoverage = () => {
    const allPositions: Position[] = ["PG", "SG", "SF", "PF", "C"];
    const playerAssignments = new Map<Position, string[]>();

    // Initialize playerAssignments map
    allPositions.forEach((pos) => {
      playerAssignments.set(pos, []);
    });

    // Helper function to get all possible positions for a player
    const getPlayerPositions = (player: any) => {
      return [player.position, ...player.secPositions];
    };

    // Helper function to check if an assignment is valid
    const isValidAssignment = (
      assignments: Map<string, Position>,
      player: any,
      position: Position
    ) => {
      return getPlayerPositions(player).includes(position);
    };

    // Helper function to count covered positions
    const countCoveredPositions = (assignments: Map<string, Position>) => {
      const covered = new Set(Array.from(assignments.values()));
      return covered.size;
    };

    // Try all possible combinations using backtracking
    const findBestAssignment = () => {
      const players = [...selectedPlayers];
      let bestAssignment = new Map<string, Position>();
      let maxCovered = 0;

      const tryAssignments = (
        currentAssignment: Map<string, Position>,
        playerIndex: number
      ) => {
        if (playerIndex === players.length) {
          const coveredCount = countCoveredPositions(currentAssignment);
          if (coveredCount > maxCovered) {
            maxCovered = coveredCount;
            bestAssignment = new Map(currentAssignment);
          }
          return;
        }

        const player = players[playerIndex];
        const possiblePositions = getPlayerPositions(player);

        for (const pos of possiblePositions) {
          if (isValidAssignment(currentAssignment, player, pos)) {
            const newAssignment = new Map(currentAssignment);
            newAssignment.set(player.name, pos);
            tryAssignments(newAssignment, playerIndex + 1);
          }
        }
      };

      tryAssignments(new Map(), 0);
      return bestAssignment;
    };

    // Get the best assignment
    const bestAssignment = findBestAssignment();

    // Convert the best assignment to our playerAssignments format
    bestAssignment.forEach((position, playerName) => {
      playerAssignments.get(position)?.push(playerName);
    });

    const coveredPositions = new Set(Array.from(bestAssignment.values()));
    const missingPositions = allPositions.filter(
      (pos) => !coveredPositions.has(pos)
    );

    return {
      covered: Array.from(coveredPositions),
      missing: missingPositions,
      assignments: playerAssignments,
    };
  };

  // Calculate position penalty for positionless mode
  const positionPenalty =
    mode === "positionless" && selectedPlayers.length === 5
      ? calculatePositionCoverageScore(selectedPlayers)
      : 0;

  // Calculate wins with and without penalty
  const baseWins = wins;
  // Apply penalty as a reduction in wins
  const adjustedWins = Math.max(
    0,
    Math.round(baseWins * (1 - Math.abs(positionPenalty) / 100))
  ); // Convert penalty to percentage

  if (mode === "classic") {
    return (
      <Card className="p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Lineup</h2>
        <div className="space-y-4">
          {(["PG", "SG", "SF", "PF", "C"] as Position[]).map((position) => (
            <div key={position} className="flex items-center gap-4">
              <span className="font-medium w-12">{position}:</span>
              {lineup[position] ? (
                <>
                  <img
                    src={lineup[position]!.imageUrl}
                    alt={lineup[position]!.name}
                    className="w-8 h-10 object-cover"
                  />
                  <span>{lineup[position]!.name}</span>
                </>
              ) : (
                <span className="text-gray-400">Empty</span>
              )}
            </div>
          ))}
        </div>
        {wins > 0 && (
          <div className="mt-6 space-y-4">
            <div className="text-center">
              <p className="text-xl font-bold">Projected Record</p>
              <p className="text-2xl text-nba-blue">
                {wins}-{82 - wins}
              </p>
            </div>
          </div>
        )}
      </Card>
    );
  }

  const positionCoverage = getPositionCoverage();

  return (
    <Card className="p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Lineup</h2>
      <div className="space-y-4">
        {selectedPlayers.map((player, index) => (
          <div key={player.id} className="flex items-center gap-4">
            <span className="font-medium w-12">#{index + 1}</span>
            <img
              src={player.imageUrl}
              alt={player.name}
              className="w-8 h-10 object-cover"
            />
            <span>{player.name}</span>
          </div>
        ))}
        {Array.from({ length: Math.max(0, 5 - selectedPlayers.length) }).map(
          (_, i) => (
            <div key={`empty-${i}`} className="flex items-center gap-4">
              <span className="font-medium w-12">
                #{selectedPlayers.length + i + 1}
              </span>
              <span className="text-gray-400">Empty</span>
            </div>
          )
        )}
      </div>
      {selectedPlayers.length === 5 && (
        <div className="mt-6 space-y-4">
          <div className="text-center">
            <p className="text-xl font-bold">Projected Record</p>
            <p className="text-2xl text-nba-blue">
              {adjustedWins}-{82 - adjustedWins}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
};
