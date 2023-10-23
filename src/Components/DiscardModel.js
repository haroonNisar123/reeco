import React from 'react';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Modal,
  ModalClose,
  ModalDialog,
} from '@mui/joy';
const DiscardModel = ({ open, setOpenDialog, handleUpdateStatus, data }) => {
  return (
    <Modal open={open} onClose={() => setOpenDialog({ ...open, open: false })}>
      <ModalDialog variant='outlined'>
        <ModalClose />
        <DialogTitle>Missing Product</DialogTitle>
        <DialogContent>
          Is this {data?.productname} Missing urgent.
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ borderRadius: '20px', mr: 2 }}
            onClick={() => {
              handleUpdateStatus({ ...data, status: 'Missing-Urgent' });
              setOpenDialog({ ...open, open: false });
            }}
            size='sm'
            variant='outlined'
          >
            Yes
          </Button>
          <Button
            sx={{ borderRadius: '20px', mr: 2 }}
            onClick={() => {
              handleUpdateStatus('Missing');
              setOpenDialog({ ...open, open: false });
            }}
            size='sm'
            variant='outlined'
          >
            No
          </Button>
        </DialogActions>
      </ModalDialog>
    </Modal>
  );
};

export default DiscardModel;
