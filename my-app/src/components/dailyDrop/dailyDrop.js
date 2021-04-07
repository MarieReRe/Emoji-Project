import React from 'react';
import stPaddysEmoji from '../../assets/images/stPaddysEmoji.png'
import DailyDropCountdown from '../countdown/countdown';


function DailyDrop() {
    return (
        <>
            <div class='dailyDrop'>
                <img class="grid-dailyEmoji" src={stPaddysEmoji} alt='Saint Patricks Day Emoji with a green mohawk, sunglasses with sparkling shamrocks, tongue sticking out and holding up a peace sign' />
                <DailyDropCountdown class="grid-dropCountdown" date={"2021-04-30"} />
                <div class="grid-dropTitle">
                    <h5 class="drops">DAILY DROP</h5>
                    <h4 class="dropTitle">
                        St. Patrick’s Day emoji®
                        </h4>
                </div>




                <div class="grid-dropDescription">
                    Lorem ipsum dolor sit amet, ipsum erroribus nam ei. Mei ex omnium democritum, per an hinc voluptatum.
                    Nec et omittam officiis gubergren, no ridens commune copiosae sed, usu ei aeque saepe. Nec essent accusata eu. Nec et omittam officiis gubergren, no ridens commune copiosae sed, usu ei aeque saepe. Nec essent accusata eu.
                        </div>
                <div class="grid-buttons">
                    <button class="purchaseButton">
                        Buy Emoji $3
                        </button>
                    <button class="previousButton">
                        View Past Drops
                        </button>
                </div>
            </div>
        </>
    )
}


export default DailyDrop;