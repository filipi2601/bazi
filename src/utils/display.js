// temporário: mapeamento simples só para visual
export const STEM_ELEMENT_MAP = {
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

export function getElementFromGanZhi(gz) {
  return STEM_ELEMENT_MAP[gz[0]];
}
