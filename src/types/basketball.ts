export type Position = "PG" | "SG" | "SF" | "PF" | "C";

export interface Player {
  id: string;
  name: string;
  position: Position;
  spacing: number;
  defense: number;
  total: number;
  imageUrl: string;
}

export interface LineupPlayer extends Player {
  selected: boolean;
}

export type Lineup = {
  [key in Position]?: Player;
};