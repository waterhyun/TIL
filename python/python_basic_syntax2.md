# Python_basic_syntax 2
## Contents
- [Data Types](#data-types)
  * [Numeric Types](#numeric-types)
    + [1) int](#1--int)
    + [2) float](#2--float)
    + [3) complex](#3--complex)
  * [Sequence Types](#sequence-types)
    + [1) str](#1--str)
    + [2) list](#2--list)
    + [3) tuple](#3--tuple)
    + [4) range](#4--range)
  * [Non-sequence Types](#non-sequence-types)
    + [1) dict](#1--dict)
    + [2) set](#2--set)
  * [Other Types](#other-types)
    + [1) None](#1--none)
    + [2) Boolean](#2--boolean)
- [Collection](#collection)
- [형변환 Type Conversion](#----type-conversion)
  * [암시적 형변화 implicit type conversion](#--------implicit-type-conversion)
  * [명시적 형변화 Explicit Type conversion](#--------explicit-type-conversion)
- [연산자](#---)
  * [산술 연산자](#------)
  * [복합 연산자](#------)
  * [비교 연산자](#------)
  * [논리 연산자](#------)
  * [단축평가](#----)
  * [멤버십 연산자](#-------)
  * [시퀀스형 연산자](#--------)
  * [연산자 우선순위 정리](#-----------)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# Data Types  
## Numeric Types
[python_basic_syntax 참고](https://github.com/waterhyun/TIL/blob/master/python/python_basic_syntax.md)
### 1) int
### 2) float
### 3) complex


## Sequence Types
### 1) str
[python_basic_syntax 참고](https://github.com/waterhyun/TIL/blob/master/python/python_basic_syntax.md)

### 2) list
📍 여러 개의 값을 순서대로 저장하는 변경 가능한 시퀀스 자료형

📌 리스트 표현
- 0개 이상의 객체를 포함하여 데이터 목록을 저장
- 대괄호([])로 표기
- 데이터는 어떤 자료형도 저장할 수 있음.

```python
my_list_1 = []
my_list_2 = [1, 'a', 3, 'b', 5]
my_list_3 = [1, 2, 3, 'python', ['hello', 'world', '!!!']]
```

📌 리스트의 시퀀스 특징
```python
my_list = [1, 'a', 3, 'b', 5]

# indexing
print(my_list[1]) # a

# slicing
print(my_list[2:4]) # [3, 'b']
print(my_list[:3]) # [1, 'a', 3]
print(my_list[3:0]) # ['b', 5]
print(my_list[0:5:2]) # [1, 3, 5]
print(my_list[::-1]) # [5, 'b', 3, 'a', 1]

# 길이
print(len(my_list)) # 5
```

📌 중첩된 리스트 접근
```python
my_list = [1, 2, 3, 'Python', ['hello', 'world', '!!!']]
print(len(my_list)) # 5
print(my_list[4][-1]) # !!!
print(my_list[-1][1][0]) # w
```
중첩된 리스트는 1개로 판단.


📌 리스트는 가변
```python
my_list = [1,2,3]
my_list[0] = 100
print(my_list) # [100, 2, 3]

```


📌 리스트의 언패킹
```python
my_list = [1,2,3]
a, b, c = my_list
print(a, b, c) # 1 2 3
```

### 3) tuple
📍 여러 개의 값을 순서대로 저장하는 변경 불가능한 시퀀스 자료형


📌 튜플 표현
- 0개 이상의 객체를 포함하여 데이터 목록을 저장
- 소괄호(())로 표기
- 데이터는 어떤 자료형도 저장할 수 있음.

```python
my_tuple_1 = ()
my_tuple_2 = (1, )
my_tuple_3 = (1, 'a', 3, 'b', 5)

my_tuple_2[0] # 1
my_tuple_2[1]
# Traceback (most recent call last):
#   File "<pyshell#10>", line 1, in <module>
#     my_tuple_2[1]
# IndexError: tuple index out of range
```

```python
my_tuple_temp = (1)
```
⭐ 위와 같이 작성하면 tuple이 벗겨저서 int가 된다는 것을 알아 두기.

📌 튜플의 시퀀스 특징
```python
my_tuple = (1, 'a', 3, 'b', 5)

# indexing
print(my_tuple[1]) # a

# slicing
print(my_tuple[2:4]) # [3, 'b']
print(my_tuple[:3]) # [1, 'a', 3]
print(my_tuple[3:0]) # ['b', 5]
print(my_tuple[0:5:2]) # [1, 3, 5]
print(my_tuple[::-1]) # [5, 'b', 3, 'a', 1]

# 길이
print(len(my_tuple)) # 5
```

📌 튜플은 불변
```python
my_tuple = (1, 'a', 3, 'b', 5)
my_tuple[1] #'a'
my_tuple[1]='z'
# Traceback (most recent call last):
#   File "<pyshell#13>", line 1, in <module>
#     my_tuple[1]='z'
# TypeError: 'tuple' object does not support item assignment
```

> ⭐ 튜플의 불변 특성을 사용한 안전하게 여러 개의 값을 전달, 그룹화, 다중 할당 등
> 개발자가 직접 사용하기 보다 **파이썬 내부 동작**에서 주로 사용됨.

```python
x, y = (10, 20)
print(x)
print(y)

# 파이썬은 쉼표를 튜플 생성자로 사용하니 괄호는 생략 가능(언패킹)
x, y = 10, 20
```

### 4) range
📍 연속된 정수 시퀀스를 생성하는 변경 불가능한 자료형

`range(시작 값, 끝 값, 증가 값)`

- `range(n)` : 0부터 n-1까지의 숫자의 시퀀스
- `range(n, m)` : n부터 m-1까지의 숫자 시퀀스

📌 특징
- 증가 값이 없으면 1씩 증가
- 증가 값이 음수이면 감소/  
증가 값이 양수이면 증가
- 증가값이 0이면 에러
- 증가 값이 음수이면 시작 값이 끝 값보다 커야 함
- 증가 값이 양수이면 시작 값이 끝 값보다 작아야 함.

```python
my_range_1 = range(5)
my_range_2 = range(1, 10)
print(my_range_1) # range(0, 5)
print(my_range_2) # range(1, 10)
```
📌 range 표현  
주로 반복문과 함께 사용 예정
```python
# 리스트로 형 변환 시 데이터 확인 가능
print(list(range(5))) # [0, 1, 2, 3, 4]
print(list(range(1, 10))) # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# 반복문과 함께 사용
for i in range(1, 10):
	print(i)
	
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9

for i in range(1, 10, 2):
	print(i)	
# 1
# 3
# 5
# 7
# 9

```

## Non-sequence Types
### 1) dict
📍 key-value 쌍으로 이루어진 순서와 중복이 없는 변경 가능한 자료형

📌 딕셔너리 표현
- key는 변경 불가능한 자료형만 사용 가능
  - str, int, float, tuple, range, ...
- value는 모든 자료형 사용 가능
- 중괄호({})로 표기
```python
my_dict_1 = {}
my_dict_2 = {'key': 'value'}
my_dict_3 = {'apple': 12, 'list': [1, 2, 3]}
print(my_dict_1)  # {}
print(my_dict_2)  # {'key': 'value'}
print(my_dict_3)  # {'apple': 12, 'list': [1, 2, 3]}
```

📌 딕셔너리 사용  
key를 통해 value에 접근

```python

my_dict = {'apple': 12, 'list': [1, 2, 3]}
print(my_dict['apple']) # 12
print(my_dict['list']) # [1, 2, 3]

# 추가
my_dict['banana'] = 50
print(my_dict) # {'apple': 12, 'list': [1, 2, 3], 'banana': 50}

# 변경
my_dict['apple'] = 100
print(my_dict) # {'apple': 100, 'list': [1, 2, 3], 'banana': 50}
```

### 2) set
📍 순서와 중복이 없는 변경 가능한 자료형 

📌 세트 표현
- 수학에서의 집합과 동일한 연산 처리 가능
- 중괄호({})로 표기

```python
my_set_1 = set()
my_set_2 = {1, 2, 3}
my_set_3 = {1, 1, 1}
print(my_set_1)  # set()
print(my_set_2)  # {1, 2, 3}
print(my_set_3)  # {1}
```

📌 세트의 집합 연산
```python
my_set_1 = {1, 2, 3}
my_set_2 = {3, 6, 9}

# 합집합
print(my_set_1 | my_set_2)  # {1, 2, 3, 6, 9}

# 차집합
print(my_set_1 - my_set_2)  # {1, 2}

# 교집합
print(my_set_1 & my_set_2)  # {3}
```

## Other Types
### 1) None
📍 파이썬에서 **값이 없음**을 표현하는 자료형

📌 None 표현
```python
# None
variable = None
print(variable)  # None
```
### 2) Boolean
📍 참(True)과 거짓(False)을 표현하는 자료형

📌불리언 표현
- 비교/논리 연산의 평가 결과로 사용됨
- 주로 조건/반복문과 함께 사용

```python
# Boolean
bool_1 = True
bool_2 = False
print(bool_1)  # True
print(bool_2)  # False
print(3 > 1)  # True
print('3' != 3)  # True
```

# Collection
여러 개의 항목 또는 요소를 담는 자료 구조

| collection | 변경 가능 여부 | 순서 여부| 
|-----| ----- |-----|
|str|X|O|
|list|O|O|
|tuple|X|O|
|dict|O|X|
|set|O|X|

📌 불변과 가변의 차이
```python
# mutable (불변)
my_str = 'hello'
my_str[0] = 'z' # TypeError: 'str' object does not support item assignment


# immutable (가변)
my_list = [1, 2, 3]
my_list[0] = 100
print(my_list) # [100, 2, 3]
```

# 형변환 Type Conversion
한 데이터 타입을 다른 데이터 타입으로 변환하는 과정

## 암시적 형변화 implicit type conversion
- 정수와 실수의 연산에서 정수가 실수로 변환됨
- boolean과 numeric type에서만 가능
```python
print(3+5.0) # 8.0
print(3+True) # 4
print(True + False) # 1
```

## 명시적 형변화 Explicit Type conversion
프로그래머가 직접 지정하는 형변환 암시적 형변환이 아닌 경우를 모두 포함

||str|list|tuple|range|set|dict|
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
|str| | O | O | X | O | X |
|list| O |  | O | X | O | X |
|tuple| O | O |  | X | O | X |
|range| O | O | O |  | O | X |
| set | O | O | O | X |  | X |
| dict | O | O(key만) | O(key만) | X | O(key만) |  |

📌`str` -> `int`: 형식에 맞는 숫자만 가능
```python
print(int('1')) # 1
print(int('3.5')) # ValueError: invalid literal for int() with base 10: '3.5'
print(int(3)) # 3 
print(float('3.5')) # 3.5
```
📌 `int` -> `str` : 모두 가능
```python
print(str(1)+'등') # 1등
```


# 연산자 
## 산술 연산자
| 기호 | 연산자            |
| ------ | --------------- |
| - | 음수 부호 |
| +  | 덧셈 |
| -   | 뺄셈 |
| *  | 곱셈 |
| /  |  나눗셈  |
| //  | 정수 나눗셈(몫) |
| %  | 나머지 |
| **  | 지수(거듭제곱) |

## 복합 연산자
| 기호 | 연산자 | 의미 |
| ------ | ------ | ------ |
| += | a += b | a = a + b |
| -= | a -= b | a = a - b |
| *= | a *= b | a = a * b |
| /= | a /= b | a = a / b |
| //= | a //= b | a = a // b |
| %= | a %= b | a = a % b |
| **= | a **= b | a = a ** b |

```python
# 복합 연산자
y = 10
y -= 4
print(y)  # 6

z = 7
z *= 2
print(z)  # 14

w = 15
w /= 4
print(w)  # 3.75

q = 20
q //= 3
print(q)  # 6
```

## 비교 연산자
| 기호 | 내용 |
| ------ | ------- |
| < | 미만 |
| <= | 이하 |
| > | 초과 |
| >= | 이상 |
| == | 같음 |
| != | 같지 않음 |
| is | 같음 |
| is not | 같지 않음 |

📌`is` 비교 연산자
- 메모리 내에서 같은 객체를 참조하는지 확인
- `==`는 동등성(eqaulity), `is`는 식별성(identify)
- 값을 비교하는 `==`와 다름

  | 기호 | 내용 |
  | ------ | ------- |
  | is | 같음 |
  | is not | 같지 않음 |

```python
# 비교 연산자
print(3 > 6)  # False
print(2.0 == 2)  # True
print(2 != 2)  # False
print('HI' == 'hi')  # False
print(1 == True)  # True
```
```python
# SyntaxWarning: "is" with a literal. Did you mean "=="?
# ==은 값(데이터)을 비교하는 것이지만 is는 레퍼런스(주소)를 비교하기 때문
# 아래 조건은 항상 False이기 때문에 is 대신 ==를 사용해야 한다는 것을 알림
print(1 is True)  # False
print(2 is 2.0)  # False
print(1 == True)  # True
print(2 == 2.0)  # True
```

## 논리 연산자
| 기호 | 연산자 | 의미 |
| ------ | ------ | ------ |
| and | 논리곱 | 두 피연산자 모두 True인 경우에만 전체 표현식을 True로 평가 |
| or | 논리합 | 두 피연산자 중 하나라도 True인 경우 전체 표현식을 True로 평가 |
| not | 논리부정 | 단일 피연산자를 부정 |

```python
# 논리 연산자
print(True and False)  # False
print(True or False)  # True
print(not True)  # False
print(not 0)  # True
```

비교 연산자와 논리 연산자와 함께 사용 가능
```python
# 논리 연산자 & 비교 연산자
num = 15
result = (num > 10) and (num % 2 == 0)
print(result)  # False

name = 'Alice'
age = 25
result = (name == 'Alice') or (age == 30)
print(result)  # True
```

## 단축평가  
논리 연산에서 두 번째 피연산자를 평가하지 않고 결과를 결정하는 동작  
(첫 번째 조건의 결과에 따라 두 번째 조건을 확인하지 않아도 결과가 정해짐.)

```python
# 단축 평가
vowels = 'aeiou'

print(('a' and 'b') in vowels)  # False 
print(('b' and 'a') in vowels)  # True

print(3 and 5)  # 3 참 -> 5 (오른쪽)
print(3 and 0)  # 3 참 -> 0 (오른쪽)
print(0 and 3)  # 0 거짓 -> 0 (왼쪽)
print(0 and 0)  # 0 거짓 -> 0 (왼쪽)

print(5 or 3)  # 5 참 -> 5 (왼쪽)
print(3 or 0)  # 3 참 -> 3 (왼쪽)
print(0 or 3)  # 0 거짓 -> 3 (오른쪽)
print(0 or 0)  # 0 거짓 -> 0 (오른쪽)
```

+) `'a' and 'b'`가 먼저 평가. python에서 'and'연산자는 왼쪽 피연산자가 참이면 오른쪽 피연산자를 반환하고 그렇지 않으면 왼쪽 피연산을 반환함.
```python
vowels = 'aeiou'
print(('a' and 'b') in vowels)  # False 
```
- 'a'는 참(비어있지 않은 문자열) -> 'b'가 반환
- ` 'b' in vowels`로 변환되는데 값이 `False`

+) `'a' or 'b'`가 먼저 평가. python에서 'and'연산자는 왼쪽 피연산자가 참이면 왼쪽 피연산자를 반환하고 그렇지 않으면 오른쪽 피연산을 반환함.

📌 summary
> and 연산자
>> 첫 번째 피연산자가 거짓이면 첫 번째 피연산자를 반환하고, 그렇지 않으면 두 번째 피연산자를 반환합니다.  (❓ 둘다 True여야 True니까)  
>> 예를 들어, a and b에서:  
>> - a가 거짓이면 a를 반환합니다. (하나만 거짓이면 거짓)
>> - a가 참이면 b를 반환합니다.  (둘다 참인지 확인)

> or 연산자
>> 첫 번째 피연산자가 참이면 첫 번째 피연산자를 반환하고, 그렇지 않으면 두 번째 피연산자를 반환합니다. (❓ 하나만 True면 True니까)  
>> 예를 들어, a or b에서:
>> - a가 참이면 a를 반환합니다. (하나만 참이면 참)
>> - a가 거짓이면 b를 반환합니다. (거짓이면 나머지 하나도 확인해야함)

📌 단축평가 이유  
코드 실행을 최적화하고, 불필요한 연산을 피할 수 있도록 함  

## 멤버십 연산자
📍 특정 값이 시퀀스나 다른 컬렉션에 속하는지 여부를 확인
| 기호 | 내용 |
| ----- | ----- |
| in | 왼쪽 피연산자가 오른쪽 피연산자의 시퀀스에 속하는지를 확인 |
| not in | 왼쪽 피연산자가 오른쪽 피연산자의 시퀀스에 속하지 않는지를 확인 |

```python
# 멤버십 연산자

word = 'hello'
numbers = [1, 2, 3, 4, 5]

print('h' in word)  # True
print('z' in word)  # False

print(4 not in numbers)  # False
print(6 not in numbers)  # True
```

## 시퀀스형 연산자
📍 `+`와 `*`는 시퀀스 간 연산에서 산술 연사자일때와 다른 역할을 가짐.

| 연산자 | 내용 |
| ----- | ----- |
| + | 결합 연산자 |
| * | 반복 연산자 |

```python
# 시퀀스형 연산자

print('Gildong' + ' Hong')  # Gildong Hong
print('hi' * 5)  # hihihihihi

print([1, 2] + ['a', 'b'])  # [1, 2, 'a', 'b']
print([1, 2] * 2)  # [1, 2, 1, 2]
```

## 연산자 우선순위 정리
| 우선순위 | 연산자 | 내용 |
| ------ | ------ | ------ |
| 높음 | () | 소괄호 grouping |
| | [] | 인덱싱, 슬라이싱 |
| | ** | 거듭제곱 |
| | +, - | 단항 연산자 양수/ 음수|
| | *, /, //, % | 산술 연산자|
| | +, -| 산술 연산자|
| | <, <=, >, >=, ==, != | 비교 연산자 |
| | is, is not| 객체 비교 |
| | in, not in| 멤버십 연산자 |
| | not | 논리 부정 |
| | and | 논리 AND |
| 낮음 | or| 논리 OR |

<br>  

------

summary


| Data Types | Orderd | Mutable | Constructor |
| ----- | ----- | ----- | ----- |
| Str | Yes | No | `''` or `str()` |
| List | Yes | Yes | `[]` or `list()` |
| Tuple | Yes | No | `()` or `tuple()` |
| Set | No | Yes | `{}` or `set()` |
| Dictionary | No | Yes* | `{}` or `dict()` |

📍 여러 개의 값을 순서대로 저장하는 변경 가능한 시퀀스 자료형 = list  
📍 여러 개의 값을 순서대로 저장하는 변경 불가능한 시퀀스 자료형 = tuple  
📍 key-value 쌍으로 이루어진 순서와 중복이 없는 변경 가능한 자료형 = dictionary  
📍 순서와 중복이 없는 변경 가능한 자료형 = tuple

A dictionary itself is mutable, but each of its individual keys must be immutable.




