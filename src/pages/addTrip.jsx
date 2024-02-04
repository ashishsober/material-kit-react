import React from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

export default function AddTrip() {
    const theme = useTheme();
    
    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    };
    return (
        <div>
            <Box
                sx={{
                    ...bgGradient({
                        color: alpha(theme.palette.background.default, 0.9),
                        imgUrl: '/assets/background/overlay_4.jpg',
                    }),
                    height: 1,
                }}
            >
                <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
                    <Card
                        sx={{
                            p: 5,
                            width: 1,
                            maxWidth: 420,
                        }}
                    >
                        <Stack spacing={3}>
                            <TextField name="trip_no" label="Trip No." />
                            <TextField name="start_date" label="Start Date" />
                            <TextField name="truck_no" label="Truck No." />
                            <TextField name="destination" label="Destination" />
                            <TextField name="total_charges" label="Total Charges" />
                            <TextField name="amt_paid" label="Amount Paid" />
                            <TextField name="expenses" label="Expenses" />
                            <TextField name="trip_status" label="Trip Status" />
                            <input type="file" accept="image/*" capture="camera"/>

                        <LoadingButton
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            color="inherit"
                            onClick={handleClick}
                            >
                            Add Trip
                        </LoadingButton>
                        </Stack>
                    </Card>

                </Stack>
            </Box>
        </div>
    )
}
