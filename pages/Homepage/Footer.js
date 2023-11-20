import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [iconHovered, setIconHovered] = useState(null);

  const handleIconHover = (iconName) => {
    setIconHovered(iconName);
  };

  const handleIconHoverExit = () => {
    setIconHovered(null);
  };

  return (
    <div
      className="footer"
      style={{
        backgroundColor: "#444444",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        style={{ padding: "50px" }}
      >
        {/* Column 1 */}
        <Grid
          item
          lg={3}
          md={12}
          sm={12}
          xs={12}
          style={{ borderRight: "1px solid #ffffff", paddingRight: "20px" }}
        >
          <Typography variant="h6" style={{ color: "#ffffff", marginBottom: "10px" }}>
            We manage your content
          </Typography>
          <ul
            className="social-icons"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              listStyleType: "none",
            }}
          >
            <li
              style={{
                width: "10%",
                color: iconHovered === "facebook" ? "#333333" : "#ffffff",
                transition: "color 0.3s ease-in-out",
              }}
              onMouseEnter={() => handleIconHover("facebook")}
              onMouseLeave={handleIconHoverExit}
            >
              <Link href="https://www.facebook.com/EnlearAcademy?mibextid=ZbWKwL">
                <FacebookIcon />
              </Link>
            </li>
            <li
              style={{
                width: "10%",
                color: iconHovered === "linkedin" ? "#333333" : "#ffffff",
                transition: "color 0.3s ease-in-out",
              }}
              onMouseEnter={() => handleIconHover("linkedin")}
              onMouseLeave={handleIconHoverExit}
            >
              <Link href="https://www.linkedin.com/company/writergate/">
                <LinkedInIcon />
              </Link>
            </li>
          </ul>
        </Grid>

        {/* Column 2 */}
        <Grid
          item
          lg={3}
          md={12}
          sm={12}
          xs={12}
          style={{ borderRight: "1px solid #ffffff", paddingRight: "20px" }}
        >
          <Typography variant="h5" style={{ color: "#ffffff", marginBottom: "10px" }}>
            Company
          </Typography>
          <Typography variant="h6" style={{ color: "#ffffff", marginBottom: "5px" }}>
            <Link href="/">Home</Link>
          </Typography>
          <Typography variant="h6" style={{ color: "#ffffff", marginBottom: "5px" }}>
            <Link href="/use-case">Articles</Link>
          </Typography>
          <Typography variant="h6" style={{ color: "#ffffff", marginBottom: "5px" }}>
            <Link href="/about-us">contact Us</Link>
          </Typography>
        </Grid>

        {/* Column 3 */}
        <Grid item lg={3} md={12} sm={12} xs={12}>
          <Typography variant="h5" style={{ color: "#ffffff", marginBottom: "10px" }}>
            Contact with us
          </Typography>
          <Typography variant="h6" style={{ color: "#ffffff", marginBottom: "5px" }}>
            <DraftsOutlinedIcon style={{ marginRight: "5px", verticalAlign: "middle" }} />
            WriterGate@gmail.com
          </Typography>
          <Typography variant="h6" style={{ color: "#ffffff", marginBottom: "5px" }}>
            <LocalPhoneIcon style={{ marginRight: "5px", verticalAlign: "middle" }} />
            +94 71 136 9999
          </Typography>
        </Grid>
      </Grid>

      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ padding: "20px 0" }}>
        <hr style={{ width: "100%", borderTop: "1px solid #ffffff" }} />
      </Grid>

      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Typography style={{ color: "#ffffff", margin: "10px 0" }}>
          © 2023 Writergate. All rights reserved.
        </Typography>
      </Grid>
    </div>
  );
};

export default Footer;
