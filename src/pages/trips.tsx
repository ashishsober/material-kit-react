import * as React from 'react';
import { Helmet } from 'react-helmet-async';


import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
// import TripWidgetSummary from '../sections/overview/app-trip-widget';
import { useRouter } from '../routes/hooks';
import Iconify from '../components/iconify';

export default function Trips() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/addTrip');
    };


    return (
        <>
            <Helmet>
                <title> Trips | Minimal UI </title>
            </Helmet>
            <Container maxWidth="xl">
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>

                    <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleClick}>
                        Add Trip
                    </Button>
                </Stack>
            </Container>
        </>
    )
}
