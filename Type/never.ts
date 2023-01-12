/* 1. never은 많이 사용하진 않지만 뭔지는 알아야함 하핫  never는 함수가 절대 return 하지 않을때 발생한다
   2. 타입이 두가지일수 있는 상황에서도 발생한다 
 */

function hello(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name;
  }
}
