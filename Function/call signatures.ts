/*  call signatures란 함수위에 마우스를 올렸을떄 보게 되는걸 말한다, 함수를 어떻게 호출해야하는것인지 알려주고
    함수의 반환 타입도 알려준다 
*/

type Add = (a: number, b: number) => number; // <== 이게 call signatures 이다

const add: Add = (a, b) => a + b;

// 파라미터에 number를 작성해주지 않아도 된다. 하핫
