// 타입스크립트와 객체지향 프로그램이 가지고 있는 엄청 휼룡한 것은 추상클래스이다(Abstract Class)
// 추상 클래스는 오직 다른곳에서 상속받을수만 있는 클래스이다.
// 하지만 추상클래스는 직접 새로운 인스턴스를 만들수는 없다

abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}
  // 추상클래스 안에 들어가있는 추상메소드 이다.
  // 메소드란 클래스안에 존재하는 함수이다.
  // 하지만 메소드를 구현하여서는 안되고 대신에 메소드의 call signature만 작성해 둬야한다.
  abstract getNickName(): void;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player1 extends User {
  getNickName() {
    console.log(this.nickname);
  }
}

const jaeho12 = new Player1("nico", "las", "니꼬");
jaeho12.getFullName();
