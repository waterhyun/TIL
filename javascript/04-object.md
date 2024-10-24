# 객체
- 📌Object
  - 키로 구분된 데이터 집합을 저장하는 자료형 (data collection)

## 구조 및 속성
### 객체 구조
- 중괄호(`{}`)를 이용해 작성
- 중괄호 안에는 `key: value` 쌍으로 구성된 속성(property)를 여러 개 작성 가능
- Key는 문자형만 허용
- value는 모든 자료형 허용
  ```javascript
  const user = {
    name: 'Alice',
    'key with space': true,
    greeting: function() {
      return 'hello'
    }
  }
  ``` 
### 속성 참조
- 점(`.`, chaining operator) 또는 대괄호(`[]`)로 객체 요소 접근
- key 이름에 띄어쓰기 같은 구분자가 있으면 대괄호 접근만 가능
  ```javascript
  // 조회
  console.log(user.name) // Alice
  console.log(user['key with space']) // true

  // 추가
  user.address = 'korea'
  console.log(user) // {name: 'Alice', key with space: true, address: 'korea', greeting: f}

  // 수정
  user.name = 'Bella'
  console.log(user.name) // Bella

  // 삭제
  delete user.name
  console.log(user) // {key with space: true, address: 'korea', greeting: }
  ``` 
- `in` 연산자
  - 속성이 객체에 존재하는지 여부를 확인
    ```javascript
    console.log('greeting' in user) // true
    console.log('country' in user) // false

## 메서드
- Method : 객체 속성에 정의된 함수
  - 예시
    - `object.method()` 방식으로 호출
    - 메서드는 객체를 '행동' 할 수 있게 함
      ```javascript
      console.log(user.greeting()) // hello
      ```

## this
- `this` 키워드를 사용해 객체에 대한 특정한 작업을 수행 할 수 있음
- `this` keyword
  - 함수나 메서드를 호출한 객체를 가리키는 키워드
  - 함수 내에서 `객체의 속성` 및 `메서드`에 접근하기 위해 사용
  - 사용 예시
    ```javascript
    const person = {
      name: 'Alice',
      greeting: function() {
        return `Hello my name is ${this.name}`
      },
    }

    console.log(person.greeting()) // Hello my name is Alice
    ``` 
- JavaScript에서 this는 함수를 "호출하는 방법"에 따라 가리키는 대상이 다름
  |호출 방법|대상|
  |----|----|
  |단순 호출|전역 객체|
  |메서드 호출|메서드를 호출한 객체|

- 단순 호출 시 this
  - 가리키는 대상 ➡ `전역 객체`
    ```javascript
    const myFunc = function() {
      return this
    }
    
    console.log(myFunc()) // window
    ``` 
- 메서드 호출 시 this
  - 가리키는 대상 ➡ `메서드를 호출한 객체`
    ```javascript
    const myObj = {
      data: 1,
      myFunc: function () {
        return this
      }
    }
    
    console.log(myFunc()) // myObj
    ``` 
- 중첩된 함수에서의 this 문제점과 해결책  
  <img src='images\this-problem.png' width=800 style='margin:8px'>  
  - 화살표 함수는 자신만의 this를 가지지 않기 때문에 외부 함수/부모 함수(myFunc)에서의 this 값을 가져옴

## 추가 객체 문법

## JSON

# 참고
## 클래스