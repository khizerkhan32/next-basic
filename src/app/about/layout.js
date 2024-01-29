import Link from "next/link";
import "./about.css";

export default function layout({ children }) {
  return (
    <div>
      <ul className="login-menu">
        <li>
          <h4>Login Navbar</h4>
        </li>
        <li>
          <Link href="/about">About Main</Link>
        </li>
        <li>
          <Link href="/about/aboutcollege">About College</Link>
        </li>
        <li>
          <Link href="/about/aboutschool">About School</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
