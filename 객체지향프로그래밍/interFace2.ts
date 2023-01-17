// 추상클래스 복습

abstract class User123 {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class Player111 extends User123 {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.lastName}`;
  }
}

// 추상클래스를 인터페이스로 바꾸기

interface User1234 {
  firstName1: string;
  lastName1: string;
  sayHi1(name1: string): string;
  fullName1(): string;
}

class Playerho implements User1234 {
  constructor(public firstName1: string, public lastName1: string) {}
  fullName1() {
    return `${this.firstName1} ${this.lastName1}`;
  }
  sayHi1(name1: string) {
    return `Hello ${name1}. My name is ${this.lastName1}`;
  }
}

//인터페이스를 상속하는것의 문제점중 하나는 private과 property들을 사용허지 못한다는것
// 추상 클래스에서는 constructor가 귀찮은 부분을 해주도록 할수 있지만 인터페이스에서는 이 부분을 해줄수 없다
