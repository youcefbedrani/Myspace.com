import { useState, useEffect } from "react";
import "../../styles/blog.scss";
function Blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from DEV and Medium
    // Replace these URLs with the actual endpoints or RSS feeds
    const fetchArticles = async () => {
      try {
        const devResponse = await fetch(
          "https://dev.to/api/articles?username=youcefbedrani_64"
        );
        const devArticles = await devResponse.json();
        const mediumResponse = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bedranimohammed12"
        );
        const mediumArticles = await mediumResponse.json();
        // console.log(mediumArticles);

        setArticles([...devArticles, ...mediumArticles.items]); // Combine articles from both sources
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const MediumImg =
    "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*sG6BT7e579CET2QA";

  return (
    <div className="blog-container">
      <h2 className="text-4xl font-bold text-center mb-8">Latest Articles</h2>
      <div className="blog-grid mt-4">
        {articles.map((article, index) => (
          <div key={index} className="blog-card">
            <div className="blog-header">
              <img
                src={article.social_image || MediumImg}
                className="blog-logo"
              />
            </div>
            <h3 className="blog-title">{article.title}</h3>
            <a
              href={article.link || article.canonical_url}
              className="blog-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
