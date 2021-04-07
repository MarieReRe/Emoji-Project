import React from 'react';
import commonPack from '../../assets/images/commonPack.png';
import starrySlider from '../../assets/images/starryEyed.png'
import coolSlider from '../../assets/images/cool.png'
import mindBlownSlider from '../../assets/images/mindBlown.png'


function Slogan() {
    return (
        <>
            <div class='slogan'>
                <div class="grid-starry">
                    <img src={starrySlider} alt="Starry eyed emoji slider" />
                </div>
                <div class="grid-mindBlown">
                    <img src={mindBlownSlider} alt="Mind Blown emoji slider" />
                </div>
                <img src={commonPack} alt='Common Pack Series One' class="grid-sloganImg pull-right" />
               
                <h1 class='grid-heading'>
                    Own the World’s
                     <br />
                      most iconic
                      <br />
                       emotion: emoji®
                    </h1>
                <h6 class='grid-subheading'>
                    Collect & discover Rare never before seen emoji® icons
                    </h6>
                <button class="grid-button purchaseButton">
                    Buy your first pack
                    </button>
                <div class="grid-cool">
                    <img src={coolSlider} alt="cool glasses emoji slider" />
                </div>
            </div>

        </>
    )
}


export default Slogan;