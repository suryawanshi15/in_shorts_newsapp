import axios from 'axios'
import React,{useState,useEffect} from "react";
import NavInshorts from './Component/NavInshorts.js';
import APi_KEY from './Keys.js';
import NewsContent from './Component/NewsContent/NewsContent.js';
import Footer from './Component/Footer/Footer.js';
import './App.css'
function App() {
  const [newsArray , setNewsArray] = useState([])
  const [newsResults , setNewsResults] = useState()
  const[Category,setCategory] = useState("General")
  const [loadMore , setLoadMore] = useState(20)

  const newsApi = async()=>{
    try{
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${APi_KEY}&pageSize=${loadMore}&category=${Category}`)
        setNewsArray(news.data.articles)
        setNewsResults(news.data.totalResults)
    }catch(err){
   console.log(err)
    }
  }

   useEffect(()=>{
            newsApi()
   },[newsResults,loadMore,Category])

  return (
  <div>
    <NavInshorts setCategory={setCategory}/>
    <NewsContent setloadmore={setLoadMore} loadmore={loadMore} newsArray={newsArray} newsResults={newsResults} />
    <Footer />
  </div>
  );
}

export default App;
