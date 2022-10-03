import React from "react";
import { useRouter } from "next/router";
import NewResourceComment from "../../components/resources/NewResourceComment";
import ResourceInformation from '../../components/ResourceInformation';

export default function Resources() {
  const { query, isReady } = useRouter();
  const { resourceId } = query;

  if (!isReady) {
    return <div>Loading...</div>
  }

  return (
    <React.StrictMode>
      <ResourceInformation resourceId={resourceId} />
      <NewResourceComment resourceId={resourceId} />
    </React.StrictMode>
  );
}
