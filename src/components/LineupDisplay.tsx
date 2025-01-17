import { Lineup } from "@/types/basketball";
import { Card } from "@/components/ui/card";
import { calculateTeamRating } from "@/data/players";

interface LineupDisplayProps {
  lineup: Lineup;
  wins: number;
}

export const LineupDisplay = ({ lineup, wins }: LineupDisplayProps) => {
  // Calculate the rating only if lineup is complete
  const rating =
    Object.keys(lineup).length === 5
      ? calculateTeamRating(lineup as Required<Lineup>)
      : 0;

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
};
