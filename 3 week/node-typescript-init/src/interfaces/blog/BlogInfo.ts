import { CategoryInfo } from "../category/CategoryInfo";

export interface BlogInfo {
    title: string;
    author: string;
    category: CategoryInfo;
    description: string;
}