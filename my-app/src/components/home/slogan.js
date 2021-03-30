import React from 'react';
import commonPack from '../../assets/images/commonPack.png';

 function Slogan() {
    return (
        <>
                <div class='slogan'>
                <img  src={commonPack} alt='Common Pack Series One' class="pull-right" />
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
                    <button class="purchaseButton">
                         Buy your first pack
                    </button>
                  
                </div>

        </>
    )
}


export default Slogan;