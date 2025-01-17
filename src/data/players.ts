import { Player, Position, Lineup } from "@/types/basketball";

const TIER_CHANCES = {
  goat: 0.05, // 5% chance - extremely rare
  legend: 0.15, // 15% chance - very rare
  star: 0.4, // 40% chance - uncommon
  regular: 1, // 100% chance - always included
} as const;

export const players: Player[] = [
  // Point Guards
  {
    id: "curry",
    name: "Stephen Curry",
    position: "PG",
    tier: "legend",
    spacing: 10,
    defense: 1,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/curryst01.jpg",
  },
  {
    id: "magic",
    name: "Magic Johnson",
    position: "PG",
    tier: "goat",
    spacing: 2,
    defense: 3,
    main: 10,
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
    main: 10,
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
    main: 9,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/westje01.jpg",
  },
  {
    id: "shai",
    name: "Shai Gilgeous-Alexander",
    position: "PG",
    tier: "star",
    spacing: 2,
    defense: 3,
    main: 8,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/gilgesh01.jpg",
  },
  {
    id: "doncic",
    name: "Luka Doncic",
    position: "PG",
    tier: "star",
    spacing: 2,
    defense: 3,
    main: 8,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/doncilu01.jpg",
  },
  {
    id: "brunson",
    name: "Jalen Brunson",
    position: "PG",
    tier: "regular",
    spacing: 2,
    defense: 3,
    main: 7,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/brunsja01.jpg",
  },
  {
    id: "morant",
    name: "Ja Morant",
    position: "PG",
    tier: "regular",
    spacing: 2,
    defense: 3,
    main: 7,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/moranja01.jpg",
  },
  {
    id: "fox",
    name: "De'Aaron Fox",
    position: "PG",
    tier: "regular",
    spacing: 2,
    defense: 3,
    main: 6,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/foxde01.jpg",
  },
  {
    id: "kyrie",
    name: "Kyrie Irving",
    position: "PG",
    tier: "regular",
    spacing: 2,
    defense: 3,
    main: 6,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/irvinky01.jpg",
  },
  {
    id: "lamelo",
    name: "LaMelo Ball",
    position: "PG",
    tier: "regular",
    spacing: 2,
    defense: 3,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/ballla01.jpg",
  },
  {
    id: "haliburton",
    name: "Tyrese Haliburton",
    position: "PG",
    tier: "regular",
    spacing: 2,
    defense: 3,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/halibty01.jpg",
  },
  {
    id: "dame",
    name: "Damian Lillard",
    position: "PG",
    tier: "star",
    spacing: 2,
    defense: 3,
    main: 7,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/lillada01.jpg",
  },
  {
    id: "cade",
    name: "Cade Cunningham",
    position: "PG",
    tier: "regular",
    spacing: 2,
    defense: 3,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/cunnica01.jpg",
  },
  {
    id: "trae",
    name: "Trae Young",
    position: "PG",
    tier: "regular",
    spacing: 2,
    defense: 3,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/youngtr01.jpg",
  },
  {
    id: "maxey",
    name: "Tyrese Maxey",
    position: "PG",
    tier: "regular",
    spacing: 2,
    defense: 3,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/maxeyty01.jpg",
  },
  {
    id: "garland",
    name: "Darius Garland",
    position: "PG",
    tier: "regular",
    spacing: 2,
    defense: 3,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/garlada01.jpg",
  },
  // Shooting Guards
  {
    id: "jordan",
    name: "Michael Jordan",
    position: "SG",
    tier: "goat",
    spacing: 3,
    defense: 5,
    main: 12,
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
    main: 10,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/bryanko01.jpg",
  },
  {
    id: "ant",
    name: "Anthony Edwards",
    position: "SG",
    tier: "star",
    spacing: 2,
    defense: 3,
    main: 7,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/edwaran01.jpg",
  },
  {
    id: "donovan",
    name: "Donovan Mitchell",
    position: "SG",
    tier: "regular",
    spacing: 2,
    defense: 3,
    main: 6,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/mitchdo01.jpg",
  },
  {
    id: "booker",
    name: "Devin Booker",
    position: "SG",
    tier: "regular",
    spacing: 2,
    defense: 3,
    main: 6,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/bookede01.jpg",
  },
  {
    id: "jalen_williams",
    name: "Jalen Williams",
    position: "SG",
    tier: "regular",
    spacing: 2,
    defense: 3,
    main: 6,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/willija06.jpg",
  },
  {
    id: "harden",
    name: "James Harden",
    position: "SG",
    tier: "regular",
    spacing: 2,
    defense: 3,
    main: 7,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/hardeja01.jpg",
  },
  // Small Forwards
  {
    id: "lebron",
    name: "LeBron James",
    position: "SF",
    tier: "goat",
    spacing: 3,
    defense: 4,
    main: 12,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/jamesle01.jpg",
  },
  {
    id: "bird",
    name: "Larry Bird",
    position: "SF",
    tier: "legend",
    spacing: 5,
    defense: 2,
    main: 10,
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
    main: 10,
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
    main: 10,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/ervinju01.jpg",
  },
  {
    id: "giannis",
    name: "Giannis Antetokounmpo",
    position: "PF",
    tier: "star",
    spacing: 3,
    defense: 4,
    main: 10,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/antetgi01.jpg",
  },
  {
    id: "jayson",
    name: "Jayson Tatum",
    position: "SF",
    tier: "star",
    spacing: 3,
    defense: 4,
    main: 8,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/tatumja01.jpg",
  },
  {
    id: "jaylen",
    name: "Jaylen Brown",
    position: "SF",
    tier: "regular",
    spacing: 3,
    defense: 4,
    main: 6,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/brownja02.jpg",
  },
  {
    id: "franz",
    name: "Franz Wagner",
    position: "SF",
    tier: "regular",
    spacing: 3,
    defense: 4,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/wagnefr01.jpg",
  },
  {
    id: "kawhi",
    name: "Kawhi Leonard",
    position: "SF",
    tier: "regular",
    spacing: 3,
    defense: 5,
    main: 7,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/leonaka01.jpg",
  },
  // Power Forwards
  {
    id: "duncan",
    name: "Tim Duncan",
    position: "PF",
    tier: "legend",
    spacing: 2,
    defense: 5,
    main: 10,
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
    main: 9,
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
    main: 8,
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
    main: 8,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/garneke01.jpg",
  },
  {
    id: "davis",
    name: "Anthony Davis",
    position: "PF",
    tier: "star",
    spacing: 3,
    defense: 4,
    main: 8,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/davisan02.jpg",
  },
  {
    id: "paolo",
    name: "Paolo Banchero",
    position: "PF",
    tier: "regular",
    spacing: 3,
    defense: 4,
    main: 6,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/banchpa01.jpg",
  },
  {
    id: "mobley",
    name: "Evan Mobley",
    position: "PF",
    tier: "regular",
    spacing: 3,
    defense: 4,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/mobleev01.jpg",
  },
  // Centers
  {
    id: "kareem",
    name: "Kareem Abdul-Jabbar",
    position: "C",
    tier: "goat",
    spacing: 1,
    defense: 5,
    main: 12,
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
    main: 10,
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
    main: 10,
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
    main: 10,
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
    main: 10,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/olajuha01.jpg",
  },
  {
    id: "jokic",
    name: "Nikola Jokic",
    position: "C",
    tier: "star",
    spacing: 4,
    defense: 2,
    main: 10,
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
    main: 9,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/malonmo01.jpg",
  },
  {
    id: "wemby",
    name: "Victor Wembanyama",
    position: "C",
    tier: "star",
    spacing: 1,
    defense: 5,
    main: 8,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/wembavi01.jpg",
  },
  {
    id: "kat",
    name: "Karl-Anthony Towns",
    position: "C",
    tier: "regular",
    spacing: 1,
    defense: 5,
    main: 7,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/townska01.jpg",
  },
  {
    id: "sabonis",
    name: "Domantas Sabonis",
    position: "C",
    tier: "regular",
    spacing: 1,
    defense: 5,
    main: 6,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/sabondo01.jpg",
  },
  {
    id: "jjj",
    name: "Jaren Jackson Jr.",
    position: "PF",
    tier: "regular",
    spacing: 1,
    defense: 5,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/jacksja02.jpg",
  },
  {
    id: "bam",
    name: "Bam Adebayo",
    position: "C",
    tier: "regular",
    spacing: 1,
    defense: 5,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/adebaba01.jpg",
  },
  {
    id: "chet",
    name: "Chet Holmgren",
    position: "C",
    tier: "regular",
    spacing: 1,
    defense: 5,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/holmgch01.jpg",
  },
];

export const getRandomPlayersForPosition = (position: Position): Player[] => {
  const positionPlayers = players.filter((p) => p.position === position);

  // Roll for each tier
  const tierRoll = Math.random();

  return positionPlayers.filter((player) => {
    const tierChance =
      TIER_CHANCES[player.tier as keyof typeof TIER_CHANCES] ?? 1;
    return tierRoll < tierChance;
  });
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

  // Maximum possible score would be 60 (5 players × max rating of 12)
  const maxScore = 45; // Threshold for perfect season

  // Calculate win percentage based on total score
  const winPercentage = Math.min(totalScore / maxScore, 1);

  // Convert to wins in an 82-game season
  return Math.round(winPercentage * 82);
};
