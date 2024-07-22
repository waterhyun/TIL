## Contents
- [자료 구조](#data-structure)
  * [메서드](#method)
- [순차 자료 구조](#sequence-data-structure)
  * [문자열](#string)
    + [문자열 조회/탐색 및 검증 메서드](#문자열-조회탐색-및-검증-메서드)
      - `s.find(x)`
      - `s.index(x)`
      - `.isupper(x)`, `.islower(x)`
    + [문자열 조작 메서드(새 문자열 반환)](#문자열-조작-메서드새-문자열-반환)
      - `.replace(old, new[, count])`
      - `.strip([chars])`
      - `.split(sep=None, maxsplit = -1)`
      - `'separator'.join(iterable)`
      - `s.capitalize()`, `s.title()`, `s.upper()`, `s.lower()`, `s.swapcase()`
  * [리스트](#list)
    + [리스트 값 추가 및 삭제 메서드](#리스트-값-추가-및-삭제-메서드)
      - `L.append(x)`
      - `L.extend(iterable)`
      - `L.insert(i, x)`
      - `L.remove(x)`
      - `L.pop()`, `L.pop(i)`
      - `L.clear()`
    + [리스트 탐색 및 정렬 메서드](#리스트-탐색-및-정렬-메서드)
      - `L.index(x)`
      - `L.count(x)`
      - `L.reverse()`
      - `L.sort()`
- [기타](#etc)
  * [복사](#copy)
    + [변경 가능한 데이터 타입](#변경-가능한-데이터-타입)
    + [변경 불가능한 데이터 타입](#변경-불가능한-데이터-타입)
    + [복사 유형](#복사-유형)
      - [할당 (Assignment)](#assignment)
      - [얕은 복사 (Shallow copy)](#shallow-copy)
      - [깊은 복사 (Deep copy)](#deep-copy)
  * [문자 유형 판별 메서드](#문자-유형-판별-메소드)


<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# Data Structure
📍 여러 데이터를 효과적으로 사용, 관리하기 위한 구조(str, list, dict 등)  

📍 자료구조
- 컴퓨터 공학에서는 '자료 구조'
- 각 데이터의 효율적인 저장, 관리를 위한 구조를 나눠 놓은 것

<p align="center">
 <img src = "image\data-structure\data-structure.png" width = 300>
</p>

📌데이터 구조 활용
- 문자열, 리스트, 딕셔너리 등 각 데이터 구조의 메서드를 호출하여 다양한 기능을 활용

## Method
📍 메서드 : 객체에 속한 함수  
객체의 상태를 조작하거나 동작을 수행  

📌 특징
- 메서드는 클래스(class) 내부에 정의되는 함수
- 클래스는 파이썬에서 '타입을 표현하는 방법'이며 이미 은연중에 사용해왔음
- 예를 들어 help라는 함수를 통해 str를 호출해보면 class였다는 것을 확인가능

**⭐ 데이터 타입은 내장함수이면서도 클래스이기도 함**

> 메서드는 어딘가(클래스)에 속해 있는 **함수**이며,
> 각 데이터 타입별로 다양한 기능을 가진 메서드가 존재

📍 메서드 호출 방법  
`데이터 타입 객체.메서드()`  
예시 
```python
# 문자열 메서드 예시
print('hello'.capitalize()) # Hello

# 리스트 메서드 예시
numbers = [1, 2, 3]
numbers.append(4)

print(numbers) # [1, 2, 3, 4]
```

# Sequence Data Structure
## String
| method | discription |
| ------ | ----------- |
| s.find(x) | x의 첫 번째 위치를 반환. 없으면, -1을 반환|
| s.index(x) | x의 첫 번째 위치를 반환. 없으면, 오류 발생 |
| s.isupper() | 대문자 여부 |
| s.islower() | 소문자 여부 |
| s.isalpha() | 알파벳 문자 여부 <br>*단순 알파벳이 아닌 유니코드 상 Letter (한국어도 포함)|

> 문자열은 바꿀 수 있는 것이 아니기 때문에 반환하는 것임  
> 문자열 : 문자들의 순서가 있는 변경 불가능한 시퀀스 자료형


### 문자열 조회/탐색 및 검증 메서드
#### `s.find(x)`
x의 첫 번째 위치를 반환. 없으면, -1을 반환
```python
print('banana'.find('a')) # 1
print('banana'.find('z')) # -1
```

#### `s.index(x)`
x의 첫 번째 위치를 반환. 없으면, 오류 발생
```python
print('banana'.index('a')) # 1
print('banana'.index('z')) # ValueError: substring not found
```

#### `.isupper(x)`, `.islower(x)`
문자열이 **모두** 대문자/소문자로 이루어져 있는지 확인
```python
string1 = 'HELLO'
string2 = 'Hello'
print(string1.isupper())  # True
print(string2.isupper())  # False
print(string1.islower())  # False
print(string2.islower())  # False
```

### 문자열 조작 메서드(새 문자열 반환)
|                  Method                 	|                                              discription                                            	|
|---------------------------------------	|-----------------------------------------------------------------	|
|      **s.replace(old,   new[,count])**     	|     바꿀 대상 글자를 새로운 글자로 바꿔서 반환                                               	|
|             **s.strip([chars])**            	|     공백이나 특정 문자를 제거                                                                	|
|     **s.split(sep=None,   maxsplit=-1)**    	|     공백이나 특정 문자를 기준으로 분리                                                       	|
|       **'separator'.join(iterable)**      	|     구분자로 iterable의 문자열을 연결한 문자열을 반환                                           |
|              s.capitalize()             	|     가장   첫 번째   글자를   대문자로   변경                                                	|
|                 s.title()               	|     문자열 내 띄어쓰기 기준으로 각 단어의 첫 글자는 대문자로,      나머지는 소문자로 변환    	|
|                 s.upper()               	|     모두   대문자로 변경                                                                     	|
|                 s.lower()               	|     모두   소문자로 변경                                                                     	|
|               s.swapcase()              	|     대↔소문자 서로 변경                                                                      	|

#### `.replace(old, new[, count])`
바꿀 대상 글자를 새로운 글자로 바꿔서 반환  

```python
text = 'Hello, world!'
new_text = text.replace('world', 'Python')
print(new_text)  # Hello, Python!

text = 'Hello, world! world!  world!'
new_text = text.replace('world', 'Python', 1)
print(new_text)  # Hello, Python! world!  world!
```

#### `.strip([chars])`
문자열의 시작과 끝에 있는 공백 혹은 지정한 문자를 제거

```python
text = '   Hello, world!   '
new_text = text.strip()
print(new_text) # 'Hello, world!'
```

#### `.split(sep=None, maxsplit = -1)`
지정한 문자를 구분자로 문자열을 분리하여 문자열의 리스트로 반환

```python
text = 'Hello, world!'
words = text.split(',')
print(words) # ['Hello', ' world!']
```

#### `'separator'.join(iterable)`
iterable의 문자열을 연결한 문자열을 반환

```python
words = ['Hello', 'world!']
text = '-'.join(words)
print(text) # 'Hello-world!'
```

#### `s.capitalize()`, `s.title()`, `s.upper()`, `s.lower()`, `s.swapcase()`

```python
text = 'heLLo, woRld!'
new_text1 = text.capitalize()  # Hello, world!
new_text2 = text.title()  # Hello, World! # 공백 다음에 대문자 처리
new_text3 = text.upper()  # HELLO, WORLD!
new_text4 = text.lower()  #hello, world!
new_text5 = text.swapcase()  # HEllO, WOrLD!
```

**⭐ 메서드는 이어서 사용 가능하다**
```python
text = 'heLLo, woRld!'
new_text = text.swapcase().replace('l', 'z')
print(new_text)  # HE zzO, WOrLD!
```
단, 100%는 아니다.
- swapcase()이후에 반환되는 결과가 replace()랑 이어질 수 있기 때문에 가능한 것임.
- swapcase()가 아니라 isalpha()이런거라면 T/F가 나오기 때문에 replace()랑 이어갈 수 없음.
- 무조건은 아니라는 것을 꼭! 알아두기

## List
### 리스트 값 추가 및 삭제 메서드
|          메서드         	|                                                   설명                                                  	|
|-----------------------	|-------------------------------------------------------------------------------------------------------	|
|        **L.append(x)**      	|     리스트   마지막에 항목 x를   추가                                                                   	|
|        **L.extend(m)**      	|     Iterable m의   모든 항목들을 리스트 끝에 추가 (+=과   같은 기능)                                    	|
|     L.insert(i,   x)    	|     리스트   인덱스 i에 항목 x를 삽입                                                                   	|
|        L.remove(x)      	|     리스트   가장 왼쪽에 있는 항목(첫 번째)   x를   제거     항목이 존재하지 않을 경우,   ValueError    	|
|          **L.pop()**        	|     리스트   가장 오른쪽에 있는 항목(마지막)을   반환 후 제거                                           	|
|         **L.pop(i)**        	|     리스트의 인덱스 i에   있는 항목을 반환 후 제거                                                      	|
|         L.clear()       	|     리스트의 모든 항목 삭제                                                                             	|

#### `L.append(x)`
리스트 마지막에 항목 x를 추가
```python
my_list = [1, 2, 3]
my_list.append(4)
print(my_list)  # [1, 2, 3, 4]
```
**⭐반환이 없다는 것을 꼭 알아두기**

```python
my_list = [1, 2, 3]
my_list.append(4)
print(my_list)  # [1, 2, 3, 4]
print(my_list.append(4))  # None
```
```python
my_list = [1, 2, 3]
my_list.append(4, 5)
print(my_list)  # TypeError: list.append() takes exactly one argument (2 given)
```
하나의 인자만 받을 수 있음!

#### `L.extend(iterable)`
리스트에 다른 **반복 가능한 객체**의 모든 항목을 추가
```python
my_list = [1, 2, 3]
my_list.extend([4, 5, 6])
print(my_list)  # [1, 2, 3, 4, 5, 6]
```
```python
my_list = [1, 2, 3]
my_list.extend([4, 5, 6], [1, 2])
print(my_list)  # TypeError: list.append() takes exactly one argument (2 given)
```
하나의 인자만 받을 수 있음!

⭐ 중첩리스트를 만들고 싶다면 extend가 아니라 append를 선택해야 함.


#### `L.insert(i, x)`
리스트의 지정한 인덱스 i위치에 항목 x를 삽입
```python
my_list = [1, 2, 3]
my_list.insert(1, 5)
print(my_list)  # [1, 5, 2, 3]
```
#### `L.remove(x)`
리스트에서 첫 번재로 일치하는 항목을 삭제
```python
my_list = [1, 2, 3]
my_list.remove(2)
print(my_list)  # [1, 3]
```
```python
my_list = [1, 3, 2, 3, 2, 3]
my_list.remove(2)
print(my_list)  # [1, 3, 3, 2, 3]
```
#### `L.pop()`, `L.pop(i)`
리스트에서 지정한 인덱스의 항목을 **⭐제거하고 ⭐반환**  
작성하지 않을 경우 마지막 항목을 제거
```python
my_list = [1, 2, 3, 4, 5]
item1 = my_list.pop()
item2 = my_list.pop(0)
print(item1)  # 5
print(item2)  # 1
print(my_list)  # [2, 3, 4]
```

#### `L.clear()`
리스트의 모든 항목을 삭제
```python
my_list = [1, 2, 3]
my_list.clear()
print(my_list) # []
```

### 리스트 탐색 및 정렬 메서드
|               문법              	|                                   설명                                 	|
|-------------------------------	|----------------------------------------------------------------------	|
|     L.index(x)    	|     리스트에   있는 항목 중 가장 왼쪽에 있는 항목 x의 인덱스를 반환    	|
|            L.count(x)           	|     리스트에서 항목   x의 개수를 반환                                  	|
|            L.reverse()          	|     리스트의 순서를 역순으로 변경 (정렬 X)|
|             L.sort()            	|     리스트를 정렬 (매개변수   이용가능)                                	|

#### `L.index(x)`
리스트에서 첫 번째로 일치하는 항목 x의 인덱스를 반환
```python
my_list = [1, 2, 3]
index = my_list.index(2)
print(index)  # 1
```
#### `L.count(x)`
리스트에서 항목 x의 개수를 **반환**
```python
my_list = [1, 2, 2, 3, 3, 3]
count = my_list.count(3)
print(count)  # 3
```
#### `L.reverse()`
리스트의 순서를 역순으로 변경(정렬x)
```python
my_list = [1, 3, 2, 8, 1, 9]
my_list.reverse()
print(my_list) # [9, 1, 8, 2, 3, 1]
```
원본을 바꾸기 때문에 `print(my_list.reverse())`를 하면 값이 나오지 않음 `None`이 출력

#### `L.sort()`
원본 리스트를 오름차순으로 정렬
```python
my_list = [3, 2, 1]
# 오름차순
my_list.sort()
print(my_list)  # [1, 2, 3]

# 내림차순
my_list.sort(reverse=True)
print(my_list)  # [3, 2, 1]
```

[참고사항: 다양한 리스트 메서드](https://docs.python.org/3.9/tutorial/datastructures.html#data-structures)

# ETC
## copy
데이터 타입과 복사
- 파이썬에서는 데이터에 분류에 따라 복사가 달라짐
- '변경 가능한 데이터 타입'과 '변경 불가능한 데이터 타입'을 다르게 다룸

[참고 자료](https://github.com/waterhyun/TIL/blob/master/python/copy_method.md)

### 변경 가능한 데이터 타입
```python
a = [1, 2, 3, 4]
b = a
b[0] = 100
print(a)  # [100, 2, 3, 4]
print(b)  # [100, 2, 3, 4]
```
<p align = "center">
  <img src = "image\data-structure\copy1.png", width = 300>
</p>

### 변경 불가능한 데이터 타입
```python
a = 20
b = a
b = 10
print(a)  # 20
print(b)  # 10
```
<p align = "center">
  <img src = "image\data-structure\copy2.png", width = 300>
</p>

### 복사유형
#### Assignment
📍 할당 -> 안 됨
```python
# 리스트 복사 예시
original_list = [1, 2, 3]
copy_list = original_list 
print(original_list, copy_list)  # [1, 2, 3] [1, 2, 3]

copy_list[0] = 'hi'
print(original_list, copy_list)  # ['hi', 2, 3] ['hi', 2, 3]
```
<p align = "center">
  <img src = "image\data-structure\copy3.png", width = 300>
</p>

할당 연산자(=)를 통한 복사는 해당 객체에 대한 **객체 참조를 복사**


#### Shallow copy
📍 얕은 복사
```python
# 리스트 얕은 복사 예시
a = [1, 2, 3]
b = a[:]
print(a, b)  # [1, 2, 3] [1, 2, 3]

b[0] = 100
print(a, b)  # [1, 2, 3] [100, 2, 3]
```
<p align = "center">
  <img src = "image\data-structure\copy4.png", width = 300>
</p>

슬라이싱으로 생성된 객체는 원본 객체와 독립적으로 존재

📌 얕은 복사의 한계
- 2차원 리스트와 같이 변경 가능한 객체 안에 변경 가능한 객체가 있는 경우
```python
a = [1, 2, [1, 2]]
b = a[:] # list.copy()랑 동일
print(a, b)  # [1, 2, [1, 2]] [1, 2, [1, 2]]

b[2][0] = 100
print(a, b)  # [1, 2, [100, 2]] [1, 2, [100, 2]]
```

<p align = "center">
  <img src = "image\data-structure\copy5.png", width = 300>
</p>

- a와 b의 주소는 다르지만 내부 객체의 주소는 같기 때문에 함께 변경됨

#### Deep copy
📍 깊은 복사

```python
import copy

original_list = [1, 2, [1, 2]]
deep_copied_list =copy.deepcopy(original_list)

deep_copied_list[2][0] = 100

print(original_list)  # [1, 2, [1, 2]]
print(deep_copied_list)  # [1, 2, [100, 2]]
```

<p align = "center">
  <img src = "image\data-structure\copy6.png", width = 300>
</p>

- 내부에 중첩된 모든 객체까지 새로운 객체 주소를 참조하도록 함

## 문자 유형 판별 메소드
문자열에 포함된 문자들의 유형을 판별하는 메서드
- `isdecimal()`
    - 문자열이 모두 숫자 문자(0~9)로만 이루어져 있어야 True
    ```python
    print("isdecimal() 메서드 예시:" )
    print("'12345'.isdecimal():", '12345'.isdecimal())
    print("'123.45'.isdecimal():", '123.45'.isdecimal())
    print("'-123'.isdecimal():", '-123'.isdecimal())
    print("'Ⅳ'.isdecimal():", 'Ⅳ'.isdecimal())
    print("'½'.isdecimal():", '½'.isdecimal())
    print("'²'.isdecimal():", '²'.isdecimal())
    print()

    # '12345'.isdecimal(): True
    # '123.45'.isdecimal(): False
    # '-123'.isdecimal(): False
    # 'Ⅳ'.isdecimal(): False
    # '½'.isdecimal(): False
    # '²'.isdecimal(): False
    ```
- `isdigit()`
    - isdecimal()과 비슷하지만, 유니코드 숫자도 인식 ('①’ 도 숫자로 인식)
    ```python
    isdecimal() 메서드 예시:
    '12345'.isdecimal(): True
    '123.45'.isdecimal(): False
    '-123'.isdecimal(): False
    'Ⅳ'.isdecimal(): False
    '½'.isdecimal(): False
    '²'.isdecimal(): False

    # '12345'.isdigit(): True
    # '123.45'.isdigit(): False
    # '-123'.isdigit(): False
    # 'Ⅳ'.isdigit(): False
    # '½'.isdigit(): False
    # '²'.isdigit(): True
    ```
- `isnumeric()`
    - isdigit()과 유사하지만, 몇 가지 추가적인 유니코드 문자들을 인식 <br>(분수, 지수, 루트 기호도 숫자로 인식)
    ```python
    print("isnumeric() 메서드 예시:")
    print("'12345'.isnumeric():", '12345'.isnumeric())
    print("'123.45'.isnumeric():", '123.45'.isnumeric())
    print("'-123'.isnumeric():", '-123'.isnumeric())
    print("'Ⅳ'.isnumeric():", 'Ⅳ'.isnumeric())
    print("'½'.isnumeric():", '½'.isnumeric())
    print("'²'.isnumeric():", '²'.isnumeric())

    # '12345'.isnumeric(): True
    # '123.45'.isnumeric(): False
    # '-123'.isnumeric(): False
    # 'Ⅳ'.isnumeric(): True
    # '½'.isnumeric(): True
    # '²'.isnumeric(): True
    ```

- `isdecimal()` ⊆ `isdigit()` ⊆ `isnumeric()`

  |     isdecimal()    	|     isdigit()    	|     isnumeric()    	|                  예시                	|
  |:------------------:	|:----------------:	|:------------------:	|:------------------------------------:	|
  |         True       	|        True      	|         True       	|       "038",   "੦੩੮",   "０３８"     	|
  |        False       	|        True      	|         True       	|          "⁰³⁸", "🄀⒊⒏", "⓪③⑧"         	|
  |        False       	|       False      	|         True       	|     "⅛⅘", "ⅠⅢⅧ", "⑩⑬㊿", "壹貳參"    	|
  |        False       	|       False      	|        False       	|          "abc", "38.0", "-38"        	|
  - 암기하지 않고 그냥 차이만 알아두기

