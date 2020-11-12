import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsCards from './components/NewsCards/NewsCards'
import alanBtn from '@alan-ai/alan-sdk-web'
import useStyles from './styles.js'
import pic from './pic.jpg'

const alanKey = '6aa96cd38c6cc084b0189c690ffec75b2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = ()=> {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes  = useStyles()

useEffect(()=>{
     alanBtn({
       key: alanKey,
       onCommand:({command, articles}) =>{
         if(command === 'newHeadlines'){
           setNewsArticles(articles)
         }
       }
     })
},[])
  return (

      <div className="App">
    <div className ={classes.logoContainer}>
<img src = "https://alan.app/voice/images/previews/preview.jpg" className = {classes.alanLogo} alt = "alan logo"/>
<img src = {pic} alt = "rajat" width="100" height="100"/>
    </div>
    <NewsCards articles = {newsArticles}/>
    </div>

    
  );
}

export default App;
