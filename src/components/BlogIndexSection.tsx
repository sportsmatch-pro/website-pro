// React test stub for BlogIndexSection — used only for unit tests.
// The production component is BlogIndexSection.astro.

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
  posts: MockArticle[];
  blogBasePath: string;
  currentPage?: number;
  totalPages?: number;
};

export function BlogIndexSection({
  t,
  lang,
  posts,
  blogBasePath,
  currentPage = 1,
  totalPages = 1,
}: Props) {
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <section>
      <div>
        <p className="eyebrow">{t['blog.index.eyebrow']}</p>
        <h1>{t['blog.index.title']}</h1>
      </div>

      <div className="blog-card-grid">
        {posts.map((post) => (
          <article key={post.slug} className="blog-card">
            <a href={`${blogBasePath}/${post.slug}`}>
              <div className="aspect-video" aria-hidden="true"></div>
              <div>
                <span>{post.category}</span>
                <h2>{post.title}</h2>
                <time dateTime={post.date}>{post.date}</time>
              </div>
            </a>
          </article>
        ))}
      </div>

      <nav aria-label="pagination">
        {hasPrev ? (
          <a href={`${blogBasePath}?page=${currentPage - 1}`}>
            {t['blog.index.pagination.prev']}
          </a>
        ) : (
          <span aria-disabled="true">{t['blog.index.pagination.prev']}</span>
        )}

        <span>
          {currentPage} {t['blog.index.pagination.of']} {totalPages}
        </span>

        {hasNext ? (
          <a href={`${blogBasePath}?page=${currentPage + 1}`}>
            {t['blog.index.pagination.next']}
          </a>
        ) : (
          <span aria-disabled="true">{t['blog.index.pagination.next']}</span>
        )}
      </nav>
    </section>
  );
}
