// 아무것도 return 하지 않는 함수를 대상으로 사용한다.
// void는 비어있는것을 말한다

function hello() {
  console.log("x");
}

const a1 = hello();
a1.toUpperCase();

// void > unknown > never
