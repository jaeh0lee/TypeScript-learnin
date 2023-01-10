// 콜론(:) 을 입력하고 타입을 적어주면 된다.
// 가능한 내가 위의 코드처럼 작성해서 추론하는것이 아니라 타입스크립트가 추론하게 하는것이 좋다.
let a = [1, 2];
let b = ["jaeho"];
let c: boolean[] = [true];

// optional 타입 (선택적변수)
// 물음표는 숫자가 있거나 없거나를 해줄수 있다
// 하지만 이렇게 작성하면 반복적으로 계속해서 작성해야함
const playeresJaeho: { name: string } = {
  name: "nico",
};

const playeresNakyoung: {
  name: string;
  age?: number;
} = {
  name: "jaeho",
  age: 12,
};

// 그걸 줄이고자 작성한것이 아래의 별칭 타입임

// Alias(별칭) 타입 , 반복되는 코드를 줄이고  재사용성이 높아짐

type Age = number;
type Name = string;

type Player = {
  name: Name;
  age?: Age;
};

const a1: Player = {
  name: "jaeho",
  age: 12,
};

//함수타입
function playerMaker(name: string): Player {
  return {
    name,
  };
}

const nicos = playerMaker("nico");
nicos.age = 12;

//화살표 함수를 사용했을때

const playJaeho = (name: string): Player => ({ name });

const jaehoLee = playJaeho("hoho");

jaehoLee.age = 10;
