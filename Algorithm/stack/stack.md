<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [Stack](#stack)
  - [Stack 특징](#stack-특징)
  - [Stack 구현](#stack-구현)
    - [자료구조 : 자료를 선형으로 저장할 저장소](#자료구조--자료를-선형으로-저장할-저장소)
    - [연산](#연산)
    - [동작 원리](#동작-원리)
  - [스택 구현 고려 사항](#스택-구현-고려-사항)
  - [스택의 활용 예시](#스택의-활용-예시)
  - [스택의 응용](#스택의-응용)
- [계산기](#계산기)
  - [계산기 step 1](#계산기-step-1)
  - [계산기 step 2](#계산기-step-2)
<!-- TOC end -->


# Stack

- 스택
    - 물건을 쌓아 올리듯 **자료를 쌓아 올린 형태**의 자료구조
    - 스택에 저장된 자료는 **선형 구조**를 갖는다.
        - 선형구조: 자료 간의 관계가 1:1 관계
        - 비선형구조: 자료 간의 관계가 1:N의 관계 (예시: 트리)
    - 스택에 **자료를 삽입**하거나 스택에서 **자료를 꺼낼 수 있음.**

## Stack 특징


- **LIFO : Last In, First Out : 후입선출**
    - 가장 나중에 추가된 데이터가 가장 먼저 제거
    - 예를 들어 스택에 1, 2, 3 순으로 자료를 삽입한 후 꺼내면 역순으로 즉 3, 2, 1 순으로 꺼낼 수 있다.

## Stack 구현


- 스택을 프로그램에서 구현하기 위해 필요한 자료구조와 연산

### 자료구조 : 자료를 선형으로 저장할 저장소

- 배열을 사용할 수 있다 (배열 기반 구현)
    - 스택의 크기는 고정되어 있으며 배열의 인덱스를 사용하여 스택의 상단을 추적
    - 장점: 구현이 간단하고 메모리 접근 속도가 빠름
    - 단점: 배열의 크기를 미리 정해야 하며, 크기를 초과할 경우 확장이 어려움
- 연결 리스트 기반 구현
    - 노드로 구성된 연결 리스트를 사용하여 스택 구현
    - 각 노드는 데이터와 다음 노드를 가리키는 포인터를 가짐
    - 장점: 동적으로 크기를 조절 가능
    - 단점: 추가적인 메모리 오버헤드와 포인터 관리가 필요
- **저장소 자체를 스택**이라 부르기도 한다.
- 스택에서 **마지막 삽입된 원소의 위치를 top**이라 부른다.

### 연산

- 삽입 `push` : 스택의 상단에 데이터를 추가하는 연산
- 삭제 `pop` : 스택의 상단에서 데이터를 제거하고 **반환**하는 연산
- `peek` 또는 `Top` : ****스택의 상단에 있는 데이터를 제거하지 않고 반환
- `isEmpty` : 스택이 비어 있는지 확인하는 연산

### 동작 원리

- 스택은 일종의 ‘접시 더미’처럼 동작
- 새로운 접시가 추가되면 항상 가장 위에 쌓이게 되고, 접시를 꺼낼 때도 가장 위에 있는 접시가 먼저 꺼내짐
- 스택의 삽입/삭제 과정
    

    <p align = 'center'>
      <image src = '..\image\stack1.png' width = 400>
    </p>
    
    - 빈 스택에 원소 A, B, C를 차례로 삽입 후 한번 삭제하는 연산 과정
- 스택의 `push` 알고리즘
    - `append` 메소드를 통해 리스트의 마지막에 데이터를 삽입
    
    ```python
    def push(item):
    	s.append(item)
    
    # s = []
    # 스택을 활용한 복잡한 알고리즘 -> 전체 구조 파악이 먼저
    # append는 자료가 커질 수록 느려진다는 문제가 있음
    # 일단 구현 먼저해보고 나중에 해결하기!
    ```
    
    ```python
    # [참고] 스택의 구현
    def push(item, size):
        global top
        top += 1
        if top == size: # 디버깅용
            print('overflow!')
        else:
            stack[top] = item
    
    size = 10
    stack = [0] * size
    top = -1
    
    push(10, size)
    top += 1
    stack[top] = 20
    print(stack)
    
    # [10, 20, 0, 0, 0, 0, 0, 0, 0, 0]
    ```
    
- 스택의 `pop` 알고리즘
    
    ```python
    # 이름이 겹쳐지기 때문에 pop이라고 하지 않기!
    def my_pop():
        if len(s) == 0:
            # underflow 디버깅
            return
        else:
            return s.pop()
    ```
    
    ```python
    def pop():
        global top
        if top == -1:
            print('underflow')
            return 0
        else:
            top -= 1
            return stack[top + 1] # 꼭 지워줄 필요는 없음
    
    print(pop())
    
    if top > -1: # pop()
        top -= 1
        print(stack[top+1])
    ```
    

## 스택 구현 고려 사항


- 1차원 배열을 사용하여 구현할 경우 구현이 용이하다는 장점이 있지만 스택의 크기를 변경하기가 어렵다는 단점이 있다.
- 이를 해결하기 위한 방법으로 저장소를 동적으로 할당하여 스택을 구현하는 방법이 있다.
    - 동적 연결리스트
        - 구현이 복잡하다는 단점이 있지만 메모리를 효율적으로 사용한다는 장점을 가진다. 스택의 동적 구현은 생략한다.

## 스택의 활용 예시


1. 함수 호출 관리
    - 프로그램에서 함수 호출 시 호출 스택을 사용하여 함수 호출 정보를 관리합니다.
    - 함수가 호출될 때마다 호출 정보가 스택에 푸시되고, 함수가 반환될 때마다 호출 정보가 팝됩니다.
2. 뒤로 가기 기능
    - 웹 브라우저의 뒤로 가기 기능은 스택을 사용하여 이전 페이지로 돌아갈 수 있게 합니다.
    - 사용자가 페이지를 탐색할 때 페이지 URL을 스택에 푸시하고, 뒤로 가기를 클릭하면 스택에서 URL을 팝하여 이전 페이지로 이동합니다.
3. 문자열 역순 처리 
    - 문자열의 문자를 스택에 푸시한 후 팝을 통해 문자열을 역순으로 처리할 수 있습니다.

## 스택의 응용


1. 괄호 검사
    1. 괄호의 종류 : 대괄호, 중괄호, 소괄호
    2. 조건
        1. 왼쪽 괄호의 개수와 오른쪽 괄호의 개수가 같아야 한다.
        2. 같은 괄호에서 왼쪽 괄호는 오른쪽 괄호보다 먼저 나와야 한다.
        3. 괄호 사이에는 포함 관계만 존재한다.
    3. 잘못된 괄호 사용의 예시
        1. (a(b)
        2. a(b)c)
        3. a{b(c[d]e}f)
    4. stack을 이용하여 검사
        
        <p align = 'center'>
          <image src = '..\image\stack2.png' width = 400>
        </p>
            
        - underflow, overflow도 판단해주면 좋음
    5. 괄호 검사 알고리즘 개요
        1. 문자열에 있는 괄호를 차례대로 조사하면서 왼쪽 괄호를 만나면 스택에 삽입하고, 오른쪽 괄호를 만나면 스택에서 top 괄호를 삭제한 후 오른쪽 괄호와 짝이 맞는지를 검사
        2. 이 때, 스택이 비어 있으면 조건 1 또는 조건 2에 위배되고 괄호의 짝이 맞지 않으면 조건 3에 위배된다.
        3. 마지막 괄호까지를 조사한 후에도 스택에 괄호가 남아있으면 조건 1에 위배된다.
2. Function call
    1. 프로그램에서의 함수 호출과 복귀에 따른 수행 순서를 관리
        1. 가장 마지막에 호출된 함수가 가장 먼저 실행을 완료하고 복귀하는 후입선출 구조이므로, 후입 선출 구조의 스택을 이용하여 수행순서 관리
            
          <p align = 'center'>
            <image src = '..\image\stack-function-call.png' width = 400>
          </p>
            
        2. 함수 호출이 발생하면 호출한 함수 수행에 필요한 지역변수, 매개변수 및 수행 후 복귀할 주소 등의 정보를 스택 프레임(stack frame)에 저장하여 시스템 스택에 삽입
            
          <p align = 'center'>
            <image src = '..\image\stack-function-call2.png' width = 400>
          </p>

    2. 함수의 호출 복귀 과정을 잘 이해하세요 → 뒷부분 이해하는 데 도움이 될 것임
        
        <p align = 'center'>
          <image src = '..\image\stack-function-call3.png' width = 400>
        </p>
        

스택은 매우 유용하고 다양한 상황에서 사용되는 자료구조로, 특히 메모리 관리와 관련된 작업에서 중요합니다. 기본적인 개념을 잘 이해하면 복잡한 알고리즘과 데이터 구조를 이해하는 데 큰 도움이 될 것입니다.

# 계산기

- 문자열로 된 계산식이 주어질 때, 스택을 이용하여 이 계산식의 값을 계산할 수 있다.
- 문자열 수식 계산의 일반적인 방법
    
    <p align = 'center'>
    <image src = 'https://www.ritambhara.in/wp-content/uploads/2012/06/reverse-polish-.jpg' width = 400>
    </p>

    - step 1. **중위 표기법**의 수식을 **후위 표기법**으로 변경(스택)
        - 중위 표기법 infix notation
            - 연산자를 피 연산자의 가운데 표기하는 방법 (A+B)
        - 후위 표기법 postfix notation
            - 연산자를 피 연산자 뒤에 표기하는 방법(AB+)
    - step 2. 후위 표기법의 수식을 스택을 이용하여 계산

## 계산기 step 1

- 중위 표기식의 후위 표기식 변환 방법
    - 방법1
        - 수식의 각 연산자에 대해서 우선순위에 따라 괄호를 사용하여 다시 표현한다.
        - 각 연산자를 그에 대응하는 오른쪽 괄호의 뒤로 이동시킨다.
        - 괄호를 제거한다.
            - ( ( A * B ) - ( C / D ) )
            - ( ( A  B )*****  ( C  D )**/** ) **-**
            - AB*CD/-
    - 방법2 - 스택 이용 Shunting Yard Algorithm
        - 토큰 읽기: 중위 표기식에서 하나씩 토큰을 읽어온다.
        - 피연산자 처리: 읽은 토큰이 피연산자(숫자나 변수 등)일 경우, 바로 출력한다.
        - 연산자 처리:
            - **연산자와 우선순위**:
                - 토큰이 연산자일 경우, 스택의 top에 저장된 연산자와 비교하여 우선순위를 결정한다.
                    - **우선순위가 더 높으면**: 토큰을 스택에 push 한다.
                    - **우선순위가 같거나 낮으면**:
                        - 스택의 top에서 우선순위가 더 높거나 같은 연산자를 pop하여 출력한다.
                        - 우선순위가 낮은 연산자를 pop한 후, 토큰을 스택에 push 한다.
                    - **스택이 비어있거나**: 단순히 스택에 push 한다.
            - **오른쪽 괄호 처리**:
                - 토큰이 오른쪽 괄호 ‘)’일 경우:
                    - 스택에서 왼쪽 괄호 ‘(’를 만나기 전까지 pop하여 출력한다.
                    - 왼쪽 괄호를 만나면 pop만 하고 출력하지 않는다.
            - **표기식 처리 완료 후**:
                - 중위 표기식의 모든 토큰을 읽은 후, 스택에 남아있는 모든 연산자를 pop하여 출력한다.
            - **우선순위 규칙**:
                - **스택 밖**의 왼쪽 괄호 ‘(’는 우선순위가 가장 높다.
                - **스택 안**의 왼쪽 괄호 ‘(’는 우선순위가 가장 낮다.
- 과정 예시
        
    <p align = 'center'>
    <image src = '..\image\stack-cal.png' width = 400>
    </p>

    <p align = 'center'>
    <image src = '..\image\stack-cal2.png' width = 400>
    </p>
        
    
    **연산자이면 스택 top(isp)과 자신(icp)의 우선 순위를 비교함. isp<icp이면 push, isp>=icp이면 pop하고 출력함**
    
    <p align = 'center'>
    <image src = '..\image\stack-cal3.png' width = 400>
    </p>
    
    <p align = 'center'>
    <image src = '..\image\stack-cal4.png' width = 400>
    </p>
    
    <p align = 'center'>
    <image src = '..\image\stack-cal5.png' width = 400>
    </p>
    
    <p align = 'center'>
    <image src = '..\image\stack-cal6.png' width = 400>
    </p>
    
    <p align = 'center'>
    <image src = '..\image\stack-cal7.png' width = 400>
    </p>

    
    <p align = 'center'>
    <image src = '..\image\stack-cal8.png' width = 400>
    </p>

    
    <p align = 'center'>
    <image src = '..\image\stack-cal9.png' width = 400>
    </p>


    <p align = 'center'>
    <image src = '..\image\stack-cal10.png' width = 400>
    </p>
    
    <p align = 'center'>
    <image src = '..\image\stack-cal11.png' width = 400>
    </p>

    
    <p align = 'center'>
    <image src = '..\image\stack-cal12.png' width = 400>
    </p>
    
    <p align = 'center'>
    <image src = '..\image\stack-cal13.png' width = 400>
    </p>

    
    <p align = 'center'>
    <image src = '..\image\stack-cal14.png' width = 400>
    </p>

        
    <p align = 'center'>
    <image src = '..\image\stack-cal15.png' width = 400>
    </p>

        
- 예제
    - 2 + 3 * 4 / 5
        - 2(34*)5/+
    - 2 + 3 * 5 + 5
        - 23*4+5+

## 계산기 step 2

- 후위 표기법의 수식을 스택을 이용하여 계산
    - 피연산자를 만나면 스택에 push 한다.
        
        <p align = 'center'>
        <image src = '..\image\stack-calculater.png' width = 400>
        </p>
        
    - 연산자를 만나면 필요한 만큼의 피연산자를 스택에서 pop하여 연산하고, 연산결과를 다시 스택에 push 한다.
        
        <p align = 'center'>
        <image src = '..\image\stack-calculater2.png' width = 400>
        </p>

        <p align = 'center'>
        <image src = '..\image\stack-calculater3.png' width = 400>
        </p>

        <p align = 'center'>
        <image src = '..\image\stack-calculater4.png' width = 400>
        </p>

        <p align = 'center'>
        <image src = '..\image\stack-calculater5.png' width = 400>
        </p>

        <p align = 'center'>
        <image src = '..\image\stack-calculater6.png' width = 400>
        </p>

    - 수식이 끝나면, 마지막으로 스택을 pop하여 출력한다.
        
        <p align = 'center'>
        <image src = '..\image\stack-calculater7.png' width = 400>
        </p>