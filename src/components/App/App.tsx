import React from "react";
import Header from "../Header";

import NewsCard from "../NewsCard";


interface News {
  id: number;
  title: string;
  image: string;
  content: string;
  pubDate: string;
}

const App: React.FC = () => {


  const news= {
    id: 1,
    title: '1 News Title',
    image: "fffff",
    content: 'Lorem ipsum dolor, sit amet',
    pubDate: '17.03.2022',
  }

  return (
    <div>
    <Header/>
    <NewsCard news={news}/>
    </div>
  )
}

export default App