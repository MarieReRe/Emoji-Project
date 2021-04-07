import React from 'react';
import LimitedEditionCountdown from '../countdown/countdown';
import commonPack from '../../assets/images/commonPack.png';
import rarePack from '../../assets/images/rarePack.png';
import mindBlowingRarePack from '../../assets/images/superRarePack.png';

const EmojiCardPack = () => {
    return (
        <>
            <div class="limitedEditionDrop">
            <LimitedEditionCountdown date={"2021-05-27"} class="grid-countdown"/>
                <div class="grid-title">
                    <h6 class="drops">CLASSIC GOOD VIBES emoji® SERIES 1</h6>
                    <h5 class="nextTitle" >
                        Next limited edition drop
                    </h5>
                </div>
                    <img class="grid-commonPack" src={commonPack} alt='Common Pack Series One' />
                    <button class="purchaseButton grid-commonPackButton">Buy Now $7</button>
                    <img class="grid-rarePack" src={rarePack} alt='Rare Pack Series One' />
                    <button class="purchaseButton grid-rarePackButton">Buy Now $14</button>
                    <img class="grid-superRarePack" src={mindBlowingRarePack} alt='Mind-Blowing Rare Pack Series One' />
                    <button class="purchaseButton grid-superRarePackButton">Buy Now $49</button>
            </div>
        </>
    )
}

export default EmojiCardPack;