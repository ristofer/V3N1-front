import React from "react";
import { useRouter } from "next/router";
import NewResourceComment from "../components/NewResourceComment";

export default function Resources() {
  const router = useRouter();
  const { resourceId } = router.query;

  return (
    <React.StrictMode>
      <NewResourceComment resourceId={resourceId} />
    </React.StrictMode>
  );
}
