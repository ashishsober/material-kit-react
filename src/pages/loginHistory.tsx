import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import LoadingIndicator from '../components/loadingIndicator/LoadingIndicator';
import { useCaseQueryData } from '../utils/use-query-hooks';
// import { getData } from '../utils/http-service'

export default function loginHistory() {
    const { data: userDetailData } = useCaseQueryData("https://citric-banner-411512.uc.r.appspot.com/application/userDetails", "user-detail-data")

    React.useEffect(() => {
        console.log(userDetailData);
    }, [userDetailData])

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150, flex: 1 ,sortable:true},
        { field: 'emailid', headerName: 'Email ID', width: 150, flex: 2 ,sortable:true},
        { field: 'discription', headerName: 'Description', width: 150, flex: 2 ,sortable:true},
        { field: 'profileImage', headerName: 'ProfileImage', width: 150, flex: 2 ,sortable:true},
        { field: 'position', headerName: 'Position', width: 150, flex: 2 ,sortable:true},

    ];

    return (
        <>{
            userDetailData ? (
            <div style={{ height: 350, width: '100%' }}>
                <DataGrid rows={userDetailData} columns={columns} />
            </div>
        ) : <LoadingIndicator/>
        }
        </>
    )
}
