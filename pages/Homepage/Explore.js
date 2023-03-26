import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { styled, alpha } from "@mui/material/styles";
import StyledInputBase from "@mui/material/InputBase";
import TrendingSearches from "./TrendingSearches";
import GoogleReCAPTCHA from "react-google-recaptcha";

const Explore = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 25,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: isSmallScreen ? "90%" : "70%",
    maxWidth: 600,
    margin: "0 auto",
    "& .MuiInputBase-input": {
      color: "#fff",
      padding: isSmallScreen ? "20px 100px 20px 50px" : "20px 300px 20px 60px",
      fontSize: 24,
      borderRadius: 25,
      width: "100%",
      "&::placeholder": {
        color: "#fff",
        opacity: 1,
      },
    },
    "& .MuiInputBase-root": {
      border: "2px solid #fff",
      borderRadius: 25,
    },
    "& .MuiInputBase-root:hover": {
      borderColor: "#fff",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: isSmallScreen ? theme.spacing(1, 2) : theme.spacing(1, 3),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "2rem",
  }));

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
              color: "#fff",
              marginTop: isSmallScreen ? "20px" : "80px",
            }}
          >
            Explore Anything
          </Typography>
          <Typography
            align="center"
            variant="body1"
            sx={{ fontWeight: 100, color: "#fff", marginTop: "20px" }}
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
          <Search>
            <SearchIconWrapper>
              <SearchOutlinedIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop:"5px"
          }}
        >
          <GoogleReCAPTCHA
            sitekey="6LctTzIlAAAAAO08LTESYytRMgRX4vYS3gv5M_iI"
            onChange={(value) => console.log(value)}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TrendingSearches />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Explore;
