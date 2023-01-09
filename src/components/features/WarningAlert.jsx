import CloseIcon from '@mui/icons-material/Close';
import { Collapse, Alert, IconButton } from '@mui/material';

const WarningAlert = ({ open, setOpen, message }) => {
  return (
    <Collapse
      in={open}
      style={{
        position: 'fixed',
        bottom: 0,
        left: window.screen.width >= 600 ? 36 : 18,
        zIndex: 1000,
        width:
          window.screen.width >= 600
            ? window.screen.width - 72
            : window.screen.width - 36,
      }}
    >
      <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {message}
      </Alert>
    </Collapse>
  );
};

export default WarningAlert;
