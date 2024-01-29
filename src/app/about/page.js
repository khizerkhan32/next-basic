"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const about = () => {
  const router = useRouter();
  const navigation = (name) => {
    router.push(name);
  };
  return (
    <main>
       <h1 className="heading">About page</h1>
      <Link href="/">Go to Home</Link>
      <button onClick={() => router.push("/")}>Go to home</button>
      <br />
      <button onClick={() => navigation("/login")}>Go to Login</button>
    </main>
  );
};

export default about;
