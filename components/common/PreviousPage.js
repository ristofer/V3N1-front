import { useRouter } from "next/router";
import { Button } from "@mui/material";

export default function PreviousPage({ goBackText }) {
  const router = useRouter();

  return (
    <Button variant="outlined" onClick={() => router.back()}>
      {goBackText}
    </Button>
  );
}
