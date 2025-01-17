export type Position = "PG" | "SG" | "SF" | "PF" | "C";

export type Player = {
  id: string;
  name: string;
  position: Position;
  tier: string;
  spacing: number;
  defense: number;
  main: number;
  imageUrl: string;
};

export interface LineupPlayer extends Player {
  selected: boolean;
}

export type Lineup = {
  [key in Position]?: Player;
};
