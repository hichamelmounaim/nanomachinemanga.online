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
    "id": "yeowoon",
    "name": "Cheon Yeo-Woon",
    "role": "Protagonist",
    "grade": "Cult Leader",
    "description": "An illegitimate prince who uses nanotechnology to conquer Murim.",
    "image": "https://picsum.photos/400/600?random=10"
  },
  {
    "id": "nano",
    "name": "Nano",
    "role": "Helper",
    "grade": "AI System",
    "description": "The advanced artificial intelligence system inside Yeo-Woon.",
    "image": "https://picsum.photos/400/600?random=11"
  },
  {
    "id": "markim",
    "name": "Mar Kim",
    "role": "Ally",
    "grade": "Great Guardian",
    "description": "A loyal elder and protector of the Demonic Cult.",
    "image": "https://picsum.photos/400/600?random=12"
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
