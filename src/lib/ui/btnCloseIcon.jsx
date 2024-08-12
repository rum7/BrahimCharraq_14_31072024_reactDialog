export const BtnCloseIcon = ({ onClose }) => {
    return (
      <button onClick={onClose} className='btn-close__icon'>
          <svg viewBox="0 0 512 512">
              <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M368 368L144 144M368 144L144 368"
              />
          </svg>
      </button>
    )
}