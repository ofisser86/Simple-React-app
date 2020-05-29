import React from 'react'
import Article from '../Article'
import './style.css'


export default function ArticleList({articles}){
    const articalElement = articles.map(articl => 
        <li key= {articl.id}><Article article={articl}/></li>
        )
    return(

       <ul className="article-list_li">
            {articalElement}
       </ul> 
    )


}