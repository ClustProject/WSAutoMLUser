import React from "react";

import { Typography } from "@mui/material";

export default function MainLogo() {
  return (
    <Typography
      variant='h4'
      sx={{
        fontWeight: "bold",
        margin: "20px",
        width: "100%",
        flexGrow: 1,
      }}
    >
      WS-AutoML
    </Typography>
  );
}
