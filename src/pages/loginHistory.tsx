import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import * as React from 'react';
import { useCaseQueryData } from '../utils/use-query-hooks';
// import { getData } from '../utils/http-service'

export default function loginHistory() {
    const {data:userDetailData} = useCaseQueryData("https://citric-banner-411512.uc.r.appspot.com/application/userDetails","user-detail-data")
    
    React.useEffect(()=>{
        console.log(userDetailData);
    },[userDetailData])

    const rows: GridRowsProp = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
    ];

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
    ];

    return (
        <div style={{ height: 350, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    )
}
