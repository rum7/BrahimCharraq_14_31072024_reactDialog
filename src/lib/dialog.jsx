import './dialog.css'

export const Dialog = ({ isDialogOpen, dialogTitle, dialogText, onClose }) => {
        return (
            <dialog open={isDialogOpen}>
                <h3>{dialogTitle}</h3>
                <p>{dialogText}</p>
                <button onClick={onClose}>close</button>
            </dialog>
        )
}