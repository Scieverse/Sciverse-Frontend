import { useState, useEffect } from "react";
import { articlesArray } from "../constants";
import ArticleCard from "../components/ArticleCard";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      setArticles(articlesArray);

      //   try {
      //     const response = await fetch();
      //     if (!response.ok) {
      //       throw new Error("Failed to fetch data");
      //     }
      //     const data = await response.json();
      //     setArticles(data);
      //   } catch (error) {
      //     console.error("Error fetching data:", error);
      //   }
    };

    fetchArticles();
  }, []);

  return (
    <div className="w-full h-full flex justify-start items-start flex-col bg-grey pt-4 max-md:pt-2">
      {articles.map((article,index) => (
        <ArticleCard article={article} key={index}/>
      ))}
    </div>
  );
};

export default Home;
