"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

export default function layout({ children }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      {pathName !== "/login/loginforteacher" ? (
        <ul className="login-menu">
          <li>
            <h4>Login Navbar</h4>
          </li>
          <li>
            <Link href="/login">Login Main</Link>
          </li>
          <li>
            <Link href="/login/loginforstudent">Login students</Link>
          </li>
          <li>
            <Link href="/login/loginforteacher">Login Teachers</Link>
          </li>
        </ul>
      ) : (
        <Link href="/login">Go to Main Login</Link>
      )}
      {children}
    </div>
  );
}
