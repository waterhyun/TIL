## Contents
- [OOP](#oop)
  * [Procedural Programming](#procedural-programming)
  * [Object Oriented Programming](#object-oriented-programming)
- [Object](#object)
  * [Instance](#instance)
- [Class](#class)
  * [클래스 구성요소](#클래스-구성요소)
  * [인스턴스 변수와 클래스 변수](#인스턴스-변수와-클래스-변수)
    + [클래스 변수 활용](#클래스-변수-활용)
    + [클래스변수와 인스턴스 변수](#클래스변수와-인스턴스-변수)
- [메서드](#메서드)
  * [인스턴스 메서드](#인스턴스-메서드)
  * [생성자 메서드](#생성자-메서드)
  * [클래스 메서드](#클래스-메서드)
  * [스태틱 메서드](#스태틱-메서드)
  * [메서드 정리](#메서드-정리)
  * [약속](#약속)
- [참고](#참고)
  * [인스턴스와 클래스 간 이름 공간](#인스턴스와-클래스-간-이름-공간)
  * [매직 메서드](#매직-메서드)
  * [데코레이터](#데코레이터)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# OOP
## Procedural Programming
📍 절차 지향 프로그래밍 Procedural Programming  
프로그램을 '데이터'와 '절차'로 구성하는 방식의 프로그래밍 패러다임

특징
- '데이터'와 해당 데이터를 처리하는 '함수(절차)'가 분리되어 있으며, 함수 호출의 **흐름**이 중요
- 코드의 순차적인 흐름과 함수 호출에 의해 프로그램이 진행

<p align = "center">
  <img src = "image\oop\procedural-programming.png", width = 300>
</p>


> 실제로 실행되는 내용이 무엇이 무엇인가가 중요  
> 데이터를 다시 재사용하거나 하기보다는 처음부터 끝까지 실행되는 결과물이 중요한 방식

한계점 (소프트웨어 위기 Software Crisis)
- 하드웨어의 발전으로 컴퓨터 계산용량과 문제의 복잡성이 급격히 증가함에 따라 소프트웨어에 발생한 충격
- 하드웨어가 할 수 있는데 소프트웨어가 따라가지 못함

## Object Oriented Programming
📍 객체 지향 프로그래밍 Object Oriented Programming  
데이터와 해당 데이터를 조작하는 메서드를 하나의 객체로 묶어 관리하는 방식의 프로그래밍 패러다임
- 절차가 중심이 아니라 데이터가 중심이 된 것.
- 틀로 뭘 찍어낸다고 보면 좋음

<p align = "center">
  <img src = "https://chortle.ccsu.edu/java5/Notes/chap25/cookieDough.gif", width = 300>
</p>

[이미지 출처](https://chortle.ccsu.edu/java5/Notes/chap25/cookieDough.gif)


📌 비교
| 절차 지향 | 객체 지향 |
|------|------|
| - 데이터와 해당 데이터를 처리하는 함수(절차)가 분리 <br> - **함수 호출의 흐름**이 중요 | - 데이터와 해당 데이터를 처리하는 메서드(메시지)를 하나의 **객체**(클래스)로 묶음 <br> - **객체 간 상호작용**과 메시지 전달이 중요|




# Object
📍 객체  
클래스에서 정의한 것을 토대로 메모리에 할당된 것  
'속성'과 '행동'으로 구성된 모든 것  

예시: 가수
- 가수의 속성(**변수**)
  - 직업: 가수
  - 생년월일: 1993년 5월 16일
  - 국적: 대한민국

- 가수의 행동(**메서드**)
  - 랩()
  - 댄스()
  - 소몰이()

**정리 : object = attribute + method**
- type 타입 : 어떤 연산자(operator)와 조작(method)이 가능한가?
- attribute 속성 : 어떤 상태(데이터)를 가지는가?
- method 조작법 : 어떤 행위(함수)를 할 수 있는가?

## Instance
📍 인스턴스
클래스의 속성과 행동을 기반으로 생성된 개별 객체

📌 클래스와 객체   
- 클래스로 만든 객체를 **인스턴스**라 부름
- 가수(클래스) ➡ 객체(아이유, BTS, ...)
  - 아이유는 객체다 (⭕)
  - 아이유는 인스턴스다 (❌)
  - 아이유는 가수의 인스턴스다 (⭕)
- 즉, 클래스(가수)와 객체(아이유)
  - 클래스 = 데이터 타입
    - 클래스를 만든다 == 타입을 만든다

```py
name = 'Alice'
print(type(name))  # <class 'str'>
```
- 변수 name의 타입은 str 클래스
- 변수 name은 str 클래스의 인스턴스
- 우리가 사용해왔던 데이터 타입은 사실 모두 클래스
- 결국 문자열 타입의 변수는 str 클래스로 만든 인스턴스다

```py
'', 'hello', '파이썬'
```
- 문자열 타입(클래스)의 객체(인스턴스)

```py
[1, 2, 3], [1], [], ['hi']
```
- 리스트 타입(클래스)의 객체(인스턴스)

```py
'hello'.upper()
```
- 문자열.대문자로() : 우리 관점
- 객체.행동() : 객체 관점
- 인스턴스.메서드() : OOP 관점
- 데이터가 함수를 호출 ➡ 데이터가 중심!

<br>
<br>  

> 하나의 객체(object)는 특정 타입의 인스턴스(instance)이다.

- 123, 900, 5는 모두 int의 인스턴스
- 'hello', 'bye'는 모두 string의 인스턴스
- [232, 89, 1], []은 모두 list의 인스턴스


# Class
📍 클래스   
파이썬에서 **타입**을 표현하는 방법
- **객체**를 생성하기 위한 설계도
- 데이터와 기능을 함께 묶는 방법을 제공
- Blue Print이라고도 표현

📌 클래스 정의
- class 키워드
- 클래스 이름은 파스칼 케이스(Pascal Case) 방식으로 작성
  - 평소 우리는 snake_case로 작성
  ```py
  class MyClass:
    pass
  ```
  - 대문자로 시작하고, 언더바가 들어가야할 곳을 대문자로 씀
  - 대문자 Camel Case

📌 인스턴스 생성 및 활용
```py
class Person:
  pass

# 인스턴스 생성
iu = Person()

# 메서드 호출
iu.메서드()

# 속성(변수) 접근
iu.attribute
```

```py
class Person:
  blood_color = 'red'

  def __init__(self, name):
    self.name = name

  def siging(self):
    return f'{self.name}가 노래합니다.'

# 인스턴스 생성
singer1 = Person('iu')

# 메서드 호출
print(singer1.singing())  # iu가 노래합니다.

# 속성(변수) 접근
print(singer1.blood_color) # red
print(singer1.name) # iu
```

## 클래스 구성요소
- 1.생성자 메서드
  - 객체를 생성할 때 자동으로 호출되는 특별한 메서드
  - `__init__`이라는 이름의 메서드로 정의되며, 객체의 초기화를 담당
    - 매직 메서드이면서 생성자 메서드
  - 생성자 함수를 통해 인스턴스를 생성하고 필요한 **초기값**을 설정
  ```py
  class Person:
  blood_color = 'red'

  ########################### 이 부분
  def __init__(self, name):
    self.name = name
  ###########################
  def siging(self):
    return f'{self.name}가 노래합니다.'

  # 인스턴스 생성
  singer1 = Person('iu')
  ```
- 2.인스턴스 변수
  - 인스턴스(객체)마다 별도로 유지되는 변수
  - 인스턴스마다 독립적인 값을 가지며, 인스턴스가 생성될 때마다 초기화됨

  ```py
  class Person:
  blood_color = 'red'

  def __init__(self, name):
  ########################### 이 부분
    self.name = name
  ###########################
  def siging(self):
    return f'{self.name}가 노래합니다.'

  # 속성(변수) 접근  
  print(singer1.name) # iu
  ```

- 3.클래스 변수
  - 클래스 내부에 선언된 변수
  - 클래스로 생성된 모든 인스턴스들이 공유하는 변수
  ```py
  class Person:
  ########################### 이부분
  blood_color = 'red'
  ###########################

  def __init__(self, name):
    self.name = name
  def siging(self):
    return f'{self.name}가 노래합니다.'

  # 속성(변수) 접근  
  print(singer1.name) # iu 
  ```
- 4.인스턴스 메서드
  - 각각의 인스턴스에서 호출할 수 있는 메서드
  - 인스턴스 변수에 접근하고 수정하는 등의 작업을 수행
  ```py
  class Person:
  blood_color = 'red'

  def __init__(self, name):
    self.name = name

  ########################### 이부분
  def siging(self):
    return f'{self.name}가 노래합니다.'
  ###########################

  # 메서드 호출
  print(singer1.singing())  # iu가 노래합니다.
  ```


## 인스턴스 변수와 클래스 변수
### 클래스 변수 활용
가수가 몇 명인지 확인하고 싶다면?
- 인스턴스가 생성될 때마다 클래스 변수가 늘어나도록 설정할 수 있음
```py
class Person:
  count = 0

  def __init__(self, name):
    self.name = name
    Person.count += 1

person1 = Person('iu')
person2 = Person('BTS')

print(Person.count)  # 2
```

### 클래스변수와 인스턴스 변수
`class.class_variable`로 클래스 변수 참조하기
```py
class Circle:
  pi = 3.14

  def __init__(self, r):
    self.r = r

c1 = Circle(5)
c2 = Circle(10)
```
```py
print(Circle.pi)  # 3.14
print(c1.pi)  # 3.14
print(c2.pi)  # 3.14

Circle.pi = 5  # 클래스 변수 변경
print(Circle.pi)  # 5
print(c1.pi)  # 5
print(c2.pi)  # 5

c2.pi = 5  # 인스턴스 변수 변경 = c2의 인스턴스 변수 pi를 생성
print(Circle.pi)  # 3.14 (클래스 변수) 
print(c1.pi)  # 3.14 (클래스 변수)
print(c2.pi)  # 5 (새로운 인스턴스 변수가 생성됨)
```

# 메서드
<p align = "center">
  <img src = "https://miro.medium.com/v2/resize:fit:640/format:webp/1*Z-_zt8Ygbeg9nIzSGH8Q4A.png", width = 500>
</p>

[이미지 출처](https://miro.medium.com/v2/resize:fit:640/format:webp/1*Z-_zt8Ygbeg9nIzSGH8Q4A.png)

## 인스턴스 메서드
📍 Instance Method
클래스로부터 생성된 각 인스턴스에서 호출할 수 있는 메서드
- 인스턴스의 상태를 조작하거나 동작을 수행
- 일반적인 경우 인스턴스 메서드


📌구조
```py
class MyClass:

  def instance_method(self, arg1, ...):
    pass
```
- 클래스로부터 생성된 각 인스턴스에서 호출할 수 있는 메서드
  - 인스턴스의 상태를 조작하거나 동작을 수행
- 반드시 첫 번째 매개변수로 **인스턴스 자신(self)**을 전달받음
  - `self`는 매개변수 이름일 뿐이며 다른 이름으로 설정 가능, <br> 하지만 다른 이름을 사용하지 않을 것을 강력히 권장

📌 `self` 동작 원리
- upper 메서드를 사용해 문자열 'hello'를 대문자로 변경하기
```py
'hello'.upper()
```
- 하지만 실제 파이썬 내부 동작은 다음과 같이 진행
```py
str.upper('hello')
```
- str 클래스가 upper 메서드를 호출했고, 그 첫번째 인자로 문자열 인스턴스가 들어간 것

> 인스턴스 메서드의 첫 번째 매개변수가 반드시 **인스턴스 자기 자신**인 이유

- `'hello'.upper()`은 `str.upper('hello')`를 객체 지향 방식의 메서드로 호출하는 표현(단축형 호출)
  - `str.upper('hello')`은 절차 지향형

> 'hello'라는 문자열 객체가 단순히 어딘가의 함수로 들어가는 인자로 활용되는 것이 아닌 **객체 스스로 메서드를 호출**하여 코드를 동작하는 **객체 지향적인 표현**인 것

## 생성자 메서드
📍 Constructor Method  
인스턴스 객체가 생성될 때 자동으로 호출되는 메서드
- 인스턴스 변수들의 초기값을 설정
- `return`값이 필요없고 쓸모가 없음

```py
class Person:
  def __init__(self):
    pass
```

예시
```py
class Person:
  ################################## 이 부분
  def __init__(self, name):
    # 왼쪽 name : 인스턴스 변수 name
    # 오른쪽 name : 생성자 매서드의 매개변수 이름
    # 두 개는 같은 것
    self.name = name
    print('인스턴스가 생성되었습니다.')
  ##################################

  def greeting(self):
    print(f'안녕하세요. {self.name}입니다.')


person1 = Person('지민')  # 인스턴스가 생성되었습니다.
person1.greeting()  # 안녕하세요. 지민입니다.
```

## 클래스 메서드
📍 Class Method  
클래스가 호출하는 메서드
- 클래스 변수를 조작하거나 클래스 레벨의 동작을 수행

📌 구조
- `@classmethod` 데코레이터를 사용하여 정의
  - 데코레이터: 함수를 꾸미는 함수 = 기능을 추가
- **호출 시, 첫 번째 인자로 해당 메서드를 호출하는 클래스(cls)가 전달됨**
```py
class MyClass:

  @classmethod
  def class_method(cls, arg1, ...):
    pass
```
- `cls`는 매개변수 이름일 뿐이며 다른 이름으로 설정 가능, <br >하지만 다른 이름을 사용하지 않을 것을 강력히 권장

클래스 메서드 예시
```py
class Person:
  count = 0

  def __init__(self, name):
    self.name = name
    Person.count += 1
  
  @classmethod
  def number_of_population(cls):
    print(f'인구수는 {cls.count}입니다.') # cls은 아직은 모름
    print(f'인구수는 {Person.count}입니다.') # 상속하게 되면 자식 클래스가 number_of_population을 제대로 사용하지 못하기 때문에 @classmethod를 사용함.


person1 = Person('iu') 
person2 = Person('BTS')

Person.number_of_population()  # 인구수는 2입니다.
```

## 스태틱 메서드
📍 Static Method 스태틱(정적) 메서드  
클래스와 인스턴스와 상관없이 독립적으로 동작하는 메서드
- 주로 클래스와 관련이 있지만 **인스턴스와 상호작용이 필요하지 않은** 경우에 사용

📌 스태틱 메서드 구조
- `@staticmethod` 데코레이터를 사용하여 정의
- 호출 시 필수적으로 작성해야 할 매개변수가 **없음**
  - 즉, 객체 상태나 클래스 상태를 **수정할 수 없으며** 단지 기능(행동)만을 위한 메서드로 사용
  - 우리가 써왔던 그냥 함수같은 것.

```py
class MyClass:

  @staticmethod
  def static_method(arg1, ...):
    pass
```

스태틱 메서드 예시
- 단순히 문자열을 조작하는 기능을 제공하는 메서드 예시
```py
class StringUtils:
  # 생성자 함수를 쓰지 않더라도 쓰는 것을 권장
  # 안 쓰는 경우 python에서 자체 생성
  def __init__(self):
    pass

  @staticmethod
  def reverse_string(string):
    return string[::-1]
  
  @staticmethod
  def capitalize_string(string):
    return string.capitalize()

  # 인자로 받은 문자를 조작할 뿐
  # 클래스 속성과 인스턴스를 조작하지 않음
  

text = 'hello, world'

reversed_text = StringUtils.reverse_string(text)
print(reversed_text)  # dlrow ,olleh

capitalized_text = StringUtils.capitalize_string(text)
print(capitalized_text)  # Hello, world
```
```py
instance1 = StringUtils()
print(instance1.reversed_text(text))
### 결과는 똑같이 나옴
### 인스턴스가 스태틱 메서드, 클래스 메서드 호출 가능
```
- 호출은 인스턴스가 아니라 클래스가 함

- 호출
  - 인스턴스는 인스턴스 메서드만 호출
  - 클래스 메서드와 스태틱 메서드는 클래스가 호출

## 메서드 정리
- 인스턴스 메서드 `self`
  - 인스턴스의 상태를 변경하거나, 해당 인스턴스의 특정 동작을 수행
- 클래스 메서드 `@classmethod`, `cls`
  - 인스턴스의 상태에 의존하지 않는 기능을 정의
  - 클래스 변수를 조작하거나 클래스 레벨의 동작을 수행
- 스태틱 메서드 `@staticmethod`
  - 클래스 및 인스턴스와 관련이 없는 일반적인 기능을 수행


## 약속
누가 어떤 메서드를 사용해야 할까?
- 클래스가 사용해야 할 것
  - 클래스 메서드
  - 스태틱 메서드
- 인스턴스가 사용해야 할 것
  - 인스턴스 메서드

```py
class MyClass:
    def instance_method(self):
        return 'instance method', self

    @classmethod
    def class_method(cls):
        return 'class method', cls

    @staticmethod
    def static_method():
        return 'static method'


instance = MyClass()

# 클래스가 할 수 있는 것
print(MyClass.instance_method(instance))  # ('instance method', <__main__.MyClass object at 0x000001F3384495B0>)
print(MyClass.class_method())  # ('class method', <class '__main__.MyClass'>)
print(MyClass.static_method())  # static method
## 맨 위에 것만 제거하고 쓰기

# 인스턴스가 할 수 있는 것
print(instance.instance_method())  # ('instance method', <__main__.MyClass object at 0x0000024E327B0CA0>))
print(instance.class_method())  # ('class method', <class '__main__.MyClass'>)
print(instance.static_method())  # static method
## 맨 위에만 쓰기
```
> 클래스는 모든 메서드를 호출 할 수 있음  
<br> 하지만, 클래스는 클래스 메서드와 스태틱 메서드만 사용하도록 한다.

❓ 왜? 해야 하나? 유지보수를 위해

할 수 있다 != 써도 된다  
각자의 메서드는 OOP 패러다임에 따라 명확한 목적에 따라 설계된 것이기 때문에 클래스와 인스턴스 각각 올바른 메서드만 사용한다.

+ 클래스의 캡슐화(접근을 막을 수 있음, 완벽하지 않음)


# 참고
## 인스턴스와 클래스 간 이름 공간
- 클래스를 정의하면, 클래스와 해당하는 이름 공간 생성
- 인스턴스를 만들면, 인스턴스 객체가 생성되고 독립적인 이름 공간 생성
- 인스턴스에서 특정 속성에 접근하면, **인스턴스 ➡ 클래스 순으로 탐색**

```py
class Person:
  blood_color = 'red'

  def __init__(self, name):
    self.name = name

p1 = Person('iu')
p2 = Person('BTS')
```

<p align = "center">
  <img src = "image\oop\class.png", width = 400>
</p>

```py
class Person:
  name = 'unknown' # 클래스 변수

  def talk(self):
    print(self.name) # self.name은 인스턴스의 name 변수에 접근하여 출력

p1 = Person()
p1.talk()  # unknown

# p2 인스턴스 변수 설정 전/후
p2 = Person()
p2.talk()  # unknown
p2.name = 'Kim'
p2.talk()  # kim

print(Person.name)  # unknown
print(p1.name)  # unknown
print(p2.name)  # kim
```

<p align = "center">
  <img src = "image\oop\class2.png", width = 340>
</p>

<details>
  <summary> 참고 사항(self.name, Person.name의 차이) </summary>

```py
class Person:
  name = 'unknown' # 클래스 변수

  def talk(self):
    print(Person.name) # Person.name은 클래스 변수인 name 변수에 접근하여 출력

p1 = Person()
p1.talk()  # unknown

# p2 인스턴스 변수 설정 전/후
p2 = Person()
p2.talk()  # unknown
p2.name = 'Kim' # 변수 저장
p2.talk()  # unknown

print(Person.name)  # unknown
print(p1.name)  # unknown
print(p2.name)  # kim
```
</details>
<br>

📌 독립적인 이름공간을 가지는 이점
- 각 인스턴스는 독립적인 메모리 공간을 가지며, 클래스와 다른 인스턴스 간에는 서로의 데이터나 상태에 **직접적인 접근이 불가능**
- 객체 지향 프로그래밍의 중요한 특성 중 하나로, 클래스와 인스턴스를 모듈화하고 각각의 객체가 **독립적으로 동작**하도록 보장
- **이를 통해 클래스와 인스턴스는 다른 객체들과의 상호작용에서 서로 충돌이나 영향을 주지 않으면서 독립적으로 동작할 수 있음**
> 코드의 가독성, 유지보수성, 재사용성을 높이는데 도움을 줌

## 매직 메서드
📍 magic method
- 인스턴스 메서드
- 특정 상황에 자동으로 호출되는 메서드
- Double underscore(__)가 있는 메서드는 특수한 동작을 위해 만들어진 메서드
- 스페셜 메서드 혹은 매직 메서드라고 불림
- 예시
  - `__str__(self)`
  - `__len__(self)`
  - `__lt__(self, other)`
  - `__le__(self, other)`
  - `__eq__(self, other)`
  - `__gt__(self, other)`
  - `__ge__(self, other)`
  - `__ne__(self, other)`

예시 `__str__(self)`
- 내장함수 print에 의해 호출되어 객체 출력을 문자열 표현으로 변경
```py
class Circle:
  def __init__(self, r):
    self.r = r

  def __str__(self):
    return f'원의 반지름: {self.r}'

c1 = Circle(10)
c2 = Circle(1)

print(c1)  # 원의 반지름: 10
print(c2)  # 원의 반지름: 1
```
## 데코레이터
📍 Decorator  
다른 함수의 코드를 유지한 채로 수정하거나 확장하기 위해 사용되는 함수  

📌 데코레이터 정의
```py
def my_decorator(func):
  def wrapper():
    # 함수 실행 전에 수행할 작업
    print('함수 실행 전')
    # 원본 함수 호출
    result = func()
    # 함수 실행 후에 수행할 작업
    print('함수 실행 후')
    return result
  return wrapper
```

📌 데코레이터 사용
```py
@my_decorator
def my_function():
  print('원본 함수 실행')

my_function()
# 함수 실행 전
# 원본 함수 실행
# 함수 실행 후
```

<br>
<br>  

> 절차 지향과 객체 지향은 대조되는 개념이 아니다.
- 객체 지향은 기존 절차 지향을 기반으로 두고 보완하기 위해 객체라는 개념을 도입해 상속, 코드 재사용성, 유지보수성 등의 이점을 가지는 패러다임