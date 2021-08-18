import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header'

const App = () => {
    return(
        <>                  
          <Header />
        </>
    )
}

ReactDom.render(<App />, document.getElementById('root') );