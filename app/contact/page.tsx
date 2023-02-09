'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  return (
    <div>
      <h1>Contact</h1>
      <Link href="/">Home</Link>
      <button onClick={() => router.push("/")}>Home</button>
    </div>
  );
}
