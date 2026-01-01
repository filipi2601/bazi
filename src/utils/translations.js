// Troncos → Elemento
export const STEM_ELEMENT = {
  甲: "Wood",
  乙: "Wood",
  丙: "Fire",
  丁: "Fire",
  戊: "Earth",
  己: "Earth",
  庚: "Metal",
  辛: "Metal",
  壬: "Water",
  癸: "Water",
};

// Ramos → Animais
export const BRANCH_ANIMALS = {
  子: "Rat",
  丑: "Ox",
  寅: "Tiger",
  卯: "Rabbit",
  辰: "Dragon",
  巳: "Snake",
  午: "Horse",
  未: "Goat",
  申: "Monkey",
  酉: "Rooster",
  戌: "Dog",
  亥: "Pig",
};

// Raízes
export const HIDDEN_STEMS = {
  子: ["Water Yin"],
  丑: ["Earth Yin", "Water Yin", "Metal Yin"],
  寅: ["Wood Yang", "Fire Yang", "Earth Yang"],
  卯: ["Wood Yin"],
  辰: ["Earth Yang", "Wood Yin", "Water Yin"],
  巳: ["Fire Yang", "Earth Yang", "Metal Yang"],
  午: ["Fire Yin", "Earth Yin"],
  未: ["Earth Yin", "Fire Yin", "Wood Yin"],
  申: ["Metal Yang", "Water Yang", "Earth Yang"],
  酉: ["Metal Yin"],
  戌: ["Earth Yang", "Metal Yin", "Fire Yin"],
  亥: ["Water Yang", "Wood Yang"],
};
