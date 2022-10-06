
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Chat } from '../../../../client/chat/Chat';
import { Utils } from '../../../../client/system/Utils';
import { User, UserTypes } from '../../../../client/user/User';
import { NoteModel } from '../../../../_metronic/helpers';

type Props = {
    id: string
}

const NotesOnUser: React.FC<Props> = ({ id }) => {
    const [endUserId, setEndUserId] = useState<string>("");

    const [note, setNote] = useState<string>("");
    const [userNotes, setUserNotes] = useState<NoteModel[]>([]);

    const history = useHistory();

    useEffect(() => {
        setEndUserId(id);

        User.ListenForUserNotes(id, (notes) => {
            if (notes)
                setUserNotes(notes.reverse());
        })

        let unlisten = history.listen((location, action) => {
            if (User.Model?.userType === UserTypes.TYPE_CHATTER) {
                if (!location.pathname.includes(Chat.CHAT_CHATTER_ROOM)) {
                    User.StopListeningForUserNotes(id);
                }
            }
            unlisten();
        })
    }, [history, id])

    const sendNote = async (e: any) => {
        e.preventDefault();

        if (!note)
            return;


        await User.CreateUserNote(endUserId, note)

        setNote('');
    }

    return (
        <>
            <div id='Notes_User' className='Scrolling-Top'>
                <div className="card card-custom stretch-33 shadow mb-5">
                    <div className="card-header p-5">
                        <h3 className="card-title">Notes On User</h3>
                    </div>
                    <div className="card-body p-5">
                        <div className="form-floating">
                            <textarea className="form-control hight-125 bg-light"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                //onKeyDown={onEnterPress} 
                                placeholder="Leave a comment here"
                                id="floatingTextarea2"></textarea>
                            <label htmlFor="floatingTextarea2">Type Here to take notes</label>
                        </div>
                    </div>
                    <div className="card-footer px-5 py-3">
                        <div className='MoreImages'>
                            <button onClick={sendNote} type="button" className="btn btn-primary w-100" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Tooltip on top">
                                Add Note
                            </button>
                        </div>
                        <div className='scroll-y h-200px mt-5'>
                            {userNotes && userNotes.map((note, index) => {
                                let texts: string[] = note.text.split(/(?:\r\n|\r|\n)/g);

                                return (
                                    <div key={`note${index}`} className='bg-light p-5 mb-3'>
                                        {/* <p className='m-0'>{text}<br />{text}</p> */}
                                        {texts?.map((txt, index) => {
                                            return (
                                                <p key={`text@${Utils.GenerateRandomID()}`} className='m-0'>{txt}</p>
                                            )
                                        })}
                                        <p className='mb-0 my-3'><i className="far fa-calendar-alt"></i> {note.lastUpdated}</p>
                                    </div>
                                );
                            })}
                            {/* <div className='bg-light p-5'>
                            <p className='m-0'>Max likes long walks on the beach. He has six cats and a gambling
                                problem. He lost 3 cats in a poker game last week. He plans to win them
                                back using the last if his 3 cats.</p>
                            <p className='mb-0 my-3'><i className="far fa-calendar-alt"></i> 13-01-2022</p>
                        </div>
                        <div className='bg-light p-5 mt-5'>
                            <p className='m-0'>Max likes long walks on the beach. He has six cats and a gambling
                                problem. He lost 3 cats in a poker game last week. He plans to win them
                                back using the last if his 3 cats.</p>
                            <p className='mb-0 my-3'><i className="far fa-calendar-alt"></i> 13-01-2022</p>
                        </div>
                        <div className='bg-light p-5 mt-5'>
                            <p className='m-0'>Max likes long walks on the beach. He has six cats and a gambling
                                problem. He lost 3 cats in a poker game last week. He plans to win them
                                back using the last if his 3 cats.</p>
                            <p className='mb-0 my-3'><i className="far fa-calendar-alt"></i> 13-01-2022</p>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NotesOnUser