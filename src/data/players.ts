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
    secPositions: [],
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
    secPositions: ["SG", "SF"],
    tier: "goat",
    spacing: 2,
    defense: 3,
    main: 10,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/johnsma02.jpg",
  },
  {
    id: "shai",
    name: "Shai Gilgeous-Alexander",
    position: "PG",
    secPositions: ["SG"],
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
    secPositions: ["SG"],
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
    secPositions: ["SG"],
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
    secPositions: [],
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
    secPositions: [],
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
    secPositions: ["SG"],
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
    secPositions: [],
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
    secPositions: ["SG"],
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
    secPositions: [],
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
    secPositions: ["SG"],
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
    secPositions: [],
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
    secPositions: ["SG"],
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
    secPositions: ["SG"],
    tier: "regular",
    spacing: 2,
    defense: 3,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/garlada01.jpg",
  },
  {
    id: "thomas",
    name: "Isiah Thomas",
    position: "PG",
    secPositions: [],
    tier: "legend",
    spacing: 2,
    defense: 3,
    main: 10,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/thomais01.jpg",
  },
  {
    id: "cp3",
    name: "Chris Paul",
    position: "PG",
    secPositions: [],
    tier: "legend",
    spacing: 2,
    defense: 3,
    main: 10,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/paulch01.jpg",
  },
  // Shooting Guards
  {
    id: "jordan",
    name: "Michael Jordan",
    position: "SG",
    secPositions: ["SF"],
    tier: "goat",
    spacing: 3,
    defense: 5,
    main: 11,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/jordami01.jpg",
  },
  {
    id: "kobe",
    name: "Kobe Bryant",
    position: "SG",
    secPositions: ["SF"],
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
    secPositions: [],
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
    secPositions: ["PG"],
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
    secPositions: ["PG"],
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
    secPositions: ["SF", "PF"],
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
    secPositions: ["PG"],
    tier: "regular",
    spacing: 2,
    defense: 3,
    main: 7,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/hardeja01.jpg",
  },
  {
    id: "wade",
    name: "Dwyane Wade",
    position: "SG",
    secPositions: ["PG"],
    tier: "legend",
    spacing: 2,
    defense: 3,
    main: 8,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/wadedw01.jpg",
  },
  // Small Forwards
  {
    id: "lebron",
    name: "LeBron James",
    position: "SF",
    secPositions: ["PF", "C", "PG", "SG"],
    tier: "goat",
    spacing: 3,
    defense: 4,
    main: 11,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/jamesle01.jpg",
  },
  {
    id: "bird",
    name: "Larry Bird",
    position: "SF",
    secPositions: ["PF"],
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
    secPositions: ["PF", "SG"],
    tier: "legend",
    spacing: 3,
    defense: 4,
    main: 10,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/duranke01.jpg",
  },
  {
    id: "giannis",
    name: "Giannis Antetokounmpo",
    position: "PF",
    secPositions: ["SF", "C"],
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
    secPositions: ["PF"],
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
    secPositions: ["SG"],
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
    secPositions: ["PF"],
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
    secPositions: ["SG", "PF"],
    tier: "regular",
    spacing: 3,
    defense: 5,
    main: 7,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/leonaka01.jpg",
  },
  {
    id: "pippen",
    name: "Scottie Pippen",
    position: "SF",
    secPositions: ["PF"],
    tier: "legend",
    spacing: 3,
    defense: 4,
    main: 8,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/pippesc01.jpg",
  },
  // Power Forwards
  {
    id: "duncan",
    name: "Tim Duncan",
    position: "PF",
    secPositions: ["C"],
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
    secPositions: ["C"],
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
    secPositions: [],
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
    secPositions: ["C"],
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
    secPositions: ["C"],
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
    secPositions: ["SF"],
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
    secPositions: [],
    tier: "regular",
    spacing: 3,
    defense: 4,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/mobleev01.jpg",
  },
  {
    id: "barkley",
    name: "Charles Barkley",
    position: "PF",
    secPositions: ["SF"],
    tier: "legend",
    spacing: 3,
    defense: 4,
    main: 8,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/barklch01.jpg",
  },
  // Centers
  {
    id: "kareem",
    name: "Kareem Abdul-Jabbar",
    position: "C",
    secPositions: [],
    tier: "goat",
    spacing: 1,
    defense: 5,
    main: 11,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/abdulka01.jpg",
  },
  {
    id: "bill",
    name: "Bill Russell",
    position: "C",
    secPositions: [],
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
    secPositions: [],
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
    secPositions: [],
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
    secPositions: [],
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
    secPositions: [],
    tier: "star",
    spacing: 4,
    defense: 2,
    main: 10,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/jokicni01.jpg",
  },
  {
    id: "wemby",
    name: "Victor Wembanyama",
    position: "C",
    secPositions: ["PF"],
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
    secPositions: ["PF"],
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
    secPositions: ["PF"],
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
    secPositions: ["C"],
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
    secPositions: ["PF"],
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
    secPositions: ["PF"],
    tier: "regular",
    spacing: 1,
    defense: 5,
    main: 5,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/holmgch01.jpg",
  },
  {
    id: "admiral",
    name: "David Robinson",
    position: "C",
    secPositions: [],
    tier: "legend",
    spacing: 1,
    defense: 5,
    main: 10,
    imageUrl:
      "https://www.basketball-reference.com/req/202106291/images/headshots/robinda01.jpg",
  },
];

export const calculatePositionCoverageScore = (players: Player[]): number => {
  // Track which positions are covered (either primary or secondary)
  const coveredPositions = new Set<Position>();
  
  players.forEach(player => {
    // Add primary position
    coveredPositions.add(player.position);
    // Add secondary positions
    player.secPositions.forEach(pos => coveredPositions.add(pos));
  });

  // Calculate penalty based on missing positions
  const missingPositions = 5 - coveredPositions.size; // 5 is total number of unique positions
  return missingPositions * -20; // -20% penalty per missing position
};

export const calculateTeamRating = (
  lineup: Lineup,
  mode: "classic" | "positionless" = "classic"
): number => {
  if (mode === "classic") {
    if (!lineup.PG || !lineup.SG || !lineup.SF || !lineup.PF || !lineup.C) {
      return 0;
    }

    // Sum only main ratings for classic mode
    const totalScore =
      lineup.PG.main +
      lineup.SG.main +
      lineup.SF.main +
      lineup.PF.main +
      lineup.C.main;

    // A team with all 5-rated players (25 total) should win ~55 games
    // A team with 45+ total should win all 82 games
    const minScore = 25; // Score for a team of all 5-rated players
    const maxScore = 45; // Threshold for perfect season

    // Calculate win percentage based on total score, with 25 points = ~55 wins
    const winPercentage = Math.min(
      0.67 + ((totalScore - minScore) / (maxScore - minScore)) * 0.33,
      1
    );

    // Convert to wins in an 82-game season
    return Math.round(winPercentage * 82);
  } else {
    // Positionless mode
    const players = Object.values(lineup).filter(Boolean) as Player[];
    if (players.length !== 5) return 0;

    // Calculate base score from main ratings
    const totalScore = players.reduce((sum, player) => sum + player.main, 0);
    
    // Calculate position coverage penalty
    const coverageScore = calculatePositionCoverageScore(players);
    
    // Add position coverage score to total
    const adjustedScore = totalScore + coverageScore;

    // Use the same win calculation logic but with adjusted score
    const minScore = 25;
    const maxScore = 45;

    const winPercentage = Math.min(
      Math.max(0, 0.67 + ((adjustedScore - minScore) / (maxScore - minScore)) * 0.33),
      1
    );

    // Ensure we don't return negative wins
    return Math.max(0, Math.round(winPercentage * 82));
  }
};
