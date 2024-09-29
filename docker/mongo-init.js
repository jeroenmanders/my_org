const DB_NAME="my_org"

db = db.getSiblingDB(DB_NAME);

db.createUser({
    user: "jeroen",
    pwd: "test",
    roles: [
      {
        role: 'readWrite', 
        db: DB_NAME,
      },
    ],
  });

/*
db.createCollection("got_seasons_collection");

db.got_seasons_collection.insertMany([
  {
    season: "1",
    year: "2011",
    episodes: [
      {
        number_overall: "1",
        number_in_season: "1",
        title: "Winter Is Coming",
        directors: ["Tim Van Patten"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "April 17, 2011",
        number_us_viewers: "2.22",
      },
      {
        number_overall: "2",
        number_in_season: "2",
        title: "The Kingsroad",
        directors: ["Tim Van Patten"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "April 24,2011",
        number_us_viewers: "2.20",
      },
      {
        number_overall: "3",
        number_in_season: "3",
        title: "Lord Snow",
        directors: ["Brian Kirk"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "May 1, 2011",
        number_us_viewers: "2.44",
      },
      {
        number_overall: "4",
        number_in_season: "4",
        title: "Cripples, Bastards, and Broken Things",
        directors: ["Brian Kirk"],
        writers: ["Bryan Cogman"],
        original_air_date: "May 1,2011",
        number_us_viewers: "2.45",
      },
      {
        number_overall: "5",
        number_in_season: "5",
        title: "The Wolf and the Lion",
        directors: ["Brian Kirk"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "May 15,2011",
        number_us_viewers: "2.58",
      },
      {
        number_overall: "6",
        number_in_season: "6",
        title: "A Golden Crown",
        directors: ["Daniel Minahan"],
        writers: ["David Benioff", "D. B. Weiss", "Jane Espenson"],
        original_air_date: "May 22, 2011",
        number_us_viewers: "2.44",
      },
      {
        number_overall: "7",
        number_in_season: "7",
        title: "You Win or You Die",
        directors: ["Daniel Minahan"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "May 29,2011",
        number_us_viewers: "2.40",
      },
      {
        number_overall: "8",
        number_in_season: "8",
        title: "The Pointy End",
        directors: ["Daniel Minahan"],
        writers: ["George R. R. Martin"],
        original_air_date: "June 05, 2011",
        number_us_viewers: "2.72",
      },
      {
        number_overall: "9",
        number_in_season: "9",
        title: "Baelor",
        directors: ["Alan Taylor"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "June 12, 2011",
        number_us_viewers: "2.66",
      },
      {
        number_overall: "10",
        number_in_season: "10",
        title: "Fire and Blood",
        directors: ["Alan Taylor"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "June 19, 2011",
        number_us_viewers: "3.04",
      },
    ],
  },
  {
    season: "2",
    year: "2012",
    episodes: [
      {
        number_overall: "11",
        number_in_season: "1",
        title: "The North Remembers",
        directors: ["Alan Taylor"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "April 1, 2012",
        number_us_viewers: "3.86",
      },
      {
        number_overall: "12",
        number_in_season: "2",
        title: "Nightlands",
        directors: ["Alan Taylor"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "April 8, 2012",
        number_us_viewers: "3.76",
      },
      {
        number_overall: "13",
        number_in_season: "3",
        title: "What Is Dead May Never Die",
        directors: ["Alik Sakharov"],
        writers: ["Bryan Cogman"],
        original_air_date: "April 15 ,2012",
        number_us_viewers: "3.77",
      },
      {
        number_overall: "14",
        number_in_season: "4",
        title: "Garden of Bones",
        directors: ["David Petrarca"],
        writers: ["Vanessa Taylor"],
        original_air_date: "April 22, 012",
        number_us_viewers: "3.65",
      },
      {
        number_overall: "15",
        number_in_season: "5",
        title: "The Ghost of Harrenhal",
        directors: ["David Petrarca"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "April 29, 2012",
        number_us_viewers: "3.90",
      },
      {
        number_overall: "16",
        number_in_season: "6",
        title: "The Old Gods and the New",
        directors: ["David Nutter"],
        writers: ["Vanessa Taylor"],
        original_air_date: "May 6, 2012",
        number_us_viewers: "3.88",
      },
      {
        number_overall: "17",
        number_in_season: "7",
        title: "A Man Without Honor",
        directors: ["David Nutter"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "May 13, 2012",
        number_us_viewers: "3.69",
      },
      {
        number_overall: "18",
        number_in_season: "8",
        title: "The Prince of Winterfell",
        directors: ["Alan Taylor"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "May 20, 2012",
        number_us_viewers: "3.86",
      },
      {
        number_overall: "19",
        number_in_season: "9",
        title: "Blackwater",
        directors: ["Neil Marshall"],
        writers: ["George R. R. Martin"],
        original_air_date: "May 27, 2012",
        number_us_viewers: "3.38",
      },
      {
        number_overall: "20",
        number_in_season: "10",
        title: "Valar Morghulis",
        directors: ["Alan Taylor"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "June 3, 2012",
        number_us_viewers: "4.20",
      },
    ],
  },
  {
    season: "3",
    year: "2013",
    episodes: [
      {
        number_overall: "21",
        number_in_season: "1",
        title: "Valar Dohaeris",
        directors: ["Daniel Minahan"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "March 31, 2013",
        number_us_viewers: "4.37",
      },
      {
        number_overall: "22",
        number_in_season: "2",
        title: "Dark Wings, Dark Words",
        directors: ["Daniel Minahan"],
        writers: ["Vanessa Taylor"],
        original_air_date: "April 7, 2013",
        number_us_viewers: "4.27",
      },
      {
        number_overall: "23",
        number_in_season: "3",
        title: "Walk of Punishment",
        directors: ["David Benioff", "D.B. Weiss"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "April 14, 2013",
        number_us_viewers: "4.72",
      },
      {
        number_overall: "24",
        number_in_season: "4",
        title: "And Now His Watch Is Ended",
        directors: ["Alex Graves"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "April 21, 2013",
        number_us_viewers: "4.87",
      },
      {
        number_overall: "25",
        number_in_season: "5",
        title: "Kissed by Fire",
        directors: ["Alex Graves"],
        writers: ["Bryan Cogman"],
        original_air_date: "April 28, 2013",
        number_us_viewers: "5.35",
      },
      {
        number_overall: "26",
        number_in_season: "6",
        title: "The Climb",
        directors: ["Alik Sakharov"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "May 5, 2013",
        number_us_viewers: "5.50",
      },
      {
        number_overall: "27",
        number_in_season: "7",
        title: "The Bear and the Maiden Fair",
        directors: ["Michelle MacLaren"],
        writers: ["George R. R. Martin"],
        original_air_date: "May 12, 2013",
        number_us_viewers: "4.84",
      },
      {
        number_overall: "28",
        number_in_season: "8",
        title: "Second Sons",
        directors: ["Michelle MacLaren"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "May 19, 2013",
        number_us_viewers: "5.13",
      },
      {
        number_overall: "29",
        number_in_season: "9",
        title: "The Rains of Castamere",
        directors: ["David Nutter"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "June 2, 2013",
        number_us_viewers: "5.22",
      },
      {
        number_overall: "30",
        number_in_season: "10",
        title: "Mhysa",
        directors: ["David Nutter"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "June 9, 2013",
        number_us_viewers: "5.39",
      },
    ],
  },
  {
    season: "4",
    year: "2014",
    episodes: [
      {
        number_overall: "31",
        number_in_season: "1",
        title: "Two Swords",
        directors: ["D.B. Weiss"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "April 6, 2014",
        number_us_viewers: "6.64",
      },
      {
        number_overall: "32",
        number_in_season: "2",
        title: "The Lion and the Rose",
        directors: ["Alex Graves"],
        writers: ["George R.R. Martin"],
        original_air_date: "April 13, 2014",
        number_us_viewers: "6.31",
      },
      {
        number_overall: "33",
        number_in_season: "3",
        title: "Breaker of Chains",
        directors: ["Alex Graves"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "April 20, 2014",
        number_us_viewers: "6.59",
      },
      {
        number_overall: "34",
        number_in_season: "4",
        title: "Oathkeeper",
        directors: ["Michelle McLaren"],
        writers: ["Bryan Cogman"],
        original_air_date: "April 27, 2014",
        number_us_viewers: "6.95",
      },
      {
        number_overall: "35",
        number_in_season: "5",
        title: "First of His Name",
        directors: ["Michelle McLaren"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "May 4, 2014",
        number_us_viewers: "7.16",
      },
      {
        number_overall: "36",
        number_in_season: "6",
        title: "The Laws of Gods and Men",
        directors: ["Alik Sakharov"],
        writers: ["Bryan Cogman"],
        original_air_date: "May 11, 2014",
        number_us_viewers: "6.40",
      },
      {
        number_overall: "37",
        number_in_season: "7",
        title: "Mockingbird",
        directors: ["Alik Sakharov"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "May 18, 2014",
        number_us_viewers: "7.20",
      },
      {
        number_overall: "38",
        number_in_season: "8",
        title: "The Mountain and the Viper",
        directors: ["Alex Graves"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "June 1, 2014",
        number_us_viewers: "7.17",
      },
      {
        number_overall: "39",
        number_in_season: "9",
        title: "The Watchers on the Wall",
        directors: ["Neil Marshall"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "June 8, 2014",
        number_us_viewers: "6.95",
      },
      {
        number_overall: "40",
        number_in_season: "10",
        title: "The Children",
        directors: ["Alex Graves"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "June 15, 2014",
        number_us_viewers: "7.09",
      },
    ],
  },
  {
    season: "5",
    year: "2015",
    episodes: [
      {
        number_overall: "41",
        number_in_season: "1",
        title: "The Wars to Come",
        directors: ["Michael Slovis"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "April 12, 2015",
        number_us_viewers: "8.00",
      },
      {
        number_overall: "42",
        number_in_season: "2",
        title: "The House of Black and White",
        directors: ["Michael Slovis"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "April 19, 2015",
        number_us_viewers: "6.81",
      },
      {
        number_overall: "43",
        number_in_season: "3",
        title: "High Sparrow",
        directors: ["Mark Mylod"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "April 26, 2015",
        number_us_viewers: "6.71",
      },
      {
        number_overall: "44",
        number_in_season: "4",
        title: "Sons of the Harpy",
        directors: ["Mark Mylod"],
        writers: ["Dave Hill"],
        original_air_date: "May 4, 2015",
        number_us_viewers: "6.82",
      },
      {
        number_overall: "45",
        number_in_season: "5",
        title: "Kill the Boy",
        directors: ["Jeremy Podeswa"],
        writers: ["Bryan Cogman"],
        original_air_date: "May 10, 2015",
        number_us_viewers: "6.56",
      },
      {
        number_overall: "46",
        number_in_season: "6",
        title: "Unbowed, Unbent, Unbroken",
        directors: ["Jeremy Podeswa"],
        writers: ["Bryan Cogman"],
        original_air_date: "May 17, 2015",
        number_us_viewers: "6.24",
      },
      {
        number_overall: "47",
        number_in_season: "7",
        title: "The Gift",
        directors: ["Miguel Sapochnik"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "May 24, 2015",
        number_us_viewers: "5.40",
      },
      {
        number_overall: "48",
        number_in_season: "8",
        title: "Hardhome",
        directors: ["Miguel Sapochnik"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "May 31, 2015",
        number_us_viewers: "7.01",
      },
      {
        number_overall: "49",
        number_in_season: "9",
        title: "The Dance of Dragons",
        directors: ["David Nutter"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "June 7, 2015",
        number_us_viewers: "7.14",
      },
      {
        number_overall: "50",
        number_in_season: "10",
        title: "Mother's Mercy",
        directors: ["David Nutter"],
        writers: ["David Benioff", "D.B. Weiss"],
        original_air_date: "June 14, 2015",
        number_us_viewers: "8.11",
      },
    ],
  },
  {
    season: "6",
    year: "2016",
    episodes: [
      {
        number_overall: "51",
        number_in_season: "1",
        title: "The Red Woman",
        directors: ["Jeremy Podeswa"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "April 24, 2016",
        number_us_viewers: "7.94",
      },
      {
        number_overall: "52",
        number_in_season: "2",
        title: "Home",
        directors: ["Jeremy Podeswa"],
        writers: ["Dave Hill"],
        original_air_date: "May 1, 2016",
        number_us_viewers: "7.29",
      },
      {
        number_overall: "53",
        number_in_season: "3",
        title: "Oathbreaker",
        directors: ["Daniel Sackheim"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "May 8, 2016",
        number_us_viewers: "7.28",
      },
      {
        number_overall: "54",
        number_in_season: "4",
        title: "Book of the Stranger",
        directors: ["Daniel Sackheim"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "May 15, 2016",
        number_us_viewers: "7.82",
      },
      {
        number_overall: "55",
        number_in_season: "5",
        title: "The Door",
        directors: ["Jack Bender"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "May 22, 2016",
        number_us_viewers: "7,89",
      },
      {
        number_overall: "56",
        number_in_season: "6",
        title: "Blood of my Blood",
        directors: ["Jack Bender"],
        writers: ["Bryan Cogman"],
        original_air_date: "May 29, 2016",
        number_us_viewers: "6.71",
      },
      {
        number_overall: "57",
        number_in_season: "7",
        title: "The Broken Man",
        directors: ["Mark Mylod"],
        writers: ["Bryan Cogman"],
        original_air_date: "June 5, 2016",
        number_us_viewers: "7.80",
      },
      {
        number_overall: "58",
        number_in_season: "8",
        title: "No One",
        directors: ["Mark Mylod"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "June 12, 2016",
        number_us_viewers: "7.60",
      },
      {
        number_overall: "59",
        number_in_season: "9",
        title: "Battle of the Bastards",
        directors: ["Miguel Sapochnik"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "June 19, 2016",
        number_us_viewers: "7.66",
      },
      {
        number_overall: "60",
        number_in_season: "10",
        title: "The Winds of Winter",
        directors: ["Miguel Sapochnik"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "June 26, 2016",
        number_us_viewers: "8.89",
      },
    ],
  },
  {
    season: "7",
    year: "2017",
    episodes: [
      {
        number_overall: "61",
        number_in_season: "1",
        title: "Dragonstone",
        directors: ["Jeremy Podeswa"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "July 16, 2017",
        number_us_viewers: "10.11",
      },
      {
        number_overall: "62",
        number_in_season: "2",
        title: "Stormborn",
        directors: ["Mark Mylod"],
        writers: ["Bryan Cogman"],
        original_air_date: "July 23, 2017",
        number_us_viewers: "9.27",
      },
      {
        number_overall: "63",
        number_in_season: "3",
        title: "The Queen's Justice",
        directors: ["Mark Mylod"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "July 30, 2017",
        number_us_viewers: "9.25",
      },
      {
        number_overall: "64",
        number_in_season: "4",
        title: "The Spoils of War",
        directors: ["Matt Shakman"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "August 6, 2017",
        number_us_viewers: "10.17",
      },
      {
        number_overall: "65",
        number_in_season: "5",
        title: "Eastwatch",
        directors: ["Matt Shakman"],
        writers: ["Dave Hills"],
        original_air_date: "August 13, 2017",
        number_us_viewers: "10.72",
      },
      {
        number_overall: "66",
        number_in_season: "6",
        title: "Beyond the Wall",
        directors: ["Alan Taylor"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "August 20, 2017",
        number_us_viewers: "10.24",
      },
      {
        number_overall: "67",
        number_in_season: "7",
        title: "The Dragon and the Wolf",
        directors: ["Jeremy Podeswa"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "August 27, 2017",
        number_us_viewers: "12.1",
      },
    ],
  },
  {
    season: "8",
    year: "2019",
    episodes: [
      {
        number_overall: "68",
        number_in_season: "1",
        title: "Winterfell",
        directors: ["David Nutter"],
        writers: ["Dave Hill"],
        original_air_date: "April 14, 2019",
        number_us_viewers: "11.76",
      },
      {
        number_overall: "69",
        number_in_season: "2",
        title: "A Knight of the Seven Kingdoms",
        directors: ["David Nutter"],
        writers: ["Bryan Cogman"],
        original_air_date: "July 23, 2017",
        number_us_viewers: "9.27",
      },
      {
        number_overall: "70",
        number_in_season: "3",
        title: "The Long Night",
        directors: ["Miguel Sapochnik"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "April 28, 2019",
        number_us_viewers: "12.02",
      },
      {
        number_overall: "71",
        number_in_season: "4",
        title: "The Last of the Starks",
        directors: ["David Nutter"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "May 5, 2019",
        number_us_viewers: "11.80",
      },
      {
        number_overall: "72",
        number_in_season: "5",
        title: "The Bells",
        directors: ["Miguel Sapochnik"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "May 12, 2019",
        number_us_viewers: "12.48",
      },
      {
        number_overall: "73",
        number_in_season: "6",
        title: "The Iron Throne",
        directors: ["David Benioff", "D. B. Weiss"],
        writers: ["David Benioff", "D. B. Weiss"],
        original_air_date: "May 19, 2019",
        number_us_viewers: "13.61",
      },
    ],
  },
]);
 */