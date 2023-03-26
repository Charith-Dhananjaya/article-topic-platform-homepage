import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Tabs, Tab, Button, useTheme } from "@mui/material";
import DrawerComp from "./DrawerComp";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

const PAGES = ["HOME", "ARTICLES", "TOPICS", "CONTACT US"];

const NavBar = () => {
  const [value, setValue] = useState();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#fff", padding: "8px", position: "static" }}>
        <Toolbar>
          <Typography style={{ cursor: "pointer", color: "grey" }}>Writergate</Typography>
          {isMatch ? (
            <DrawerComp />
          ) : (
            <>
              <Tabs sx={{ margin: "auto", color: "#000000" }} value={value} onChange={(value) => setValue(value)}>
                {PAGES.map((page, index) => (
                  <Link key={index} href={`/${page.toLowerCase()}`} passHref>
                    <Tab label={page} />
                  </Link>
                 
                ))}
              </Tabs>
              <Link href="/signin" passHref>
                <Button sx={{ marginLeft: "auto", background: "#da8ee7", color: "#000000" }} variant="outlined">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" passHref>
                <Button sx={{ marginLeft: "10px", background: "#da8ee7", color: "#000000" }} variant="outlined">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
