# React dialog component

## Features
- Gives you a nice and clean modal interface with a title, a text, a close button and a black overlay
- You just have to set up the "valueDialogSettings" object with your content
- Easy to custom with the "customClass" and "btnClose" props

## Installation
```bash
  npm i @rum7/react-dialog
```

## How to use
### 1. Import
```javascript
import { useState } from "react"
import { Dialog } from "@rum7/react-dialog"
```

### 2. Modal state configuration
Set the initial state of the modal and add a toggle function
```javascript
const [isDialogOpen, setisDialogOpen] = useState(false)
const toggleDialog = () => setisDialogOpen(!isDialogOpen)
```

### 3. Dialog settings
```javascript
const valueDialogSettings = {
    isDialogOpen: isDialogOpen,
    onClose: toggleDialog,
    dialogTitle: "The <Dialog /> component",
    dialogText: "The <Dialog /> component makes it easy to create popup dialogs and modals in your react.JS application.",
    btnCloseType: "iconBtn",
    btnCloseLabel: "Close",
    customClass: "dialog-custom"
}
```
| Name | Type     | Description                |
| :---- | :------- | :------------------------- |
| isDialogOpen | `boolean` | Current state of the modal. **Required** |
| onClose | `function` | Call the toggle function. **Required** |
| dialogTitle | `string` | The title of the dialog. **Required** |
| dialogText | `string` | The text of the dialog. **Optional** |
| btnCloseType | `string` | The type of the close button ("iconBtn" or "textBtn"). **Optional** |
| btnCloseLabel | `string` | The close button label. **Required** |
| customClass | `string` | You can add a class to customize the dialog. **Optional** |


### 4. Add the component in your application
```javascript
<Dialog value={valueDialogSettings} />
```

## Example
```javascript
import { useState } from "react"
import { Dialog } from "@rum7/react-dialog"

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
```