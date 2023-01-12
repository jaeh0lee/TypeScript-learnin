// unkown 을 사용하면 타입스크립트의 보호를 받게 된다
// 변수의 타입을 미리 알지 못할떄 unknown 을 사용한다

let a: unknown;

if (typeof a === "number") {
  let b = a + 1;
}

if (typeof a === "string") {
  a.toUpperCase;
}
