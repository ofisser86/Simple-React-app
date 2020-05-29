import React from 'react'
import Article from './Article'
import articles from '../fixtures'

function App(){
    return( <div>
        
      <Article article={articles[0]}  foo="bar" flag={true} />
      <p>h2 txt here </p>
    </div>
    )
    }

export default App