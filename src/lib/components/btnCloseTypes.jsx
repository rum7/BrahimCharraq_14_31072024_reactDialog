import { BtnCloseIcon } from "../ui/btnCloseIcon"
import { BtnCloseText } from "../ui/btnCloseText"

export const BtnCloseTypes = ({ btnCloseType, btnCloseLabel, onClose }) => {
    if (!btnCloseType || btnCloseType === "textBtn") return <BtnCloseText onClose={onClose} btnCloseLabel={btnCloseLabel} />
    
    if (btnCloseType === "iconBtn") return <BtnCloseIcon onClose={onClose} />
}
