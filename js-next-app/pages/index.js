import styles from "@/styles/Home.module.css";
import PageLayout from "@/components/PageLayout";
import Image from "next/image";

export default function Home({ articles }) {
  return (
    <PageLayout>
      <div className={styles.container}>
        {articles.length === 0 && <p>No tenemos artículos</p>}
        {articles.length > 0 &&
          articles.map((article, index) => (
            <div key={index}>
              <Image
                alt={`Image for the article ${article.title}`}
                src={article.urlToImage}
                width={450}
                height={300}
                layout="responsive"
              />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          ))}
      </div>
    </PageLayout>
  );
}

/* ESTE MÉTODO SE EJECUTA EN EL SERVIDOR 
export async function getStaticProps() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b5dbd67693af4df080df4680eb8b164b"
  );
  const { articles } = await response.json();

  return {
    props: {
      articles,
    },
  };
}*/

/* ESTE MÉTODO SE EJECUTA EN EL SERVIDOR*/
export async function getServerSideProps(context) {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b5dbd67693af4df080df4680eb8b164b"
  );
  const { articles } = await response.json();

  return {
    props: {
      articles,
    },
  };
}
