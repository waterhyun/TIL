- [2차원 List](#2차원-list)
  - [구조](#구조)
  - [초기화](#초기화)
  - [입력받기](#입력받기)
  - [위치 찾기](#위치-찾기)
  - [순회](#순회)
    - [행 우선 순회](#행-우선-순회)
    - [열 우선 순회](#열-우선-순회)
    - [지그재그 순회](#지그재그-순회)
  - [델타를 이용한 2차 List 탐색](#델타를-이용한-2차-list-탐색)
  - [전치행렬](#전치행렬)
    - [zip](#zip)
- [부분집합](#부분집합)
  - [itertools 라이브러리의 combinations 메서드 사용하기](#itertools-라이브러리의-combinations-메서드-사용하기)
  - [단순 반복문과 배열](#단순-반복문과-배열)
  - [재귀](#재귀)
  - [비트연산](#비트연산)
- [Search 검색](#search-검색)
  - [순차 검색 Sequential Search](#순차-검색-sequential-search)
    - [검색 과정](#검색-과정)
    - [슈도코드](#슈도코드)
    - [정렬되어 있지 않은 경우](#정렬되어-있지-않은-경우)
    - [정렬되어 있는 경우](#정렬되어-있는-경우)
  - [이진 검색 Binary Search](#이진-검색-binary-search)
    - [binary search 검색 과정](#binary-search-검색-과정)
    - [구현](#구현)
    - [binary search 슈도코드](#binary-search-슈도코드)
    - [재귀 함수 이용](#재귀-함수-이용)
    - [실사용 예시](#실사용-예시)
    - [인덱스](#인덱스)
- [선택 정렬 Selection Sort](#선택-정렬-selection-sort)
  - [Selection Sort 정렬 과정](#selection-sort-정렬-과정)
  - [Selection Sort 슈도코드](#selection-sort-슈도코드)
  - [선택 정렬 코드](#선택-정렬-코드)
- [셀렉션 알고리즘 Selection Algorithm](#셀렉션-알고리즘-selection-algorithm)
  - [Selection Algorithm 선택 과정](#selection-algorithm-선택-과정)
  - [일반적인 셀렉션 알고리즘](#일반적인-셀렉션-알고리즘)
  - [Selection Algorithm 코드](#selection-algorithm-코드)
- [포켓볼 순서대로 정렬하기](#포켓볼-순서대로-정렬하기)

# 2차원 List
## 구조
- 2차원 이상의 다차원 List는 차원에 따라 Index를 선언
- 2차원 List의 선언: 세로길이(행의 개수), 가로 길이(열의 개수)를 필요로 함.

```py
# 2행 4열의 2차원 List
arr =[[0, 1, 2, 3], [4, 5, 6, 7]]
```

## 초기화
📍 파이썬에서는 데이터 초기화를 통해 변수선언과 초기화가 가능

```py
arr = [0, 0, 0, 0, 0]
arr = [0] * 5  # [0, 0, 0, 0, 0]
arr = [i for i in range(2, 9) if i%2 == 0]  # [2, 4, 6, 8]
```
```py
brr = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
brr = [[1, 2, 3]]*3  # [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
brr = [[1, 2, 3] for i in range(3)]  # [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
brr = [[i, j] for i in range(3) for j in range(2)]  # [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [2, 1]]
```

## 입력받기
```py
'''
3 4
0 1 0 0
0 0 0 0
0 0 1 0
'''
# 첫 줄에 n행 m열
# 둘째 줄 부터 n*m의 행열 데이터가 주어질 경우 입력을 받는 방법

## case1
n, m = map(int, input().split())
mylist = [0 for _ in range(n)]
# mylist = [0]*n

for i in range(n):
  mylist[i] = list(map(int, input().split()))

print(mylist)  # [[0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0]]
```
📌 시퀀스자료형의 `*` 연산자로 반복을 이용하는 방법도 가능  
단, 깊은 복사 주의!

<p align = 'center'>
  <image src = '..\image\list2-copy.png' width = 500>
</p>

```py
# case2
n, m = map(int, input().split())
mylist = []
for i in range(n):
  mylist.append(list(map(int, input().split())))

print(mylist)  # [[0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0]]
```
```py
# case3
n, m = map(int, input().split())
mylist = [list(map(int, input().split())) for _ in range(n)]  # [[0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0]]
```

## 위치 찾기
```py
'''
3 4
0 1 0 0
0 0 0 0
0 0 1 0
'''
# 1이 입력된 [행, 열]
n, m = map(int, input().split())
mylist = [list(map(int, input().split())) for _ in range(n)]
newlist = [(i,j) for i in range(n) for j in range(m) if mylist[i][j] == 1]

print(newlist) # [(0, 1), (2, 2)]
```

## 순회
n*m List의 n*m개의 모든 원소를 빠짐없이 조사하는 방법
### 행 우선 순회
```py
arr = [[0, 1, 2, 3],
       [4, 5, 6, 7],
       [8, 9, 10, 11]]

for i in range(len(arr)):
    for j in range(len(arr)):
        arr[i][j] # 필요시 연산 수행
```
### 열 우선 순회
```py
for i in range(len(arr)):
    for j in range(len(arr)):
        arr[j][i] # 필요시 연산 수행
```
### 지그재그 순회
```py
arr = [[0, 1, 2, 3],
       [4, 5, 6, 7],
       [8, 9, 10, 11]]

# i: 행의 좌표, n = len(arr)
# j: 열의 좌표, m = len(arr[0])
for i in range(len(arr)):
    for j in range(len(arr[0])):
        # arr[i][j + (m-1-2*j)*(i%2)]
        arr[i][j + (len(arr[0])-1-2*j)*(i%2)] # 필요시 연산 수행
```

<figure class="half">  
  <a href="link"><img src="..\image\list2-row.png"></a>  
  <a href="link"><img src="..\image\list2-col.png"></a>  
  <a href="link"><img src="..\image\list2-zigzag.png"></a>  
  <figcaption>2개이미지.</figcaption>
</figure>

## 델타를 이용한 2차 List 탐색
- 2차 List의 한 좌표에서 네 방향의 인접 List 요소를 탐색할 때 사용하는 방법
- 델타 값은 한 좌표에서 네 방향의 좌표와 x, y의 차이를 저장한 List로 구형
- 델타 값을 이용하여 특정 원소의 상하좌우에 위치한 원소에 접근할 수 있음
  - 상하좌우에서 더 넓힐 수 있음

📌2차원 List의 가장자리 원소들은 상하좌우 네 방향에 원소가 존재하지 않을 경우가 있으므로, Index를 체크하거나 Index의 범위를 제한해야 함

```py
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

for x in range(len(arr)):
  for y in range(len(arr[x])):
    for i in range(4):
      testX = x + dx[i]
      testY = y + dy[i]
      print(arr[testX][testY])
```
- right ➡ i+0, j+1
- down ➡ i+1, j+0
- left ➡ i+0, j-1
- up ➡ i-1, j+0

💻 전치행렬 예시 : 풍선팡2
```py
# 테스트 케이스
tc = int(input())
for ind in range(1, tc + 1):
  n, m = map(int, input().split())
  arr = [list(map(int, input().split())) for _ in range(n)]

  # Right, Down, Left, Up
  di = [0, 1, 0, -1]  # 행
  dj = [1, 0, -1, 0]  # 열

  max_value = 0
  for i in range(n):
      for j in range(m):
          score = arr[i][j]
          for k in range(4):
              ni = i + di[k]
              nj = j + dj[k]
              if 0 <= ni < n and 0 <= nj < m:  # 범위 내 있으면
                  score += arr[ni][nj]  # 추가
          if max_value < score:
              max_value = score

  print(f'#{ind} {max_value}')
```

## 전치행렬
📍 행과 열의 값이 반대인 행렬을 의미
```py
# i : 행의 좌표, len(arr)
# j : 열의 좌표, len(arr[0])
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] # 3*3 행렬

for i in range(3):
  for j in range(3):
    if i < j:
      arr[i][j], arr[j][i] = arr[j][i], arr[i][j]
```
- 모든 좌표에 대하여 행과 열의 값을 바꾸게 되면 본래의 모습으로 되돌아오기 때문에 이를 주의해야 함

|`i < j`|`i == j`|`i > j`|`2-i == j`|
|:---:|:---:|:---:|:---:|
|<img src="..\image\list2-ij1.png">|<img src="..\image\list2-ij2.png">|<img src="..\image\list2-ij3.png">|<img src="..\image\list2-ij4.png">|


### zip
`zip(iterable*)`
- 동일한 개수로 이루어진 자료형들을 묶어 주는 역할을 하는 함수
```py
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
list12 = list(zip(list1, list2))
print(list12) # [('a', 1), ('b', 2), ('c', 3)]
```

<p align = 'center'>
  <image src = '..\image\list2-zip.png' width = 300>
</p>

```py
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(list(zip(*arr)))  # [(1, 4, 7), (2, 5, 8), (3, 6, 9)]
```

# 부분집합
- 집합의 원소가 n개일 때, 공집합을 포함한 부분집합의 수는 2^n개.
- 이는 각 원소를 부분집합에 포함시키거나 포함시키지 않는 2가지 경우를 모든 원소에 적용한 경우의 수와 같다.
  - {1, 2, 3, 4} ➡ 2 X 2 X 2 X 2 = 16가지

## itertools 라이브러리의 combinations 메서드 사용하기
🤔

## 단순 반복문과 배열
🤔

## 재귀
🤔

## 비트연산

📌비트 연산자
- `&` : 비트 단위로 AND 연산을 함  
- `|` : 비트 단위로 OR 연산을 함
- `<<` : 피연산자의 비트 열을 왼쪽으로 이동시킴 (왼쪽 쉬프트 연산자)
- `>>` : 피연산자의 비트 열을 오른쪽으로 이동 시킴 (오른쪽 쉬프트 연산자)

```python
a = 5  # 5의 이진 표현 : 0000 0101
b = a << 2 # 5를 왼쪽으로 2비트 쉬프트
print(b) # 20 (0001 0100)
```
`<<n`을 하게 되면 숫자는 2의 'n'의 제곱배로 커지게 됨.
- 2**2 = 4
- 5 * 4

```python
a = 30 # 30의 이진 표현 : 0001 1110
b = a >> 3 # 30을 오른쪽으로 3비트 쉬프트 0000 0011 
print(b)  # 3
```
`>>n`을 하게 되면 숫자는 2의 'n' 제곱배로 나눠지며, 정수형으로 결과가 반환됨
- 2**3 = 8
- 30/8 = 3.75

📌 비트 연산자를 이용하여 부분집합을 생성
```py
for i in range(1<<3):
    print(i, end= " ")
# 0 1 2 3 4 5 6 7

for i in range(2<<3):
    print(i, end= " ")
# 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
```
- `range(1<<n)`을 이용 : 원소가 n개일 경우의 모든 부분집합의 수를 의미

<p align = 'center'>
  <image src = '..\image\list2-bit.png' width = 400>
</p>

- `i & (1<<j)`: i의 j번째 비트가 1인지 아닌지 검사


```py
arr = [3, 6, 7]
n = len(arr)

for i in range(1 << n): # 1<<n : 부분 집합의 개수
    for j in range(n): # 원소의 수 만큼 비트를 비교함
        print(f'#i:{i} j:{j}') 
        if i & (1 << j): #i의 j번 비트가 1인 경우 
            print(f'조건 만족 {arr[j]}') # j번 원소 출력
```

<details>
<summary> 답 </summary>

```py
'''
#i:0 j:0
#i:0 j:1
#i:0 j:2
#i:1 j:0
조건 만족 3
#i:1 j:1
#i:1 j:2
#i:2 j:0
#i:2 j:1
조건 만족 6
#i:2 j:2
#i:3 j:0
조건 만족 3
#i:3 j:1
조건 만족 6
#i:3 j:2
#i:4 j:0
#i:4 j:1
#i:4 j:2
조건 만족 7
#i:5 j:0
조건 만족 3
#i:5 j:1
#i:5 j:2
조건 만족 7
#i:6 j:0
#i:6 j:1
조건 만족 6
#i:6 j:2
조건 만족 7
#i:7 j:0
조건 만족 3
#i:7 j:1
조건 만족 6
#i:7 j:2
조건 만족 7
'''
```

</details>
<br>  

```python
arr = [3, 6, 7, 1, 5, 4]
n = len(arr)

for i in range(1 << n):
    sub_arr = [] # 부분집합 리스트
    for j in range(n):
         if i & (1 << j):
             sub_arr += [arr[j]]
    print(sub_arr)
```
<details>
<summary> 답 </summary>

```py
'''
[]
[3]
[6]
[3, 6]
[7]
[3, 7]
[6, 7]
[3, 6, 7]
[1]
[3, 1]
[6, 1]
[3, 6, 1]
[7, 1]
[3, 7, 1]
[6, 7, 1]
[3, 6, 7, 1]
[5]
[3, 5]
[6, 5]
[3, 6, 5]
[7, 5]
[3, 7, 5]
[6, 7, 5]
[3, 6, 7, 5]
[1, 5]
[3, 1, 5]
[6, 1, 5]
[3, 6, 1, 5]
[7, 1, 5]
[3, 7, 1, 5]
[6, 7, 1, 5]
[3, 6, 7, 1, 5]
[4]
[3, 4]
[6, 4]
[3, 6, 4]
[7, 4]
[3, 7, 4]
[6, 7, 4]
[3, 6, 7, 4]
[1, 4]
[3, 1, 4]
[6, 1, 4]
[3, 6, 1, 4]
[7, 1, 4]
[3, 7, 1, 4]
[6, 7, 1, 4]
[3, 6, 7, 1, 4]
[5, 4]
[3, 5, 4]
[6, 5, 4]
[3, 6, 5, 4]
[7, 5, 4]
[3, 7, 5, 4]
[6, 7, 5, 4]
[3, 6, 7, 5, 4]
[1, 5, 4]
[3, 1, 5, 4]
[6, 1, 5, 4]
[3, 6, 1, 5, 4]
[7, 1, 5, 4]
[3, 7, 1, 5, 4]
[6, 7, 1, 5, 4]
[3, 6, 7, 1, 5, 4]
'''
```

</details>


# Search 검색

- 저장되어 있는 자료 중에서 **원하는 항목**을 찾는 작업
- 목적하는 **탐색 키**를 가진 항목을 찾는 것
    - 탐색 키(search key): 자료를 구별하여 인식할 수 있는 키
- 검색의 종류
    - 순차 검색 sequential search
    - 이진 검색 binary search : 내가 가진 값의 중간을 이용
    - 해쉬 hash : 고유한 위치 값을 사용

## 순차 검색 Sequential Search

- 일렬로 되어 있는 자료를 순서대로 검색하는 방법
    - 가장 간단하고 **직관적인 검색 방법**
    - 배열이나 연결 리스트 등 순차구조로 구현된 자료구조에서 원하는 항목을 찾을 때 유용함
    - 알고리즘이 단순하여 구현이 쉽지만, 검색 대상의 수가 많은 경우에는 수행시간이 급격히 증가하여 비효율적임
- 2가지 경우
    - 정렬되어 있지 않은 경우
    - 정렬되어 있는 경우
- 정렬을 하는데 필요한 시간과 검색 시간을 합쳐서 유리한지 판단하는 것도 필요

### 검색 과정

- 첫 번재 원소부터 순서대로 검색 대상과 키 값이 같은 원소가 있는지 비교하며 찾음
- 키 값이 동일한 원소를 찾으면 그 원소의 인덱스를 반환한다.
- 자료구조의 마지막에 이를 때까지 검색 대상을 찾지 못하면 검색 실패

<p align = 'center'>
  <image src = '..\image\list2-search1.png'>
</p>

<p align = 'center'>
  <image src = '..\image\list2-search2.png'>
</p>
  
  - 모든 원소에 접근하는 것이 아닌거 같다? = 원칙적으로 다 검색(일찍 찾는 것일뿐)
  - -1을 반환하도록 함(인덱스 -1)이 아님!

### 슈도코드

```python
def f(key, A):
	for i : 0 -> N-1
		if key == A[i]
			return i
	
	return -1
```

함수가 불편하면 아래와 같이 작성해도 되지만 되도록이면 함수 형태면 함수를 사용하는 것이 좋다

```python
return -1
for i : 0 -> N-1
	if key == A[i]
		return i
```

### 정렬되어 있지 않은 경우

- 찾고자 하는 원소의 순서에 따라 비교 횟수가 결정됨
- 첫 번째 원소를 찾을 때는 1번 비교, 두 번째 원소를 찾을 때는 2번 비교
- 정렬되지 않은 자료에서 순차 검색의 평균 비교 횟수
    
    $(1/n)\times(1+2+3+...+n) = (n+1)/2$
    
- 시간 복잡도: $O(n)$
- 구현 예시(슈도코드)
    
    ```python
    # while 반복문을 이용
    def sequential_search(arr, n, key):
    	i <- 0
    	while i < n and arr[i] != key: # 배열끝에 가거나, 키를 찾으면 반복문 종료
    		i <- i+1
    	if i < n : return i
    	else: return -1
    ```
    

### 정렬되어 있는 경우

<p align = 'center'>
  <image src = '..\image\list2-search3.png'>
</p>

<p align = 'center'>
  <image src = '..\image\list2-search4.png'>
</p>

- 자료가 오름차순으로 정렬된 상태에서 검색을 실시한다고 가정.
- 자료를 순차적으로 검색하면서 키 값을 비교하여, 
원소의 키 값이 검색 대상의 키 값보다 크면 
찾는 원소가 없다는 것이므로 더 이상 검색하지 않고 검색을 종료한다.
    - 내가 찾고 싶은 숫자가 7인데 6 다음이 9이면 없는 거임
- 찾고자 하는 원소의 순서에 따라 비교 횟수가 결정됨
    - 정렬이 되어있으므로, 검색 실패를 반환하는 경우 평균 비교 횟수가 반으로 줄어든다.
    - 시간 복잡도 $O(n)$
- 슈도코드
    
    ```python
    def sequential_Search2(arr, n , key):
    	i <- 0
    	while i < n and arr[i] < key: 
    		# 배열끝에 가거나, 키보다 크거나 같으면 종료
    		# 조건문에 항상 인덱스를 먼저 설정하는 것이 좋음
    		i <- i+1
    	if i < n and arr[i] == key : return i
    		# 벗어나지 않았고 key를 찾았으면 index 리턴
    	else: return -1
    		# 벗어났고, key도 못찾았으면 -1 리턴
    ```
    

## 이진 검색 Binary Search

- 자료의 가운데에 있는 항목의 키 값과 비교하여 다음 검색의 위치를 결정하고 검색을 계속 진행하는 방법
    - 목적 키를 찾을 때까지 이진 검색을 순환적으로 반복 수행함으로써 검색 범위를 반으로 줄여가면서 보다 빠르게 검색을 수행함
- 이진 검색을 하기 위해는 **자료가 정렬된 상태**여야 한다.

### binary search 검색 과정

<p align = 'center'>
  <image src = '..\image\list2-search5.png'>
</p>

<p align = 'center'>
  <image src = '..\image\list2-search6.png'>
</p>

- 홀수 : (start+end)//2
- 짝수 : (start+end)//2 면 중간에서 왼쪽
    - 0 1 2 3
    - (0+3)//2 = 1
    - 그러면 늘 오른쪽 선택하면 됨

### 구현

- 검색 범위의 시작점(start, left)과 종료점(end, right)을 이용하여 검색을 반복 수행한다.
- 이진 검색의 경우, 자료에 삽입이나 삭제가 발생했을 때 배열의 상태를 항상 정렬 상태로 유지하는 추가 작업이 필요하다.
    - 더 이상 삽입 삭제가 필요 없는 자료에서 쓰는 것이 좋다.

### binary search 슈도코드

```python
mid <- (start+end)//2
if arr[mid] == key: # 찾는 경우
	return mid
if arr[mid] < key:
	# 검색 범위가 오른쪽으로 바뀔 때
	start = mid + 1
else:
	# 검색 범위가 왼쪽으로 바뀔 때
	end = mid - 1
```

→ 위 과정을 반복 해야함

```python
while 남은 구간이 있으면.. 원소가 하나라도 남아 있으면...
```

```python
def binary_Search(arr, n, key):
	start = 0
	end = n-1
	while start <= end: # 남은 구간이 없을 때 까지 반복
		middle = (start+end)//2
		if arr[middle] == key # 검색성공
			return true
		elif arr[middle] > key:
			# 왼쪽 부분으로 이동
			end = middle - 1
		else:
			# 오른쪽 부분으로 이동
			start = middle + 1
	
	return false # 검색 실패
```

- `while start <= end`
    - □ → start == end == middle
    - □□□ → start < end

### 재귀 함수 이용

- 아래와 같이 재귀 함수를 이용하여 이진 검색을 구현할 수 있다.
- 반복 vs 재귀
    - 똑같은 작업을 계속한다고 했을 때 반복이 더 빠름

```python
def Binary_Search2(arr, low, high, key):
	if low > high: # 검색 실패
		return Flase
	else:
		middle = (low + high) // 2
		if key == arr[middle]:
			return True
		elif key < arr[middle]:
			return Binary_Search2(arr, low, middle-1, key)
		elif arr[middle] < key:
			return Binary_Search2(arr, middle+1, high, key)
```

### 실사용 예시

- 다음 예에서 원본 데이터에서 배열과 별개로, 배열 인덱스를 추가한 예를 보여주고 있다.
- 원본 데이터에 데이터가 삽입될 경우 상대적으로 크기가 작은 인덱스 배열을 정렬하기 때문에 속도가 빠르다.

<p align = 'center'>
  <image src = '..\image\list2-func.png'>
</p>

### 인덱스

- 인덱스라는 용어는 데이터베이스에서 유래했으며, 테이블에 대한 동작 속도를 높여주는 자료 구조를 일컫는다.
- 데이터베이스 분야가 아닌 곳에서는 Look up table 등의 용어를 사용하기도 한다.
- 인덱스를 저장하는데 필요한 디스크 공간은 보통 테이블을 저장하는데 필요한 디스크 공간보다 작다.
    - 왜냐하면 보통 인덱스는 키-필드만 갖고 있고, 테이블의 다른 세부 항목들은 갖고 있지 않기 때문이다.
- 대량의 데이터를 매번 정렬하면, 프로그램의 반응은 느려질 수 밖에 없다. 따라서 이러한 대량 데이터의 성능 저하 문제를 해결하기 위해 배열 인덱스를 사용할 수 있다.
    - 데이터베이스 인덱스는 이진 탐색 트리 구조로 되어 있다.
    - [참고] **이진 탐색 트리** - 삽입, 삭제, 정렬까지 편하게 할 수 있는 자료구조
        - 대부분 정수형 자료만을 이용함
  

# 선택 정렬 Selection Sort
<p align = 'center'>
  <image src = 'https://www.notion.so/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A640%2Fformat%3Awebp%2F1*H2bCd6eoIONJIUnG5Jm9sQ.gif?table=block&id=875a16e9-9141-4834-973c-046061b37b45&spaceId=ad2b66d4-21f0-472f-9113-bda789629967&userId=dcd52217-99c9-4b24-a664-df8a623a2c57&cache=v2' width = 350>
</p>

- 주어진 자료들 중 가장 작은 값의 원소부터 차례대로 선택하여 위치를 교환하는 방식
    - 앞서 살펴본 셀렉션 알고리즘(선택 검색)을 전체 자료에 적용한 것이다.
- 시간 복잡도 $O(n^2)$ (코드는 단순)

## Selection Sort 정렬 과정

1. 주어진 리스트 중에서 최소값을 찾는다.
    <p align = 'center'>
      <image src = '..\image\list2-ss1.png' width = 350>
    </p>
1. 그 값을 리스트의 맨 앞에 위치한 값과 교환하다.
    <p align = 'center'>
      <image src = '..\image\list2-ss2.png' width = 350>
    </p>

1. 맨 처음 위치를 제외한 나머지 리스트를 대사응로 위의 과정을 반복한다.
    
    3-1. 미정렬 리스트에서 최솟값을 찾음
      <p align = 'center'>
        <image src = '..\image\list2-ss3.png' width = 350>
      </p>
    
    3-2. 리스트의 맨 앞에 위치한 값과 교환
      <p align = 'center'>
        <image src = '..\image\list2-ss4.png' width = 350>
      </p>
    
    3~.
    
      <p align = 'center'>
        <image src = '..\image\list2-ss5.png' width = 350>
      </p>
      <p align = 'center'>
        <image src = '..\image\list2-ss6.png' width = 350>
      </p>
      <p align = 'center'>
        <image src = '..\image\list2-ss7.png' width = 350>
      </p>
      <p align = 'center'>
        <image src = '..\image\list2-ss8.png' width = 350>
      </p>
    
    
    - 미정렬 원소가 하나 남은 상황에서는 마지막 원소가 가장 큰 값게 되므로 실행을 종료하고 선택 정렬이 완료된다.
    - 값이 아니라 인덱스를 가지고 움직여야 함

## Selection Sort 슈도코드

```python
def Selection_Sort(a[], n)
	for i from 0 to n-2 # 기준 위치
		a[i], ... ,a[n-1] 원소 중 최소값 a[k] 찾음
		a[i]와 a[k] 교환
```

## 선택 정렬 코드

```python
def Selection_Sort(arr, n):
	for i in range(n-1): # 기준 위치 i, 구간 시작
		min_idx = i # 기준 위치를 최솟값 위치로 가정
		for j in range(i+1, n): # 전체를 훑으면서 진짜 최솟값의 인덱스를 찾음
			if arr[min_idx] > a[j]:
				min_idx = j
		# 구간의 최솟값을 기준위치로 이동
		arr[i], arr[min_idx] = arr[min_idx], arr[i]
```

# 셀렉션 알고리즘 Selection Algorithm

- 저장되어 있는 자료로부터 k번째로 큰 혹은 작은 원소를 찾는 방법을 셀렉션 알고리즘이라 함.
    - 최솟값, 최댓값 혹은 중간값을 찾는 알고리즘을 의미하기도 한다.

## Selection Algorithm 선택 과정

- 정렬 알고리즘을 이용하여 자료 정렬하기
- 원하는 순서에 있는 원소 가져오기

## 일반적인 셀렉션 알고리즘

- k번째로 작은 원소를 찾는 알고리즘
    - 1번 부터 k번째 까지 작은 원소를 찾아 배열의 앞쪽으로 이동시키고, 배열의 k번째를 반환한다.
    - k가 비교적 작을 때 유용
- 시간 복잡도 $O(kn)$

## Selection Algorithm 코드

```python
def select(arr, k):
	for i in range(0, k):
		min_index = i
		for j in range(i+1, len(arr)):
			if arr[min_index] > arr[j]:
				min_index = j
		arr[i], arr[min_index] = arr[min_index], arr[i]
	
	return arr[k-1]	
```

# 포켓볼 순서대로 정렬하기

- 흩어진 당구공을 오른쪽 정리한다고 하자. 어떻게 하겠는가?
- 많은 사람들은 당구대 위에 있는 공 중 가장 작은 숫자의 공부터 골라서 차례대로 정리할 것이다. 이것이 바로 선택 정렬이다.