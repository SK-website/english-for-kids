import { ImageCategoryModel } from "../models/image-category-model";

export async function getCategoriesCardsInfo(): Promise<ImageCategoryModel[]> {
  const res = await fetch('./images.json');
  console.log(res);
  const categories: ImageCategoryModel[] = await res.json();
  console.log(typeof categories, categories);

  return categories;
}
