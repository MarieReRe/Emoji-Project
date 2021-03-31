import React from 'react';
import stPaddysEmoji from '../../assets/images/stPaddysEmoji.png'
import DailyDropCountdown from '../countdown/countdown';


 function DailyDrop() {
    return (
        <>
                <div class='dailyDrop'>
                    <div class="dailyEmoji">
                    <img src={stPaddysEmoji} alt='Saint Patricks Day Emoji with a green mohawk, sunglasses with sparkling shamrocks, tongue sticking out and holding up a peace sign' />
                    </div>
                    <div>
                        <DailyDropCountdown date={"2021-04-03"}/>
                        <h5 class="drops">DAILY DROP</h5>
                        <h4>
                         St. Patrick’s Day emoji®
                        </h4>
                        <p>
                        Lorem ipsum dolor sit amet, ipsum erroribus nam ei. Mei ex omnium democritum, per an hinc voluptatum.
                        <br/>
                        Nec et omittam officiis gubergren, no ridens commune copiosae sed, usu ei aeque saepe. Nec essent accusata eu.
                        <br/>
                        </p>
                        <button class="purchaseButton">
                         Buy Emoji $3
                        </button>
                    </div>

                </div>   
        </>
    )
}


export default DailyDrop;