import React from 'react';
import Header from './components/global/navigation';
import Slogan from './components/home/slogan';
import DailyDrop from './components/dailyDrop/dailyDrop';
import CurrentPacks from './components/emojiPacks/emojiPacks';
import SeriesCompletion from './components/seriesCompletion/completion.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <body>
      <main>
      <Header />
      <div  class='wrapper'>
      <Slogan/>
      <DailyDrop/>
      <CurrentPacks/>
      <SeriesCompletion/>
     </div>
      </main>
    </body>

    </>
  );
}

export default App;
