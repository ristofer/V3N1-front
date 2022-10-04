import React from "react";
import { useRouter } from "next/router";
import NewResourceComment from "../../components/resources/NewResourceComment";
import ResourceInformation from '../../components/ResourceInformation';
import { Box, CircularProgress } from "@mui/material";

export default function Resources() {
  const { query, isReady } = useRouter();
  const { resourceId } = query;

  if (!isReady) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <React.StrictMode>
      <ResourceInformation resourceId={resourceId} />
      <NewResourceComment resourceId={resourceId} />
    </React.StrictMode>
  );
}
