const lang = {
  en: {
    search: "Search",
    gptSearchPlaceholder: "What would you like to watch today?",
  },
  hindi: {
    search: "खोज",
    gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
  },
  tamil: {
    search: "தேடு",
    gptSearchPlaceholder: "இன்று நீங்கள் எதைப் பார்க்க விரும்புகிறீர்கள்?",
  },
};

export default lang;

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "tamil", name: "Tamil" },
];
