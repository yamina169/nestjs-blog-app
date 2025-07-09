import { ArticleEntity } from '../article.entity';

export interface IArticlesResponse {
  articles: ArticleEntity[]; // ← ici on met bien un tableau

  articlesCount: number;
}
