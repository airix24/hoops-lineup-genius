import { Player, Position, Lineup } from "@/types/basketball";

export const players: Player[] = [
  // Point Guards
  {
    id: "curry",
    name: "Stephen Curry",
    position: "PG",
    spacing: 5,
    defense: 1,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    id: "magic",
    name: "Magic Johnson",
    position: "PG",
    spacing: 2,
    defense: 3,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  // Shooting Guards
  {
    id: "jordan",
    name: "Michael Jordan",
    position: "SG",
    spacing: 3,
    defense: 5,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    id: "kobe",
    name: "Kobe Bryant",
    position: "SG",
    spacing: 4,
    defense: 4,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  // Small Forwards
  {
    id: "lebron",
    name: "LeBron James",
    position: "SF",
    spacing: 3,
    defense: 4,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    id: "bird",
    name: "Larry Bird",
    position: "SF",
    spacing: 5,
    defense: 2,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  // Power Forwards
  {
    id: "duncan",
    name: "Tim Duncan",
    position: "PF",
    spacing: 2,
    defense: 5,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    id: "dirk",
    name: "Dirk Nowitzki",
    position: "PF",
    spacing: 5,
    defense: 2,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  // Centers
  {
    id: "hakeem",
    name: "Hakeem Olajuwon",
    position: "C",
    spacing: 1,
    defense: 5,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    id: "jokic",
    name: "Nikola Jokic",
    position: "C",
    spacing: 4,
    defense: 2,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
];

export const getRandomPlayersForPosition = (position: Position): Player[] => {
  return players.filter((p) => p.position === position);
};

export const calculateTeamRating = (lineup: Lineup): number => {
  if (!lineup.PG || !lineup.SG || !lineup.SF || !lineup.PF || !lineup.C) {
    return 0;
  }

  const spacingAvg =
    (lineup.PG.spacing +
      lineup.SG.spacing +
      lineup.SF.spacing +
      lineup.PF.spacing +
      lineup.C.spacing) /
    5;

  const defenseAvg =
    (lineup.PG.defense +
      lineup.SG.defense +
      lineup.SF.defense +
      lineup.PF.defense +
      lineup.C.defense) /
    5;

  // Convert the 1-5 rating to expected wins
  const rating = (spacingAvg + defenseAvg) / 2;
  return Math.round((rating / 5) * 82); // Convert to expected wins in 82 game season
};