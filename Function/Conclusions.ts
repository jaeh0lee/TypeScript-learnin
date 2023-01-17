//제네릭을 사용해서 직접 call signature을 만들일이 거의 없을것이다.
// 타입스크립트가 스스로 이게 어떤 타입인지 찾게하는것이 제일 좋다
// 제네릭은 함수에서만 쓰이는게 아니라 정맒정말 많은곳에서 쓰인다
// 기본적인 타입스크립트의 타입은 제네릭으로 만들어져 있다

// function superPrint<T>(a: T[]) {
//   return a[0];
// }

// const a2 = superPrint([1, 2, 3, 4]);
// const b2 = superPrint([true, false, true]);
// const c2 = superPrint(["jaeho", "nakyuong"]);
// const d2 = superPrint([1, 2, 3, true]);

type Player<E> = {
  name: string;
  extraInfo: E;
};

type JaehoExtra = { favFood: string };

type JaehoPlayer = Player<JaehoExtra>;

const jaeho: JaehoPlayer = {
  name: "nico",
  extraInfo: {
    favFood: "bulgogi",
  },
};

const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null,
};

type A = Array<number>;

let a3: A = [1, 2, 3, 4];

function jaehoLee1(arr: Array<number>) {}
