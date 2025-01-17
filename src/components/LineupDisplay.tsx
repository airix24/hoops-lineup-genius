import { Lineup } from "@/types/basketball";
import { Card } from "@/components/ui/card";

interface LineupDisplayProps {
  lineup: Lineup;
  wins: number;
}

export const LineupDisplay = ({ lineup, wins }: LineupDisplayProps) => {
  return (
    <Card className="p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Lineup</h2>
      <div className="space-y-4">
        {Object.entries(lineup).map(([position, player]) => (
          player && (
            <div key={position} className="flex justify-between items-center">
              <span className="font-medium">{position}:</span>
              <span>{player.name}</span>
            </div>
          )
        ))}
      </div>
      {wins > 0 && (
        <div className="mt-6 text-center">
          <p className="text-xl font-bold">Projected Record</p>
          <p className="text-2xl text-nba-blue">{wins}-{82 - wins}</p>
        </div>
      )}
    </Card>
  );
};