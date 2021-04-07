import React from 'react';
import burningPoo from '../../assets/images/burningPoo.png';
import fairyPoo from '../../assets/images/fairyPoo.png';
import holographicPoo from '../../assets/images/holographicPoo.png';

 function SeriesCompletion() {
    return (
        <>
                <div class='seriesCompletion'>
                    <div class="grid-completeSeriesTitle">
                    <h6>
                     SERIES 1
                    </h6>
                    <h2 class='subheading'>
                     Follow the guide to complete your series<br/>
                     View the complete set for series 1.
                    </h2>
                    </div>
                   
                    <button class="grid-discover discoverButton">
                         DISCOVER EMOJI ICONS
                    </button>
                    <div class="grid-emojiContainer">
                    <img class="emoji-1" src={fairyPoo} alt='Series 1 Fairy Poo Emoji' />
                    <img class="emoji-2" src={burningPoo} alt='Series 1 Burning Poo Emoji' />
                    <img class="emoji-3" src={holographicPoo} alt='Series 1 Holographic Poo Emoji' />
                    </div>
                </div>

        </>
    )
}


export default SeriesCompletion;