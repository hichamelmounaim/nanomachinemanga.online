import { Arc, Chapter, Character, Comment } from "./types";
import mangaData from "./scraped_k5ak9c-nano-machine.json";

// Nano Machine began serialization on Naver Webtoon on January 31, 2020
const SERIES_START = new Date("2020-01-31T00:00:00Z").getTime();
const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;

export const MOCK_CHAPTERS: Chapter[] = [...mangaData.chapters]
  .sort((a, b) => b.chapter_number - a.chapter_number)
  .map(ch => ({
    id: String(ch.chapter_number),
    number: ch.chapter_number,
    title: ch.chapter_title,
    releaseDate: new Date(
      SERIES_START + (ch.chapter_number - 1) * MS_PER_WEEK
    ).toISOString(),
    pages: ch.image_urls,
  }));

export const CHARACTERS: Character[] = [
  {
    "id": "yeo-un-cheon",
    "name": "Yeo-Un Cheon",
    "role": "MAIN",
    "grade": "Protagonist",
    "description": "He was a member of the Cheon Family and was the son of a female servant who worked at the Lord’s chamber and was not from the Six Clans. Although considered as an illegitimate son of the Lord due to a...",
    "image": "/characters/yeo-un-cheon.png"
  },
  {
    "id": "won-ryeo-cheon",
    "name": "Won-Ryeo Cheon",
    "role": "SUPPORTING",
    "grade": "Supporting",
    "description": "Won-Ryeo Cheon was the Sound Clan candidate for the throne.",
    "image": "/characters/won-ryeo-cheon.png"
  },
  {
    "id": "baek-gi",
    "name": "Baek-Gi",
    "role": "SUPPORTING",
    "grade": "Supporting",
    "description": "Coming from the Gentle Kick Clan, he is one of the most trusted followers of Cheon Yeo-Woon.",
    "image": "/characters/baek-gi.jpg"
  },
  {
    "id": "maeng-seop",
    "name": "Maeng Seop",
    "role": "SUPPORTING",
    "grade": "Supporting",
    "description": "The Right Guardian of the Demonic Cult. His nickname is Crazy Blade, due to his drunkard-like and unpredictable blade skills. He is the first Teacher Yeo-Woon Cheon had in his martial arts journey.",
    "image": "/characters/maeng-seop.png"
  },
  {
    "id": "jong-seom-cheon",
    "name": "Jong-Seom Cheon",
    "role": "SUPPORTING",
    "grade": "Supporting",
    "description": "Jong-Seom Cheon was the Poison Clan candidate for the throne.",
    "image": "/characters/jong-seom-cheon.png"
  },
  {
    "id": "yeo-gun-wang",
    "name": "Yeo-Gun Wang",
    "role": "SUPPORTING",
    "grade": "Supporting",
    "description": "She is the daughter of Wang Jeon, one of the Five Greatest Martial Artists.",
    "image": "/characters/yeo-gun-wang.jpg"
  },
  {
    "id": "ga-gyeong-jang",
    "name": "Ga-Gyeong Jang",
    "role": "SUPPORTING",
    "grade": "Supporting",
    "description": "Ga-Gyeong Jang was the parental figure of Yeo-Woon Cheon's early life and served Lady Hwa until she died. He went to crown Yeo-Woon as the Lord of the Demonic Cult during his Coronation Ceremony.",
    "image": "/characters/ga-gyeong-jang.png"
  },
  {
    "id": "baek",
    "name": "Baek",
    "role": "SUPPORTING",
    "grade": "Supporting",
    "description": "Lady Baek is the one who asked the Poison Clan to poison Lady Hwa, Yeo-Woon's mother.",
    "image": "/characters/baek.png"
  },
  {
    "id": "ran-yeong-mun",
    "name": "Ran-Yeong Mun",
    "role": "SUPPORTING",
    "grade": "Supporting",
    "description": "She was one of the twelve expert martial artists from the Demonic Cult that were tasked to protect the Kirin blood.",
    "image": "/characters/ran-yeong-mun.jpg"
  },
  {
    "id": "mun-gyu",
    "name": "Mun-Gyu",
    "role": "SUPPORTING",
    "grade": "Supporting",
    "description": "Gyu Mun is the female protagonist of Nano Machine. She is the granddaughter of Yun Mun, one of the elders of the Demonic Cult. She is a part of Yeo-Woon Cheon's team during their stay in the Demonic Academy.",
    "image": "/characters/mun-gyu.png"
  },
  {
    "id": "mu-hwa-yeon",
    "name": "Mu-Hwa Yeon",
    "role": "SUPPORTING",
    "grade": "Supporting",
    "description": "Mu-Hwa Yeon is the 2nd Council Elder of the Demonic Cult (Formerly 10th) as well as the only female elder aside from Soyu Hang.",
    "image": "/characters/mu-hwa-yeon.png"
  },
  {
    "id": "heo-bong",
    "name": "Heo-Bong",
    "role": "SUPPORTING",
    "grade": "Supporting",
    "description": "He is Cheon Yeo-Un's first subordinate.",
    "image": "/characters/heo-bong.png"
  }
];

export const ARCS: Arc[] = [
  {
    "id": "academy",
    "title": "Demonic Academy Arc",
    "description": "Yeo-Woon enters the academy to train and survive cult plots.",
    "chapterStart": 1,
    "chapterEnd": 30,
    "image": "https://picsum.photos/600/300?random=20"
  },
  {
    "id": "test",
    "title": "Academy Trials Arc",
    "description": "Yeo-Woon completes advanced trials and gathers allies.",
    "chapterStart": 31,
    "chapterEnd": 70,
    "image": "https://picsum.photos/600/300?random=21"
  }
];

export const MOCK_COMMENTS: Comment[] = [
  {
    "id": "1",
    "user": "Fanatic99",
    "content": "Cheon is devouring everyone! What an absolute legend.",
    "date": "2 hours ago",
    "likes": 155
  },
  {
    "id": "2",
    "user": "SeriesFan",
    "content": "Nano is insane. Best character!",
    "date": "5 hours ago",
    "likes": 230
  },
  {
    "id": "3",
    "user": "Otaku",
    "content": "This manga is pure hype. The art is incredible.",
    "date": "1 day ago",
    "likes": 89
  }
];
