## Contents
- [에러와 예외](#에러와-예외)
  * [디버깅](#디버깅)
  * [에러](#에러)
  * [예외](#예외)
    + [내장 예외 Built-in Exceptions](#내장-예외-built-in-exceptions)
- [예외 처리](#예외-처리)
  * [try and except](#try-and-except)
  * [복수 예외 처리](#복수-예외-처리)
  * [else and finally](#else-and-finally)
- [참고](#참고)
  * [예외 처리 주의사항](#예외-처리-주의사항)
  * [예외 객체 다루기](#예외-객체-다루기)
    + [as keyword](#as-keyword)
    + [try-except와 if-else](#try-except와-if-else)
  * [EAFP and LBYL](#eafp-and-lbyl)

# 에러와 예외
## 디버깅
📍 버그 bug  
소프트웨어에서 발생하는 오류 또는 결함  
프로그램의 예상된 동작과 실제 동작 사이의 불일치   

버그의 기원
- 최초의 버그는 1945년 프로그래밍 언어의 일종인 코볼 발명자 그레이스 호퍼가 발견
- 역사상 최초의 컴퓨터 버그는 Mark 2라는 컴퓨터 회로에 벌레인 나방이 들어가 합선을 일으켜 비정상적으로 동작한 것을 기록한 것
- "버그"라는 용어는 이전부터 사용되어 왔지만 이 사건을 계기로 컴퓨터 시스템에서 발생하는 오류 또는 결함을 지칭하는 용어로 널리 사용되기 시작

📍 디버깅 Debugging  
소프트웨어에서 발생하는 버그를 찾아내고 수정하는 과정  
프로그램의 오작동 원인을 식별하여 수정하는 작업  

📌 디버깅 방법
1. print() 함수 활용
- 특정 함수 결과, 반복/조건 결과 등 나눠서 생각, 코드를 bisection으로 나눠서 생각
2. 개발 환경(text editor, IDE) 등에서 제공하는 기능 활용
- breakpoint, 변수 조회 등
3. Python tutor 활용 (단순 파이썬 코드인 경우)
4. 뇌 컴파일, 눈 디버깅 등


## 에러
📍 Error
프로그램 실행 중에 발생하는 예외 상황  

📌 에러 유형
1. 문법 에러 Syntax Error  
- 프로그램의 구문이 올바르지 않은 경우 발생(오타, 괄호 및 콜론 누락 등의 문법적 오류)
  - Invalid syntax 문법 오류 `while`
  - assign to literal 잘못된 할당 `5=3`
  - EOL (End of Line) `print('hello`
  - EOF (End of File) `print(`
2. 예외 Exception
- 프로그램 실행 중에 감지되는 에러  

## 예외
📍 Exception  
프로그램 실행 중에 감지되는 에러

### 내장 예외 Built-in Exceptions
예외 상황을 나타내는 예외 **클래스**들   
파이썬에서 이미 정의되어 있으며, 특정 예외 상황에 대한 처리를 위해 사용  

1. ZeroDivision Error  
나누기 또는 모듈로 연산의 두 번째 인자가 0일 때 발생 `10/0`
2. NameError
지역 또는 전역 이름을 찾을 수 없을 때 발생 `print(name_error)`
3. TypeError  
- 타입 불일치 `'2'+2`
- 인자 누락 `sum()`
- 인자 초과 `sum(1, 2, 3)`
- 인자 타입 불일치
  ```py
  import random
  random.sample(1, 2)
  ```
4. ValueError  
연산이나 함수에 문제가 없지만 부적절한 값을 가진 인자를 받았고, 상황이 IndexError 처럼 더 구체적인 예외로 설명되지 않은 경우 발생
`int('1.5')`, `range(3).index(6)`
5. IndexError
시퀀스 인덱스에 범위를 벗어날 때 발생
    ```py
    empty_list = []
    empty_list[2]
    ```
6. KeyError
딕셔너리에 해당 키가 존재하지 않은 경우
    ```py
    person = {'name': 'Alice'}
    person['age']
    ```
7. ModuleNotFoundError  
모듈을 찾을 수 없을 때 발생 `import hahaha`
8. ImportError  
import하려는 이름을 찾을 수 없을 때 발생 `from random import hahaha`
9. KeyboardInterrupt  
사용자가 Control-C 또는 Delete를 누를 때 발생 ➡ 무한루프시 강제 종료
10. IndentationError
잘못된 들여쓰기와 관련된 문법 오류
    ```py
    for i in range(10):
    print(i)
    ```

# 예외 처리
📍 Exception Handling  
예외가 발생했을 때 프로그램이 비정상적으로 종료되지 않고, 적절하게 처리할 수 있도록 하는 방법

📌 예외처리 사용 구문
- `try` : 예외가 발생할 수 있는 코드 작성
- `except` : 예외가 발생했을 때 실행할 코드 작성
- `else` : 예외가 발생하지 않을 때 실행할 코드 작성
- `finally` : 예외 발생 여부와 상관없이 항상 실행할 코드 작성

```py
try: 
  x = int(input('숫자를 입력하세요: '))
  y = 10/x
except ZeroDivisionError:
  print('0으로 나눌 수 없습니다.')
except ValueError:
  print('유효한 숫자가 아닙니다.')
else:
  print(f'결과: {y}')
finally:
  print('프로그램이 종료되었습니다.')
```

## try and except
📌 try-except 구조
- `try` 블록 안에는 예외가 발생할 수 있는 코드 작성
- `except` 블록 안에는 예외가 발생했을 때 처리할 코드를 작성
- 예외가 발생하면 프로그램 흐름은 try 블록을 빠져나와 해당 예외에 대응하는 except 블록으로 이동
```py
try: 
  # 예외가 발생할 수 있는 코드
except 예외:
  # 예외 처리 코드
```
```py
try:
    result = 10 /0
except ZeroDivisionError:
    print('0으로 나눌 수 없습니다.')

# 0으로 나눌 수 없습니다.
```
```py
try:
    num = int(input('숫자입력 : '))
except ValueError:
    print('숫자가 아닙니다.')

# 숫자입력 : 안녕하세요
# 숫자가 아닙니다.
```

## 복수 예외 처리
100을 사용자가 입력한 값으로 나누고 출력하는 코드를 작성 하시오.  
```py
# 복수 예외처리
num = int(input('100을 나눌 값을 입력하시오 : '))
print(100 / num)
```
먼저, 발생 가능한 에러가 무엇인지 예상해보기
- `int('a')` ➡ 문자열을 int로 형변환 : ValueError
- `100/int('0')` ➡ 0으로 숫자를 나눔 : ZeroDivisionError

발생가능한 에러를 모두 명시하거나 & 별도로 작성하기
```py
# 복수 예외처리 1
try:
    num = int(input('100을 나눌 값을 입력하시오 : '))
    print(100 / num)
except(ValueError, ZeroDivisionError):
    print('제대로 입력해주세요.')

# 복수 예외처리 2
try:
    num = int(input('100을 나눌 값을 입력하시오 : '))
    print(100 / num)
except ZeroDivisionError:
    print('0으로 나눌 수 없습니다.')
except ValueError:
    print('숫자가 아닙니다.')
except:
    print('에러가 발생하였습니다.')
```

## else and finally
- `else` 블록은 예외가 발생하지 않았을 때 추가 작업을 진행
- `finally` 블록은 예외 발생 여부와 상관없이 항상 실행할 코드를 작성
```py
try:
    num = int(input('숫자입력 : '))
    y = 10 / x
except ZeroDivisionError:
    print('0으로 나눌 수 없습니다.')
except ValueError:
    print('유효한 숫자가 아닙니다.')
else:
    print(f'결과: {y}')
finally:
    print('프로그램이 종료되었습니다.')
```
# 참고
## 예외 처리 주의사항
- 아래와 같이 예외를 작성하면 코드는 2번째 except 절에 이후로 도달하지 못함
```py
try:
    num = int(input('100을 나눌 값을 입력하시오 : '))
    print(100 / num)
except BaseException:
    print('숫자를 넣어주세요.')
############################# 아래 블록에 도달하지 못함
except ZeroDivisionError:
    print('0으로 나눌 수 없습니다.')
except:
    print('에러가 발생하였습니다')
```
- 내장 예외 클래스는 상속 계층구조를 가지기 때문에 except 절로 분기 시 반드시 하위 클래스를 먼저 확인할 수 있도록 작성해야 함.
  - 즉, 하위 예외 클래스부터 확인해야 함

[참고 사항, exception-hierarchy](https://docs.python.org/ko/3/library/exceptions.html#exception-hierarchy)

<p align = 'center'>
  <img src = "https://w3.cs.jmu.edu/lam2mo/cs240_2014_08/images/exception_hierarchy.png" width = 400>
</p>

## 예외 객체 다루기
### as keyword
- 예외 객체
  - 예외가 발생했을 때 예외에 대한 정보를 담고 있는 객체
- except 블록에서 예외 객체를 받아 상세한 예외 정보를 활용 가능
```py
my_list = []

try:
  number = my_list[1]
except IndexError as error:
  print(f'{error}가 발생했습니다.')

# list index out of range가 발생했습니다.
```
### try-except와 if-else
- try-except와 if-else를 함께 사용할 수 있음
```py
try:
  x = int(input('숫자를 입력하세요: ' ))
  if x < 0:
    print('음수는 허용되지 않습니다.')
  else:
    print('입력한 숫자:', x)
except ValueError:
  print('오류 발생')
```
## EAFP and LBYL
에외처리와 값 검사에 대한 2가지 접근 방식
1. EAFP  
"Easier to Ask for Forgiveness than Permission"  
예외처리를 중심으로 코드를 작성하는 접근 방식(try-except)
```py
try:
  result = my_dict['key']
  print(result)
except KeyError:
  print('Key가 존재하지 않습니다.')
```
2. LBYL
"Look Befor You Leap"  
값 검사를 중심으로 코드를 작성하는 접근 방식(if-else)
```py
if 'key' in my_dict:
  result = my_dict['key']
  print(result)
else:
  print('key가 존재하지 않습니다.')
```

| EAFP | LBYL |
| ----- | ----- |
| "일단 실행하고 예외를 처리" | "실행하기 전에 조건을 검사" |
| 코드를 실행하고 예외가 발생하면 예외 처리를 수행 | 코드 실행 전에 조건문 등을 사용하여 예외 상황을 미리 검사하고, 예외 상황을 피하는 방식 |
| 코드에서 예외가 발생할 수 있는 부분을 미리 예측하여 대비하는 것이 아니라, 예외가 발생한 후에 예외를 처리 | 코드가 좀 더 예측 가능한 동작을 하지만, 코드가 더 길고 복잡해질 수 있음 |
| 예외 상황을 예측하기 어려운 경우에 유용 | 예외 상황을 미리 방지하고 싶을 때 유용 |