import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  styled,
  Grid,
} from "@mui/material";
import ModalUser from "./Modal";

const CardsUsers = ({ user }) => {
  const [open, setOpen] = useState(false);

  const StyledCard = styled(Card)(({ theme }) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[4],
  }));

  const getRandomColor = () => {
    const colors = [
      "#F44336",
      "#E91E63",
      "#9C27B0",
      "#673AB7",
      "#3F51B5",
      "#2196F3",
      "#03A9F4",
      "#00BCD4",
      "#009688",
      "#4CAF50",
      "#8BC34A",
      "#CDDC39",
      "#FFEB3B",
      "#FFC107",
      "#FF9800",
      "#FF5722",
      "#795548",
      "#9E9E9E",
      "#607D8B",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "auto",
    marginTop: theme.spacing(2),
    backgroundColor: getRandomColor(),
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
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  color="primary.contrastText"
                  component="p"
                >
                  <strong>Email:</strong> {user.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  color="primary.contrastText"
                  component="p"
                >
                  <strong>Teléfono:</strong> {user.phone}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" onClick={() => setOpen(true)}>
            Ver más
          </Button>
        </CardActions>
      </StyledCard>

      <ModalUser open={open} handleClose={() => setOpen(false)} user={user} />
    </>
  );
};

export default CardsUsers;
