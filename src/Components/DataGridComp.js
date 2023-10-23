import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Card, Chip, Input } from '@mui/joy';
import { TiTickOutline } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlinePrinter } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import DiscardModel from './DiscardModel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/reducers/productsSlice';
import { updateLocalData } from '../redux/reducers/updateProductSlice';

export default function DataGridComp() {
  const [openDialog, setOpenDialog] = React.useState({
    open: false,
    data: {},
  });

  const dispatch = useDispatch();
  const data = useSelector(state => state?.products?.data);
  const status = useSelector(state => state?.products?.status);
  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);
  console.log(data, 'data');

  const handleUpdateData = updatedObject => {
    dispatch(updateLocalData(updatedObject))
      .then(() => {
        console.log('success');
      })
      .catch(error => {
        console.error('Failed to update data:', error);
      });
  };
  const columns = [
    { field: 'productname', headerName: 'Product Name', width: 150 },
    {
      field: 'brand',
      headerName: 'Brand',
      width: 150,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
      editable: true,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'total',
      headerName: 'Total',
      sortable: false,
      width: 160,
      valueGetter: params => `${params.row.total || ''}`,
    },
    {
      field: 'status',
      headerName: 'Status',
      type: 'text',
      width: 220,
      editable: true,
      renderCell: params =>
        params.row.status === 'Approved' ? (
          <Chip color='success' variant='solid'>
            Approved
          </Chip>
        ) : params.row.status === 'Missing-Urgent' ? (
          <Chip color='danger' variant='solid'>
            Missing-Urgent
          </Chip>
        ) : (
          <Chip color='warning' variant='solid'>
            Missing
          </Chip>
        ),
    },
    {
      field: 'Actions',
      headerName: 'Actions',
      type: 'text',
      width: 110,

      renderCell: params => (
        <Box>
          <TiTickOutline
            fontSize='30px'
            color={params.row.status === 'Approved' ? 'green' : ''}
            onClick={() =>
              handleUpdateData({ ...params.row, status: 'Approved' })
            }
            variant='solid'
            cursor='pointer'
          />
          <RxCross2
            fontSize='30px'
            color={
              params.row.status === 'Missing-Urgent'
                ? 'red'
                : params.row.status === 'Missing'
                ? 'orange'
                : ''
            }
            cursor='pointer'
            onClick={() =>
              setOpenDialog({ ...openDialog, open: true, data: params.row })
            }
          />
        </Box>
      ),
    },
  ];
  return (
    <Card
      sx={{
        margin: '0 auto',
        width: 'calc(100% - 500px)',
        padding: '16px',
      }}
    >
      <Box display='flex' justifyContent='space-between' padding='10px'>
        <Box minWidth='500px'>
          <Input
            color='primary'
            size='lg'
            placeholder='search'
            endDecorator={<BsSearch variant='outlined' />}
            variant='outlined'
            sx={{ borderRadius: '20px' }}
          />
        </Box>
        <Box display='flex' alignItems='center'>
          <Button
            sx={{ borderRadius: '20px', mr: 2 }}
            onClick={function () {}}
            size='sm'
            variant='outlined'
          >
            Add Item
          </Button>
          <AiOutlinePrinter fontSize='30px' onClick={function () {}} />
        </Box>
      </Box>
      {data?.products?.length > 0 && (
        <DataGrid
          density='comfortable'
          rows={data.products}
          columns={columns}
          getRowId={params => params.id}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      )}

      <DiscardModel
        open={openDialog.open}
        data={openDialog.data}
        setOpenDialog={setOpenDialog}
        handleUpdateStatus={handleUpdateData}
      />
    </Card>
  );
}
