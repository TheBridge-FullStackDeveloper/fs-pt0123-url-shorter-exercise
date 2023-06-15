
import { useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            {counter}
            <button
                onClick={() => {
                    setCounter(counter + 1)
                }}
            >
                Add one
            </button>

        </div>
    )
}

export default Counter