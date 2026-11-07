export interface BirthdayPhoto {
  id: number;
  url: string;
  caption: string;
  subtitle: string;
  tag: string;
  memoryQuote: string;
  isVideo?: boolean;
}

export interface WhySpecialCard {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export interface BirthdayWishOption {
  id: string;
  label: string;
  icon: string;
  wish: string;
  bgGradient: string;
}

export interface BirthdayConfig {
  name: string;
  shortName: string;
  location: string;
  fullLocation: string;
  birthdayDate: string; // e.g. "04 October 2026"
  birthdayFormattedDate: string;
  heroPhoto: string;
  photos: BirthdayPhoto[];
  musicPath: string;
  socialLinks: {
    instagram: string;
    facebook?: string;
  };
  developer: {
    name: string;
    code: string;
    photo: string;
    portfolio: string;
  };
  openingText: {
    line1: string;
    line2: string;
    line3: string;
    buttonText: string;
    subText: string;
  };
  heroText: {
    title: string;
    subtitle: string;
    badge: string;
    buttonText: string;
  };
  personalMessage: {
    title: string;
    paragraphs: string[];
    closing: string;
  };
  cinematicQuotes: string[];
  whySpecialCards: WhySpecialCard[];
  wishGenerator: BirthdayWishOption[];
  tenWishes: string[];
  surpriseBoxMessage: string;
  secretMessage: string;
  finalCinematic: {
    lines: string[];
    bigHeading: string;
    subheading: string;
  };
}

export const birthdayConfig: BirthdayConfig = {
  name: "Ashifa Khatun",
  shortName: "Ashifa",
  location: "Bari, Jajpur, Odisha",
  fullLocation: "Bari • Jajpur • Odisha, India",
  birthdayDate: "2026-11-08",
  birthdayFormattedDate: "08 November 2026",
  heroPhoto: "/images/photo1.jpg",
  musicPath: "/audio/birthday-music.mp3",

  socialLinks: {
    instagram: "https://www.instagram.com/ashifa72575?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw=="
  },

  developer: {
    name: "Nihar Ranjan Biswal",
    code: "NRB 04",
    photo: "/images/developer-nrb04.png",
    portfolio: "https://niharbiswal.vercel.app/"
  },

  openingText: {
    line1: "Someone Special Has A Birthday Today...",
    line2: "✨ Happy Birthday, Ashifa ✨",
    line3: "Today isn't just another day... Today is the day someone truly special was born.",
    buttonText: "Open Your Surprise ❤️",
    subText: "Made specially for Ashifa Khatun ❤️"
  },

  heroText: {
    title: "Happy Birthday, Ashifa ❤️",
    subtitle: "To the girl who deserves a day as beautiful as her smile.",
    badge: "🎂 Birthday Girl",
    buttonText: "Start The Birthday Journey ↓"
  },

  personalMessage: {
    title: "A Little Message For You 💌",
    paragraphs: [
      "Dear Ashifa,",
      "Today is your special day, and I just wanted to remind you how wonderful it is that someone like you exists.",
      "I hope this birthday brings you countless reasons to smile, beautiful memories to keep forever, peaceful moments that make your heart happy, and people around you who genuinely care about you.",
      "May every dream you carry in your heart slowly become reality.",
      "May your smile always stay bright, your heart always stay kind, and your life always be filled with beautiful moments.",
      "You deserve happiness, success, love, peace and all the beautiful things life has to offer.",
      "So today, forget about everything else for a moment and simply enjoy being celebrated.",
      "Because today is YOUR day."
    ],
    closing: "Happy Birthday, Ashifa. ❤️"
  },

  photos: [
    {
      id: 1,
      url: "/images/photo1.jpg",
      caption: "Radiant Elegance & Beautiful Smile",
      subtitle: "Hero Memory",
      tag: "Bright & Beautiful",
      memoryQuote: "Some smiles stay in your mind and brighten up every single day."
    },
    {
      id: 2,
      url: "/images/photo2.jpg",
      caption: "Graceful Vibes & Sweet Joy",
      subtitle: "Charming Memory",
      tag: "Joyful Vibe",
      memoryQuote: "Your presence brings warmth and happiness wherever you go."
    },
    {
      id: 3,
      url: "/images/photo3.jpg",
      caption: "Cool Style & Sweet Spirit",
      subtitle: "Special Memory",
      tag: "Timeless",
      memoryQuote: "Some people make every ordinary moment feel extraordinarily special."
    },
    {
      id: 4,
      url: "/images/photo4.jpg",
      caption: "Glowing Grace & Charm",
      subtitle: "Favorite Moment",
      tag: "Heartwarming",
      memoryQuote: "A beautiful soul with a smile that lights up the world."
    },
    {
      id: 5,
      url: "/images/photo5.jpg",
      caption: "Gentle Heart & Pure Kindness",
      subtitle: "Sweet Surprise",
      tag: "Radiance",
      memoryQuote: "May your heart always be filled with endless peace, love and joy."
    },
    {
      id: 6,
      url: "/images/photo6.jpg",
      caption: "Traditional Saree & Jhumkas Elegance",
      subtitle: "Ethnic Beauty",
      tag: "Traditional",
      memoryQuote: "Timeless grace and beauty reflected in every single moment."
    },
    {
      id: 7,
      url: "/images/photo7.jpg",
      caption: "Soft Glow & Heartwarming Smile",
      subtitle: "Precious Moment",
      tag: "Sweet Charm",
      memoryQuote: "Your gentle presence brings calm and sweetness to the world."
    },
    {
      id: 8,
      url: "/images/photo8.jpg",
      caption: "Dimpled Smiles & Endless Sunshine",
      subtitle: "Joyful Smile",
      tag: "Pure Joy",
      memoryQuote: "Keep blooming and spreading positivity wherever you go."
    },
    {
      id: 9,
      url: "/videos/ashifa-special.mp4",
      caption: "Special Birthday Reel Moment",
      subtitle: "Video Memory",
      tag: "Live Reel 🎥",
      memoryQuote: "Moments captured in motion, treasured forever in the heart.",
      isVideo: true
    }
  ],

  cinematicQuotes: [
    "Some moments become memories.",
    "Some smiles stay in your mind.",
    "Some people make ordinary days feel special.",
    "And some people are simply unforgettable."
  ],

  whySpecialCards: [
    {
      icon: "💖",
      title: "Your Smile",
      description: "One of those little things that can instantly brighten a moment.",
      gradient: "from-pink-500/20 to-rose-500/10"
    },
    {
      icon: "🌸",
      title: "Your Kindness",
      description: "Never underestimate how beautiful kindness can be.",
      gradient: "from-purple-500/20 to-pink-500/10"
    },
    {
      icon: "✨",
      title: "Your Presence",
      description: "Some people simply make moments better by being there.",
      gradient: "from-amber-500/20 to-yellow-500/10"
    },
    {
      icon: "🌙",
      title: "Your Personality",
      description: "There is something uniquely beautiful about the person you are.",
      gradient: "from-indigo-500/20 to-purple-500/10"
    },
    {
      icon: "🌟",
      title: "Your Dreams",
      description: "May you achieve every dream you secretly wish for.",
      gradient: "from-amber-400/20 to-rose-400/10"
    },
    {
      icon: "❤️",
      title: "Simply You",
      description: "And most importantly... you're special simply because you're you.",
      gradient: "from-rose-600/20 to-pink-600/10"
    }
  ],

  wishGenerator: [
    {
      id: "love",
      label: "Love ❤️",
      icon: "❤️",
      wish: "May your life be filled with unconditional love, warmth, and genuine care from everyone who surrounds you.",
      bgGradient: "from-rose-500 to-pink-600"
    },
    {
      id: "happiness",
      label: "Happiness 😊",
      icon: "😊",
      wish: "May your life always have more reasons to smile than reasons to worry.",
      bgGradient: "from-amber-500 to-orange-500"
    },
    {
      id: "success",
      label: "Success 🌟",
      icon: "🌟",
      wish: "May every goal you work toward become a beautiful achievement beyond your expectations.",
      bgGradient: "from-yellow-400 to-amber-600"
    },
    {
      id: "peace",
      label: "Peace 🌙",
      icon: "🌙",
      wish: "May your mind find quiet tranquility, your heart feel at rest, and your soul be filled with peace.",
      bgGradient: "from-indigo-500 to-purple-600"
    },
    {
      id: "dreams",
      label: "Dreams ✨",
      icon: "✨",
      wish: "May every silent wish you make under the night sky find its way into your real life.",
      bgGradient: "from-purple-500 to-pink-500"
    },
    {
      id: "adventure",
      label: "Adventure 🌍",
      icon: "🌍",
      wish: "May the year ahead open doors to new places, beautiful discoveries, and unforgettable journeys.",
      bgGradient: "from-teal-500 to-emerald-600"
    }
  ],

  tenWishes: [
    "May you always have reasons to smile.",
    "May your dreams become reality.",
    "May success follow your hard work.",
    "May your heart always remain peaceful.",
    "May you meet wonderful people.",
    "May every year make you stronger and happier.",
    "May your beautiful memories keep growing.",
    "May every difficult moment make you stronger.",
    "May you always believe in yourself.",
    "And most importantly, may you always be happy. ❤️"
  ],

  surpriseBoxMessage: "Life is full of surprises, but some people are the beautiful surprise themselves. Happy Birthday, Ashifa. ❤️",

  secretMessage: `Some things are difficult to say in ordinary words, so this little website is my way of saying:

You are genuinely special.

I hope life gives you more happiness than you expect, more opportunities than you imagine, and more beautiful memories than you can count.

Keep smiling, keep dreaming, and keep being the wonderful person you are.

Happy Birthday, Ashifa. ❤️`,

  finalCinematic: {
    lines: [
      "Before you leave...",
      "Remember...",
      "You are special.",
      "You are appreciated.",
      "You deserve happiness.",
      "And today..."
    ],
    bigHeading: "HAPPY BIRTHDAY, ASHIFA ❤️",
    subheading: "May your next chapter be your most beautiful one yet."
  }
};
