import { useState } from "react";
import { Player, Position, Lineup } from "@/types/basketball";
import { PlayerCard } from "@/components/PlayerCard";
import { LineupDisplay } from "@/components/LineupDisplay";
import {
  getRandomPlayersForPosition,
  calculateTeamRating,
} from "@/data/players";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const POSITIONS: Position[] = ["PG", "SG", "SF", "PF", "C"];

const Index = () => {
  const [availablePlayers, setAvailablePlayers] = useState<(Player | null)[]>(
    () =>
      POSITIONS.map((pos) => {
        const positionPlayers = getRandomPlayersForPosition(pos);
        return positionPlayers[
          Math.floor(Math.random() * positionPlayers.length)
        ];
      })
  );
  const [lineup, setLineup] = useState<Lineup>({});
  const [wins, setWins] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handlePlayerSelect = (player: Player) => {
    if (lineup[player.position]) {
      return;
    }

    const newLineup = { ...lineup, [player.position]: player };
    setLineup(newLineup);

    const selectedPositionsCount = Object.keys(newLineup).length;

    if (selectedPositionsCount === 5) {
      const rating = calculateTeamRating(newLineup as Required<Lineup>);
      setWins(rating);
      setIsComplete(true);
    } else {
      // Update available players, replacing selected position with null
      const newAvailablePlayers = POSITIONS.map((pos) => {
        if (newLineup[pos]) return null;
        const positionPlayers = getRandomPlayersForPosition(pos);
        return positionPlayers[
          Math.floor(Math.random() * positionPlayers.length)
        ];
      });

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
        return positionPlayers[
          Math.floor(Math.random() * positionPlayers.length)
        ];
      })
    );
  };

  const renderPositionCard = (position: Position, index: number) => {
    const player = availablePlayers[index];
    if (!player) {
      return (
        <Card className="p-2 h-[160px] w-[120px] bg-gray-100">
          <div className="flex items-center justify-center h-full">
            <span className="text-gray-400">{position}</span>
          </div>
        </Card>
      );
    }
    return (
      <PlayerCard
        key={player.id}
        player={player}
        onSelect={handlePlayerSelect}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-nba-blue mb-2">
            Build Your Dream Team
          </h1>
          <p className="text-lg text-gray-600">
            Select players to build your ultimate lineup
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            {!isComplete && (
              <div className="flex flex-row gap-1 justify-center">
                <div className="w-[120px]">{renderPositionCard("PG", 0)}</div>
                <div className="w-[120px]">{renderPositionCard("SG", 1)}</div>
                <div className="w-[120px]">{renderPositionCard("SF", 2)}</div>
                <div className="w-[120px]">{renderPositionCard("PF", 3)}</div>
                <div className="w-[120px]">{renderPositionCard("C", 4)}</div>
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
