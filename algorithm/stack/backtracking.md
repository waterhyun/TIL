<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [Backtracking](#backtracking)
  - [백트래킹 기본 원리](#백트래킹-기본-원리)
  - [백트래킹 예시](#백트래킹-예시)
    - [1. **조합 문제 (Combination Problems)**](#1-조합-문제-combination-problems)
    - [2. **순열 문제 (Permutation Problems)**](#2-순열-문제-permutation-problems)
    - [3. 부분집합 문제 (Subset Problems)](#3-부분집합-문제-subset-problems)
    - [4. N-Queens 문제](#4-n-queens-문제)
    - [5. **그래프 탐색 문제 (Graph Traversal Problems)**](#5-그래프-탐색-문제-graph-traversal-problems)
    - [6. **최적화 문제 (Optimization Problems)**](#6-최적화-문제-optimization-problems)
    - [7. **스도쿠 문제**](#7-스도쿠-문제)
    - [8. **다양한 재귀적 문제**](#8-다양한-재귀적-문제)
  - [백트래킹 장단점](#백트래킹-장단점)
  - [최적화 기법](#최적화-기법)
  - [백트래킹과 깊이우선탐색과의 차이](#백트래킹과-깊이우선탐색과의-차이)

<!-- TOC end -->


# Backtracking

문제를 해결하기 위해 탐색을 수행하는 알고리즘 기법 중 하나.

주로 조합 문제, 순열 문제, 부분집합 문제 등에서 유용하게 사용.

백트래킹의 기본 아이디어는 탐색 과정에서 불필요한 경로를 일찍 차단함으로써 효율적으로 해를 찾는 것.

- 해를 찾는 도중에 ‘막히면’(=해가 아님) 되돌아가서 다시 해를 찾아 가는 기법

## 백트래킹 기본 원리

1. **상태 공간 트리 구성**: 문제를 해결하기 위한 가능한 모든 상태를 트리 형태로 구성합니다. 각 노드는 문제의 상태를 나타내며, 자식 노드는 현재 상태에서 가능한 다음 상태를 나타냅니다.
  - 상대 공간 트리

    <p align = 'center'>
    <image src = '..\image\backtracking-tree.png' width = 400>
    </p>      
        
2. **부분 해를 탐색**: 현재 상태에서 가능한 모든 선택지를 탐색하여 부분 해를 생성합니다. 각 부분 해는 문제의 해가 될 수 있는지 확인하기 위해 계속 진행됩니다.
3. **유망하지 않은 경로 차단**: 만약 어떤 경로가 문제의 해를 찾기에는 유망하지 않다고 판단되면, 그 경로를 더 이상 탐색하지 않고 이전 상태로 돌아가서 다른 경로를 탐색합니다. 이 과정이 '백트래킹'입니다.
    1. 그 노드를 포함한 경로가 해답이 될 수 없으면 그 노드는 유망(promising)하지 않다고 함
    2. 반대로 해답의 가능성이 있다면 유망하다고 함
4. **해를 찾으면 종료**: 문제의 해를 찾으면 탐색을 종료하고, 모든 가능한 해를 찾기 위해 탐색을 계속할 수도 있습니다.


## 백트래킹 예시
문제의 조건을 만족하는 해가 존재하는지의 여부를 ‘yes’ 또는 ‘no’로 답하는 문제

### 1. **조합 문제 (Combination Problems)**

- **예시**: 주어진 집합에서 k개의 원소를 선택하는 모든 조합을 찾는 문제.
- **알고리즘**: 백트래킹을 통해 모든 가능한 조합을 탐색하며, 중복 조합이나 순서에 관계없이 유효한 조합만을 선택합니다.

### 2. **순열 문제 (Permutation Problems)**

- **예시**: 주어진 집합의 원소를 순서에 상관하여 모두 나열하는 문제.
- **알고리즘**: 백트래킹을 통해 모든 가능한 순열을 생성하고, 주어진 조건을 만족하는 순열만을 선택합니다.

<details>
<summary>순열</summary>

- 집합 {1, 2, 3}에서 모든 순열을 생성하는 함수
- 동일한 숫자가 포함되지 않았을 때, 각 자리 수 별로 loop을 이용해 아래와 같이 구현할 수 있음
  
  ```py
    for i1 in range(1, 4):
        for i2 in range(1, 4):
            if i2 != i1:
                for i3 in range(1, 4):
                    if i3 != i1 and i3 != i1:
                        print(i1, i2, i3)
  ```

  <p align = 'center'>
  <image src = '..\image\backtarcking-permutation.png' width = 400>
  </p>  

- 백트래킹을 이용하여 {1, 2, 3, … , NMAX)에 대한 순열 구하기
    - 접근 방법은 앞의 부분집합 구하는 방법과 유사하다.

  ```py
  def backtrack(a, k, n):
      c = [0] * MAXCANDIDATES # 후보를 저장할 배열
      if k == n:
          for i in range(0, k):
              print(a[i], end = '')
          print()
      else:
          ncandidates = construct_candidates(a, k, n, c)
          for i in range(ncandidates): # 추천
              a[k] = c[i]
              bactrack(a, k + 1, n)
              
  MAXCANDIDATES = 2
  NMAX = 4
  a = [0]*NMAX
  backtrack(a, 0, 3)
  ```

  ```py
  def backtrack(a, k, n):
      c = [0] * MAXCANDIDATES # 후보를 저장할 배열
      if k == n:
          for i in range(0, k):
              print(a[i], end = '')
          print()
      else:
          ncandidates = construct_candidates(a, k, n, c)
          for i in range(ncandidates): # 추천
              a[k] = c[i]
              bactrack(a, k + 1, n)
              
  def construct_candidates(a, k, n, c):
      in_perm = [False] * (NMAX + 1)
      
      for i in range(k):
          in_perm[a[i]] = True # a[k]에 들어갈 후보(a[0]~a[k-1]까지 사용된 적이 없는)
          
      ncandidates = 0
      for i in range(1, NMAX + 1):
          if in_perm[i] == False:
              c[ncandidates] = i # 후보를 넣고
              ncandidates += 1 # 후보 개수 추가
      
      return ncandidates # 실제 추천한 개수
      
  MAXCANDIDATES = 3
  NMAX = 3
  a = [0]*NMAX
  backtrack(a, 0, 3)
  ```

</details>


### 3. 부분집합 문제 (Subset Problems)

- **예시**: 주어진 집합의 모든 부분집합을 찾는 문제.
- **알고리즘**: 백트래킹을 통해 가능한 모든 부분집합을 생성합니다. 특히, 합이 특정 값이 되는 부분집합을 찾는 문제에서 유용하게 사용됩니다.

<details>
<summary> 부분집합 </summary>

- 어떤 집합의 공집합과 자기자신을 포함한 모든 부분집합을 powerset이라고 하며 구하고자 하는 어떤 집합의 원소 개수가 n일 경우 부분집합의 개수는 $2^n$개 이다.
- 백트래킹 기법으로 powerset을 만들어보자.
    - 앞에서 설명한 일반적인 백트래킹 접근 방법을 이용한다.
    - n개의 원소가 들어있는 집합의 $2^n$개의 부분집합을 만들 때는 `true` 또는 `false`값을 가지는 항목들로 구성된 n개의 배열을 만드는 방법을 이용.
    - 여기서 배열의 i번째 항목은 i번째의 원소가 부분집합의 값인지 아닌지를 나타내는 값이다.

    <p align = 'center'>
      <image src = '..\image\list2-bit.png' width = 400>
    </p>
    

- 각 원소가 부분집합에 포함되었는지 loop를 이용하여 확인하고 부분집합을 생성하는 방법

  ```py
  bit = [0, 0, 0, 0]
  for i in range(2):
      bit[0] = i  # 0번재 원소
      for j in range(2):
        bit[1] = j  # 1번째 원소
        for k in range(2):
            bit[2] = k  # 2번째 원소
            for l in range(2):
                bit[3] = l # 3번째 원소
                print(bit) # 생성된 부분집합 출력
  ```
    <p align = 'center'>
      <image src = '..\image\backtracking-subset.png' width = 400>
    </p>

- powerset을 구하는 백트래킹 알고리즘

  ```py
  def backtrack(a, k, n):
    # a : 주어진 배열
    # k : 결정할 원소
    # n : 원소 개수

    c = [0] * maxcandidates

    if k == n:
      # 답이면 원하는 작업을 함
      process_solution(a, k)
    else:
      ncandidates = construct_candidates(a, k, n, c)
      for i in range(ncandidates):
        a[k] = c[i]
        backtrack(a, k + 1, n)
  ```

  > `n`에 대해 가변이 된다는 점이 특징

  ```py
  def construct_candidates(a, k, n, c):
    c[0] = True
    c[1] = False
    return 2


  def process_solution(a, k):
    for i in range(k):
      if a[i]:
        print(num[i], end = ' ')
    print()
  ```

  ```py
  maxcandidates = 2
  nmax = 4
  a = [0] * nmax
  num = [1, 2, 3, 4]
  backtrack(a, 0, 3)
  ```

</details>

### 4. N-Queens 문제

- **예시**: N x N 체스판에 N개의 퀸을 놓되, 서로 공격하지 않도록 배치하는 문제.
- **알고리즘**: 백트래킹을 통해 가능한 모든 퀸의 배치를 탐색하면서, 퀸이 서로 공격하지 않는 경우만을 선택합니다.


<details>
<summary> 체스판 </summary>

```py
def checknode(v): # node
		if promising(v):
				if there is a solution at v:
						write the solution
				else:
					for u in each child of v:
							checknode(u)
```
  <p align = 'center'>
    <image src = '..\image\backtracking-chess.png' width = 400>
  </p>

- 깊이 우선 검색 : 155 노드
- 백트래킹 : 27 노드

</details>

### 5. **그래프 탐색 문제 (Graph Traversal Problems)**

- **예시**: 미로 찾기, 해밀턴 경로 문제, 순회 문제 등.
- **알고리즘**: 그래프에서 경로를 탐색하면서 조건을 만족하는 경로만을 찾기 위해 백트래킹을 사용할 수 있습니다.

<details>
<summary>미로찾기</summary>

- 내가 지나온 길을 벽으로 만들거나
- 새로운 미로판을 만들어서 기록을 해주기


- 아래 그림과 같이 입구와 출구가 주어진 미로에서 입구부터 출구까지의 경로를 찾는 문제
- 이동할 수 있는 방향은 4방향으로 제한

  <p align = 'center'>
  <image src = '..\image\backtraking-maze1.png' width = 400>
  </p>  

- 스택을 이용하여 지나온 경로를 역으로 되돌아 간다.

  <p align = 'center'>
  <image src = '..\image\backtraking-maze2.png' width = 400>
  </p>  
  <p align = 'center'>
  <image src = '..\image\backtraking-maze3.png' width = 400>
  </p>  

- 스택을 이용하여 다시 경로를 찾는다
  <p align = 'center'>
  <image src = '..\image\backtraking-maze4.png' width = 400>
  </p>  

</details>

### 6. **최적화 문제 (Optimization Problems)**

- **예시**: 여행하는 판매원 문제(TSP), 배낭 문제(Knapsack Problem) 등.
- **알고리즘**: 백트래킹을 통해 가능한 모든 해를 탐색하면서 최적의 해를 찾기 위해 사용합니다. 그러나 이 경우에는 동적 프로그래밍이나 분기 한정(Branch and Bound)과 같은 최적화 기법이 함께 사용될 수 있습니다.


### 7. **스도쿠 문제**

- **예시**: 주어진 스도쿠 퍼즐을 해결하는 문제.
- **알고리즘**: 백트래킹을 통해 빈 칸에 숫자를 배치하면서 퍼즐의 규칙을 만족하는지 확인합니다.

### 8. **다양한 재귀적 문제**

- **예시**: 문자열의 정렬 문제, 괄호 짝 맞추기 문제 등.
- **알고리즘**: 재귀 호출과 함께 백트래킹을 활용하여 문제의 모든 가능한 해를 탐색합니다.

## 백트래킹 장단점
- **장점**:
    - **해결할 수 있는 문제의 범위가 넓습니다.**
    - 코드가 직관적이고 구현이 비교적 간단합니다.
- **단점**:
    - 비효율적인 경우가 많아, **큰 문제를 해결하기에 시간이 오래 걸릴 수** **있습니다.**
    - 불필요한 경로를 많이 탐색할 수 있습니다.


## 최적화 기법

- **가지치기(Pruning)**: 유망하지 않은 경로를 조기에 차단하는 방법으로, 탐색 공간을 줄여줍니다. 예를 들어, 퀸이 서로 공격하지 않도록 체크하는 방식입니다.

<details>
<summary> 부분집합의 합 </summary>

집합 {1, 2, 3}의 원소에 대해 각 부분집합에서의 포함 여부를 트리로 표현

  <p align = 'center'>
  <image src = '..\image\bacaktrack-subset-sum.png' width = 400>
  </p>  

- i 원소의 포함 여부를 결정하면 i까지의 부분 집합의 합 $s_i$를 결정할 수 있음
- $s_{i-1}$이 찾고자 하는 부분집합의 합보다 크면 남은 원소를 고려할 필요가 없음

  <p align = 'center'>
  <image src = '..\image\bacaktrack-subset-sum2.png' width = 400>
  </p>  
 


- $A[i]$ 원소를 부분 집합의 원소로 고려하는 재귀 함수(A는 서로 다른 자연수의 집합)
    
  <p align = 'center'>
  <image src = '..\image\bacaktrack-subset-sum3.png' width = 400>
  </p>  
    
- **추가 고려 사항 → 백트래킹을 해도 개수가 줄어들지 않을 때 줄이기 위해서 이 방법을 추가해보기**

  <p align = 'center'>
  <image src = '..\image\bacaktrack-subset-sum4.png' width = 400>
  </p>  

**[예제]** {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}의 powerset 중 원소의 합이 10인 부분집합을 구하시오.

```py
def f1(i, V):   # V개의 집합에서 i원소의 포함여부 결정
    if i == V:      # 모든 원소에 대해 결정하면
        print(b)
    else:
        b[i] = 1    # a[i]가 부분집합에 포함되는 경우
        f1(i+1, V)
        b[i] = 0
        f1(i+1, V)

def f2(i, V, K):
    global cnt
    if i == V:      # 모든 원소에 대해 결정하면
        s = 0               # 부분집합의 합 저장
        for j in range(V):
            if b[j]:    # a[j]가 포함되면
                s += a[j]
        #print(s)
        if s == K:  # 부분집합의 합이 K인 경우
            cnt += 1
    else:
        b[i] = 1    # a[i]가 부분집합에 포함되는 경우
        f2(i+1, V, K)
        b[i] = 0
        f2(i+1, V, K)

def f3(i, V, N, K): # i고려할 원소, V 원소 수, N 부분집합 원소수, K 찾는 합
    global cnt
    if i == V:      # 모든 원소에 대해 결정하면
        s = 0               # 부분집합의 합 저장
        c = 0               # 부분집합 원소 수
        for j in range(V):
            if b[j]:    # a[j]가 포함되면
                s += a[j]
                c += 1
        #print(s)
        if c==N and s == K:  # 부분집합의 합이 K인 경우
            cnt += 1
    else:
        b[i] = 1    # a[i]가 부분집합에 포함되는 경우
        f3(i+1, V, N, K)
        b[i] = 0
        f3(i+1, V, N, K)

T = int(input())
for tc in range(1, T+1):
    N, K = map(int, input().split())
    a = [ i for i in range(1, 13)]
    b = [0]*12                      # b[i]: a[i]원소의 포함여부 표시
    #------------------------------
    # 재귀로 모든 부분집합 만들기
    # f1(0, 12)   # 총 12개의 원소, a[0]부터 포함여부 결정하기
    # ------------------------------
    # 부분집합의 합이 K인 경우의 수 cnt 찾기
    # cnt = 0
    # f2(0, 12, K)
    # print(cnt)
    # ------------------------------
    # 원소의 개수가 N개이면서, 합이 K인 부분집합의 수 cnt 찾기
    cnt = 0
    f3(0, 12, N, K)
    print(cnt)

```

- 가지치기
    
```py
def f(i, k, s, t):
  # i 원소
  # k 집합의 크기
  # s i-1까지 고려된 합
  # t 목표
  global cnt

  if s > t:  # 고려한 원소의 합이 찾는 합보다 큰 경우
    return
  elif s == t:  # 남은 원소를 고려할 필요가 없는 경우
    cnt += 1
    return
  elif i == k:  # 모든 원소 고려
    return
  else:
    bit[i] = 1
    f(i + 1, k, s + A[i], t)  # A[i] 포함
    bit[i] = 0
    f(i + 1, k, s, t)  # A[i] 미포함
```

</details>

<details>
<summary> 순열 </summary>

- A[1, 2, 3]의 모든 원소를 사용한 순열
  - 123, 132, 213, 231, 312, 321
  - 총 6가지의 경우
    
    <p align = 'center'>
    <image src = '..\image\backtracking-prunning-permutation.png' width = 400>
    </p> 
    
    <p align = 'center'>
    <image src = '..\image\backtracking-prunning-permutation1.png' width = 400>
    </p> 
    
    <p align = 'center'>
    <image src = '..\image\backtracking-prunning-permutation2.png' width = 400>
    </p> 
    
    <p align = 'center'>
    <image src = '..\image\backtracking-prunning-permutation3.png' width = 400>
    </p> 

- **추가 제약 조건**: 문제에 따라 추가적인 제약 조건을 도입하여 탐색 범위를 줄일 수 있습니다.

</details>


## 백트래킹과 깊이우선탐색과의 차이


- 어떤 노드에서 출발하는 경로가 해결책으로 이어질 것 같지 않으면 더 이상 그 경로를 **따라가지 않음으로써** **시도의 횟수를 줄임.** (Prunning 가지치기)
- 깊이 우선 탐색이 모든 경로를 추적하는데 비해 **백트래킹은 불필요한 경로를 조기에 차단**
- 깊이 우선 탐색을 가하기에는 경우의 수가 너무나 많음. 즉, N! 가지의 경우의 수를 가진 문제에 대해 깊이우선탐색을 가하면 당연히 처리 불가능한 문제
- 백트래킹 알고리즘을 적용하면 일반적으로 경우의 수가 줄어들지만 이 역시 최악의 경우에는 여전히 지수함수 시간을 요하므로 처리 불가능.

**모든 후보를 검사하는가? NO!**
