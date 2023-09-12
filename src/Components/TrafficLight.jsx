import React, { useEffect, useState } from "react";
import "./style.css"


const TrafficLight = () => {
    const [color, setColor] = useState("");
    const [fourth, setFourth] = useState(false);

    const Purple = () => {
        setFourth(!fourth);
    }
    const nextColor = () => {
        if (color === "red") {
            setColor("green");
        } else if (color === "yellow") {
            setColor("red");
        } else if (color === "green") {
            setColor("yellow")
        }
    }

    return (
        <>
            <div className="semaforo">
                <div
                    onClick={() => setColor("red")}
                    className={"circleRed" + (color === "red" ? " lightOn" : "")}
                >
                </div>
                <div
                    onClick={() => setColor("yellow")}
                    className={"circleYellow" + (color === "yellow" ? " lightOn" : "")}
                >
                </div>
                <div
                    onClick={() => setColor("green")}
                    className={"circleGreen" + (color === "green" ? " lightOn" : "")}
                >
                </div>
                {fourth &&
                <div className="circlePurple"/>}
            </div>
            <div>
                <button onClick={Purple}>Agregar Color</button>
                <button onClick={nextColor}>Cambiar color</button>
            </div>
        </>
    )
}

export default TrafficLight;