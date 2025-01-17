import { Player } from "@/types/basketball";
import { Card } from "@/components/ui/card";

interface PlayerCardProps {
  player: Player;
  onSelect: (player: Player) => void;
}

export const PlayerCard = ({ player, onSelect }: PlayerCardProps) => {
  return (
    <Card
      className="p-4 cursor-pointer transition-all hover:animate-card-hover border-2 hover:border-nba-blue"
      onClick={() => onSelect(player)}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-24 h-24 rounded-full overflow-hidden">
          <img
            src={player.imageUrl}
            alt={player.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-center">
          <h3 className="font-bold text-lg">{player.name}</h3>
          <p className="text-sm text-gray-500">{player.position}</p>
        </div>
      </div>
    </Card>
  );
};