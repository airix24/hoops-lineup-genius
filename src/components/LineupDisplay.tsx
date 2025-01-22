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
    selectedPlayers.forEach(player => {
      coveredPositions.add(player.position);
      player.secPositions.forEach((pos: Position) => coveredPositions.add(pos));
    });
    
    const allPositions: Position[] = ["PG", "SG", "SF", "PF", "C"];
    const missingPositions = allPositions.filter(pos => !coveredPositions.has(pos));
    
    return {
      covered: Array.from(coveredPositions),
      missing: missingPositions
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
          {["PG", "SG", "SF", "PF", "C"].map((position) => (
            <div key={position} className="flex items-center gap-4">
              <span className="font-medium w-12">{position}:</span>
              {lineup[position as Position] ? (
                <>
                  <img
                    src={lineup[position as Position]!.imageUrl}
                    alt={lineup[position as Position]!.name}
                    className="w-8 h-10 object-cover"
                  />
                  <span>{lineup[position as Position]!.name}</span>
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
                  {positionCoverage.covered.includes(pos) ? (
                    <span className="text-green-600">
                      Covered by: {selectedPlayers.filter(p => 
                        p.position === pos || p.secPositions.includes(pos)
                      ).map(p => p.name).join(", ")}
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