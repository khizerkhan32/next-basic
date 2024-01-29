"use client";
import Link from "next/link";

export default function notfound() {
  return (
    <div>
      <h1>This page is not Found</h1>
      <Link href="/">Go To home</Link>
    </div>
  );
}
