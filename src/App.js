import "./App.css";
import { useEffect, useState } from "react";
import Article from "./component/Article";
import Footer from "./component/Footer";
import { Switch } from "@mui/material";
// import ReactSwitch from "react-switch";

function App() {
  const [news, setNews] = useState([]);
  const [theme, setTheme] = useState("light");

  const title = async (title) => {
    const response = await fetch(
      // `https://newsapi.org/v2/everything?q=apple&from=2022-09-30&to=2022-09-30&sortBy=popularity&apiKey=e0e98302734542a992e8ce7a3aa6fdd2`
      // `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e0e98302734542a992e8ce7a3aa6fdd2`
      `https://newsapi.org/v2/everything?q=apple&from=2022-09-30&to=2022-09-30&sortBy=popularity&apiKey=e0e98302734542a992e8ce7a3aa6fdd2`
    );
    const data = await response.json();
    // console.log(data);
    // console.log("data articles is  ");
    // console.log(data.articles);
    setNews(data.articles);
  };

  const toggleTheme = () => {
    console.log("hello");
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    title();
  }, []);

  return (
    <div className="App" data-theme={theme}>
      <div className="contents">
        <div className="navbar">
          <h1 className="nav-header">NEWS</h1>
          {/* <ReactSwitch onChange={toggleTheme} /> */}
          <Switch
            onChange={toggleTheme}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>

        <div className="news">
          <div className="articles">
            {news.map((news) => {
              return <Article news={news} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
