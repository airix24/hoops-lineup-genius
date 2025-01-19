import { Lineup } from "@/types/basketball";
import { Card } from "@/components/ui/card";
import { calculateTeamRating } from "@/data/players";

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
      ? calculateTeamRating(lineup as Required<Lineup>)
      : 0;

  if (mode === "classic") {
    return (
      <Card className="p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Lineup</h2>
        <div className="space-y-4">
          {["PG", "SG", "SF", "PF", "C"].map((position) => (
            <div key={position} className="flex items-center gap-4">
              <span className="font-medium w-12">{position}:</span>
              {lineup[position] ? (
                <>
                  <img
                    src={lineup[position].imageUrl}
                    alt={lineup[position].name}
                    className="w-8 h-10 object-cover"
                  />
                  <span>{lineup[position].name}</span>
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
        {Array.from({ length: Math.max(0, 5 - selectedPlayers.length) }).map((_, i) => (
          <div key={`empty-${i}`} className="flex items-center gap-4">
            <span className="font-medium w-12">#{selectedPlayers.length + i + 1}</span>
            <span className="text-gray-400">Empty</span>
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
};