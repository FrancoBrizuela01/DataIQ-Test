import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
  styled,
} from "@mui/material";
import ModalUser from "./Modal";

const Users = ({ user }) => {
  const [open, setOpen] = useState(false);

  const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 300,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[4],
  }));

  const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "auto",
    marginTop: theme.spacing(2),
  }));

  return (
    <>
      <StyledCard>
        <CardActionArea onClick={() => setOpen(true)}>
          <CardHeader
            avatar={<StyledAvatar alt={user.name} />}
            subheaderTypographyProps={{ color: "primary.contrastText" }}
            title={user.name}
            subheader={user.username}
          />
          <CardContent spacing={2}>
            <Typography
              variant="body2"
              color="primary.contrastText"
              component="p"
            >
              <strong>Email:</strong> {user.email}
            </Typography>
            <Typography
              variant="body2"
              color="primary.contrastText"
              component="p"
            >
              <strong>Ciudad:</strong> {user.address.city}
            </Typography>
            <Typography
              variant="body2"
              color="primary.contrastText"
              component="p"
            >
              <strong>Teléfono:</strong> {user.phone}
            </Typography>
            <Typography
              variant="body2"
              color="primary.contrastText"
              component="p"
            >
              <strong>Empresa:</strong> {user.company.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </StyledCard>

      <ModalUser open={open} handleClose={() => setOpen(false)} user={user} />
    </>
  );
};

export default Users;
