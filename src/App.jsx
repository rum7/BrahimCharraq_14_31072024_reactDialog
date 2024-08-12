import { useState } from "react"
import { Dialog } from "./lib/dialog"
import "./App.css"


const App = () => {
    const [isDialogOpen, setisDialogOpen] = useState(false)
    const toggleDialog = () => setisDialogOpen(!isDialogOpen)

    const valueDialogSettings = {
        isDialogOpen: isDialogOpen,
        onClose: toggleDialog,
        dialogTitle: "The <Dialog /> component",
        dialogText: "The <Dialog /> component makes it easy to create popup dialogs and modals in your react.JS application.",
        btnCloseType: "iconBtn",
        btnCloseLabel: "Close",
        customClass: "dialog-custom"
    }

    return (
        <>
            <button onClick={toggleDialog}>Click me</button>

            <Dialog value={valueDialogSettings} />
        </>
    )
}

export default App