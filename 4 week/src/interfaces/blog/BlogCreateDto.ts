import { CategoryInfo } from "../category/CategoryInfo";

export interface BlogCreateDto {
    title: string;
    author: string;
    category: CategoryInfo;
    description: string;
}