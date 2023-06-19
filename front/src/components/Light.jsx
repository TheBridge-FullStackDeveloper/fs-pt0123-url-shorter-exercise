import { useState } from "react";


function Light() {
    const [isOn, setIsOn] = useState(false);

    return (
        <>
            <button
                onClick={() => {
                    setIsOn(!inOn)
                }}
            >
                {isOn ? "ON" : "OFF"}
            </button>
        </>
    )
}

export default Light