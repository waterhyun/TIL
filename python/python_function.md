# Functions
## Contents
- [Functions](#functions)
  * [Structure](#structure)
  * [함수 정의와 호출](#함수-정의와-호출)
  * [Return과 Print](#return--print)
- [Parameters and Arguments](#parameters-and-arguments)
  * [1. 위치 인자](#1--위치-인자)
  * [2. 기본 인자 값](#2--기본-인자-값)
  * [3. 키워드 인자](#3--키워드-인자)
  * [4. 임의의 인자 목록](#4--임의의-인자-목록)
  * [5. 임의의 키워드 인자 목록](#5--임의의-키워드-인자-목록)
  * [함수 인자 권장 작성 순서](#함수-인자-권장-작성-순서)
- [Recursive Function](#recursive-function)
  * [재귀 함수 특징](#재귀-함수-특징)
  * [재귀 함수를 사용하는 이유](#재귀-함수를-사용하는-이유)
  * [재귀 함수 활용 시 기억해야 할 것](#재귀-함수-활용-시-기억해야-할-것)
- [Built in Function](#built-in-function)
  * [Built in Function - map](#built-in-function---map)
  * [Built in Function - zip](#built-in-function---zip)
    + [여러 개의 리스트를 동시에 조회](#여러-개의-리스트를-동시에-조회)
    + [2차원 리스트의 같은 컬럼(열) 요소를 동시에 조회](#2차원-리스트의-같은-컬럼-열--요소를-동시에-조회)
- [Function and Scope](#function-and-scope)
  * [범위와 변수 관계](#범위와-변수-관계)
    + [example](#example)
    + [lifecycle](#변수-수명주기)
    + [Name Resolution](#Name-Resolution)
    + [LEGB Rule Example](#legb-rule-example)
  * [global keyword](#global-keyword)
- [Packing, Unpacking](#packing-unpacking)
  * [Packing](#packing)
  * [Unpacking](#unpacking)
- [Lambda expressions](#lambda-expressions)
  * [Structure](#structure-1)
  * [예시](#예시)
  * [활용](#활용)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# Functions
함수 : 특정 작업을 수행하기 위한 재사용 가능한 코드 묶음

❓ 함수를 사용하는 이유
- 두 수의 합을 구하는 함수를 정의하고 사용함으로써 코드의 중복을 방지.
- **재사용성**이 높아지고, 코드의 **가독성과 유지보수성** 향상
```python
# 두 수의 합을 구하는 코드
num1 = 5
num2 = 3
sum_result = num1+num2
print(sum_result)
```
```python
# 두 수의 합을 구하는 함수
def get_sum(num1, num2):
  return num1+num2

# 함수 사용하여 결과 출력
num1 = 5
num2 = 3
sum_result = get_sum(num1, num2)
print(sum_result)
```
## Structure
```python
def make_sum(pram1, pram2):
    """이것은 두 수를 받아
    두 수의 합을 반환하는 함수입니다.
    >>> make_sum(1, 2)
    3
    """
    return pram1 + pram2
```
- `pram1`, `pram2` = `parameter`
- """"""" = `Docstring`
- return pram1 + pram2 = `return value`

## 함수 정의와 호출
함수 정의
- 함수 정의는 `def` 키워드로 시작.
- `def` 키워드 이후 함수 이름 작성.
- 괄호안에 `매개변수`를 정의할 수 있음.
- 매개변수(parameter)는 함수에 전달되는 값을 나타냄.

```python
def greet(name):
    """입력된 이름 값에
    인사를 하는 메세지를 만드는 함수
    """
    message = "hello, " + name
    return message

result = greet('Alice')
print(result)
```

함수 body
- 콜론(:) 다음에 들여쓰기 된 코드 블록
- 함수가 실행 될 때 수행되는 코드를 정의

Docstring
- 함수 `body` 앞에 선택적으로 작성 가능한 함수 설명서

함수 반환 값
- 함수는 필요한 경우 결과를 반환할 수 있음
- `return` 키워드 이후에 반환할 값을 명시
- `return` 문은 함수의 실행을 **종료**하고, 결과를 호출 부분으로 반환
- 꼭 써야하는 부분은 아님(안 쓰면 파이썬 내에서 `return None`으로 처리)

함수 호출(call)  
`function_name(arguments)`
- 함수를 사용하기 위해서는 **호출**이 필요
- 함수의 이름과 소괄호를 활용해 호출
- 필요한 경우 인자(argument)를 전달해야 함
- 호출 부분에서 전달된 인자는 함수 정의 시 작성한 매개변수에 대입됨  

즉, 함수를 실행하기 위해 함수의 이름을 사용하여 해당 함수의 코드 블록을 실행하는 것.

<details>
     <summary> Return과 Print </summary>
<div markdown="1">

## Return과 Print
Return과 Print
```python
def make_sum(pram1, pram2):
    """이것은 두 수를 받아
    두 수의 합을 반환하는 함수입니다.
    >>> make_sum(1, 2)
    3
    """
    return pram1 + pram2

result = make_sum(100, 30)
return_value = print(result) # 130
print(return_value) # None
```
print에 return값은 없다는 것을 알아두기.
```python
def my_func():
  print("Hello, world")

result = my_func()
print(result)
```
</div>
</details>


# Parameters and Arguments
📍 매개변수 Paramter  
: 함수를 정의할 때, 함수가 받을 값을 나타내는 변수    
📍 인자 Argument  
: 함수를 호출할 때, 실제로 전달되는 값 

```python
def add_numbers(x,y): # x와 y는 매개변수(parameter)
  result = x+y
  retunr result

a = 2
b = 3
sum_result = add_numbers(a, b) # a와 b는 인자(argument)
print(sum_result)
```

## 1. 위치 인자
📍 Positional Arguments  
함수 호출 시 인자의 위치에 따라 전달되는 인자  
위치인자는 함수 호출 시 반드시 값을 전달해야 함.

```python
def greet(name, age):
  print(f'안녕하세요, {name}님! {age}살이시군요.')

greet('Alice', 25) # 안녕하세요, Alice님! 25살이시군요.
greet(25, 'Alice') # 안녕하세요, 25님! Alice살이시군요.
```
## 2. 기본 인자 값
📍 Default Argument Values  
함수 정의에서 매개변수에 기본 값을 할당하는 것  
함수 호출 시 인자를 전달하지 않으면, 기본값이 매개변수에 할당됨.

```python
def greet(name, age=30):
  print(f'안녕하세요, {name}님! {age}살이시군요.')

greet('Bob') # 안녕하세요, Bob님! 30살이시군요.
greet('Charlie', 40) # 안녕하세요, Charlie님! 40살이시군요.
```
## 3. 키워드 인자
📍 Keyword Arguments  
함수 호출 시 인자의 이름과 함께 값을 전달하는 인자  
매개변수와 인자를 일치시키지 않고, 특정 매개변수에 값을 할당할 수 있음  
인자의 순서는 중요하지 않으며, 인자의 이름을 명시하여 전달  
단, 호출시 **키워드 인자**는 **위치 인자** 뒤에 위치해야 함.

```python
def greet(name, age):
  print(f'안녕하세요, {name}님! {age}살이시군요.')

greet(name='Dave', age=35) # 안녕하세요, Dave님! 35살이시군요.
greet(age=35, name='Dave') # 안녕하세요, Dave님! 35살이시군요.
greet(age=35, 'Dave') # SyntaxError: positional argument follows keyword argument
greet('Dave', age=35)
```

## 4. 임의의 인자 목록
📍 Arbitrary Argument Lists  
정해지지 않은 개수의 인자를 처리하는 인자  
함수 정의 시 매개변수 앞에 `*`를 붙여 사용하며, 여러 개의 인자를 **tuple**로 처리

```python
def calculate_sum(*args):
  print(args)
  total = sum(args)
  print(f'합계: {total}')

calculate_sum(1,2,3)
# (1, 2, 3)
# 합계: 6
```
📌 args라고 꼭 안해도 되지만 암묵적으로 args을 사용함.


## 5. 임의의 키워드 인자 목록
📍 Arbitrary Keyword Argument Lists  
정해지지 않은 개수의 키워드 인자를 처리하는 인자  
함수 정의 시 매개변수 앞에 `**`를 붙여 사용하여, 여러 개의 인자를 **dictionary**로 묶어 처리
```python
def print_info(**kwargs):
  print(kwargs)

print_info(name='Eve', age=30)
# {'name': 'Eve', 'age': 30}
```

## 함수 인자 권장 작성 순서
- 위치 ➡ 기본 ➡ 가변 ➡ 가변 키워드
- 호출 시 인자를 전달하는 과정에서 혼란을 줄일 수 있도록 함.
- 단, 모든 상황에 적용되는 절대적인 규칙은 아니며, 상황에 따라 유연하게 조정될 수 있음.

```python
def func(pos1, pos2, default_arg = 'default', *args, **kwargs):
  ...

```

인자의 모든 종류를 적용한 예시
```python
def func(pos1, pos2, default_arg='default', *args, **kwargs):
    print('pos1:', pos1)
    print('pos2:', pos2)
    print('default_arg:', default_arg)
    print('args:', args)
    print('kwargs:', kwargs)


func(1, 2, 3, 4, 5, 6, key1='value1', key2='value2')

# pos1: 1
# pos2: 2
# default_arg: 3
# args: (4, 5, 6)
# kwargs: {'key1': 'value1', 'key2': 'value2
```
📌기본 인자 함수도 위치가 먼저 적용된다는 걸 확인 가능.


# Recursive Function
📍 재귀 함수 : 함수 내부에서 자기 자신을 호출하는 함수  

예시 - 팩토리얼
- factorial 함수는 자기 자신을 재귀적으로 호출하여 입력된 숫자 n의 팩토리얼을 계산
- 재귀 호출은 n이 0이 될 때까지 반복되며, 종료 조건을 설정하여 재귀 호출이 멈추도록 함.
- 재귀 호출의 결과를 이용하여 문제를 작은 단위의 문제로 분할하고, 분할된 문제들의 결과를 조합하여 최종 결과를 도출

```python
def factorial(n):
    # 종료 조건: n이 0이면 1을 반환
    if n == 0:
        return 1
    else:
        # 재귀 호출: n과 n-1의 팩토리얼을 곱한 결과를 반환
        return n * factorial(n - 1)


# 팩토리얼 계산 예시
print(factorial(7))  # 5040
```

```
n! = n*(n-1)*(n-2)*...*1
7! = 7*6*5*4*3*2*1 = 5040
5! = 5*4*3*2*1 = 120
0! = 1
```
<!-- ![recursive_function,_facotrial](image\function\recursive_function.png) -->

<div style="text-align: center;">
    <img src="image\function\recursive_function.png" alt="recursive_function" width="400"/>
</div>


## 재귀 함수 특징
- 특정 알고리즘 식을 표현할 때 변수의 사용이 줄어들며, 코드의 가독성이 높아짐.
- 1개 이상의 base case(종료되는 상황)가 존재하고, 수렴하도록 작성

## 재귀 함수를 사용하는 이유
- 문제의 자연스러운 표현 : 복잡한 문제를 간결하고 직관적으로 표현 가능
- 코드 간결성 : 상황에 따라 반복문보다 알고리즘 코드가 더 간결하고 명확해질 수 있음
- 수학적 문제 해결 : 수학적 정의가 재귀적으로 표현되는 경우, 직접적인 구현 가능

## 재귀 함수 활용 시 기억해야 할 것
1. 종료 조건 명확히
2. 반복되는 호출이 종료 조건을 향하도록

# Built in Function
📍 내장 함수  
파이썬이 기본적으로 제공하는 함수(별도의 import 없이 바로 사용 가능)

<div style="text-align: center;">
  <img src = "image\function\built-in-functions.png" alt="built in functions." width="400"/>
</div>

```python
# 자주 사용되는 내장 함수 예시
numbers = [1, 2, 3, 4, 5]

print(len(numbers))  # 5
print(max(numbers))  # 5
print(min(numbers))  # 1
print(sum(numbers))  # 15
print(sorted(numbers, reverse=True))  # [5, 4, 3, 2, 1]
```

📌외장함수란 없다.(function과 built-in-function 밖에 없음)

## Built in Function - map
`map(function, iterable)`  
순회 가능한 데이터구조(iterable)의 모든 요소에 함수를 적용하고, 그 결과를 map object로 반환

```python
# map
numbers = [1, 2, 3]
result = map(str, numbers)
print(result)  # <map object at 0x00000239C915D760>
print(list(result))  # ['1', '2', '3']

numbers1 = input().split()
print(numbers1)  # ['1,', '2,', '3']

numbers2 = list(map(int, input().split()))
print(numbers2)  # [1, 2, 3]
```

## Built in Function - zip
`zip(*iterables)`  
임의의 iterable을 모아 튜플을 원소로 하는 zip ojbect를 반환

```python
# zip
girls = ['jane', 'ashley']
boys = ['peter', 'jay']
pair = zip(girls, boys)
print(pair)  # <zip object at 0x000001C76DE58700>
print(list(pair))  # [('jane', 'peter'), ('ashley', 'jay')]

girls = ['jane', 'ashley', 'suhyun']
boys = ['peter', 'jay']
pair = zip(girls, boys)
print(pair)  # <zip object at 0x000001C76DE58700>
print(list(pair)) 
```

길이가 다르면 길이가 최소인 것으로 맞춰지는 것 같음.

### 여러 개의 리스트를 동시에 조회
```python
kr_scores = [10, 20, 30, 50]
math_scores = [20, 40, 50, 70]
en_scores = [40, 20, 30, 50]

for student_scores in zip(kr_scores, math_scores, en_scores):
    print(student_scores)

# (10, 20, 40)
# (20, 40, 20)
# (30, 50, 30)
# (50, 70, 50)
```

### 2차원 리스트의 같은 컬럼(열) 요소를 동시에 조회
```python
scores = [
    [10, 20, 30],
    [40, 50, 39],
    [20, 40, 50],
]
for score in zip(*scores):
    print(score)

# (10, 40, 20)
# (20, 50, 40)
# (30, 39, 50)
```

# Function and Scope
함수는 코드 내부에 local scope를 생성하며, 그 외의 공간인 global scope로 구분 (scope = 범위)

## 범위와 변수 관계
- scope
  - global scope : 코드 어디에서든 참조할 수 있는 공간
  - local scope : 함수가 만든 scope (함수 내부에서만 참조 가능)
- variable
  - global varible : global scope에 정의된 변수
  - local variable : local scope에 정의된 변수

### example
```python
def func():
  num =20
  print('local', num) # local 20

func()

print('global', num) # NameError: name 'num' is not defined
```
num은 local scope에 존재하기 때문에 global scope에서 사용할 수 없음  
이는 변수의 수명주기와 연관이 있음

### lifecycle
📍 변수 수명주기
변수의 수명주기는 변수가 선언되는 위치와 scope에 따라 결정됨
1. built-in scope
  - 파이썬이 실행된 이후부터 영원히 유지
2. global scope
  - 모듈이 호출된 시점 이후 혹은 인터프리터가 끝날 때까지 유지
3. local scope
  - 함수가 호출될 떄 생성되고, 함수가 종료될 때까지 유지

### Name Resolution
📍 이름 검색 규칙
- 파이썬에서 사용되는 이름(식별자)들은 특정한 이름공간(namespace)에 저장되어 있음.
- 아래와 같은 순서로 이름을 찾아 나가며, LEGB Rule이라고 부름.

<div style="text-align: center;">
  <img src="https://core-electronics.com.au/media/wysiwyg/tutorials/Tim/Speed/first_image.png" width="300"/>
</div>

[사진 출처](https://core-electronics.com.au/guides/python-scope/)

1. local scope : 지역 범위(현재 작업 중인 범위)
2. enclose scope : 지역 범위 한 단계 위 범위
3. global scope : 최상단에 위치한 범위
4. built-in scope : 모든 것을 담고 있는 범위(정의하지 않고 사용할 수 있는 모든 것)

**함수 내에서는 바깥 scope의 변수에 접근 가능하나 수정할 수 없음.**

### LEGB Rule Example
- sum이라는 이름을 global scope에서 사용하게 되면서 기존에 built-in scope에 있던 내장함수 sum을 사용하지 못하게 됨
- sum을 참조 시 LEGB Rule에 따라 **global에서 먼저 찾기 때문**
```python
print(sum) # <built-in function sum>
print(sum(range(3))) # 3

sum = 5 # global

print(sum) # 5
print(sum(range(3))) # TypeError: 'int' object is not callable
```

sum 변수 객체 삭제를 위해 del sum을 입력 후 진행
```python
del sum
```

```python
a = 1 # global
b = 2 # global


def enclosed():
    a = 10 # local
    c = 3 # local

    def local(c):
        # 위에 있는 c : parameter
        print(a, b, c)  #10 2 500

    local(500)
    print(a, b, c)  # 10 2 3 # local, global, local


enclosed()

print(a, b)  # 1 2 # global, global
```

## global keyword
변수의 스코프를 전역 범위로 지정하기 위해 사용  
일반적으로 함수 내에서 전역 변수를 수정하려는 경우에 사용  

```python
num = 0 # global variable

def increment():
  global num # num을 global variable로 선언
  num += 1

print(num) # 0
increment()
print(num) # 1
```

⚠ 주의사항
- global 키워드 선언 전에 참조 불가
```python
num = 0 # global variable

def increment():
  print(num)
  global num # SyntaxError: name 'num' is used prior to global declaration
  num += 1
```
- 매개변수에는 global 키워드 사용 불가
```python
num = 0 # global variable

def increment(num):
  global num # SyntaxError: name 'num' is parameter and global
  num += 1
```
# Packing, Unpacking
## Packing
📍 패킹 : 여러 개의 값을 하나의 변수에 묶어서 담는 것

변수에 담긴 값들을 튜플(tuple)형태로 묶임
```python
packed_values = 1, 2, 3, 4, 5
print(packed_values) # (1, 2, 3, 4, 5)
```

`*`을 활용한 패킹
```python
numbers = [1, 2, 3, 4, 5]
a, *b, c = numbers
print(a)  # 1
print(b)  # [2, 3, 4]
print(c)  # 5
```
- `*b`는 남은 요소들을 **리스트**로 패킹하여 할당
- print 함수에서 임의의 가변 인자를 작성할 수 있었던 이유 : 인자 개수에 상관없이 **튜플** 하나로 패킹 되어서 내부에서 처리.
```python
def my_func(*objects):
    print(objects)  # (1, 2, 3, 4, 5)
    print(type(objects))  # <class 'tuple'>

my_func(1, 2, 3, 4, 5)
# (1, 2, 3, 4, 5)
# <class 'tuple'>
```
<div style = "text-align : center;">
  <img src = "image\function\print.png" height= "120"/>
</div>

## Unpacking
📍 언패킹 : 패킹된 변수의 값을 개별적인 변수로 분리하여 할당하는 것  

튜플이나 리스트 등의 객체의 요소들을 개별 변수에 할당
```python
packed_values = 1, 2, 3, 4, 5
a, b, c, d, e = packed_values

print(a, b, c, d, e) # 1 2 3 4 5
```

`*`을 활용한 언패킹
- `*`는 리스트의 요소를 언패킹하여 인자로 전달
```python
def my_function(x, y, z):
  print(x, y, z)

names = ['alice', 'jane', 'peter']
my_function(*names)
```

`**`을 활용한 언패킹
- `**`는 딕셔너리의 키-값 쌍을 언패킹하여 함수의 키워드 인자로 전달

```python
def my_function(x, y, z):
  print(x, y, z)

my_dict = {'x': 1, 'y': 2, 'z': 3}
my_function(**my_dict)  # 1 2 3
```
- 키워드 매칭이기 때문에 키를 잘 맞춰주는 것이 중요하다.

`*`, `**` 패킹/언패킹 연산자 정리
- `*`
  - 패킹 연산자로 사용될 때, 여러 개의 인자를 하나의 튜플로 묶음
  - 언패킹 연산자로 사용될 때, 시퀀스나 반복 가능한 객체를 각각의 요소로 언패킹하여 함수의 인자로 전달
- `**`
  - 언패킹 연산자로 사용될 때, 딕셔너리의 키-값 상을 언패킹하여 함수의 키워드 인자로 전달 


# Lambda expressions
📍 람다 표현식  
익명 함수를 만드는 데 사용되는 표현식  
즉, 한 줄로 간단한 함수를 정의

## Structure
`lambda 매개변수 : 표현식 `
- lambda 키워드
  - 람다 함수를 선언하기 위해 사용되는 키워드
- 매개변수
   - 함수에 전달되는 매개변수들
   - 여러 개의 매개변수가 있을 경우 쉼표로 구분
- 표현식
  - 함수의 실행되는 코드 블록으로, 결과값을 반환하는 표현식으로 작성

## 예시
- 간단한 연산이나 함수를 한 줄로 표현할 때 사용
- 함수를 매개변수로 전달하는 경우에도 유용하게 활용
```python
def addition(x, y):
  retunr x + y

result = addition(3, 5)
print(result) # 8
```
```python
addition = lambda x, y: x+y
result = addition(3, 5)
print(result) # 8
```

## 활용
- 1회성 함수를 만들고자 할 때
- 주로 map 함수와 함께 사용
```python
# with map 함수
numbers = [1, 2, 3, 4, 5]

def square(x):
    return x**2

# lambda 미사용
squared1 = list(map(square, numbers))
print(squared1)  # [1, 4, 9, 16, 25]

# lambda 사용
squared2 = list(map(lambda x: x**2, numbers))
print(squared2) # [1, 4, 9, 16, 25]
```
