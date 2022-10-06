import { useRouter } from "next/router";

export default function PreviousPage({ textButton }) {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      {textButton}
    </button>
  );
}
