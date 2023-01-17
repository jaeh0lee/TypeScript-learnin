// 다형성이란 poly는 많은 , 다수란 뜻이고 gon 은 각도란 뜻이다 여러개의 각을 가지고 있고, 여러개의 면을 가지고 있다
// morpthos는 form(형태), structure(구조)라는 뜻을 가지고 있다
// 조합하면 여러가지의 다른 모양들, 형태를 뜻한다
// 타입스크립트에서 함수는 다른 2~3 개의 파라미터를 가질수 있다 (오버로딩 참고)

/* 여기서 잠깐 concrete type 이란 우리가 전부터 봐왔던 타입을 말한다  
   number, boolean , string
*/

/* generic이란 타입의 placeholder 같은것이다. 사용이유는 우리가 call signature을 작성할때 여기 들어올 확실한 타입을 모를때 generic을 사용한다. */

// type SuperPrint = {
//   <Generic, M>(arr: Generic[], b: M): Generic; // 꺽새안의 Generic이 generic이란 타입이다.
// };

// const superPrint: SuperPrint = (arr) => arr[0];

// const a2 = superPrint([1, 2, 3, 4], "x");
// const b2 = superPrint([true, false, true], 1);
// const c2 = superPrint(["jaeho", "nakyuong"], false);
// const d2 = superPrint([1, 2, 3, true, "jaeho"], []);

//React.js
