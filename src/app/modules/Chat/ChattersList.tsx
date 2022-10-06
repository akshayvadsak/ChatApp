import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { User, UserModel, UserTypes } from '../../../client/user/User';

// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CreateChatter from '../Misc/CreateChatter';


type ChatterRow = {
    id: string,
    Chattersname: string,
    Gender: string,
    Location: string,
    ChatReplies?: string,
    Chattime?: string,
    Revenue?: string,
    Lastlogindate: string
}

const columns: GridColDef[] = [
    { field: 'Chattersname', headerName: 'Chatters name', width: 170, flex: 1 },
    // { field: 'Gender', headerName: 'Gender', width: 100 },
    { field: 'Location', headerName: 'Location', width: 150, flex: 1 },
    // { field: 'ChatReplies', headerName: 'Chat Replies', width: 100 },
    // { field: 'Chattime', headerName: 'Chat time', width: 100 },
    // { field: 'Revenue', headerName: 'Revenue', width: 100 },
    { field: 'Lastlogindate', headerName: 'Last login date', width: 150, flex: 1 },

];

// const rows = [
//     { id: 1, Gender: 'Male', Chattersname: 'Jon', Location: "Philippines" },
//     { id: 2, Gender: 'Female', Chattersname: 'Cersei', },
//     { id: 3, Gender: 'Female', Chattersname: 'Jaime', },
//     { id: 4, Gender: 'Male', Chattersname: 'Arya', },
//     { id: 5, Gender: 'Female', Chattersname: 'Daenerys', },
//     { id: 6, Gender: 'Male', Chattersname: null, },
//     { id: 7, Gender: 'Female', Chattersname: 'Ferrara', },
//     { id: 8, Gender: 'Male', Chattersname: 'Rossini', },
//     { id: 9, Gender: 'Female', Chattersname: 'Harvey', },
// ];

const ChatterList: React.FC = () => {
    const entryLimit = 10;
    const [chatterRows, setChatterRows] = useState<ChatterRow[]>([]);
    const [filteredRows, setFilteredRows] = useState<ChatterRow[]>([]);
    const [searchName, setSearchName] = useState<string>("");

    const [chatterModels, setChatterModels] = useState<UserModel[]>([]);
    const [createChatterModal, setCreateChatterModal] = useState<boolean>(false);

    // const [chatterCount, setChatterCount] = useState<number>(0);
    // const [pagesCount, setPagesCount] = useState<number>(1);
    // const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot<DocumentData>>(null as any);
    // const [paginatedChatterModels, setPaginedChatterModels] = useState<PaginatedUserModels>(null as any)

    const filterByName = () => {
        let newFilter: ChatterRow[] = [];
        if (searchName) {
            chatterRows.forEach((chatter) => {
                if (chatter.Chattersname === searchName)
                    newFilter.push(chatter);
            })
        } else {
            newFilter = [...chatterRows];
        }

        setFilteredRows(newFilter);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 650,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
        borderRadius: '10px'
    };
        
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const deletestyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
        py: 3,
        textAlign: 'center',
        borderRadius: '10px'
    };

    useEffect(() => {
        User.GetAllUsers(UserTypes.TYPE_CHATTER).then((models) => {
            if (models) {
                setChatterModels(models);

                let newChatterRows = [];
                for (let i = 0; i < entryLimit; i++) {
                    if (i >= models.length)
                        continue;

                    let chatter: UserModel = models[i];
                    let lastLoggedIn: any = chatter.lastLoggedIn;
                    let timestamp = lastLoggedIn.toDate();
                    let timeDisplay = timestamp.toLocaleDateString() + " - " + timestamp.toLocaleTimeString();
                    let newRow = {
                        id: chatter.uuid,
                        Chattersname: chatter.displayName,
                        Gender: chatter.gender,
                        Location: chatter.country,
                        Lastlogindate: timeDisplay
                    }

                    newChatterRows.push(newRow);
                }

                setChatterRows(newChatterRows);
                setFilteredRows(newChatterRows);
            }
        })
    }, [])

    // useEffect(() => {
    //     Count.GetCount(CountTypes.CHATTER).then((count) => {
    //         setChatterCount(count);

    //         let pages: number = Math.ceil(count / entryLimit);
    //         setPagesCount(pages);

    //         console.log(`Pages: ${pages}`);
    //         User.GetChattersPaginated(lastVisible, 10).then((paginatedModel) => {
    //             if (paginatedModel) {
    //                 setPaginedChatterModels(paginatedModel);

    //                 let newChatterRows = [];
    //                 console.log(`Paginated User Models Length: ${paginatedModel.userModels.length}`);
    //                 for (let i = 0; i < entryLimit; i++)
    //                 {
    //                     if (i >= paginatedModel.userModels.length)
    //                         continue;

    //                     let chatter: UserModel = paginatedModel.userModels[i];
    //                     console.log(`Chatter Id: ${chatter.uuid}`);
    //                     let lastLoggedIn: any = chatter.lastLoggedIn;
    //                     let timestamp = lastLoggedIn.toDate();
    //                     let timeDisplay = timestamp.toLocaleDateString() + " - " + timestamp.toLocaleTimeString();
    //                     let newRow = {
    //                         id: chatter.uuid,
    //                         Chattersname: chatter.displayName,
    //                         Gender: chatter.gender,
    //                         Location: chatter.country,
    //                         Lastlogindate: timeDisplay
    //                     }

    //                     newChatterRows.push(newRow);
    //                 }

    //                 setChatterRows(newChatterRows);
    //                 console.log(`Chatter Rows: ${newChatterRows.length}`);
    //             }
    //         })
    //     });
    // }, [entryLimit, lastVisible])

    const [CreateChatterOpen, setCreateChatterOpen] = React.useState(false);
    const [deleteChatterOpen, setDeleteChatterOpen] = React.useState(false);

    const handleCreateChatterOpen = () => setCreateChatterOpen(true);
    const handleCreateChatterClose = () => setCreateChatterOpen(false);

    const handleDeleteChatterOpen = () => setDeleteChatterOpen(true);
    const handleDeleteChatterClose = () => setDeleteChatterOpen(false);


    return (
        <>
            {/* <Button variant="contained">Hello World</Button> */}
            <div className={`card`}>
                
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bolder fs-3 mb-1'>Chatter List</span>
                    </h3>
                </div>

                


                <div className="card-body p-10">
                <div className='row justify-content-end mb-8'>
                    <div className='col-lg-2'>
                        <button className="btn btn-dark h-60px w-100" type="button" onClick={() => setCreateChatterOpen(true)} >Create Chatter</button>
                    </div>
                    <div className='col-lg-2'>
                        <button className="btn btn-danger h-60px w-100" type="button" onClick={() => setDeleteChatterOpen(true)} >Delete Chatter</button>
                
                </div>
                  </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className="form-group mb-7 ghm">
                                <div className="input-group">
                                    <input type="text" className="form-control form-control-solid h-60px ps-8" value={searchName} onChange={(e) => { setSearchName(e.target.value) }} placeholder="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-secondary bg-light customrounds h-60px" type="button" onClick={filterByName}><img alt='Pic' src='/media/svg/search_black_24dp.svg' /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3'>
                            <div className="form-group mb-7 ghm">
                                <div className="input-group">
                                    <input type="date" className="form-control form-control-solid h-60px ps-8" />
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3'>
                            <select className="form-select form-select-solid h-60px" aria-label="Select example">
                                <option>Filtered by time</option>
                                <option value="1">24 hours</option>
                                <option value="2">Last 7 days</option>
                                <option value="3">Last Month</option>
                                <option value="3">This Year</option>
                            </select>
                        </div>

                        <div className='col-lg-2'>
                            <button className="btn btn-dark h-60px w-100" type="button">Filter</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div style={{ height: 500, width: '100%' }}>
                                <DataGrid
                                sx={{width: "100%"}}
                                    rows={filteredRows}
                                    columns={columns}
                                    pageSize={entryLimit}
                                    rowsPerPageOptions={[5]}
                                    checkboxSelection
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <CreateChatter/>
                        </Box>
                    </Modal>
                </div>
            </div>
            {/* // Create Chatter Modal */}
            <div>
                <Modal
                    open={CreateChatterOpen}
                    onClose={handleCreateChatterClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <CreateChatter />
                    </Box>
                </Modal>
            </div>
            {/* //Delete Chatter Modal */}
            <div>
                <Modal
                    open={deleteChatterOpen}
                    onClose={handleDeleteChatterClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={deletestyle}>
                        <Box>
                        <Typography id="modal-modal-title" variant="h5" component="h5">
                            Are you sure ?
                        </Typography>
                        <Typography variant="body1" component="p">You want to delete</Typography>
                        </Box>
                       
                       <Box sx={{display: 'flex', gap: '15px', justifyContent: 'center', mt: 2}}>
                       <Button variant="contained" color="error">Yes</Button>
                        <Button variant="outlined" color="error">No</Button>
                       </Box>
                        
                    </Box>
                </Modal>
            </div>
        </>
    );
}

export default ChatterList