export interface ImageCategoryModel {
  category: string;
  info: CardInfo[];
}

export interface CardInfo {
  img: string,
  spelling_eng: string,
  spelling_rus: string,
  audio: string
}
