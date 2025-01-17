import { GameMode } from "@/types/basketball";
import { Button } from "./ui/button";
import { Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface GameModeSelectorProps {
  currentMode: GameMode;
  onModeSelect: (mode: GameMode) => void;
}

export const GameModeSelector = ({
  currentMode,
  onModeSelect,
}: GameModeSelectorProps) => {
  return (
    <div className="absolute top-4 right-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => onModeSelect("classic")}
            className={currentMode === "classic" ? "bg-accent" : ""}
          >
            Classic Mode
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onModeSelect("positionless")}
            className={currentMode === "positionless" ? "bg-accent" : ""}
          >
            Positionless Mode
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onModeSelect("budget")}
            className={currentMode === "budget" ? "bg-accent" : ""}
          >
            Budget Mode
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
