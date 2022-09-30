import "./App.css";
import { useEffect, useState } from "react";
import Article from "./component/Article";

function App() {
  const [news, setNews] = useState([]);

  const title = async (title) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2022-08-30&sortBy=publishedAt&apiKey=e0e98302734542a992e8ce7a3aa6fdd2`
    );
    const data = await response.json();
    console.log(data);

    console.log("data articles is  ");
    console.log(data.articles);
    setNews(data.articles);
  };

  // console.log("news");
  // console.log([news]);

  useEffect(() => {
    title();
  }, []);

  return (
    <div className="App">
      <div className="news">
        <div className="articles">
          {news.map((news) => {
            return <Article news={news} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
