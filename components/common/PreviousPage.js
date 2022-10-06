import { useRouter } from "next/router";

export default function PreviousPage({ goBackText }) {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      {goBackText}
    </button>
  );
}
