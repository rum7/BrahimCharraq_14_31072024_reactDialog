import { BtnCloseTypes } from './components/btnCloseTypes'
import './dialog.css'

export const Dialog = ({ value }) => {
    const { 
        isDialogOpen, 
        dialogTitle, 
        dialogText, 
        onClose, 
        customClass, 
        btnCloseType,
        btnCloseLabel
    } = value

    return (
        <div className='dialog__container' open={isDialogOpen}>
            <dialog className={customClass} open={isDialogOpen}>
                <h3>{dialogTitle}</h3>
                <p>{dialogText}</p>
                <BtnCloseTypes 
                    btnCloseType={btnCloseType}
                    btnCloseLabel={btnCloseLabel}
                    onClose={onClose}
                />
            </dialog>
        </div>
    )
}