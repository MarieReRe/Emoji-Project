import React from 'react';
import logo from '../../assets/images/emoji-logo.png'

export default function Header(){
    return(
      
        <header>
           <img class="col-sm-6" src={logo} alt='Emoji Brand Logo' />
          <nav>
            <a class="col-sm-1" href="/Packs">PACKS</a>

            <a class="col-sm-1" href="ArtistCollabs">ARTIST COLLABS</a>

            <a class="col-sm-1" href="DailyDrops">DAILY DROPS</a>

            <a class="col-sm-1" href="MarketPlace">MARKETPLACE</a>

            <a class="col-sm-1" href="EmojiIcons">EMOJI&reg; ICONS</a>

            <a class="col-sm-1" href="TopCollectors">TOP COLLECTORS</a>

            <a class="col-sm-1" href="Bingo">BINGO</a>

            <button>sign up</button>

            <button>log in</button>
            

          </nav>
        </header>
      );
}