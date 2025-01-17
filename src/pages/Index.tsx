import { useState } from "react";
import { Player, Position, Lineup } from "@/types/basketball";
import { PlayerCard } from "@/components/PlayerCard";
import { LineupDisplay } from "@/components/LineupDisplay";
import { getRandomPlayersForPosition, calculateTeamRating } from "@/data/players";
import { Button } from "@/components/ui/button";

const POSITIONS: Position[] = ["PG", "SG", "SF", "PF", "C"];

const Index = () => {
  const [availablePlayers, setAvailablePlayers] = useState<Player[]>(() =>
    POSITIONS.map((pos) => {
      const positionPlayers = getRandomPlayersForPosition(pos);
      return positionPlayers[Math.floor(Math.random() * positionPlayers.length)];
    })
  );
  const [lineup, setLineup] = useState<Lineup>({});
  const [wins, setWins] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handlePlayerSelect = (player: Player) => {
    const newLineup = { ...lineup, [player.position]: player };
    setLineup(newLineup);

    if (Object.keys(newLineup).length === 5) {
      const rating = calculateTeamRating(newLineup as Required<Lineup>);
      setWins(rating);
      setIsComplete(true);
    } else {
      // Generate new set of available players, excluding positions already selected
      const newAvailablePlayers = POSITIONS.map((pos) => {
        if (newLineup[pos]) return null;
        const positionPlayers = getRandomPlayersForPosition(pos);
        return positionPlayers[Math.floor(Math.random() * positionPlayers.length)];
      }).filter((p): p is Player => p !== null);
      
      setAvailablePlayers(newAvailablePlayers);
    }
  };

  const handlePlayAgain = () => {
    setLineup({});
    setWins(0);
    setIsComplete(false);
    setAvailablePlayers(
      POSITIONS.map((pos) => {
        const positionPlayers = getRandomPlayersForPosition(pos);
        return positionPlayers[Math.floor(Math.random() * positionPlayers.length)];
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-nba-blue mb-4">
            Build Your Dream Team
          </h1>
          <p className="text-xl text-gray-600">
            Select players to build your ultimate lineup
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {!isComplete && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {availablePlayers.map((player) => (
                  <PlayerCard
                    key={player.id}
                    player={player}
                    onSelect={handlePlayerSelect}
                  />
                ))}
              </div>
            )}
            {isComplete && (
              <div className="flex justify-center">
                <Button
                  onClick={handlePlayAgain}
                  className="bg-nba-blue hover:bg-nba-blue/90"
                >
                  Play Again
                </Button>
              </div>
            )}
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