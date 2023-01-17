// 타입을 쓰고 싶다면 type 키워드를 쓰면 됨!
// type Jaeho = {} , number, '', 1 | 2 | 3
// 타입스크립트에게 오브젝트의 모양을 알려주고 싶다면 타입과 인터페이스를 쓸수 있다.

// 타입 형식 복습

type Jaeho = {
  name: string;
};

// 타입 상속

type JaehoAA = Jaeho & {
  lastName: string;
};

const jaehoA: JaehoAA = {
  name: "jaeho",
  lastName: "lee",
};

// 인터페이스 형식

interface JaehoB {
  name: string;
}

interface JaehoB {
  health: number;
}

// 인터페이스 상속
interface JaehoB {
  lastName: string;
}

const jaehoB: JaehoB = {
  name: "lee",
  lastName: "jaeho",
  health: 1,
};
