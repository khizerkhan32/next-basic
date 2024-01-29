"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const apple = (items) => {
  alert(items);
};

export default function Home() {
  const [newname, setName] = useState("Khizer");

  const cup = () => {
    alert("are you sure you want to see her name?");
    setName("Khadija");
  };
  const Innercom = () => {
    return <h1>Inner component</h1>;
  };
  const router = useRouter();
  const navigation = (name) => {
    router.push(name);
  };
  return (
    <main className={styles.main}>
      <User name="Khizer" />
      <User name="Komal" />
      <User name="saima" />
      <User name="Hassan" />
      <h1>Home page</h1>
      <button onClick={() => alert("Hellow Next Js")}>Click Me</button>
      <h1>Events, function and state</h1>
      <button onClick={() => apple("Banana")}>
        Find Out Fruit name inside button
      </button>
      <Innercom />

      <h1>change the person {newname}</h1>
      <button onClick={() => cup()}>find out her name</button>
      <div>
        <h1>Basic Routing | making new page</h1>
        <Link href="./login">Go to Login</Link>
        <br />
        <br />
        <Link href="./about">Go to About</Link>
      </div>
      <button onClick={() => router.push("/login")}>Go to Login page</button>
      <br />
      <button onClick={() => navigation("/about")}>Go to About page</button>
      {/* <Link href="./about/aboutcollege">Go to About College</Link>
      <br />
      <Link href="./about/aboutschool">Go to About School</Link> */}
      {/* <button onClick={() => router.push("/login/loginforstudent")}>
        Login for Student
      </button>
      <br />
      <button onClick={() => navigation("/login/loginforteacher")}>
        Login for Teachers
      </button> */}
    </main>
  );
}

const User = (props) => {
  return (
    <div>
      <h1> User name is {props.name}</h1>
    </div>
  );
};
