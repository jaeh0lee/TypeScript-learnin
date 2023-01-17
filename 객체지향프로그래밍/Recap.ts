/* 
복습 
1. public , private , protected 를 사용해도 js에서는 보이지 않는다.
2. 추상클래스(abstract)는 네가 직접적으로 인스턴스를 만들지 못하는 클래스이지만 그 클래스를 상속할수 있다.
3. 추상메소드는 구현이 되어 있지 않는(코드가 없는) 메소드 이다.
4. call signature 만 가지고 있는데, 함수의 이름과 argument를 안받을 때도 있지만 아규먼트를 받는경우 아규먼트의 이름과 티입 그리고 함수의 리턴타입을 정의하고 있다. 
5. 추상 메소드가 있는경우, 추상 클래스를 상속받는 클래스에서 추상메소드를 구현해주어야 한다.
6. public , private , protected 각각의 차이 
public 은 기본적인것 private 은 추상클래스를 상속 받지 못한다.  만약 모든 클래스에서 상속을 가능하게 하고 싶다면 protected를 사용하면 된다. 외부 모든곳은 앞서 말한 public으로 하면 된다!
*/

type Words = {
  [key: string]: string; // <-- words 타입이 string만을 property로 가지는 오브젝트라는걸 말해준다
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  // 단어를 추가하기 위한 메소드
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  // 단어를 찾는 메소드
  def(term: string) {
    return this.words[term];
  }
  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def;
    }
  }
  delete(term: string) {
    if (this.words[term] !== undefined) {
      delete this.words[term];
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const food = new Word("bread", "빵");

const dict = new Dict();

dict.add(kimchi);
dict.add(food);

dict.def("bread");
dict.def("kimchi");

dict.update(new Word("bread", "개 쩌는 맛의 빵"));
dict.delete("kimchi");
