import { useState } from "react";
import { Player, Position, Lineup, GameMode } from "@/types/basketball";
import { PlayerCard } from "@/components/PlayerCard";
import { LineupDisplay } from "@/components/LineupDisplay";
import { GameModeSelector } from "@/components/GameModeSelector";
import {
  getRandomPlayersForPosition,
  calculateTeamRating,
  players,
} from "@/data/players";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const POSITIONS: Position[] = ["PG", "SG", "SF", "PF", "C"];

const getRandomPositionlessPlayers = (usedPlayerIds: Set<string>) => {
  const availablePlayers = players.filter(
    (player) => !usedPlayerIds.has(player.id)
  );

  // Apply rarity filtering similar to classic mode
  const tierRoll = Math.random();
  const filteredPlayers = availablePlayers.filter((player) => {
    switch (player.tier) {
      case "goat":
        return tierRoll < 0.05; // 5% chance
      case "legend":
        return tierRoll < 0.15; // 15% chance
      case "star":
        return tierRoll < 0.4; // 40% chance
      default:
        return true; // regular players always included
    }
  });

  // If no players pass the rarity filter, return from all available players
  const playersToChooseFrom = filteredPlayers.length > 0 ? filteredPlayers : availablePlayers;
  
  const shuffled = [...playersToChooseFrom].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 5);
};

const getInitialClassicPlayers = () => {
  return POSITIONS.map((pos) => {
    const positionPlayers = getRandomPlayersForPosition(pos);
    return positionPlayers[Math.floor(Math.random() * positionPlayers.length)];
  });
};

const Index = () => {
  const [gameMode, setGameMode] = useState<GameMode>("classic");
  const [availablePlayers, setAvailablePlayers] = useState<(Player | null)[]>(
    getInitialClassicPlayers()
  );
  const [lineup, setLineup] = useState<Lineup>({});
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [usedPlayerIds, setUsedPlayerIds] = useState<Set<string>>(new Set());
  const [wins, setWins] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [rerollCount, setRerollCount] = useState(0);

  const handlePlayerSelect = (player: Player) => {
    if (gameMode === "classic") {
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
    } else {
      if (selectedPlayers.length >= 5) return;

      setSelectedPlayers((prev) => {
        const newPlayers = [...prev, player];
        if (newPlayers.length === 5) {
          const rating = calculateTeamRating({
            PG: newPlayers[0],
            SG: newPlayers[1],
            SF: newPlayers[2],
            PF: newPlayers[3],
            C: newPlayers[4],
          } as Required<Lineup>);
          setWins(rating);
          setIsComplete(true);
        }
        return newPlayers;
      });

      setUsedPlayerIds((prev) => new Set([...prev, player.id]));
      setAvailablePlayers(getRandomPositionlessPlayers(new Set([...usedPlayerIds, player.id])));
      setRerollCount((count) => count + 1);
    }
  };

  const handlePlayAgain = () => {
    setLineup({});
    setSelectedPlayers([]);
    setUsedPlayerIds(new Set());
    setWins(0);
    setIsComplete(false);
    setRerollCount((count) => count + 1);
    if (gameMode === "classic") {
      setAvailablePlayers(getInitialClassicPlayers());
    } else {
      setAvailablePlayers(getRandomPositionlessPlayers(new Set()));
    }
  };

  const handleModeSelect = (mode: GameMode) => {
    setGameMode(mode);
    setLineup({});
    setSelectedPlayers([]);
    setUsedPlayerIds(new Set());
    setWins(0);
    setIsComplete(false);
    setRerollCount((count) => count + 1);
    if (mode === "classic") {
      setAvailablePlayers(getInitialClassicPlayers());
    } else {
      setAvailablePlayers(getRandomPositionlessPlayers(new Set()));
    }
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

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12 px-2 sm:px-4">
      <GameModeSelector currentMode={gameMode} onModeSelect={handleModeSelect} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-nba-blue mb-2">
            {gameMode === "classic" ? "Build Your Dream Team" : "Positionless Basketball"}
          </h1>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="space-y-6 sm:space-y-8">
            {!isComplete ? (
              <div className="flex flex-row gap-2 justify-center flex-wrap max-w-[340px] sm:max-w-none mx-auto">
                {gameMode === "classic"
                  ? POSITIONS.map((pos, index) => (
                      <div key={pos} className="w-[100px] sm:w-[120px]">
                        {renderPositionCard(pos as Position, index)}
                      </div>
                    ))
                  : availablePlayers.map((player) => (
                      <div key={player.id} className="w-[100px] sm:w-[120px]">
                        <PlayerCard
                          player={player}
                          onSelect={handlePlayerSelect}
                          rerollKey={rerollCount}
                        />
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
            )}
          </div>
          <div className="flex justify-center">
            <LineupDisplay 
              lineup={lineup} 
              wins={wins} 
              mode={gameMode}
              selectedPlayers={gameMode === "positionless" ? selectedPlayers : undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
