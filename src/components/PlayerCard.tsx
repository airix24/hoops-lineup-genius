import { Player } from "@/types/basketball";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface PlayerCardProps {
  player: Player;
  onSelect: (player: Player) => void;
  rerollKey?: number;
}

export const PlayerCard = ({
  player,
  onSelect,
  rerollKey,
}: PlayerCardProps) => {
  return (
    <motion.div
      key={`${player.id}-${rerollKey}`}
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card
        className="p-2 h-[140px] w-[100px] sm:h-[160px] sm:w-[120px] cursor-pointer transition-all hover:animate-card-hover border-2 hover:border-nba-blue"
        onClick={() => onSelect(player)}
      >
        <div className="flex flex-col items-center space-y-1">
          <div className="relative w-14 h-20 sm:w-16 sm:h-24 overflow-hidden">
            <img
              src={player.imageUrl}
              alt={player.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-xs leading-tight">{player.name}</h3>
            <p className="text-xs text-gray-500">{player.position}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
