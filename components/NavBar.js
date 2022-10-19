import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx >{`
 
        a {
          text-decoration : none;
        }
        .active {
          color : tomato;
        }
      `}</style>
    </nav>
  );
}

//Link에 직접 className, style 지정 불가. a태그에 지정.
//코드 내 NavBar 가 active라는 이름의 클래스를 갖고 있다고 하더라도, styled jsx를 사용하기 떄문에 그 스타일은 오직 해당 컴포넌트 내부로 범위가 한정된다!
//현재 NavBar 내 anchor 가 다른 컴포넌트의 anchor들에게 영향을 미치지 못함.
//index.js 의 h1에 이미 사용되고 있는 클래스 이름(active)을 사용해도 클래스 이름들은 바뀌기 떄문에 작동하지 않는다.

//전역으로 스타일을 적용할 경우?
//font-size 또는 font-color와 같이.