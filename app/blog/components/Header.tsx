"use client";
import styles from "./page.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Header = () => {
  // Get the router object
  const router = useRouter();
  // search param
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  return (
    <>
      <nav className="navigation">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <button onClick={(e) => router.push("/")}>Home</button>
    </>
  );
};

export default Header;
