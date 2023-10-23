import * as React from 'react';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
import { Card, Divider, Stack } from '@mui/joy';

const OrderDetailsCard = () => {
  return (
    <Card
      sx={{
        margin: '0 auto',
        width: 'calc(100% - 500px)',
        padding: '16px',
        mb: 2,
      }}
    >
      <Grid container md={12} minHeight='130px'>
        <Grid xs={12} sm={6} md={2} padding='10px'>
          <Typography variant='plain' level='h6'>
            Supplier
          </Typography>
          <Typography variant='plain' level='h4'>
            Haroon Nisar
          </Typography>
        </Grid>
        <Divider orientation='vertical' />
        <Grid xs={12} sm={6} md={2} padding='10px'>
          <Typography variant='plain' level='h6'>
            Shipping Date
          </Typography>
          <Typography variant='plain' level='h4'>
            21/02/23{' '}
          </Typography>
        </Grid>
        <Divider orientation='vertical' />
        <Grid xs={12} sm={6} md={2} padding='10px'>
          <Typography variant='plain' level='h6'>
            Total
          </Typography>
          <Typography variant='plain' level='h4'>
            1299$
          </Typography>
        </Grid>
        <Divider orientation='vertical' />
        <Grid xs={12} sm={6} md={2} padding='10px'>
          <Typography variant='plain' level='h6'>
            Category
          </Typography>
          <Typography variant='plain' level='h4'>
            Grocery
          </Typography>
        </Grid>
        <Divider orientation='vertical' />
        <Grid xs={12} sm={6} md={2} padding='10px'>
          <Typography variant='plain' level='h6'>
            Department
          </Typography>
          <Typography variant='plain' level='h4'>
            Grocery
          </Typography>
        </Grid>
        <Divider orientation='vertical' />
        <Grid sx={{ padding: '10px' }}>
          <Typography variant='plain' level='h6'>
            Status
          </Typography>
          <Typography variant='plain' level='h4'>
            pending
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default OrderDetailsCard;
