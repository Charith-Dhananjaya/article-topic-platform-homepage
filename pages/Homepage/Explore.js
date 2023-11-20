import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import SearchBar from "./searchBar";
import TrendingSearches from "./TrendingSearches";

const Explore = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100vw",
          height: "80vh",
          "& video": {
            position: "absolute",
            top: "50%",
            left: "50%",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          },
        }}
      >
        <video autoPlay muted loop>
          <source src={`/asset/backgroundvideo.mp4`} type="video/mp4" />
        </video>
        <Box>
          <Typography
            align="center"
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#000",
              marginTop: isSmallScreen ? "10px" : "40px",
            }}
          >
            Explore Anything
          </Typography>
          <Typography
            align="center"
            variant="h5"
            sx={{ fontWeight: 400, color: "#000", marginTop: "20px" }}
          >
            More Than Just Searching
          </Typography>
          
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: isSmallScreen ? "20px" : "50px",
          }}
        >
          <SearchBar isSmallScreen={isSmallScreen} />
        </Box>
        
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: isSmallScreen ? "20px" : "50px",
          }}>
          <TrendingSearches />
          </Box>
        
        
      </Box>
    </React.Fragment>
  );
};

export default Explore;
