export const Dialog = ({ isDialogOpen, dialogTitle, dialogText, onClose }) => {
    if (isDialogOpen) {
        return (
            <>
                <dialog open style={{ position: 'relative' }}>
                    <h3>{dialogTitle}</h3>
                    <p>{dialogText}</p>
                    <button onClick={onClose}>close</button>
                </dialog>
            </>
        )
    }
}