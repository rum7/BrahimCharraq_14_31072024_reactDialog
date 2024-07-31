import { useState } from "react"
import "./App.css"

function App() {
  const [isDialogOpen, setisDialogOpen] = useState(false)
  const toggleDialog = () => setisDialogOpen(!isDialogOpen)

  return (
    <>
        <button 
            onClick={toggleDialog}
            style={isDialogOpen ? {display: 'none'} : {display: 'block'}}
        >Dialog</button>
      
        {isDialogOpen ? (
        <dialog 
            open
            style={{ position: 'relative' }}
        >
            <h3>Dialog</h3>
            <p>Here come a new challenger 🎉!</p>
            <button onClick={toggleDialog}>close</button>
        </dialog>) 
        : null}

    </>
  )
}

export default App