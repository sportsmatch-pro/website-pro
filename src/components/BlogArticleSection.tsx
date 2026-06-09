// React test stub for BlogArticleSection — used only for unit tests.
// The production component is BlogArticleSection.astro.

type MockArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
};

type Props = {
  t: Record<string, string>;
  lang: 'es' | 'ca' | 'en';
  article: MockArticle;
  blogBasePath: string;
};

export function BlogArticleSection({ t, lang, article, blogBasePath }: Props) {
  return (
    <article>
      <nav data-testid="breadcrumb" aria-label="breadcrumb">
        <a href={blogBasePath}>{t['blog.article.breadcrumb.blog']}</a>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{article.title}</span>
      </nav>

      <header>
        <p className="article-category">{article.category}</p>
        <h1>{article.title}</h1>
        <time dateTime={article.date}>{article.date}</time>
      </header>

      <div className="article-content">
        <p>{t['blog.article.content.placeholder']}</p>
      </div>
    </article>
  );
}
