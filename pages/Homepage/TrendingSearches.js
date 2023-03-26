import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { styled, alpha } from "@mui/material/styles";

const Trending = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "20px",
  padding: "10px",
  marginTop: "80px",
  "& h5": {
    fontWeight: 700,
    fontSize: "18px",
    marginRight: "10px",
  },
  "& ul": {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    margin: 0,
  },
  "& li": {
    padding: "10px",
    border: "1px solid #f2f2f2",
    borderRadius: "20px",
    marginRight: "20px",
    "&:last-child": {
      marginRight: 0,
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    "& ul": {
      flexDirection: "column",
    },
    "& li": {
      margin: "10px 0",
      marginRight: 0,
    },
  },
}));

const TrendingSearches = () => {
  const trending = ["React", "JavaScript", "Node.js", "GraphQL", "Material UI"];

  return (
    <Trending>
      <Typography variant="h5">Trending Searches</Typography>
      <List>
        {trending.map((item, index) => (
          <ListItem key={index}>
            <Box>{item}</Box>
          </ListItem>
        ))}
      </List>
    </Trending>
  );
};

export default TrendingSearches;
