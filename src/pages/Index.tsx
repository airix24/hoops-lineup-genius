import { useState } from "react";
import { Player, Position, Lineup, GameMode } from "@/types/basketball";
import { PlayerCard } from "@/components/PlayerCard";
import { LineupDisplay } from "@/components/LineupDisplay";
import { GameModeSelector } from "@/components/GameModeSelector";
import {
  getRandomPlayersForPosition,
  calculateTeamRating,
} from "@/data/players";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const POSITIONS: Position[] = ["PG", "SG", "SF", "PF", "C"];

const Index = () => {
  const [gameMode, setGameMode] = useState<GameMode>("classic");
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
  const [rerollCount, setRerollCount] = useState(0);

  const handlePlayerSelect = (player: Player) => {
    if (lineup[player.position]) return;

    const newLineup = { ...lineup, [player.position]: player };
    setLineup(newLineup);

    const selectedPositionsCount = Object.keys(newLineup).length;
    
    if (selectedPositionsCount === 5) {
      const rating = calculateTeamRating(newLineup as Required<Lineup>);
      setWins(rating);
      setIsComplete(true);
    } else {
      const newAvailablePlayers = POSITIONS.map((pos) => {
        if (newLineup[pos]) return null;
        const positionPlayers = getRandomPlayersForPosition(pos);
        return positionPlayers[
          Math.floor(Math.random() * positionPlayers.length)
        ];
      });

      setRerollCount((count) => count + 1);
      setAvailablePlayers(newAvailablePlayers);
    }
  };

  const handlePlayAgain = () => {
    setLineup({});
    setWins(0);
    setIsComplete(false);
    setRerollCount((count) => count + 1);
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
        <Card className="p-2 h-[140px] w-[100px] sm:h-[160px] sm:w-[120px] bg-gray-100">
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
        rerollKey={rerollCount}
      />
    );
  };

  const renderBudgetGrid = () => {
    return (
      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 25 }).map((_, index) => (
          <Card
            key={index}
            className="p-2 h-[100px] w-[100px] flex items-center justify-center"
          >
            {Math.random() > 0.5 ? "🍌" : "🍓"}
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12 px-2 sm:px-4">
      <GameModeSelector currentMode={gameMode} onModeSelect={setGameMode} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-nba-blue mb-2">
            {gameMode === "classic" ? "Build Your Dream Team" : "Budget Mode"}
          </h1>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="space-y-6 sm:space-y-8">
            {gameMode === "classic" ? (
              !isComplete ? (
                <div className="flex flex-row gap-2 justify-center flex-wrap max-w-[340px] sm:max-w-none mx-auto">
                  {["PG", "SG", "SF", "PF", "C"].map((pos, index) => (
                    <div key={pos} className="w-[100px] sm:w-[120px]">
                      {renderPositionCard(pos as Position, index)}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex justify-center">
                  <Button
                    onClick={handlePlayAgain}
                    className="bg-nba-blue hover:bg-nba-blue/90"
                  >
                    Play Again
                  </Button>
                </div>
              )
            ) : (
              renderBudgetGrid()
            )}
          </div>
          {gameMode === "classic" && (
            <div className="flex justify-center">
              <LineupDisplay lineup={lineup} wins={wins} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;