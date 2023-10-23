import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
} from '@mui/joy';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
  return (
    <div>
      <Box
        style={{
          height: '55px',
          backgroundColor: '#005c29',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Typography color='white' level='h2'>
            RECCO
          </Typography>
          <ul>Store</ul>
          <ul>Order</ul>
          <ul>Analytics</ul>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <ul>james</ul>
          <ul>
            <AiOutlineShoppingCart />
          </ul>
        </div>
      </Box>
      <Card variant='solid' color='white' sx={{ mb: 2 }}>
        <Box sx={{ ml: '310px' }}>
          <Breadcrumbs separator='›' aria-label='breadcrumbs'>
            <Link textColor='inherit' href='/'>
              Orders
            </Link>

            <Link textColor='inherit' href='#usage-with-link-and-typography'>
              7152ADE
            </Link>
          </Breadcrumbs>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            height: '90px',
          }}
        >
          <Box>
            <Typography variant='plain' level='h4'>
              Order Number 7152ADE
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{ borderRadius: '20px', mr: 2 }}
              onClick={function () {}}
              size='sm'
              variant='outlined'
            >
              Back
            </Button>
            <Button
              sx={{ backgroundColor: '#005c29', borderRadius: '20px' }}
              disabled={false}
              onClick={function () {}}
              size='sm'
              variant='solid'
            >
              Approve Order
            </Button>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default Header;
