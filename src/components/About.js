import * as React from "react";
import { Container } from "@material-ui/core";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function About() {
  return (
    <Container className="mt-5 mb-5">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item></Item>
          </Grid>
          <Grid item xs={6}>
            <Item></Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
