import React, { } from 'react'

type Props = {
    className: string
}

const UserList: React.FC<Props> = ({ className }) => {

    return (
        <>
            <div className={`card ${className}`}>
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bolder fs-3 mb-1'>Users List</span>
                    </h3>
                </div>

                <div className='card-body py-3'>
                    <div className='row'>
                        <div className='col-lg-12 UserList'>
                            <div className='user-list-overview'>
                                <div className='list-profile'>
                                    <div className='user-img'>
                                        <img src='media/avatars/150-1.jpg' alt="Pic" />
                                    </div>
                                    <h2 className='UserName'>Melody Macy</h2>
                                </div>

                                <a href="#" className="btn btn-primary btn-sm">View</a>
                            </div>

                            <div className='user-list-overview'>
                                <div className='list-profile'>
                                    <div className='user-img'>
                                        <img src='media/avatars/150-2.jpg' alt="Pic" />
                                    </div>
                                    <h2 className='UserName'>Max Smith</h2>
                                </div>

                                <a href="#" className="btn btn-primary btn-sm">View</a>
                            </div>

                            <div className='user-list-overview'>
                                <div className='list-profile'>
                                    <div className='user-img'>
                                        <img src='media/avatars/150-15.jpg' alt="Pic" />
                                    </div>
                                    <h2 className='UserName'>Brian Cox</h2>
                                </div>

                                <a href="#" className="btn btn-primary btn-sm">View</a>
                            </div>

                            <div className='user-list-overview'>
                                <div className='list-profile'>
                                    <div className='user-img'>
                                        <img src='media/avatars/150-4.jpg' alt="Pic" />
                                    </div>
                                    <h2 className='UserName'>Sean Bean</h2>
                                </div>

                                <a href="#" className="btn btn-primary btn-sm">View</a>
                            </div>

                            <div className='user-list-overview'>
                                <div className='list-profile'>
                                    <div className='user-img'>
                                        <img src='media/avatars/150-5.jpg' alt="Pic" />
                                    </div>
                                    <h2 className='UserName'>Mikaela Collins</h2>
                                </div>

                                <a href="#" className="btn btn-primary btn-sm">View</a>
                            </div>

                            <div className='user-list-overview'>
                                <div className='list-profile'>
                                    <div className='user-img'>
                                        <img src='media/avatars/150-8.jpg' alt="Pic" />
                                    </div>
                                    <h2 className='UserName'>Fransic Mitcham</h2>
                                </div>

                                <a href="#" className="btn btn-primary btn-sm">View</a>
                            </div>

                            <div className='user-list-overview'>
                                <div className='list-profile'>
                                    <div className='user-img'>
                                        <img src='media/avatars/150-7.jpg' alt="Pic" />
                                    </div>
                                    <h2 className='UserName'>olivia Wild</h2>
                                </div>

                                <a href="#" className="btn btn-primary btn-sm">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UserList