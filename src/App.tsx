import { useState } from 'react'
import reactLogo from './assets/tarquinio.svg'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <img src={reactLogo} />
        </div>

    )
}

export default App
