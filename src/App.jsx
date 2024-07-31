import { useState } from "react"
import { Dialog } from "./components/dialog"
import "./App.css"

const dialogInformations = {
    title: "The <dialog> tag",
    text: "The <dialog> element makes it easy to create popup dialogs and modals on a web page."
}

function App() {
    const [isDialogOpen, setisDialogOpen] = useState(false)
    const toggleDialog = () => setisDialogOpen(!isDialogOpen)

    return (
        <>
            <button 
                onClick={toggleDialog}
                className={!isDialogOpen ? 'btn__dialog' : 'btn__dialog btn__dialog--hidden'}
            >Dialog</button>

            <Dialog 
                isDialogOpen={isDialogOpen} 
                dialogTitle={dialogInformations.title}
                dialogText={dialogInformations.text} 
                onClose={toggleDialog}
            />
        </>
    )
}

export default App