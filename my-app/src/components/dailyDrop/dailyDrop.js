import React from 'react';
import stPaddysEmoji from '../../assets/images/stPaddysEmoji.png'
import DailyDropCountdown from '../countdown/countdown';


 function DailyDrop() {
    return (
        <>
                <div class='dailyDrop'>
                    <img class="grid-dailyEmoji" src={stPaddysEmoji} alt='Saint Patricks Day Emoji with a green mohawk, sunglasses with sparkling shamrocks, tongue sticking out and holding up a peace sign' />
                    <div class="dropWrapper">
                        <DailyDropCountdown class="grid-dropCountdown" date={"2021-04-25"}/>
                        <h5 class="grid-drops">DAILY DROP</h5>
                        <h4 class="grid-dropTitle">
                         St. Patrick’s Day emoji®
                        </h4>
                        <p class="grid-dropDescription">
                        Lorem ipsum dolor sit amet, ipsum erroribus nam ei. Mei ex omnium democritum, per an hinc voluptatum.
                        <br/>
                        Nec et omittam officiis gubergren, no ridens commune copiosae sed, usu ei aeque saepe. Nec essent accusata eu.
                        <br/>
                        </p>
                        <div class="grid-buttons">
                        <button class="purchaseButton">
                         Buy Emoji $3
                        </button>
                        <button class="previousButton">
                         View Past Drops
                        </button>
                        </div>
                     
                    </div>

                </div>   
        </>
    )
}


export default DailyDrop;