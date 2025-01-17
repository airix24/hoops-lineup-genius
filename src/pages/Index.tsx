import { useState } from "react";
import { Player, Position, Lineup } from "@/types/basketball";
import { PlayerCard } from "@/components/PlayerCard";
import { LineupDisplay } from "@/components/LineupDisplay";
import { getRandomPlayersForPosition, calculateTeamRating } from "@/data/players";
import { useToast } from "@/hooks/use-toast";

const POSITIONS: Position[] = ["PG", "SG", "SF", "PF", "C"];

const Index = () => {
  const { toast } = useToast();
  const [currentPosition, setCurrentPosition] = useState<Position>("PG");
  const [availablePlayers, setAvailablePlayers] = useState<Player[]>(() =>
    getRandomPlayersForPosition("PG")
  );
  const [lineup, setLineup] = useState<Lineup>({});
  const [wins, setWins] = useState(0);

  const handlePlayerSelect = (player: Player) => {
    const newLineup = { ...lineup, [player.position]: player };
    setLineup(newLineup);

    const nextPositionIndex = POSITIONS.indexOf(currentPosition) + 1;
    
    if (nextPositionIndex < POSITIONS.length) {
      const nextPosition = POSITIONS[nextPositionIndex];
      setCurrentPosition(nextPosition);
      setAvailablePlayers(getRandomPlayersForPosition(nextPosition));
    } else {
      const rating = calculateTeamRating(newLineup as Required<Lineup>);
      setWins(rating);
      toast({
        title: "Lineup Complete!",
        description: `Your team is projected to win ${rating} games!`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-nba-blue mb-4">
            Build Your Dream Team
          </h1>
          <p className="text-xl text-gray-600">
            Select your {currentPosition} to continue building your lineup
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {availablePlayers.map((player) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  onSelect={handlePlayerSelect}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <LineupDisplay lineup={lineup} wins={wins} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;