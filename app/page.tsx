'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/pages/homepage");
  }, [router]);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
