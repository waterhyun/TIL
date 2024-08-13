# APS(Algorithm Problem Solving)
- 입출력을 제외한 내장함수를 사용하지 않기
- 기본적인 내장함수의 동작원리 이해

# 알고리즘
- 유한한 단계를 통해 문제를 해결하기 위한 절차나 방법
- 주로 컴퓨터용어로 쓰이며, 컴퓨터가 어떤 일을 수행하기 위한 단계적 방법
- 즉, 어떠한 문제를 해결하기 위한 절차
- 예시: 1~100까지의 합을 구하는 문제

## 슈도코드와 순서도
- 알고리즘을 표현하는 방법
- 의사코드(슈도코드, pseudocode)
  - 프로그램을 작성할 때 모듈이 작동하는 논리를 표현하기 위한 언어
  - 예시: 파스칼 스타일 의사코드
    
    ```py
    Calcsum(n)
    sum <- 0
      for i : 1 -> n
      sum <- sum + i
      return sum; 
    ```

- 순서도(flowchart)
  - 워크플로 혹은 프로세스를 보여주는 다이어그램의 한 종류
  
    <p align = 'center'>
      <image src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/For-loop-diagram.png/220px-For-loop-diagram.png' width = 200>
    </p>

## 알고리즘의 성능
APS 과정의 목표 중의 하나는 보다 좋은 알고리즘을 이해하고 활용하는 것.
### 무엇이 좋은 알고리즘인가?
  - 정확성 : 얼마나 정확하게 동작하는가
  - 작업량 : 얼마나 적은 연산으로 원하는 결과를 얻어내는가
  - 메모리 사용량 : 얼마나 적은 메모리를 사용하는가
  - 단순성 : 얼마나 단순한가
  - 최적성 : 더 이상 개선할 여지없이 최적화되었는가


> 주어진 문제를 해결하기 위해 여러 개의 다양한 알고리즘이 가능 ➡ 어떤 알고리즘을 사용해야 하는가?

- 알고리즘의 성능 분석 필요
  - 많은 문제에서 성능 분석의 기준으로 알고리즘의 작업량을 비교

- 알고리즘의 작업량을 표현할 때 **시간복잡도**로 표0현한다.

## 시간복잡도 Time Complexity
  - 실제 걸리는 시간을 측정
  - 실행되는 명령문의 개수를 계산
  <p align = 'center'>
    <image src = 'image\time-complexity.png' width = 400>
  </p>

### 빅-오(O)표기법, Big-O Notation, Big-oh Notation
  - 시간 복잡도 함수 중에서 가장 큰 영향력을 주는 n에 대한 항만을 표시
  - 계수(Coefficient)는 생략하여 표시
  
  <p align = 'center'>
    <image src = 'image\big-o.png' width = 400>
  </p>
  
  - n개의 데이터를 입력 받아 저장한 후 각 데이터에 1씩 증가시킨 후 각 데이터를 화면에 출력하는 알고리즘의 시간복잡도는? O(n)
  
  - 요소 수가 증가함에 따라 각기 다른 시간복잡도의 알고리즘은 아래와 같은 연산 수를 보임

  <p align = 'center'>
    <image src = 'https://cdn-media-1.freecodecamp.org/images/1*KfZYFUT2OKfjekJlCeYvuQ.jpeg' width = 400>
  </p>


  - 시간 복잡도별 실제 실행 시간 비교
  <p align = 'center'>
    <image src = 'image\big-o2.png' width = 600>
  </p>
