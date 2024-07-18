# Modules and Control of Flow
## Contents
- [Modules and Control of Flow](#modules-and-control-of-flow)
- [Modules](#modules)
  * [모듈 예시](#모듈-예시)
    + [math](#math)
  * [모듈을 가져오는 방법](#모듈을-가져오는-방법)
    + [import](#import)
    + [from](#from)
    + [dot](#dot)
  * [주의사항](#주의사항)
    + [as keyword](#as-keyword)
  * [사용자 정의 모듈](#사용자-정의-모듈)
- [Python Standard Library](#python-standard-library)
  * [Package](#package)
  * [How to use](#how-to-use)
  * [Install package](#install-package)
- [Control Statement](#control-statement)
  * [Conditional Statements](#conditional-statements)
    + [if statement](#if-statement)
    + [복수 조건문](#복수-조건문)
    + [중첩 조건문](#중첩-조건문)
  * [Loop statement](#loop-statement)
    + [for statement](#for-statement)
      - [중첩 반복문](#중첩-반복문)
      - [중첩 리스트 순회](#중첩-리스트-순회)
    + [while statement](#while-statement)
    + [적절한 반복문 활용하기](#적절한-반복문-활용하기)
    + [반복문 제어](#반복문-제어)
      - [1. break](#1-break)
      - [2. continue](#2-continue)
      - [3. pass](#3-pass)
    + [List Comprehension](#list-comprehension)
- [참고](#참고)
  * [모듈 내부 살펴보기](#모듈-내부-살펴보기)
  * [enumerate](#enumerate)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# Modules
다른 프로그래머가 이미 작성해 놓은 수천, 수백만 줄의 코드를 활용하는 것은 생산성에 매우 중요한 일  

📍 모듈  
: 한 파일로 묶인 변수와 함수의 모음  
**특정한 기능**을 하는 코드가 작성된 파이썬 파일(.py)

## 모듈 예시
### math
math 내장 모듈  
- 파이썬이 미리 작성해 둔 수학 관련 변수와 함수가 작성된 모듈

## 모듈을 가져오는 방법
### import
```python
import math

print(math.sqrt(4))
```
- 모듈 이름 명시


### from
```python
from math import sqrt

print(sqrt(4))
```
- 모듈 명을 명시하지 않음
- `from`보다 `import`가 더 명시적이므로 `import`를 사용하는 것이 더 좋음

### dot
- `.(dot)`연산자
- "**점의 왼쪽 객체에서 점의 오른쪽 이름을 찾아라**"라는 의미

## 주의사항
- 서로 다른 모듈이 같은 이름의 함수를 제공할 경우 문제 발생
- 마지막에 import된 이름으로 대체됨

```python
from math import pi, sqrt
from my_math import sqrt

# 그래서 모듈 내 모든 요소를 한번에 import 하는 * 표기는 권장하지 않음.
from math import *
```

### as keyword
- as 키워드를 사용하여 별칭(alias)을 부여
- 두 개이상의 모듈에서 동일한 이름의 변수, 함수 클래스 등을 가져올 때 발생하는 이름 충돌 해결

```python
from math import sqrt
from my_math import sqrt as my_sqrt

sqrt(4)
my_sqrt(4)
```

## 사용자 정의 모듈
`my_math.py`에서 아래와 같이 작성
```python
def add(x, y):
    return x + y
```
`sample.py`에서 my_math사용
```python
import my_math
print(my_math.add(1, 2))
```
```python
from my_math import add
print(add(1, 2))
```

# Python Standard Library
📍 PSL, 파이썬 표준 라이브러리  
파이썬 언어와 함께 제공되는 다양한 **모듈과 패키지의 모음**
- 설치하지 않는 다면 PSL

모듈의 상위 개념

## Package
📍 패키지  
: 연관된 모듈들을 하나의 디렉토리에 모아 놓은 것

## How to use
- 아래와 같은 디렉토리 구조로 작성
  - 패키지 3개: my_package, math, statistics
  - 모듈 2개: my_math, tools

<p align="center">
  <img src="image\modules\package.png" height="200">
</p>


가져오는 방법
```python
from my_package.math import my_math
from my_package.statistics import tools
```

비교
- PSL 내부 패키지 : 설치 없이 바로 import하여 사용
- 외부 패키지 : `pip`를 사용하여 설치 후 import 필요

## Install package
`pip` : 외부 패키지들을 설치하도록 도와주는 파이썬의 패키지 관리 시스템

- 최신 버전/ 특정 버전/ 최소 버전을 명시하여 설치 할 수 있음.
```bash
$ pip install SomePackge
$ pip install SomePakage==1.0.5
$ pip install SomePakage>=1.0.4
```
- requests 외부 패키지 설치 및 사용 예시
```bash
$ pip install requests
```
```python
import requests

url = 'https://random-data-api.com/api/v2/users'
response = requests.get(url).json()

print(response)
```

  - bash에서 설치하면 global에서 설치하는 것
  - 개발 가상환경에서 설치해줘야함


<br>  

📌 패키지 사용 목적  
모듈들의 이름공간을 구분하여 충돌을 방지  
모듈들을 효율적으로 관리하고 재사용할 수 있도록 돕는 역할

# Control Statement
📍 제어문  
: 코드의 실행 흐름을 제어하는 데 사용되는 구문  
조건에 따라 코드 블록을 실행하거나 반복적으로 코드를 실행  

| 제어문 | 종류 |
| ----- | ----- |
| 조건문 | if, elif, else |
| 반복문 | for, while |
| 반복문 제어 | break, continue, pass |

## Conditional Statements
📍 조건문  
: 주어진 조건식을 평가하여 해당 조건이 참(True)인 경우에만 코드 블록을 실행하거나 건너뜀  

### if statement
📌 if statement의 기본 구조
```python
if 표현식:
  코드 블록
elif 표현식:
  코드 블록
else:
  코드 블록
```  
  
조건문 예시
```python
a = 3

if a > 3:
    print('3 초과')
else:
    print('3 이하')
```

### 복수 조건문
조건식을 동시에 검사하는 것이 아니라 "순차적"으로 비교
```python
dust = 35

if dust > 150:
  print('매우 나쁨')
elif dust > 80:
  print('나쁨')
elif dust > 30:
  print('보통')
else:
  print('좋음')

# 보통
```

### 중첩 조건문
```python
dust = 480

if dust > 150:
  print('매우 나쁨')
  if dust > 300:
    print('위험해요! 나가지 마세요!')
elif dust > 80:
  print('나쁨')
elif dust > 30:
  print('보통')
else:
  print('좋음')

# 매우 나쁨
# 위험해요! 나가지 마세요! 
```

## Loop statement
📍 반복문  
주어진 코드 블록을 여러 번 반복해서 실행하는 구문  

파이썬 반복문에 사용되는 키워드  
| 반복문 종류 | 실행 내용 |
| ----- | ----- |
| for | 특정 작업을 반복적으로 수행 |
| while | 주어진 조건이 참인 동안 반복해서 실행 |


### for statement
📍 for 문  
: 임의의 시퀀스의 항목들을 그 시퀀스에 들어있는 순서대로 반복  

📌 for statement의 기본 구조
```python
for 변수 in 반복 가능한 객체:
  코드 블록
```

📍 iterable, 반복 가능한 객체  
: 반복문에서 순회할 수 있는 객체(시퀀스 객체 뿐만 아니라 dict, set 등도 포함)  
⭐문자열도 시퀀스라는 걸 잊지않기로!

📌 작동원리
- 리스트 내 첫 항목이 반복 변수에 할당되고 코드블록이 실행
- 다음으로 반복 변수에 리스트의 2번째 항목이 할당되고 코드블록이 다시 실행
- ... 마지막으로 반복 변수에 리스트의 마지막 요소가 할당되고 코드 블록이 실행. 
```python
items = ['apple', 'banana', 'coconut']

for item in items:
  print(item)
  
# apple
# banana
# coconut
```
- 예시
  - str 순회
  ```python
  country = 'Korea'
  for char in country:
    print(char)
    
  
  # K
  # o
  # r
  # e
  # a
  
  ```
  - range 순회
  ```python
  for i in range(5):
    print(i)

  
  # 0
  # 1
  # 2
  # 3
  # 4
  
  ```
  - dict 순회
    - 기본적으로 key가 나옴
    ```python
    my_dict = {
    'x': 10,
    'y': 20,
    'z': 30,
    }
    for key in my_dict:
      print(key)
      print(my_dict[key])

    
    # x
    # 10
    # y
    # 20
    # z
    # 30
    '''
    ```
  - 인덱스로 리스트 순회
  ```python
  numbers = [4, 6, 10, -8, 5]

  for i in range(len(numbers)):
    numbers[i] = numbers[i] * 2

  print(numbers)
  # [8, 12, 20, -16, 10]
  ```

#### 중첩 반복문
```python
outers = ['A', 'B']
inners = ['c', 'd']

for outer in outers:
  for inner in inners:
    print(outer, inner)

# A c
# A d
# B c
# B d
```
- 안쪽 반복문은 outers 리스트의 각 항목에 대해 한 번씩 실행됨
- print가 호출되는 횟수 = len(outers)*len(inners)

#### 중첩 리스트 순회
```python
elements = [['A', 'B'], ['c', 'd']]

for elem in elements:
  print(elem)

# ['A', 'B']
# ['c', 'd']

for elem in elements:
  for item in elem:
    print(item)

# A
# B
# c
# d
```
- 안쪽 리스트 요소에 접근하려면 바깥 리스트를 순회하면서 중첩 반복을 사용해 각 안쪽 반복을 순회 

### while statement
📍 while 문  
: 주어진 조건식이 참(True)인 동안 코드를 반복해서 실행 == 조건식이 거짓(False)가 될 때까지 반복

📌 while statement의 기본구조
```python
while 조건식:
  코드 블록
```

예시
```python
a = 0

while a < 3:
  print(a)
  a+=1

print('끝')

# 0
# 1
# 2
# 끝
```

```python
number = int(input('양의 정수를 입력해주세요.: '))
while number <= 0:
    if number < 0:
        print('음수를 입력했습니다.')
    else:
        print('0은 양의 정수가 아닙니다.')
    number = int(input('양의 정수를 입력해주세요.: '))
print('잘했습니다!')

```

⚠ while 문은 반드시 **종료 조건**이 필요

### 적절한 반복문 활용하기
- for
  - 반복 횟수가 명확하게 정해져 있는 경우에 유용
  - 예를 들어 리스트, 튜플, 문자열 등과 같은 시퀀스 형식의 데이터를 처리할 때
- while
  - 반복 횟수가 불명확하거나 조건에 따라 반복을 종료해야 할 때 유용
  - 예를 들어 사용자의 입력을 받아서 특정 조건이 충족될 때가지 반복하는 경우

### 반복문 제어
for문과 while은 매 반복마다 본문 내 모든 코드를 실행하지만 때때로 일부만 실행하는 것이 필요할 때가 있음  

파이썬 제어 키워드  
| 반복문 제어 키워드 | 실행 내용 |
| ----- | ----- |
| break | 반복을 즉시 중지 |
| continue | 다음 반복으로 건너뜀 |
| pass | 아무런 동작도 수행하지 않고 넘어감 |

#### 1. break
```python
for i in range(10):
  if i == 5:
    break
  print(i)

# 0
# 1
# 2
# 3
# 4
```

<details>
  <summary> break 예제 </summary> 

```python
# break 예시 1 - "프로그램 종료 조건 만들기"
number = int(input('양의 정수를 입력해주세요.: '))
while number <= 0:
    if number == -9999:
        print('프로그램을 종료합니다.')
        break
    if number < 0:
        print('음수를 입력했습니다.')
    else:
        print('0은 양의 정수가 아닙니다.')
    number = int(input('양의 정수를 입력해주세요.: '))
print('잘했습니다!')

# 양의 정수를 입력해주세요.: -9999
# 프로그램을 종료합니다.
# 잘했습니다!
```
```python
# break 예시 2 - "리스트에서 첫번째 짝수만 찾은 후 반복 종료하기"
numbers = [1, 3, 5, 6, 7, 9, 10, 11]
found_even = False # found_even = flag variable

for num in numbers:
   if num % 2 == 0:
      print('첫 번재 짝수를 찾았습니다:', num)
      found_even = True
      break

if not found_even:
   print('짝수를 찾지 못했습니다')
# 첫 번재 짝수를 찾았습니다: 6
```
found_even = flag variable

</details>

#### 2. continue
```python
for i in range(10):
  if i % 2 == 0:
    continue
  print(i)

# 1
# 3
# 5
# 7
# 9
```

<details>
  <summary> continue 예제 </summary> 


```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for num in numbers:
   if num % 2 == 0:
      continue
   print(num)

# 1
# 3
# 5
# 7
# 9
```
</details>

#### 3. pass
```python
for i in range(10):
  pass
```

<details>
  <summary> pass 예제 </summary> 


1. 코드 작성 중 미완성 부분  
구현해야 할 부분이 나중에 추가될 수 있고, 코드를 컴파일하는 동안 오류가 발생하지 않음
```python
def my_function():
  pass
```
2. 조건문에서 아무런 동작을 수행하지 않아야 할 때
```python
if condition:
  pass # 아무런 동작도 수행하지 않음
else:
  # 다른 동작 수행
```
3. 무한 루프에서 조건이 충족되지 않을 때 pass를 사용하여 루프를 계 속 진행하는 방법
```python
while True:
  if condition:
    break
  elif condition:
    pass # 루프 계속 진행
  else:
    print('..')
```
```python
# break 예시 1 - "프로그램 종료 조건 만들기"
number = int(input('양의 정수를 입력해주세요.: '))
while number <= 0:
    if number == -9999:
        print('프로그램을 종료합니다.')
        break
    if number < 0:
        print('음수를 입력했습니다.')
    else:
        print('0은 양의 정수가 아닙니다.')
    number = int(input('양의 정수를 입력해주세요.: '))
print('잘했습니다!')

# 양의 정수를 입력해주세요.: -9999
# 프로그램을 종료합니다.
# 잘했습니다!
```
</details>

### List Comprehension
📍 간결하고 효율적인 리스트 생성 방법
```python
[expression for 변수 in iterable]
list(expression for 변수 in iterable)
```
```python
[expression for 변수 in iterable if 조건식]
list(expression for 변수 in iterable if 조건식)
```

사용전후 비교
```python
# 사용 전
numbers = [1, 2, 3, 4, 5]
squared_numbers = []

for num in numbers:
    squared_numbers.append(num**2)

print(squared_numbers) # [1, 4, 9, 16, 25]


# 사용 후
numbers = [1, 2, 3, 4, 5]
squared_numbers = [num**2 for num in numbers]
print(squared_numbers) # [1, 4, 9, 16, 25]
```

2차원 배열 생성 시(인접행령 생성 시)
```python
# List Comprehension 활용 예시 - "2차원 배열 생성 시 (인접행렬 생성 시)"
data1 = [[0] * (5) for _ in range(5)]
print(data1)
# [[0, 0, 0, 0, 0], 
# [0, 0, 0, 0, 0], 
# [0, 0, 0, 0, 0], 
# [0, 0, 0, 0, 0], 
# [0, 0, 0, 0, 0]]

# 또는
data2 = [[0 for _ in range(5)] for _ in range(5)]
print(data2)
# [[0, 0, 0, 0, 0], 
# [0, 0, 0, 0, 0], 
# [0, 0, 0, 0, 0], 
# [0, 0, 0, 0, 0], 
# [0, 0, 0, 0, 0]]
```

📌항상 가독성이 좋은 건 아니므로 Compregension을 남용하지 말자
```python
# list comrehension
result = [i for i in range(10) if i % 2 == 1]

# 일반
result = []
for i in range(10):
  if i % 2 == 1:
    result.append(i)
```

```python
# 리스트를 생성하는 방법 비교

# 1. loop
result1 = []
for i in range(10):
    result1.append(i)

# 2. list comprehension
result2 = [i for i in range(10)]
# result2 = list(i for i in range(10))

# 3. map
result3 = list(map(lambda i: i, range(10)))

print(result1)
print(result2)
print(result3)

```
성능 비교

1. list comprehension
    - 대부분의 경우 가장 빠르고 파이썬스러운(Pythonic) 방법
2. map
    - 특정 상황(예: 기존 함수를 사용할 때)에서 리스트 컴프리헨션과 비슷하거나 약간 더 빠를 수 있음
3. loop
    - 일반적으로 가장 느리다고 알려져 있지만,
      python 버전이 올라가면서 다른 방식과 비슷하거나 때로는 더 나은 결과를 보이기도 함
    - 복잡한 로직이 필요한 경우에는 여전히 유용하게 사용될 수 있음

결론
- 성능 차이는 대부분의 경우 미미하므로, 
  코드의 가독성과 유지보수성을 고려하여 상황에 맞는 적절한 방법을 선택하는 것을 권장


# 참고
## 모듈 내부 살펴보기
내장함수 `help`를 사용하여 모듈에 무엇이 들어있는지 확인 가능
```python
help(math)
```

## enumerate
`enumerate(iterable, start=0)`  
iterable 객체의 각 요소에 대해 인덱스와 함께 반환하는 내장함수

```python
fruits = ['apple', 'banana', 'cherry']

for index, fruit in enumerate(fruits):
    print(f'인덱스 {index}: {fruit}')

# 인덱스 0: apple
# 인덱스 1: banana
# 인덱스 2: cherry

for index, fruit in enumerate(fruits, start = 4):
    print(f'인덱스 {index}: {fruit}')

# 인덱스 4: apple
# 인덱스 5: banana
# 인덱스 6: cherry
```


