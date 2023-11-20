import React from "react";
import { Box } from "@mui/system";
import GoogleReCAPTCHA from "react-google-recaptcha";

const GoogleRecaptcha = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "5px",
      }}
    >
      <GoogleReCAPTCHA
        sitekey="6LctTzIlAAAAAO08LTESYytRMgRX4vYS3gv5M_iI"
        onChange={(value) => console.log(value)}
      />
    </Box>
  );
};

export default GoogleRecaptcha;
