type Nickname = string;
type HealthBar = number;
type Friedns = Array<string>;
type Team = "red" | "yellow" | "green";
type Health = 1 | 2 | 10;

type Son = {
  nickname: Nickname;
  hearthBar: HealthBar;
};

const heaungmin: Son = {
  nickname: "legend",
  hearthBar: 10,
};

type Milk = string;

const chocoMilk: Milk = "sweet";

// 인터페이스는 오직 한가지 용도만을 가지고 있는데 그건  오브젝트 모양을 특정해주기 위한것이다
// react.js사용할때 많이 사용한다
// 타입스크립트에게 오브젝트 모양을 알려주는 방법엔 두가지가 있다 type을 쓰거나 앞서 말한 인터페이스 :)
// 타입 키워드는 인터페이스에 비해 사용할수 있는게 많다
// 인터페이스를 사용하는 사람이 있다면 그저 오브젝트의 모양을 타입스크립트에게 설명해주고 싶을 뿐인것이다.
// 인터페이스는 객체 지향 프로그래밍의 개념을 활용해서 디자인 되었고 타입은 좀 더 유연하다(개방적)
interface Lee {
  nickname: Nickname;
  team: Team;
  health: Health;
}

const hoho: Lee = {
  nickname: "jaeho",
  team: "red",
  health: 1,
};

interface User12 {
  name: string;
}

interface Player12 extends User12 {}

const nicococo: Player12 = {
  name: "hohole",
};
