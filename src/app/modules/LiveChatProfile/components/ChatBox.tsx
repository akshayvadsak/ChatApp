import React, { useEffect, useRef } from 'react'
import { ChatInner } from '../../../../_metronic/partials';

type Props = {
    recepient_uuid: string
    site_of_origin: string
    status: boolean
}

const ChatBox: React.FC<Props> = ({ recepient_uuid, site_of_origin, status }) => {
    const chatCompRef = useRef<any>()
    useEffect(()=>{

    },[status])
    return (
        <>
            <div className='Scrolling-Top' id='Chat_Box'>
                <div className="card card-custom shadow mb-5">
                    <div className="card-header" style={{alignItems: 'center'}}>
                        <h3 className="card-title">Chat Room</h3>

                        <button
                            className='btn btn-primary justify-content-center'
                            type='button'
                            data-kt-element='load_more'
                            onClick={()=>chatCompRef!.current!.onLoadMoreClicked()}
                            >
                            Load More
                        </button>
                    </div>
                    <ChatInner ref={chatCompRef} status={status} recepient_uuid={recepient_uuid} site_of_origin={site_of_origin} />
                </div>
            </div>
        </>
    );
}
export default ChatBox