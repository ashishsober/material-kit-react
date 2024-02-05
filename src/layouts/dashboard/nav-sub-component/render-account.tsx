import { alpha, Avatar, Box, Typography } from '@mui/material'
import * as React from 'react'
import { account } from '../../../_mock/account'

export default function renderAccount() {
    return (
        <div>
            <Box
            sx={{
                my: 3,
                mx: 2.5,
                py: 2,
                px: 2.5,
                display: 'flex',
                borderRadius: 1.5,
                alignItems: 'center',
                bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
            }}
        >
            <Avatar src={account.photoURL} alt="photoURL" />

            <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle2">{account.displayName}</Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {account.role}
                </Typography>
            </Box>
        </Box>
        </div>
    )
}
