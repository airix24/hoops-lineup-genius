import { Lineup, Position } from "@/types/basketball";
import { Card } from "@/components/ui/card";
import { calculateTeamRating, calculatePositionCoverageScore } from "@/data/players";

interface LineupDisplayProps {
  lineup: Lineup;
  wins: number;
  mode: "classic" | "positionless";
  selectedPlayers?: any[];
}

export const LineupDisplay = ({ lineup, wins, mode, selectedPlayers = [] }: LineupDisplayProps) => {
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
    const coveredPositions = new Set<Position>();
    const playerAssignments = new Map<Position, string[]>();
    const allPositions: Position[] = ["PG", "SG", "SF", "PF", "C"];
    
    // Initialize playerAssignments map
    allPositions.forEach(pos => {
      playerAssignments.set(pos, []);
    });

    // First pass: Try to assign players to their primary positions
    selectedPlayers.forEach(player => {
      if (!coveredPositions.has(player.position)) {
        coveredPositions.add(player.position);
        playerAssignments.get(player.position)?.push(player.name);
      }
    });

    // Second pass: Try to fill remaining positions with secondary positions
    selectedPlayers.forEach(player => {
      if (!playerAssignments.get(player.position)?.includes(player.name)) {
        // This player hasn't been assigned yet
        for (const secPos of player.secPositions) {
          if (!coveredPositions.has(secPos)) {
            coveredPositions.add(secPos);
            playerAssignments.get(secPos)?.push(player.name);
            break; // Assign to first available secondary position
          }
        }
      }
    });
    
    const missingPositions = allPositions.filter(pos => !coveredPositions.has(pos));
    
    return {
      covered: Array.from(coveredPositions),
      missing: missingPositions,
      assignments: playerAssignments
    };
  };

  // Calculate position penalty for positionless mode
  const positionPenalty = mode === "positionless" && selectedPlayers.length === 5
    ? calculatePositionCoverageScore(selectedPlayers)
    : 0;

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
            <span className="text-gray-500 ml-2">({player.position})</span>
          </div>
        ))}
        {Array.from({ length: Math.max(0, 5 - selectedPlayers.length) }).map((_, i) => (
          <div key={`empty-${i}`} className="flex items-center gap-4">
            <span className="font-medium w-12">#{selectedPlayers.length + i + 1}</span>
            <span className="text-gray-400">Empty</span>
          </div>
        ))}
      </div>
      {selectedPlayers.length === 5 && (
        <div className="mt-6 space-y-4">
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">Position Coverage</h3>
            <div className="space-y-2">
              {(["PG", "SG", "SF", "PF", "C"] as Position[]).map((pos) => (
                <div key={pos} className="flex items-center gap-2">
                  <span className="w-10 font-medium">{pos}:</span>
                  {positionCoverage.assignments.get(pos)?.length ? (
                    <span className="text-green-600">
                      Covered by: {positionCoverage.assignments.get(pos)?.join(", ")}
                    </span>
                  ) : (
                    <span className="text-red-500">Not covered (-3)</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center border-t pt-4">
            <p className="text-xl font-bold">Team Rating</p>
            <div className="flex justify-center items-center gap-2">
              <span className="text-2xl text-nba-blue">{selectedPlayers.reduce((sum, player) => sum + player.main, 0)}</span>
              {positionPenalty !== 0 && (
                <span className="text-red-500">({positionPenalty})</span>
              )}
            </div>
            <p className="text-xl font-bold mt-4">Projected Record</p>
            <p className="text-2xl text-nba-blue">
              {wins}-{82 - wins}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
};