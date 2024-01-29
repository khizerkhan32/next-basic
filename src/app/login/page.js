"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const login = () => {
  const router = useRouter();
  const navigation = (name) => {
    router.push(name);
  };
  return (
    <main>
      <h1 className="heading">Login Page</h1>
      <Link href="/">Go To home</Link>

      <button onClick={() => router.push("/")}>Go to home</button>
      <br />
      <button onClick={() => navigation("/about")}>Go to About</button>
      <br />
      <button onClick={() => navigation("/login/loginforstudent")}>
        Login for student
      </button>
      <br />
      <button onClick={() => navigation("/login/loginforteacher")}>
        Login for Teacher
      </button>
    </main>
  );
};

export default login;
