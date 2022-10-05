import React from "react";
import { useRouter } from "next/router";
import CommentSection from "../../components/resources/CommentSection";
import Loader from "../../components/common/Loader";
import ResourceInformation from "../../components/resources/ResourceInformation";

export default function Resources() {
  const { query, isReady } = useRouter();
  if (!isReady) return <Loader />;

  const { resourceId } = query;
  return (
    <React.StrictMode>
      <ResourceInformation resourceId={resourceId} />
      <CommentSection resourceId={resourceId} />
    </React.StrictMode>
  );
}
