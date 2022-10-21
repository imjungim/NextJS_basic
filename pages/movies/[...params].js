//변수를 포함하는 url [변수명].js
// movies/121

import { useRouter } from "next/router"
import { getServerSideProps } from "..";
import Seo from "../../components/Seo";

export default function Detail(){
  const router = useRouter();
  const [title, id] = router.query.params || [];

  console.log("router",router)
  return <div>
    <Seo title={title}/>
    <h4>{title}</h4>
  </div>
}

// export async function getServerSideProps(ctx) {
//   console.log(ctx); // query, params 정보들

//   return {
//     props: {},
//   };
// }

//router 확인 시 query 프로퍼티의 이름은 파일명에 쓰인 변수명과 동일하다.
//router.query.title은 유저가 홈페이지에서 상세페이지로 넘어올때에만 존재.