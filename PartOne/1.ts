// Day 1 예제

const nico = {
  nickname: "nick",
};

nico.hello(); // 자바스크립트와 다르게 바로 에러를 띄어주고 있다

function divide(a, b) {
  return a / b;
}

divide("hello"); // 2개의 인자가 필요하다고 에러를 알려주고 있다

const player = {
  age: 12,
};

player.age = false; // 'boolean' 형식은 'number' 형식에 할당할 수 없습니다 라고 에러를 알려주고 있다.
