import { ImageCategoryModel } from '../models/image-category-model';

export async function getCategoriesCardsInfo(): Promise<ImageCategoryModel[]> {
  const res = await fetch('./images.json');
  const categories: ImageCategoryModel[] = await res.json();
  return categories;
}
