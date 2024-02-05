import PropTypes from 'prop-types';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import { green } from '@mui/material/colors';
// import { useRouter } from 'src/routes/hooks';
import Badge from '@mui/material/Badge';
import Skeleton from '@mui/material/Skeleton';
import { useRouter } from '../../routes/hooks';
// ----------------------------------------------------------------------
const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR"
});
export default function TripWidgetSummary({ destination, totalCharges, trip_no, truck_no, amt_paid, total_expenses, start_date, icon, trip_status, color, sx, ...other }:
  {destination:any,totalCharges:any,trip_no:any,truck_no:any,amt_paid:any,total_expenses:any,start_date:any,icon:any,trip_status:any,color:any,sx:any}) {
  const [success, setSuccess] = React.useState(false);
  const router = useRouter();
  const handleClick = () => {
    router.push('/addTrip');
  };

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[500],
      },
    }),
  };

  return (
    <Card
      component={Stack}
      spacing={3}
      direction="column"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Box alignItems="center">
          <Fab
            aria-label="save"
            sx={buttonSx}
            onClick={handleClick}
          >{trip_no}
          </Fab>
        </Box>
        <Stack spacing={0.1} style={{ marginLeft: '12px' ,paddingRight:'12px',borderRight:'2px solid black'}}>
          <Typography variant="h4">{truck_no}</Typography>
          <Typography variant="h4">{destination}</Typography>
          <Typography variant="subtitle2">{start_date}</Typography>
        </Stack>
        <Stack spacing={0.1} style={{ marginLeft: '12px' }}>
           <Typography variant="h4">P/L</Typography>
           <span style={{backgroundColor:'green', color:'white',padding:'16px', borderRadius:'14px'}}>767</span>
        </Stack>
      </div>
      <hr style={{ marginTop: "6px" }} />
      <Stack spacing={0.5} style={{ marginTop: '12px' }}>
        <Typography variant="h4">{currencyFormat.format(totalCharges)}</Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          Paid : {currencyFormat.format(amt_paid)}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          Total Exp : {currencyFormat.format(total_expenses)}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          Trip Status : {trip_status}
        </Typography>
      </Stack>
    </Card>
  );
}

// TripWidgetSummary.propTypes = {
//   color: PropTypes.string,
//   icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
//   sx: PropTypes.object,
//   destination: PropTypes.string,
//   totalCharges: PropTypes.number,
//   trip_no: PropTypes.number,
//   amt_paid: PropTypes.number,
//   truck_no: PropTypes.number,
//   total_expenses: PropTypes.number,
//   trip_status: PropTypes.string,
//   start_date: PropTypes.string
// };
