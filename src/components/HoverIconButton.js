import React, {useState} from "react";



export default function HoverIconButton() {

    const [style, setStyle] = useState({display: 'none'});


    return (
        <div>
            <h2>Hidden Button in the box. Move mouse in the box</h2>
            <div style={{border: '1px solid gray', width: 300, height: 300, padding: 10, margin: 10}}
                onMouseEnter={e => {
                    setStyle({display: 'block'});

                }}
                onMouseLeave={e => {
                    setStyle({display: "none"})
                }}
            > 
            <button style={style}>click</button>
            </div>
        </div>
    )
}
