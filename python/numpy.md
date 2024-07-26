
# 필요 패키지 설치 및 import
```py
pip install numpy
import numpy as np
```

# Numpy 기본 사용법
## 기존 배열을 numpy array로 변형
`np.array()` 함수 사용
```py
arr = [1, 2, 3, 4, 5]
np_arr = np.array(arr)
print(np_arr)  # [1 2 3 4 5]
```
`type()`함수를 통한 타입 확인
```py
print(type(np_arr))  # <class 'numpy.ndarray'>
```

## Numpy 배열 생성
### 기본 배열 생성
`np.arrange()` 함수 사용
```py
arr = np.arrange(15)  
print(arr)  # [ 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14]
```
python의 range 함수와 비슷하게도 사용 가능
```py
arr = np.arrange(10, 30, 5)
print(arr)  # [10 15 20 25]
```

### Numpy 2차원 배열 생성
- `np.arrange()` 함수로 배열 생성 후 reshape()를 통해 2차원 배열로 변형
- ⚠주의사항⚠ : reshape의 x, y축 곱이 배열의 개수와 맞지 않으면 에러가 발생

```py
# reshape(x축 개수, y축 개수)
arr = np.arange(15).reshape(3, 5)
print(arr)

# [[ 0  1  2  3  4]
#  [ 5  6  7  8  9]
#  [10 11 12 13 14]]
```

```py
arr = np.arange(20).reshape(3, 5)
print(arr)

# ValueError: cannot reshape array of size 20 into shape (3,5)
```
### 0으로만 이루어진 배열 생성
`np.zeros((x축 개수, y축 개수), dtype=데이터 타입)` 사용
```py
# np.zeros((x축 개수, y축 개수), dtype=데이터 타입)
arr = np.zeros((3, 4), dtype=np.int64)
print(arr)

# [[0 0 0 0]
#  [0 0 0 0]
#  [0 0 0 0]]
```

### 1로만 이루어진 배열 생성
`np.ones((x축 개수, y축 개수), dtype=데이터 타입)`
```py
# np.ones((x축 개수, y축 개수), dtype=데이터 타입)
arr = np.ones((3, 4), dtype=np.int64)
print(arr)

# [[1 1 1 1]
#  [1 1 1 1]
#  [1 1 1 1]]
```
### 특정 수로 이루어진 배열 생성
`np.full((x축 개수, y축 개수), 값)`
```py
# np.full((x축 개수, y축 개수), 값)
arr = np.full((3, 4), 0.11)
print(arr)

# [[0.11 0.11 0.11 0.11]
#  [0.11 0.11 0.11 0.11]
#  [0.11 0.11 0.11 0.11]]
```

### 균일한 간격의 숫자 생성
`np.linspace(구간 시작점, 구간 끝점, 구간 내 숫자 개수)`
- 그래프의 x축을 그릴 때 많이 사용
- lin은 선형 간격 값을 생성하는 것을 나타내며, 이는 로그 간격 값을 생성하는 logspace와 대조
```py
# np.linspace(구간 시작점, 구간 끝점, 구간 내 숫자 개수)
arr = np.linspace(-5, 5, 10)
print(arr)

# [-5.         -3.88888889 -2.77777778 -1.66666667 -0.55555556  0.55555556
#   1.66666667  2.77777778  3.88888889  5.        ]
```

### 랜덤한 값 생성
`np.random.rand(개수)`
```py
# np.random.rand(개수)
arr = np.random.rand(5)
print(arr)

# [0.24574726 0.24769587 0.3610198  0.36433009 0.11670666]
```

2차원 배열로 생성  
`np.random.rand(x축 개수, y축 개수)`
```py
# np.random.rand(x축 개수, y축 개수)
arr = np.random.rand(2, 3)
print(arr)
```
원하는 범위 내의 정수 값을 원하는 개수로 생성하기  
`np.random.randint(범위, size=개수)`
```py
# np.random.randint(범위, size=개수)
arr = np.random.randint(5, size=10)
print(arr)
```
# 기본 함수
```py
arr = np.arange(15).reshape(3, 5)
```
```py
# 배열 각 축(axis) 의 크기
arr.shape  # (3, 5)
```
```py
# 축의 개수(차원, Dimension)
arr.ndim  # 2
```
```py
# 각 요소(Element) 의 타입
arr.dtype  # dtype('int64')
```
```py
# 각 요소(Element)의 타입의 bytes 의 크기
arr.itemsize  # 8
```
```py
# 전체 요소(Element) 의 개수
arr.size  # 15
```
# Indexing & Slicing
python 기본 slice와 비슷하지만, 다차원 배열에서의 사용이 조금 더 편리함
## Indexing
```py
arr = np.arange(25).reshape(5, 5)
print(arr[1][2])  # 7 
print(arr[1, 2])  # 7
```
- ndarray에서 차이점은 [1, 2]로 접근이 가능하다.
## Slicing
```py
# Python List 에서의 2차원 배열 slicing
# 2행부터 / 3열까지
arr = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24]]
print([arr[:3] for arr in arr[2:]])

# [[10, 11, 12], [15, 16, 17], [20, 21, 22]]
```
```py
arr = np.arange(25).reshape(5, 5)

# 1번행 이상 / 3번행 미만, 2번 열 미만 출력
print(arr[1:3, :2])

# [[ 5  6]
#  [10 11]]
```
```py
# 모든 행, 2번 열 이후 출력
print(arr[:, :2])

# [[ 0  1]
#  [ 5  6]
#  [10 11]
#  [15 16]
#  [20 21]]
```
```py
# 모든 행 / 모든 열을 2칸씩 띄워서 출력
print(arr[:, ::2])

# [[ 0  2  4]
#  [ 5  7  9]
#  [10 12 14]
#  [15 17 19]
#  [20 22 24]]
```
```py
# 1번 행부터 끝까지, 2칸씩 띄워서 / 0번 열부터 4번 미만 열까지, 3열씩 띄워서 출력
print(arr[1::2, 0:4:3])

# [[ 5  8]
#  [15 18]]
```

# 배열 값 수정 & 복사하기
- Index 접근 후 수정은 기본 배열과 동일하게 하면 된다.
- Numpy 도 마찬가지로 python 기반이기 때문에 얕은 복사(Shallow Copy)가 발생한다.
    - 깊은 복사: '실제 값'을 새로운 메모리 공간에 복사하는 것
    - 얕은 복사: '주소 값'을 복사
- 원본 배열을 수정하지 않으려면 `np.copy()` 함수를 사용하면 된다.

```py
arr = np.arange(15).reshape(3, 5)
# 값이 변경된다.
arr2 = arr
arr2[0][0] = 15
print(arr)

# [[15  1  2  3  4]
#  [ 5  6  7  8  9]
#  [10 11 12 13 14]]
```
```py
arr = np.arange(15).reshape(3, 5)
arr2 = arr.copy()
arr2[0][0] = 15
print(arr)
print(arr2)

# [[ 0  1  2  3  4]
#  [ 5  6  7  8  9]
#  [10 11 12 13 14]]
# [[15  1  2  3  4]
#  [ 5  6  7  8  9]
#  [10 11 12 13 14]]
```