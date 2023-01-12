// readonly 는 내용을 수정할수 없다 !

type Player = {
  readonly name: string;
  age?: number;
};

const playerMaker = (name: string): Player => ({ name });

const nico = playerMaker("nico");

const numbers: readonly number[] = [1, 2, 3, 4];
