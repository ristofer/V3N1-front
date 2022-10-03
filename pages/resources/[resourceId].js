import React from 'react';
import NewResourceComment from '../components/NewResourceComment';
import { useRouter } from 'next/router';

export default function resources() {
  const router = useRouter();
  const { resourceId } = router.query;

  return(
    <React.StrictMode>
      <NewResourceComment resourceId={resourceId} />
    </React.StrictMode>
  );
};
