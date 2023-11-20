import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Modal from '@mui/material/Modal';
import * as React from 'react';
import Box from '@mui/material/Box';

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#c7f6b6',
  border: '2px solid #000',
  boxShadow: 24,
  padding: "16px"
  
};
const StyledCard = styled(Card)`
  min-width: 280px;
  height: 340px;
  box-shadow: 4px 4px 20px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const CardHome = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="card">
      <StyledCard raised={true}>
        <CardMedia
          sx={{ height: 200, backgroundSize: "cover" }}
          image={props.img}
          title="content features"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.V1}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.V2}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen}>Learn More</Button>
        </CardActions>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color:"black"}}>
              {props.modalTitle}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, color:"black" }}>
              {props.modalText}
            </Typography>
          </Box>
        </Modal>
      </StyledCard>
    </div>
  );
};

export default CardHome;
