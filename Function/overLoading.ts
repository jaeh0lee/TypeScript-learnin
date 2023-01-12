// 오버로딩이란 함ㅅ두가 여러개의 call signatures를 가지고 있을때 발생시킨다 그냥 여러개가 아니라 서로 다른 여러개의 call signature를 가졌을때이다

type Add1 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add1: Add1 = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

type Config = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

type Add2 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add2: Add2 = (a, bx, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add2(1, 2);
add2(1, 2, 3);
