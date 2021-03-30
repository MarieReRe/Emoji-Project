import React from 'react';
import burningPoo from '../../assets/images/burningPoo.png';
import fairyPoo from '../../assets/images/fairyPoo.png';
import holographicPoo from '../../assets/images/holographicPoo.png';

 function SeriesCompletion() {
    return (
        <>
                <div class='seriesCompletion'>
                    <h6>
                     SERIES 1
                    </h6>
                    <h2 class='subheading'>
                     Follow the guide to complete your series<br/>
                     View the complete set for series 1.
                    </h2>
                    <button class="purchaseButton">
                         DISCOVER EMOJI ICONS
                    </button>
                    <img class="fairyPoo" src={fairyPoo} alt='Series 1 Fairy Poo Emoji' />
                    <img class="burningPoo" src={burningPoo} alt='Series 1 Burning Poo Emoji' />
                    <img class="holoPoo" src={holographicPoo} alt='Series 1 Holographic Poo Emoji' />
                </div>

        </>
    )
}


export default SeriesCompletion;