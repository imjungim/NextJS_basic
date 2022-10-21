//변수를 포함하는 url [변수명].js
// movies/121

import { useRouter } from "next/router"

export default function Detail(){
  const router = useRouter();
  console.log("router",router)
  return "detail"
}

//router 확인 시 query 프로퍼티의 이름은 파일명에 쓰인 변수명과 동일하다.