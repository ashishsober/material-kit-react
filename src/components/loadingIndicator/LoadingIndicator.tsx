import * as React from 'react'
import { Box, CircularProgress } from '@mui/material'
import "./loader.scss"

export default function LoadingIndicator() {
    return (
        <Box sx={{ display: 'flex' }} className='loader-comp'>
            <CircularProgress color="secondary"/>
        </Box>
    )
}
