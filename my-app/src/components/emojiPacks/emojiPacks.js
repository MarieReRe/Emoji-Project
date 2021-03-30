import React from 'react';
import commonPack from '../../assets/images/commonPack.png';
import rarePack from '../../assets/images/rarePack.png';
import mindBlowingRarePack from '../../assets/images/superRarePack.png';

const EmojiCardPack = () => {
    return (
        <>
        <div class="limitedEditionDrop wrapper">
            <div class="grid-countdown">
                <h6 class="drops">CLASSIC GOOD VIBES emoji® SERIES 1</h6>
                    <h5>
                     Next limited edition drop
                    </h5>
            </div>

           

        <div class="grid-commonPack">
        <img  src={commonPack} alt='Common Pack Series One' />
        <button class="purchaseButton">Buy Now $7</button>
        </div>
        <div class="grid-rarePack">
        <img  src={rarePack} alt='Rare Pack Series One' />
        <button class="purchaseButton">Buy Now $14</button>
        </div>
        <div class="grid-superRarePack">
        <img  src={mindBlowingRarePack} alt='Mind-Blowing Rare Pack Series One' />
        <button class="purchaseButton">Buy Now $49</button>
        </div>
        </div>
        </>
    )
}

export default EmojiCardPack;