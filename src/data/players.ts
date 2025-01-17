import { Player, Position, Lineup } from "@/types/basketball";

export const players: Player[] = [
  // Point Guards
  {
    id: "curry",
    name: "Stephen Curry",
    position: "PG",
    tier: "legend",
    spacing: 5,
    defense: 1,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/curryst01.jpg",
  },
  {
    id: "magic",
    name: "Magic Johnson",
    position: "PG",
    tier: "legend",
    spacing: 2,
    defense: 3,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/johnsma02.jpg",
  },
  {
    id: "oscar",
    name: "Oscar Robertson",
    position: "PG",
    tier: "legend",
    spacing: 2,
    defense: 3,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/roberos01.jpg",
  },
  {
    id: "west",
    name: "Jerry West",
    position: "PG",
    tier: "legend",
    spacing: 2,
    defense: 3,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/westje01.jpg",
  },
  {
    id: "shai",
    name: "Shai Gilgeous-Alexander",
    position: "PG",
    tier: "legend",
    spacing: 2,
    defense: 3,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/gilgesh01.jpg",
  },
  {
    id: "doncic",
    name: "Luka Doncic",
    position: "PG",
    tier: "legend",
    spacing: 2,
    defense: 3,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/doncilu01.jpg",
  },
  {
    id: "brunson",
    name: "Jalen Brunson",
    position: "PG",
    tier: "legend",
    spacing: 2,
    defense: 3,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/brunsja01.jpg",
  },
  {
    id: "morant",
    name: "Ja Morant",
    position: "PG",
    tier: "legend",
    spacing: 2,
    defense: 3,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/moranja01.jpg",
  },
  // Shooting Guards
  {
    id: "jordan",
    name: "Michael Jordan",
    position: "SG",
    tier: "legend",
    spacing: 3,
    defense: 5,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/jordami01.jpg",
  },
  {
    id: "kobe",
    name: "Kobe Bryant",
    position: "SG",
    tier: "legend",
    spacing: 4,
    defense: 4,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/bryanko01.jpg",
  },
  {
    id: "ant",
    name: "Anthony Edwards",
    position: "SG",
    tier: "legend",
    spacing: 2,
    defense: 3,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/edwaran01.jpg",
  },
  {
    id: "donovan",
    name: "Donovan Mitchell",
    position: "SG",
    tier: "legend",
    spacing: 2,
    defense: 3,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/mitchdo01.jpg",
  },
  {
    id: "booker",
    name: "Devin Booker",
    position: "SG",
    tier: "legend",
    spacing: 2,
    defense: 3,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/bookede01.jpg",
  },
  // Small Forwards
  {
    id: "lebron",
    name: "LeBron James",
    position: "SF",
    tier: "legend",
    spacing: 3,
    defense: 4,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/jamesle01.jpg",
  },
  {
    id: "bird",
    name: "Larry Bird",
    position: "SF",
    tier: " legend",
    spacing: 5,
    defense: 2,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/birdla01.jpg",
  },
  {
    id: "durant",
    name: "Kevin Durant",
    position: "SF",
    tier: "legend",
    spacing: 3,
    defense: 4,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/duranke01.jpg",
  },
  {
    id: "julius",
    name: "Julius Erving",
    position: "SF",
    tier: "legend",
    spacing: 5,
    defense: 2,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/ervinju01.jpg",
  },
  {
    id: "giannis",
    name: "Giannis Antetokounmpo",
    position: "PF",
    tier: "legend",
    spacing: 3,
    defense: 4,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/antetgi01.jpg",
  },
  {
    id: "jayson",
    name: "Jayson Tatum",
    position: "SF",
    tier: "legend",
    spacing: 3,
    defense: 4,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/tatumja01.jpg",
  },
  {
    id: "jaylen",
    name: "Jaylen Brown",
    position: "SF",
    tier: "legend",
    spacing: 3,
    defense: 4,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/brownja02.jpg",
  },
  // Power Forwards
  {
    id: "duncan",
    name: "Tim Duncan",
    position: "PF",
    tier: "legend",
    spacing: 2,
    defense: 5,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/duncati01.jpg",
  },
  {
    id: "dirk",
    name: "Dirk Nowitzki",
    position: "PF",
    tier: "legend",
    spacing: 5,
    defense: 2,
    main: 4,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/nowitdi01.jpg",
  },
  {
    id: "malone",
    name: "Karl Malone",
    position: "PF",
    tier: "legend",
    spacing: 2,
    defense: 5,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/malonka01.jpg",
  },
  {
    id: "garnett",
    name: "Kevin Garnett",
    position: "PF",
    tier: "legend",
    spacing: 3,
    defense: 4,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/garneke01.jpg",
  },
  {
    id: "davis",
    name: "Anthony Davis",
    position: "PF",
    tier: "legend",
    spacing: 3,
    defense: 4,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/davisan02.jpg",
  },
  {
    id: "paolo",
    name: "Paolo Banchero",
    position: "PF",
    tier: "legend",
    spacing: 3,
    defense: 4,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/banchpa01.jpg",
  },
  // Centers
  {
    id: "kareem",
    name: "Kareem Abdul-Jabbar",
    position: "C",
    tier: " legend",
    spacing: 1,
    defense: 5,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/abdulka01.jpg",
  },
  {
    id: "bill",
    name: "Bill Russell",
    position: "C",
    tier: "legend",
    spacing: 1,
    defense: 5,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/russebi01.jpg",
  },
  {
    id: "wilt",
    name: "Wilt Chamberlain",
    position: "C",
    tier: "legend",
    spacing: 1,
    defense: 5,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/chambwi01.jpg",
  },
  {
    id: "shaq",
    name: "Shaquille O'Neal",
    position: "C",
    tier: "legend",
    spacing: 1,
    defense: 5,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/onealsh01.jpg",
  },
  {
    id: "hakeem",
    name: "Hakeem Olajuwon",
    position: "C",
    tier: "legend",
    spacing: 1,
    defense: 5,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/olajuha01.jpg",
  },
  {
    id: "jokic",
    name: "Nikola Jokic",
    position: "C",
    tier: "legend",
    spacing: 4,
    defense: 2,
    main: 4,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/jokicni01.jpg",
  },
  {
    id: "moses",
    name: "Moses Malone",
    position: "C",
    tier: "legend",
    spacing: 1,
    defense: 5,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/malonmo01.jpg",
  },
  {
    id: "wemby",
    name: "Victor Wembanyama",
    position: "C",
    tier: "legend",
    spacing: 1,
    defense: 5,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/wembavi01.jpg",
  },
  {
    id: "kat",
    name: "Karl-Anthony Towns",
    position: "C",
    tier: "legend",
    spacing: 1,
    defense: 5,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/townska01.jpg",
  },
];

export const getRandomPlayersForPosition = (position: Position): Player[] => {
  return players.filter((p) => p.position === position);
};

export const calculateTeamRating = (lineup: Lineup): number => {
  if (!lineup.PG || !lineup.SG || !lineup.SF || !lineup.PF || !lineup.C) {
    return 0;
  }

  // Sum only main ratings
  const totalScore =
    lineup.PG.main +
    lineup.SG.main +
    lineup.SF.main +
    lineup.PF.main +
    lineup.C.main;

  // Maximum possible score would be 25 (5 players × max rating of 5)
  const maxScore = 25;

  // Calculate win percentage based on total score
  const winPercentage = Math.min(totalScore / maxScore, 1);

  // Convert to wins in an 82-game season
  return Math.round(winPercentage * 82);
};
