import Link from "next/link";
import { useRouter } from "next/router";
export default function NavBar() {
  const router = useRouter();
  //console.log("router",router)
  return (
    <nav>
      <Link href="/">
        <a className="home" style={{ color : router.pathname === "/" ? "red" : "blue"}}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color : router.pathname === "/about" ? "red" : "blue"}}>About</a>
      </Link>
    </nav>
  );
}

//Link에 직접 className, style 지정 불가. a태그에 지정.
