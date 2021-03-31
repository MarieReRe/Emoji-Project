import React from 'react';
import NavBar from './components/navbar';
import Spots from './components/spots';
import Slogan from './components/home/slogan';
import DailyDrop from './components/dailyDrop/dailyDrop.js';
import CurrentPacks from './components/limitedEdition/emojiPacks';
import SeriesCompletion from './components/seriesCompletion/completion.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>

      <body>
        <NavBar />
        <main>
          <div class='wrapper'>
            <Spots />
            <Slogan />
            <DailyDrop />
            <CurrentPacks />
            <SeriesCompletion />
          </div>
        </main>
      </body>

    </>
  );
}

export default App;
