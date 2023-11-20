import { Box, List, ListItem, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

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
      border: "1px solid #000"
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
  const [trendingSearches, setTrendingSearches] = useState({});
  useEffect(() => {
    const url = `/api/getStoreKey`;
    const method = "GET";
    const options = {
      method: method,
    };
    console.log("get store key:", url);
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const allData = await response.json();
        console.log(allData);
        setTrendingSearches(allData);
        console.log("response passed");
      } catch (error) {
        console.error(error);
        console.log("response error");
      }
    };
    fetchData();
  }, []);

  const trendingSearchesData = trendingSearches?.["data"];
  const data = trendingSearchesData
    ?.sort((a, b) => b.count - a.count)
    .map((a) => a.searchKey);
  const trending =
    data?.length > 0 ? (data?.length > 5 ? data?.slice(0, 5) : data) : [];

  return (
    <Trending>
      {trending.length > 0 && (
        <>
          <Typography variant="h5" sx={{color:'black'}}>Trending Searches</Typography>
          <List>
            {trending.map((item, index) => (
              <ListItem key={index}>
                <Box>{item}</Box>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Trending>
  );
};

export default TrendingSearches;
