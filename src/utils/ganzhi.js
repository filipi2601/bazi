// Troncos Celestes
export const HEAVENLY_STEMS = [
  "甲",
  "乙",
  "丙",
  "丁",
  "戊",
  "己",
  "庚",
  "辛",
  "壬",
  "癸",
];

// Ramos Terrestres
export const EARTHLY_BRANCHES = [
  "子",
  "丑",
  "寅",
  "卯",
  "辰",
  "巳",
  "午",
  "未",
  "申",
  "酉",
  "戌",
  "亥",
];

// Troncos → Elemento + Yin/Yang
export const STEM_PROPERTIES = {
  甲: { element: "Wood", principle: "Yang" },
  乙: { element: "Wood", principle: "Yin" },
  丙: { element: "Fire", principle: "Yang" },
  丁: { element: "Fire", principle: "Yin" },
  戊: { element: "Earth", principle: "Yang" },
  己: { element: "Earth", principle: "Yin" },
  庚: { element: "Metal", principle: "Yang" },
  辛: { element: "Metal", principle: "Yin" },
  壬: { element: "Water", principle: "Yang" },
  癸: { element: "Water", principle: "Yin" },
};

// Ramos → Elemento principal
export const BRANCH_ELEMENTS = {
  子: "Water",
  丑: "Earth",
  寅: "Wood",
  卯: "Wood",
  辰: "Earth",
  巳: "Fire",
  午: "Fire",
  未: "Earth",
  申: "Metal",
  酉: "Metal",
  戌: "Earth",
  亥: "Water",
};

// Ramos → Yin/Yang
export const BRANCH_YINYANG = {
  子: "Yang",
  丑: "Yin",
  寅: "Yang",
  卯: "Yin",
  辰: "Yang",
  巳: "Yin",
  午: "Yang",
  未: "Yin",
  申: "Yang",
  酉: "Yin",
  戌: "Yang",
  亥: "Yin",
};

// Ramos ocultos (藏干)
export const BRANCH_HIDDEN_STEMS = {
  子: ["癸"],
  丑: ["己", "癸", "辛"],
  寅: ["甲", "丙", "戊"],
  卯: ["乙"],
  辰: ["戊", "乙", "癸"],
  巳: ["丙", "戊", "庚"],
  午: ["丁", "己"],
  未: ["己", "丁", "乙"],
  申: ["庚", "壬", "戊"],
  酉: ["辛"],
  戌: ["戊", "辛", "丁"],
  亥: ["壬", "甲"],
};

// Ciclo sexagenário (referência simbólica)
export const GANZHI_CYCLE = Array.from({ length: 60 }, (_, i) => ({
  stem: HEAVENLY_STEMS[i % 10],
  branch: EARTHLY_BRANCHES[i % 12],
}));
