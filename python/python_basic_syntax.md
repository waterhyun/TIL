# Python_basic_syntax
Contents
> 표현식 Expression  
> 타입 Type  
> 산술 연산자   
> 변수 Variable  
> Data Types  
> - Numeric Types
> - Text Sequence Type(str)
> 
> Python Style Guide  
> Python Tutor


<br>  


## 표현식 Expression
📍 값으로 평가될 수 있는 코드 조각  
&nbsp;&nbsp;&nbsp;&nbsp;값 : **표현식**이 **평가**된 결과

📃 3 + 5
- 표현식 : 3+5
- 값 : 8

📍 평가: 표현식을 실행하여 값을 얻는 과정  
&nbsp;&nbsp;&nbsp;&nbsp;표현식을 순차적으로 평가하여 프로그램의 동작을 결정

📍 문장 statement: 실행 가능한 동작을 기술하는 코드
- 여러 개의 표현식을 포함

<br>  


## 타입 Type
📍 변수나 값이 가질 수 있는 데이터의 종류를 의미

> - Numeric Type
>    - int(정수), float(실수), complex(복소수)
>- Sequence Types
>   - list, tuple, range
>- Text Sequence Type
>   - str(문자열)
>- Non-sequence Types
>   - set, dict
>- 기타
>   -  Boolean, none, Functions

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

### 우선순위
| 우선순위 | 연산자 |     연산        |
| ------ | ------ | ------- |
| 높음 | ** | 거듭제곱 |
|| -  | 음수 부호 |
|| *, /, //, %   | 곱셈, 나눗셈, 몫, 나머지|
|낮음 | +, -   | 덧셈, 뺄셈 |

<br>  

## 변수 Variable
📍 값을 저장하기 위한 이름 = 값을 참조하기 위한 이름
변수 할당: 표현식을 통해 변수에 값을 저장

```python
variable = expression
```

📌 할당문
1. 할당 연산자(=) 오른쪽에 있는 표현식을 평가해서 값(메모리 주소)을 생성
2. 값의 메모리 주소를 '='왼쪽에 있는 변수에 저장
3. 존재여부
  - X : 새 변수를 생성
  - O : 기존 변수를 재사용해서 변수에 들어 있는 메모리 주소를 변경

<br>  
📍 변수는 그 변수가 참조하는 객체의 메모리 주소를 가짐  

<br>  

📃 예시
```python
degrees = 36.5
```
- 변수 degrees는 값 36.5를 참조
- 객체(object) : 타입을 갖는 메모리 주소 내 **값**
- 타입: float
- 주소: 491734

즉, 참조란 값을 바로 들고있는 게 아니라 값은 다른 영역에 있고 그 영역을 가리키는 값이 참조!

```python
number = 10
double = 2*number
number = 5
```

number가 재할당 되어도 double의 경우 여전히 20을 참조.


### 변수명 규칙
- 영문 알파벳, 언더스코어(_), 숫자로 구성
- 숫자로 시작할 수 없음
- 대소문자 구분
- 파이썬의 내부 예약어는 사용 불가능 ex: `False`, `None`, `True`, `and`, `elif`, `try`, `yield` ...

## Data Types
값의 종류와 그 값에 적용 가능한 연산과 동작을 결정하는 속성

❓ 필요한 이유
- 값들을 구분하고, 어떻게 다뤄야 하는지 알 수 있음.
- 타입을 명시적으로 지정하면 코드를 읽는 사람이 변수의 의도를 더 쉽게 이해할 수 있고, 잘못된 데이터 탑으로 인한 오류를 미리 예방

### Numeric Types
---
#### 1. int (정수 자료형)

진수 표현
- 2진수(binary) : 0b
- 8진수(octal) : 0o
- 16진수(hexadecimal) : 0x
```python
print(0b10) # 2
print(0o30) # 24  
print(0x10) # 16
```
#### 2. float (실수 자료형)
프로그래밍 언어에서 float은 실수에 대한 근삿값

📃 1.2는 정확히 1.2가 아니라 1.2에 가까운 근삿값으로 처리 됨 -> **유한 정밀도**

📌 유한 정밀도
- 컴퓨터 메모리 용량이 한정돼 있고 한 숫자에 대해 저장하는 용량이 제한 됨
```python
# 0.6666666666666666
print(2/3)
# 1.6666666666666667
print(5/3)
```
0.6666666666666666와 1.6666666666666667은 제한된 양의 메모리에 저장할 수 있는 2/3과 5/3에 가장 가까운 값

⚠ 실수 연산 시 주의사항
- 컴퓨터는 2진수를 사용, 사람은 10진법을 사용
- 이때 10진수 0.1은 2진수로 표현하면 0.0001100110011001100110... 같이 무한대로 반복됨
- 무한대 숫자를 그대로 저장 불가능 -> 10진법의 근삿값만 표시
- 0.1의 경우 3602879701896397/2**5이며 0.1에 가깝지만 정확히 동일하지는 않음
- 이 과정에서 예상하지 못한 결과가 나타남
- 이런 증상을 floating point rounding error(**부동소수점 에러**)라고 함.

부동소수점 에러
- 컴퓨터가 실수를 표현하는 방식으로 인해 발생하는 작은 오차
- 실수를 2진수로 변환하는 과정에서 발생하는 근사치 표현으로 인해 발생
- 해결책
  - decimal 모듈을 사용해 부동소수점 연산의 정확성을 보장하는 방법
  - 이외에도 다양한 해결 방법이 존재
  ``` python 
  from decimal import Decimal
  a = Decimal('3.2') - Decimal('3.1')
  b = Decimal('1.2') - Decimal('1.1')
  print(a) # 0.1
  print(b) # 0.1
  print(a==b) # True

지수 표현 방식: e 또는 E를 사용한 지수 표현
```
# 314*0.01
number = 314e-2
# 3.14
print(number)
```


#### 3. complex
```python
complex([real[,imag]])
```

```python
complex(1,1) # (1+1j)
complex(1.1, 2.2) # (1.1+2.2j)
complex(1) # (1+0j)
complex() # 0j
complex("1+1j") # (1+1j)
complex(1).__str__() # '(1+0j)'
```


### Text Sequence Type(str)
---

#### Sequence Types
여러 개의 값들을 순서대로 나열하여 저장하는 자료형   
ex: str, list, tuple, range

#### Sequence Types 특징
1. 순서 sequence : 값들이 순서대로 저장(정렬 x)
2. 인덱싱 indexing : 각 값에 고유한 인덱스(번호)를 가지고 있으며, 인덱스를 사용하여 특정 위치의 값을 선택하거나 수정할 수 있음
3. 슬라이싱 slicing : 인덱스의 범위를 조절해 부분적인 값을 추출할 수 있음
4. 길이 length: `len()`함수를 사용하여 저장된 값의 개수(길이)를 구할 수 있음
5. 반복 iteration: 반복문을 사용하여 저장된 값들을 반복적으로 처리할 수 있음.


#### str 문자열
📍 문자들의 순서가 있는 변경 불가능한 시퀀스 자료형

📌 생성 방법
- 작은따옴표(') 또는 큰따옴표(")로 감싸서 표현
```python
print(type('hello, world!')) # <class 'str'>
```
- 중첩 따옴표


<br>


📍 Escape Sequence  
- 역슬래시 뒤에 특정문자가 와서 특수한 기능을 하는 문자 조합
- python의 일반적인 문법 규칙을 잠시 탈출한다는 의미  

| escape sequence | meaning |
| ------ | ---------|
| \n | 줄바꿈(new line) |
| \t | 수평 탭(horizontal tab) |
| \v | 수직 탭(vertical tab) |
| \b | 백스페이스(backspace) |
| \' | 작은따옴표(single quotes) |
| \" | 큰따옴표(double quotes) |
| \$ | $ |
| \\ | 역슬래시(\) |
| \r | 엔터(carrage return) |

  
<br>  
<br>  
 

📍 String Interpolation  (문자열 포맷팅 String formatting)
문자열 내에 변수나 표현식을 삽입하는 방법

📌 f-string(f 문자열 포매팅)
- 문자열에 f 또는 F 접두어를 붙이고 표현식을 {expression}로 작성하는 문법
- 문자열에 파이썬 표현식의 값을 삽입할 수 있음
```python
name = '홍길동'
age = 30
f'나의 이름은 {name}입니다. 나이는 {age}입니다.' # '나의 이름은 홍길동입니다. 나이는 30입니다.'

age = 30
f'나는 내년이면 {age + 1}살이 된다.' # '나는 내년이면 31살이 된다.'

d = {'name':'홍길동', 'age':30}
f'나의 이름은 {d["name"]}입니다. 나이는 {d["age"]}입니다.' # '나의 이름은 홍길동입니다. 나이는 30입니다.'

f'{"hi":<10}'  # 왼쪽 정렬
# 'hi        '
f'{"hi":>10}'  # 오른쪽 정렬
# '        hi'
f'{"hi":^10}'  # 가운데 정렬
# '    hi    '

f'{"hi":=^10}'  # 가운데 정렬하고 '=' 문자로 공백 채우기
# '====hi===='
f'{"hi":!<10}'  # 왼쪽 정렬하고 '!' 문자로 공백 채우기
# 'hi!!!!!!!!'

# 소수점 4자리까지만 표현
y = 3.42134234
f'{y:0.4f}'  
# '3.4213'
# 소수점 4자리까지 표현하고 총 자리수를 10으로 맞춤 
f'{y:10.4f}'  
# '    3.4213'

# {} 표시하기
f'{{ and }}' # '{ and }'

```

📌 % 연산자를 사용 하는 방법
```python
# 숫자 대입
"I eat %d apples." % 3
# 문자열 대입
"I eat %s apples." % "five"
# 숫자 값을 나타내는 변수로 대입
number = 3
"I eat %d apples." % number
# 2개 이상의 값 대입
number = 10
day = "three"
"I ate %d apples. so I was sick for %s days." % (number, day)
# 'I ate 10 apples. so I was sick for three days.'
```

문자열 포맷 코드
| code | meaning |
| ------ | ------ |
| %s | 문자열 string |
| %c | 문자 1개 character |
| %d | 정수 integer |
| %f | 부동소수 floating-point |
| %o | 8진수 |
| %x | 16진수 |
| %% | % |

```python
# %s 예시
"I have %s apples" % 3 # 'I have 3 apples'
"rate is %s" % 3.234 # 'rate is 3.234'
# 정렬과 공백
"%10s" % "hi" #'        hi'
"%-10sjane." % 'hi' #'hi        jane.'
```
`%10s`: 전체 길이 10, 오른쪽 정렬
`%-10s`: 전체 길이 10, 왼쪽 정렬

```python
"%0.4f" % 3.42134234 #'3.4213'
"%10.4f" % 3.42134234 #'    3.4213'
```
`%10.4f` 전체 길이 10, 소수점 4자리까지

<br>  

📌 str.format() 메서드
```python
# 숫자 바로 대입하기
"I eat {0} apples".format(3) # 'I eat 3 apples'
# 문자열 바로 대입하기
"I eat {0} apples".format("five") # 'I eat five apples'
# 숫자 값을 가진 변수로 대입하기
number = 3
"I eat {0} apples".format(number) # 'I eat 3 apples'
# 2개 이상의 값 넣기
number = 10
day = "three"
"I ate {0} apples. so I was sick for {1} days.".format(number, day) # 'I ate 10 apples. so I was sick for three days.'
# 이름으로 넣기
"I ate {number} apples. so I was sick for {day} days.".format(number=10, day=3) # 'I ate 10 apples. so I was sick for 3 days.'
# 인덱스와 이름을 혼용해서 넣기
"I ate {0} apples. so I was sick for {day} days.".format(10, day=3) # 'I ate 10 apples. so I was sick for 3 days.'

# 왼쪽 정렬
"{0:<10}".format("hi") # 'hi        '
# 오른쪽 정렬
"{0:>10}".format("hi") # '        hi'
# 가운데 정렬
"{0:^10}".format("hi") # '    hi    '
# 공백 채우기
"{0:=^10}".format("hi") # '====hi===='
"{0:!<10}".format("hi") # 'hi!!!!!!!!'

# 소수점 표현하기
y = 3.42134234
"{0:0.4f}".format(y) # '3.4213
# {} 표현하기
"{{ and }}".format() # '{ and }'
```

<br> 

📍 Indexing/Slicing

- 인덱스 index : 시퀀스 내의 값들에 대한 고유한 번호로, 각 값의 위치를 식별하는 데 사용되는 숫자  
- 슬라이싱 scling: 시퀀스의 일부분을 선택하여 추출하는 작업 -> 시작 인덱스와 끝 인덱스를 지정하여 해당 범위의 값을 포함하는 새로운 시퀀스를 생성

```python
my_str = 'hello'

# 인덱싱
print(my_str[1])  # e

# 슬라이싱
print(my_str[2:4])  # ll
print(my_str[:3])  # hel
print(my_str[3:])  # lo
print(my_str[0:5:2])  # hlo
print(my_str[::-1])  # olleh
```

```python
my_str[1] = 'z'
# TypeError: 'str' object does not support item assignment
```
⭐ 문자열은 불변(변경불가)


### Python Style Guide
- 변수명은 무엇을 위한 변수인지 직관적인 이름을 가져야함
- 공백(spaces) 4칸을 사용하여 코드 블록을 들여쓰기
- 한 줄의 길이는 79자로 제한, 길어질 경우 줄 바꿈을 사용
- 문자와 밑줄(_)을 사용하여 함수, 변수, 속성의 이름을 작성 (스네이크 케이스)
- 함수 정의나 클래스 정의 등의 블록 사이에는 빈 줄을 추가
- 주석 `ctrl+/`
- 등등

### Python Tutor
즐겨찾기 해두고, 알고리즘 문제 풀때 사용해보기!

