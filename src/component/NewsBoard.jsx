import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";


const NewsBoard = ({category}) => {
    //var bnate
    const [articles,setArticles]=useState([]);


    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8e52cfa7740c4cf8aa5c53081625f3d1`;
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
    },[category])
  return (
    <div>
      <h2 className='text-center px-2'>Latest<span className='badge bg-danger'>News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard
