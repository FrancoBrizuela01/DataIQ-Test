import React, { Fragment, useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Fade,
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
  Typography,
  useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Transition = React.forwardRef((props, ref) => (
  <Fade ref={ref} {...props} />
));

const ModalUser = ({ open, handleClose, user }) => {
  const theme = useTheme();

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        maxWidth="sm"
        fullWidth
        TransitionComponent={Transition}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" component="span">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>
              Datos del usuario: <strong>{user.name}</strong>
            </Typography>
          </Box>
        </DialogTitle>

        <DialogContent dividers sx={{ height: "500px" }}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#00D979" }}>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Email" secondary={user.email} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#00D979" }}>
                  <ContactPhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Teléfono" secondary={user.phone} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#00D979" }}>
                  <BusinessIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Empresa" secondary={user.company.name} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#00D979" }}>
                  <LocationOnIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Ciudad" secondary={user.address.city} />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            size="small"
            variant="text"
            sx={{
              textTransform: "none",
              boxShadow: "none",
              fontSize: "22px",
              lineHeight: "24px",
              fontWeight: "500",
              "&:hover": {
                boxShadow: "none",
              },
              borderRadius: "14px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "16px",
                color: "#00D979",
              }}
              color={theme.palette.primary.main}
            >
              Cancelar
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalUser;
