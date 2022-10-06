import * as React from 'react';

type HandOverProps = {
    title: string
    message: string
    hasChoice?: boolean
    confirmText?: string
    cancelText?: string
    onConfirm?: () => void
    onCancel?: () => void
}

const HandOverPopup: React.FC<HandOverProps> = ({ title, message, hasChoice = false, confirmText = "Okay", cancelText = "Cancel", onConfirm = () => { }, onCancel = () => { } }) => {

    return (
        <>
            <div className='InnerPart'>
                <div className='IconPart'>
                    <i className="fa fa-exclamation-triangle fs-3tx" aria-hidden="true"></i>
                </div>
                <div className='InnerTitle text-center'>
                    <h1>{title}</h1>
                    <p>{message}</p>
                </div>
                <div className='BtnGroupInner'>
                    {
                        hasChoice ?
                            <button type='button' className="btn btn-secondary btn-md w-50" onClick={() => { onCancel() }}>{cancelText}</button>
                            :
                            <>
                            </>
                    }
                    <button type='button' className={`btn btn-danger btn-md ${hasChoice ? "wd-50" : "wd-100"}`} onClick={() => { onConfirm() }} >{confirmText}</button>
                </div>
            </div>
        </>
    );
}

export default HandOverPopup