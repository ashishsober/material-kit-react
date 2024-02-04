import React from 'react'
import { Helmet } from 'react-helmet-async';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';
import Button from '@mui/material/Button';
import Iconify from 'src/components/iconify';
import { useRouter } from 'src/routes/hooks';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TripWidgetSummary from '../sections/overview/app-trip-widget';

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
                <Grid container spacing={3}>
                    <Grid xs={12} sm={6} md={3}>
                        <TripWidgetSummary
                            destination="Mumbai"
                            totalCharges={2000}
                            trip_no={18}
                            amt_paid={500}
                            total_expenses={1300}
                            color="error"
                            truck_no={1197}
                            trip_status="in-progress"
                            start_date="24-01-2024"
                            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
                        /> 
                    </Grid>
                    <Grid xs={12} sm={6} md={3}>
                        <TripWidgetSummary
                            destination="Ahmedabad"
                            totalCharges={5000}
                            trip_no={17}
                            amt_paid={500}
                            total_expenses={1300}
                            color="error"
                            truck_no={1197}
                            trip_status="in-progress"
                            start_date="23-01-2024"
                            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
                        /> 
                    </Grid>
                    <Grid xs={12} sm={6} md={3}>
                        <TripWidgetSummary
                            destination="Ahmedabad"
                            totalCharges={5000}
                            trip_no={16}
                            amt_paid={500}
                            total_expenses={1300}
                            color="success"
                            truck_no={1197}
                            trip_status="completed"
                            start_date="217-01-2024"
                            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
                        /> 
                    </Grid>
                </Grid>
                
            </Container>
        </>
    )
}
