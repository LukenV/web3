import {useState} from "react";
const COLORS_CYCLE = [
    {style: "red", text: "Rouge"},
    {style: "green", text: "Vert"},
    {style: "blue", text: "Bleu"},
    {style: "yellow", text: "Jaune"},
    {style: "purple", text: "Violet"},
];

import './ColorBox.css';

const ColorBox = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const getNextIndex = () => {
        if (COLORS_CYCLE.length -1 === colorIndex) return 0;
        return colorIndex + 1;
    }
    const setNextIndex = () => {
        setColorIndex(getNextIndex());
    }
    return (
        <>
            <div id="container">
                <div id="box" style={{backgroundColor: COLORS_CYCLE[colorIndex].style}}>
                    <button id="buttonChangeColor" onClick={setNextIndex}>{COLORS_CYCLE[colorIndex].text}</button>
                    <h3>Prochaine couleur : {COLORS_CYCLE[getNextIndex()].text}</h3>
                </div>
            </div>
        </>
    );
}

export default ColorBox;