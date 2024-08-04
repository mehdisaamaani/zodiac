import { Box, Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";

const BaseLayouts: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      width="100%"
      sx={{ backgroundColor: { xs: "white", md: "lightgray" } }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "480px" },
          minHeight: "100svh",
          overflow: "hidden",
          boxShadow: 1,
        }}
      >
        {children}
      </Box>
    </Stack>
  );
};

export default BaseLayouts;
