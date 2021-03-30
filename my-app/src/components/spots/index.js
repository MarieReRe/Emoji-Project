import React from "react";


export default function Spots() {
    return (
        <>
        {/* Top SVG's */}
            <svg>
                <circle r="100"
                    cy="110" 
                    cx="-75"
                    fill="#FFFE4B"  
                />
            </svg>
            <svg>
                <circle r="5"
                    cy="-135" 
                    cx="10"
                    fill="#D9504B"  
                />
            </svg>
            <svg>
                <circle r="25"
                    cy="-25" 
                    cx="-30"
                    fill="#E74010"  
                />
            </svg>
            <svg>
                <circle r="6"
                    cy="-400" 
                    cx="200"
                    fill="#E74010"  
                />
            </svg>
            <svg>
                <circle r="6"
                    cy="-580" 
                    cx="300"
                    fill="#373E98"  
                />
            </svg>
            <svg>
                <circle r="45"
                    cy="-450" 
                    cx="400"
                    fill="#65656536"  
                    
                />
            </svg>

            {/* MID LEVEL */}
            <svg>
                <circle r="75"
                    cy="-150" 
                    cx="-65"
                    fill="#65656536"  
                    
                />
            </svg>
            <svg>
                <circle r="75"
                    cy="-400" 
                    cx="450"
                    fill="#E74010"  
                />
            </svg>

            {/* LOWER LEVEL */}
            <svg>
                <circle r="100"
                    cy="200" 
                    cx="70"
                    fill="#FFFF99"  
                />
            </svg>
        </>
    );
  }

