import React from 'react';
import NavBar from './components/navbar';
import Slogan from './components/home/slogan';
import DailyDrop from './components/dailyDrop/dailyDrop.js';
import CurrentPacks from './components/limitedEdition/emojiPacks';
import SeriesCompletion from './components/seriesCompletion/completion.js';
import './assets/css/reset.css'
import './App.css';
import './assets/css/slogan.css'
import './assets/css/dailyDrop.css'
import './assets/css/slogan.css'
import './assets/css/button.css'
import './assets/css/slider.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>

      <body>
        <NavBar />
        <main>
          <div class='wrapper'>
            <Slogan />
            <DailyDrop />
            {/* <CurrentPacks />
            <SeriesCompletion /> */}
          </div>
        </main>
      </body>

    </>
  );
}

export default App;
