type JaehoC = {
  firstName: string;
};

interface JaehoD {
  firstName: string;
}

class UserA implements JaehoD {
  constructor(public firstName: string) {}
}

//implements 을 통해 타입과 인터페이스 모두 추상클래스를 대체할수 있다.
// 타입스크립트 커뮤니티에서는 클래스나 오브젝트의 모양을 정의하고 싶으면 인터페이스를 사용하고, 다른 모든 경우에서는 타입을 쓰라고 하고 있다.
// 타입스크립트를 생성해주는 큰 프로젝트를 해보면 , 대부분 인터페이스를 만들어줄것이다.
// 해당 이유는 인터페이스를 상속시키는 방법이 직관적이다
