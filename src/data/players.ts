import { Player, Position, Lineup } from "@/types/basketball";

export const players: Player[] = [
  // Point Guards
  {
    id: "curry",
    name: "Stephen Curry",
    position: "PG",
    spacing: 5,
    defense: 1,
    total: 5,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    id: "magic",
    name: "Magic Johnson",
    position: "PG",
    spacing: 2,
    defense: 3,
    total: 5,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  // Shooting Guards
  {
    id: "jordan",
    name: "Michael Jordan",
    position: "SG",
    spacing: 3,
    defense: 5,
    total: 5,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    id: "kobe",
    name: "Kobe Bryant",
    position: "SG",
    spacing: 4,
    defense: 4,
    total: 5,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  // Small Forwards
  {
    id: "lebron",
    name: "LeBron James",
    position: "SF",
    spacing: 3,
    defense: 4,
    total: 5,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    id: "bird",
    name: "Larry Bird",
    position: "SF",
    spacing: 5,
    defense: 2,
    total: 5,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  // Power Forwards
  {
    id: "duncan",
    name: "Tim Duncan",
    position: "PF",
    spacing: 2,
    defense: 5,
    total: 5,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    id: "dirk",
    name: "Dirk Nowitzki",
    position: "PF",
    spacing: 5,
    defense: 2,
    total: 4,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  // Centers
  {
    id: "hakeem",
    name: "Hakeem Olajuwon",
    position: "C",
    spacing: 1,
    defense: 5,
    total: 5,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    id: "jokic",
    name: "Nikola Jokic",
    position: "C",
    spacing: 4,
    defense: 2,
    total: 4,
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

  const spacingTotal =
    lineup.PG.spacing +
    lineup.SG.spacing +
    lineup.SF.spacing +
    lineup.PF.spacing +
    lineup.C.spacing;

  const defenseTotal =
    lineup.PG.defense +
    lineup.SG.defense +
    lineup.SF.defense +
    lineup.PF.defense +
    lineup.C.defense;

  const totalRating =
    lineup.PG.total +
    lineup.SG.total +
    lineup.SF.total +
    lineup.PF.total +
    lineup.C.total;

  // Perfect team (82-0) needs:
  // - Total rating of 23 or greater
  // - Spacing of 17 or greater
  // - Defense of 17 or greater
  const perfectScore = totalRating >= 23 && spacingTotal >= 17 && defenseTotal >= 17;

  if (perfectScore) {
    return 82;
  }

  // Calculate wins based on how close the team is to perfect
  const spacingScore = spacingTotal / 17;
  const defenseScore = defenseTotal / 17;
  const totalScore = totalRating / 23;

  // Average the three scores and multiply by 82 for expected wins
  const winPercentage = (spacingScore + defenseScore + totalScore) / 3;
  return Math.round(winPercentage * 82);
};