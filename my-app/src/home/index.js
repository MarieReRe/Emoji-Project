import React from 'react';
import stPaddysEmoji from '../../src/assets/images/StPaddysEmoji.jpg'

 function Home() {
    return (
        <body>      
            <main>
                <div class='wrapper'>
                <div class='top'>
                     <span class="dot1"></span>
                     <span class="dot2"></span>
                     <span class="dot3"></span>
                     <span class="dot4"></span>
                     <span class="dot5"></span>
                     <p class='heading'>
                     Own the World’s
                     <br/>
                      most iconic
                      <br/>
                       emotion: emoji®
                     </p>
                     <p class='subheading'>
                     Collect & discover Rare never before seen emoji® icons
                     </p>
                     
                </div>
                 <div class='mid'>
                 <button>
                         Buy your first pack
                     </button>
                </div>   
                     <img class="col-sm-6" src={stPaddysEmoji} alt='Saint Patricks Day Emoji with a green mohawk, sunglasses with sparkling shamrocks, tongue sticking out and holding up a peace sign' />
                     <span class="dot6"></span>
                     <span class="dot7"></span>
                     <span class="dot8"></span>
                     <span class="dot9"></span>
                     <span class="dot10"></span>
                     <span class="dot11"></span>
                     <span class="dot12"></span>
                     <span class="dot13"></span>
                     <span class="dot14"></span>
                     <span class="dot15"></span>
                </div>
              
            </main>

                   


        </body>

    )
}


export default Home;