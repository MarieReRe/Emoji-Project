import React from 'react';
import commonPack from '../../assets/images/commonPack.png';

 function Slogan() {
    return (
        <>
                <div class='slogan'>                  
                <img  src={commonPack} alt='Common Pack Series One' class="grid-sloganImg pull-right" />
                    <h1 class='grid-heading'>
                     Own the World’s
                     <br/>
                      most iconic
                      <br/>
                       emotion: emoji®
                    </h1>
                    <h6 class='grid-subheading'>
                     Collect & discover Rare never before seen emoji® icons
                    </h6>
                    <button class="grid-button purchaseButton">
                         Buy your first pack
                    </button>
                  
                </div>

        </>
    )
}


export default Slogan;