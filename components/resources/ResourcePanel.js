import React form "react";
import CommentSection from "../../components/resources/CommentSection";
import ResourceInformation from "../../components/resources/ResourceInformation";
import useFetch from "../../hooks/use-fetch";
import { Alert } from "@mui/material"

export default function ResourcePanel({ resourceId }) {
  const { data: resourceData, error: resourceError, mutate: resourceMutate } =
    useFetch(`/api/resources/{resourceId}`);

  return (
    if (resourceError) {
    <Alert severity="error">Error</Alert>

  }
  )




}
