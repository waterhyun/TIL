# 문자열 String
## 문자 표현의 발전
### ASCII의 발전
📍 컴퓨터에서의 문자표현 

- 문자 저장 방법:
    - 글자 ‘A’를 메모리에 저장하는 방법에 대해서 생각해보자
    - 메모리는 숫자만 저장할 수 있기 때문에,  ‘A’라는 글자의 모양 그대로 비트맵으로 저장하면 메모리 낭비가 심함.
    - 그래서 각 문자에 대응되는 숫자를 정해 놓고 이를 메모리에 저장하는 방법 사용.
    - 영어가 대소문자 합쳐서 52자 이므로 6비트(64가지 조합)로 모두 표현 가능:
        - 000000 → ‘a’
        - 000001 → ‘b’
        - 52 < 2^6 

📍 네트워크 발전 전

- 미국의 지역별 코드 체계: 각 지역에서 독자적인 코드 체계를 사용.

📍 네트워크 발전 후

- 정보 교환 문제
    <p align = 'center'>
    <img src = 'image\str-ascii.png' width = 500>
    </p>
    
    - 서로 간의 정보 교환시 해석 차이 문제 발생
    - 인터넷은 미국에서 발전했기 때문에 이 문제는 특히 심각

- 표준화 필요성
    - 혼동을 피하기 위해 표준화 필요
    - 이를 목적으로, 1967년 미국에서 ASCII(American Standard Code for Information Interchange) 표준 제정 - 문자 인코딩 표준

### ASCII

- 7-bit 인코딩으로 128문자 표현 가능
 
  <p align = 'center'>
    <img src = 'https://alpharithms.s3.amazonaws.com/assets/img/ascii-chart/ascii-table-alpharithms-scaled.jpg' width = 500>
  </p>    
    
    - 33개의 제어 문자 (출력 불가능) - ASCII control characters (character code 0-31)
    - 95개의 출력 가능한 문자(공백 포함) - ****ASCII printable characters (character code 32-127)
- 확장 ASCII (Extended ASCII) - The extended ASCII codes (character code 128-255)

  <p align = 'center'>
    <img src = 'image\str-ascii2.png'  width = 500>
  </p>
    
    - **8-bit**를 사용하여 부가적인 문자 128개를 추가할 수 있게 함.
        - 1Byte 내의 8-bit를 모두 사용함 ↔ 표준 아스키 7-bit 사용
        - 8-bit(8bits) = 1byte = 주소가 부여되는 최소 단위
    - 표준 문자 이외의 악센트 문자, 도형 문자, 특수 문자, 기호 등을 포함 (부가적인 문자)
    - 서로 다른 프로그램이나 컴퓨터 간에 교환 불가: 각기 다른 방식으로 문자 할당
        - 컴퓨터 생산자와 소프트웨어 개발자가 여러 가지 다양한 문자에 할당할 수 있도록 함
- **차이점**
    - **표준 ASCII**: 하드웨어 및 소프트웨어 간에 세계적으로 통용.
    - **확장 ASCII**: 특정 프로그램이나 컴퓨터에서만 해독 가능

현대의 문자 코드

- 오늘 날 대부분의 컴퓨터는 문자를 읽고 쓰는데 ASCII 형식을 사용
- 각국의 컴퓨터가 발전하면서 **자국 문자 표현을 위한 코드 체계** 개발:
    - **한국**도 한글 코드체계를 개발하여 **조합형**과 **완성형** 두 가지를 사용.
- **인터넷의 세계적 확산**:
    - ASCII의 문제와 유사한 문제가 국가 간 정보 교환 시 발생.
    - 자국 코드체계를 다른 국가에서 인식하지 못하면 정보 해석에 오류가 발생.
- **유니코드**:
    - 다국어 처리를 위한 표준
    - 예시
    - 유니코드는 다양한 문자 집합으로 분류
        - **UCS-2 (Universal Character Set 2)**: 16비트
        - **UCS-4 (Universal Character Set 4)**: 32비트
    - 유니코드를 저장하는 변수 크기를 정의
    - 그러나, **바이트 순서에 대한 표준화 부족**.
        - big-endian : 첫 번째 주소에 가장 큰 값인 0x01을 먼저 저장
        - little-endian : 첫 번째 주소에 가장 작은 값인 0x04 저장
            
            <p align = 'center'>
              <img src = 'image\str-unicode1.png'  width = 300>
            </p>
  
        - 4660을 13330으로 이해하게 됨
  
            <p align = 'center'>
              <img src = 'image\str-unicode2.png'  width = 300>
            </p>
            
    - 따라서, 파일 인식 시 UCS-2와 UCS-4를 구 분하여 처리해야 하는 문제 발생 → 유니코드의 적당한 외부 인코딩이 필요하게 되었다.
- 유니코드 인코딩(UTF : Unicode Transformation Format)
    - **UTF-8** (웹에서 사용):
        - 최소: 8비트, 최대: 32비트 (1 Byte * 4)
            - 내가 저장할 내용에 따라서 길이를 바꾸는 거임
            - 공간을 줄일 수 있다는 장점이 있음
    - **UTF-16** (Windows, Java에서 사용):
        - 최소: 16비트, 최대: 32비트 (2 Byte * 2)
    - **UTF-32** (Unix에서 사용):
        - 최소: 32비트, 최대: 32비트 (4 Byte * 1)
            - 메모리를 넉넉하게 쓰는 대신에 해석할 시간을 줄임
- [참고] CRLF
    - 텍스트 파일에서 줄 끝을 나타내는 특수한 문자 시퀀스
    - CR"과 "LF"는 각각 다른 제어 문자를 의미하며, 이 두 문자가 결합되어 줄 바꿈을 구현합니다.
    - **CR (Carriage Return)**:
        - 문자 코드: ASCII 13 (0x0D)
        - 기능: 커서를 현재 줄의 시작으로 이동.
    - **LF (Line Feed)**:
        - 문자 코드: ASCII 10 (0x0A)
        - 기능: 커서를 다음 줄로 이동.
    - CRLF 시퀀스
        - **CRLF**:
            - 줄 바꿈을 나타내는 두 문자 조합으로, **CR (0x0D) + LF (0x0A)** 순서로 배치됨.
            - 이 조합은 특히 Windows 운영 체제에서 줄 바꿈을 나타내는 데 사용됩니다.
    - 줄 바꿈 규칙
        - **Windows**:
            - 줄 바꿈을 **CRLF**로 처리.
            - 예: `\r\n`
        - **Unix/Linux/ Mac(macOS의 현재 버전)**:
            - 줄 바꿈을 **LF**로 처리.
            - 예: `\n`
        - **Mac (macOS의 이전 버전)**:
            - 줄 바꿈을 **CR**로 처리.
            - 예: `\r`
    - 저장된 파일을 16진수 편집기로 읽어 확인할 수 있음. https://hexed.it/

**Python에서의 인코딩**:

- **Python 2.x**:
    - 기본 인코딩: ASCII
    - 다른 인코딩 사용 시: 첫 줄에 `# -*- coding: utf-8 -*-` 명시.
- **Python 3.x**:
    - 기본 인코딩: UTF-8 → 생략 가능
    - 다른 인코딩 사용 시: 첫 줄에 원하는 인코딩 방식을 명시하면 됨.

## 문자열

### 문자열의 분류

- 문자열(string)
    - **Fixed length**: 고정 길이 문자열.
    - **Variable length**: 가변 길이 문자열.
        - **Length controlled**: 문자열의 길이를 명시적으로 제어. (예: Java의 `String` 클래스)
        - **Delimited**: 구분자로 문자열의 끝을 표시. (예: C 언어의 문자열)

### JAVA 문자열 처리

- **`String` 클래스 메모리 배치**:
    
    <p align = 'center'>
      <img src = 'image\str-java.png' width = 500>
    </p>
    
    - `java.lang.String` 클래스에는 기본적인 객체 메타 데이터 외에도 네 가지 주요 필드가 포함됨:
        - **hash**: 문자열의 해시 값.
        - **count**: 문자열의 길이.
        - **offset**: 문자열 데이터의 시작점.
        - **value**: 실제 문자열 배열에 대한 참조.

### C 언어 문자열 처리

- **문자열 구현**:
    - 문자열은 문자 배열 형태로 구현된 응용 자료형.
    - 문자열의 끝을 표시하기 위해 항상 널 문자 (`'\0'`)를 추가해야 함.
    
    ```c
    char ary[] = {'a', 'b', 'c', '\0'}; // 또는
    char ary[] = 'abc';
    ```
    
- **문자열 처리**:
    - C 언어에서는 문자열 처리에 필요한 연산을 다양한 **함수** 형태로 제공. (예: `strlen`, `strcpy`, `strcmp` 등)

### 요약

- **Java 문자열**: `String` 클래스는 고정 길이 문자열을 지원하며, 해시 값, 길이, 오프셋, 문자열 배열 참조 등을 포함합니다.
- **C 언어 문자열**: 가변 길이 문자열로 문자 배열을 사용하고, 문자열 끝에 널 문자를 추가하여 종료를 표시합니다.

### 참고

- 다음 두 코드의 차이 이해해보기
    
    ```python
    s1 = list(input()) # ['a', 'b', 'c']
    s2 = input() ['abc']
    ```
    
- `strlen()` 함수 만들어보기
    
    ```python
    def strlen(a):
    	# \0을 만나면 \0을 제외한 글자수를 리턴
    	i = 0
    	while a[i] != '\0'
    		i += 1 # 을 이용해보기
    		
    a = ['a', 'b', 'c', '\0']
    print(strlen(a))
    ```
    

### JAVA(객체 지향 언어)에서의 문자열 처리

- 문자열 데이터를 저장, 처리해주는 클래스를 제공
- `String` 클래스를 사용
    
    ```java
    String str = 'abc'; //또는 String str = new String('abc')
    ```
    
- 문자열 처리에 필요한 연산을 연산자, 메소드 형태로 제공한다
    - `+` , `length()`, `replace()`, `split()`, `substring()` …
    - 보다 풍부한 연산을 제공한다

### Python에서의 문자열 처리

- char 타입 없음
- 텍스트 데이터의 취급 방법이 통일되어 있음
- 문자열 기호
    - 홑따옴표, 쌍따옴표, 홑따옴표 3개, 쌍따옴표 3개
    - +(Concatenation) : 문자열+문자열, 이어 붙여주는 역할
    - *(반복) : 문자열 * 수 : 수만큼 문자열이 반복
- 문자열은 시퀀스 자료형으로 분류되고, 시퀀스 자료형에서 사용할 수 있는 인덱싱, 슬라이싱 연산들을 사용할 수 있음
- 문자열 클래스에서 제공되는 메소드 : `replace()`, `split()`, `isalpha()`, `find()`
- 문자열은 튜플과 같이 요소값을 변경할 수 없음 immutable

### 언어별 String 처리의 기본적인 차이점

- c - ASCII
- java - UTF16, 2byte
- python - UTF8

  <p align = 'center'>
    <img src = 'image\str-stringmethod.png' width = 500>
  </p>

### 문자열 뒤집기

- 자기 문자열에서는 뒤집는 방법이 있고 새로운 빈 문자열을 만들어 소스의 뒤에서부터 읽어서 타겟에 쓰는 방법이 있겠다.
- 자기 문자열을 이용할 경우는 swap을 위한 임시 변수가 필요하며 반복 수행을 문자열 길이의 반만 수행해야 한다
    - 문자열 길이 9
    - 9/2 = 4.5 (9//2) = floor 연산
    - 4회 반복
        
        ```python
        for i in range(n//2):
        	arr[i], arr[n-1-i] = arr[n-1-i], arr[i]
        ```
        

```python
s = 'reverse this string'
s = s[::-1]
 
s = 'abcd'
s = list(s)
s.reverse()
s = ''.join(s) 
```

### 문자열 비교

- c - `strcmp()` 함수 제공
    - 다음 c 코드를 참고해 문자열 비교함수를 만들어보자
        - 문자열이 같으면 0 리턴
        - str1이 str2보다 **사전 순서상** 앞서면 음수 혹은 -1 리턴
        - str1이 str2보다 **사전 순서상** 나중이면 양수 혹은 1 리턴
    
    ```c
    int my_strcmp(const char *str1, fconst char *str2)
    {
    	int i = 0 ;
    	while(str1[i] != '\0')
    	{
    		if(str1[i] != str2[i]) break;
    		i ++
    	}
    	return (str1[i] - str2[i]);
    }
    ```
    
- java - `equals()` 메소드 제공
    - 문자열 비교에서 `==` 연산은 메모리 참조가 같은지 묻는 것
        - python의 `is`와 같음
- python - `==` 연산자와 `is` 연산자 제공
    - `==` 연산자는 내부적으로 특수 메서드 `__eq__()` 를 호출
- [참고] s1과 나머지 문자열을 `==`, `is` 로 비교한 결과를 확인해보세요.
    
    ```python
    s1 = 'abc'
    s2 = 'abc'
    print(s1 == s2) # True
    s3 = 'def'
    s4 = s1 # 복사
    s5 = s1[:2] + 'c'
    print(s2 == s5) # True 
    print(s2 is s5) # False
    print(s1 is s2) # True
    ```
    

### 문자열 숫자를 정수로 변환하기

- c - `atoi()` 함수 제공, 역 함수로는 `itoa()`가 있음
    
    ```c
    def atoi(s):
    	i = 0
    	for x in s:
    		i = i*10 + ord(x) - ord('0')
    	return i
    	
    s = '123'
    a = atoi(s)
    print(a+1)
    ```
    
- java - 숫자 클래스의 `parse` 메소드 제공
    - 예시) `Integer.parseInt(String)`
    - 역함수로는 `toString()` 메소드를 제공
- python - 숫자와 문자변환 함수를 제공
    - `int("123")`, `float("3.14")`, `str(123)`, `repr(123)`
    - `ord()` - 문자의 아스키코드의 값을 알려줌
    - `chr()` - 아스키코드의 문자를 보여줌
- 연습문제
    - `str()` 함수를 사용하지 않고, `itoa()`를 구현해보기
        - 양의 정수를 입력 받아 문자열로 변환하는 함수
        - 입력 값: 변환할 정수 값, 변환된 문자열을 저장할 문자배열
        - 반환 값: 없음
        - 참고 - `ord()`, `chr()`
        - 음수를 변환할 때는 어떤 고려 사항이 필요한가요?
        - `a = 123`
        - `chr(ord('0')+3)` 과 `a%10`을 이용하여 구현!

## 패턴 매칭 및 검색
📌 패턴 매칭에 사용되는 알고리즘
1. 고지식한 패턴 검색 알고리즘
2. 카프-라빈 알고리즘
3. KMP 알고리즘
4. 보이어-무어 알고리즘

### 고지식한 패턴 검색 알고리즘
📍 Bruet Force
- 본문 문자열을 처음부터 끝까지 **차례대로 순회**하면서 패턴내의 문자들을 일일이 비교하는 방식으로 동작
- 암호 해독, 문제 해결, 데이터 탐색 등 여러 분야에서 사용되는 기법
- 가능한 모든 경우를 시도해 결과를 찾는 방식
    - **단순성**: 알고리즘이 매우 간단함. 주어진 문제의 모든 가능한 해를 나열하고 검토하여 정답을 찾음
    - **시간복잡도**: 시간 복잡도가 높음
        - 최악의 경우 시간 복잡도는 텍스트의 모든 위치에서 패턴을 비교해야 하므로 O(MN)이 됨
        - 길이가 10000인 문자열에서 길이 80인 패턴을 찾는다고 할 때, 최악의 경우 약 10000*80 = 800,000 번의 비교가 일어난다.
        - 비교횟수를 줄일 수 있는 방법은 없는가?
    - **효율성**: 매우 간단한 문제나 가능한 해의 수가 적은 경우에는 효율적일 수 있으나 문제의 복잡도가 커질수록 비효율적
- 예제
    - **암호 해독**: 사용자가 설정한 비밀번호가 “1234”라고 할 때, brute-force 공격자는 가능한 모든 비밀번호 조합(0000부터 9999까지)을 시도하여 비밀번호를 잧습니다.
    - 문제 해결: 예를 들어, 특정 숫자 조합으로 이루어진 퍼즐이 있을 때, 모든 가능한 조합을 시도하여 올바른 조합을 찾는 것이 brute-force 방법
- 보안: 현대의 암호 시스템은 brute-force 공격에 대비하여 충분히 긴 비밀번호를 사용하거나 복잡한 암호화 방식을 채택. 따라서 brute-force 공격이 성공하기 어려움.
- 본문 문자열을 처음부터 끝까지 차례대로 순회하면서 패턴 내의 문자들을 일일이 비교하는 방식으로 동작

    <p align = 'center'>
    <img src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqB6K6BPKG_DKx6J2MTKpP0hXpQYYA8UrsU1q4rldbJ9mNYly-HWdOKYR0FwXwnkDzAV-gl6ZbpR1McsCfRJnhsa4XKA2o3ABWq6Ft5xM6zfO3vC_lj_Wx5y_UCjQStBByGXJDDqmXH4w/s640/Brute+Force.jpg' width = 500>
    </p>
- 코드

    ```py
    p = 'is' #찾을 패턴
    t = 'This is a book~!' # 전체 텍스트
    M = len(p) # 찾을 패턴의 길이
    N = len(t) # 전체 텍스트의 길이

    def BruteForce(p, t):
        i = 0 # t의 인덱스
        j = 0 # p의 인덱스
        while j < M and i < N:
            if t[i] != p[j]:
                i = i - j
                j = -1
            i += 1
            j += 1
        if j == M : return i - M # 검색 성공
        else : return - 1 # 검색 실패 
    ```

    ```py
    i = j = 0
    while i < N and j < M:
        if t[i] == t[j]: # 일치
            i += 1
            j += 1
        else: # 불일치
            i = i - j + 1
            j = 0
    ```

    ```py
    # 목표 암호
    target_password = "1234"

    # 가능한 모든 4자리 숫자 조합을 생성하고 검사
    for i in range(10):
        for j in range(10):
            for k in range(10):
                for l in range(10):
                    password = f"{i:01d}{j:01d}{k:01d}{l:01d}"
                    if password == target_password:
                        print(f"암호를 찾았습니다: {password}")
                        break
                else:
                    continue
                break
            else:
                continue
            break
        else:
            continue
        break
    
    ```

### KMP 알고리즘
- **Knuth-Morris-Pratt** 알고리즘은 문자열 검색 알고리즘
- 주어진 문자열 내에서 특정 패턴을 효율적으로 찾는 방법을 제공
- 패턴과 텍스트를 비교하는 과정에서 이전에 비교한 정보를 재사용하여 검색 속도를 향상 시키는 것이 특징
    - 즉, 불일치가 발생한 텍스트 스트링의 앞 부분에 어떤 문자가 있는지를 미리 알고 있으므로, 불일치가 발생한 앞 부분에 대하여 다시 비교하지 않고 매칭을 수행
- 시간 복잡도 : O(M+N)
- 주요 개념
    1. 부분 일치 테이블 (Partial Match Table) 또는 실패 함수(Failure Function)
    : KMP 알고리즘의 핵심은 부분 일치 테이블(또는 실패 함수)을 사용하는 것입니다. 이 테이블은 패턴의 각 위치에서 부분 문자열의 위치를 나타내며, 이를 통해 패턴이 일치하지 않을 때 텍스트의 다음 비교 위치를 빠르게 이동할 수 있습니다.
    2. 부분 일치 테이블 생성
    : 부분 일치 테이블을 생성하여, 패턴 내의 각 위치에서의 부분 일치를 기록합니다. 이 테이블은 패턴의 접두사와 접미사가 일치하는 길이를 저장합니다.
    3. 패턴 검색
    : 텍스트를 순차적으로 검색하면서 패턴이 일치하지 않는 경우, 부분 일치 테이블을 참조하여 패턴의 이동거리를 결정합니다. 이 방식이 중복 비교를 피하고 검색 효율을 높입니다.

- 아이디어 설명
    <p align = 'center'>
    <img src = 'image\str-kmp1.png' width = 500>
    </p>
  - 텍스트에서 abcdabc까지는 매치되고, e에서 실패한 상황 패턴의 맨 앞의 abc와 실패 직전의 abc는 동일함을 이용할 수 있다.
  - 실패한 텍스트 문자와 P[4]를 비교한다
    <p align = 'center'>
    <img src = 'image\str-kmp2.png' width = 500>
    </p>
  - 매칭이 실패했을 때 돌아갈 곳을 계산한다.
  - 요약
    <p align = 'center'>
    <img src = 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*Ixnj2k8qd9wxkTgKolhH0g.png' width = 500>
    </p>

- 코드
    ```py
    def compute_lps_array(pattern):
        lps = [0] * len(pattern)
        length = 0
        i = 1

        while i < len(pattern):
            if pattern[i] == pattern[length]:
                length += 1
                lps[i] = length
                i += 1
            else:
                if length != 0:
                    length = lps[length - 1]
                else:
                    lps[i] = 0
                    i += 1

        return lps

    def kmp_search(text, pattern):
        lps = compute_lps_array(pattern)
        i = 0  # index for text
        j = 0  # index for pattern

        while i < len(text):
            if pattern[j] == text[i]:
                i += 1
                j += 1

            if j == len(pattern):
                print(f"패턴이 텍스트의 {i - j} 위치에서 발견되었습니다.")
                j = lps[j - 1]
            elif i < len(text) and pattern[j] != text[i]:
                if j != 0:
                    j = lps[j - 1]
                else:
                    i += 1

    # 사용 예제
    text = "ABABDABACDABABCABAB"
    pattern = "ABABCABAB"
    kmp_search(text, pattern)

    ```

### 보이어-무어 알고리즘
- **Boyer-Moore** 알고리즘은 문자열 검색 알고리즘 중 하나로, 텍스트에서 패턴을 매우 효율적으로 찾는 방법을 제공.
- 내용이 쉽지 않음! [참고문서](https://www.cs.jhu.edu/~langmea/resources/lecture_notes/boyer_moore.pdf)
- 비교 연산을 최소화하여 검색 속도를 빠르게 만드는 것이 특징
- 특히, 긴 텍스트와 패턴을 다룰 때 성능이 우수
- 주요 개념
    1. 사전 이동 규칙 Heuristic
        - **불일치 규칙 (Bad Character Rule)**  
        : 패턴의 현재 문자가 텍스트에서 불일치할 때, 텍스트의 해당 문자가 패턴의 어떤 위치와 일치할 수 있는지를 계산하여 패턴을 이동시키는 방법입니다.
        - **좋은 접미사 규칙 (Good Suffix Rule)**  
        : 패턴의 일부가 텍스트에서 일치하는 경우, 일치하지 않는 접미사(문자열의 끝부분)를 기준으로 패턴을 이동시키는 방법입니다.
    2. 불일치 규칙 Bad Character Rule
        - 이 규칙은 텍스트에서 패턴의 문자가 불일치할 때, 패턴의 문자 집합에서 불일치 문자가 나타나는 가장 오른쪽 위치를 찾아 패턴을 이동시킵니다.
        - `bad character table`을 만들어, 각 문자에 대해 **가장 오른쪽**에 위치한 인덱스를 저장합니다.
    3. 좋은 접미사 규칙 Good Suffix Rule
        - 이 규칙은 패턴의 일부가 텍스트와 일치하는 경우, 일치하지 않는 접미사(문자열의 끝부분)를 기준으로 패턴을 이동시키는 방법입니다.
        - `good suffix table`을 만들어, 접미사가 일치하는 경우에 대한 이동 거리를 저장합니다.
- 보이어-무어 알고리즘의 단계
    1. **사전 이동 규칙 생성**  
    : 불일치 규칙을 위한 ‘bad character table’ 생성
    2. **패턴 검색**  
    : 텍스트를 순차적으로 검색하면서 불일치가 발생하면 ‘bad character table’과 ‘good suffix table’을 사용하여 패턴을 효율적으로 이동
- 정리
    - 오른쪽에서 왼쪽으로 비교
    - 대부분의 상용 소프트웨어에서 채택하고 있는 알고리즘
    - 보이어-무어 알고리즘은 패턴에 오른쪽 끝에 있는 문자가 불일치하고 이 문자가 패턴 내에 존재하지 않는 경우, 이동거리는 무려 패턴의 길이 만큼이 된다.
        <p align = 'center'>
        <img src = 'image\str-Boyer-Moore.png' width = 500>
        </p>
    - 오른쪽 끝에 있는 문자가 불일치 하고 이 문자가 패턴 내에 존재할 경우
        <p align = 'center'>
        <img src = 'image\str-Boyer-Moore2.png' width = 500>
        </p>
        <p align = 'center'>
        <img src = 'image\str-Boyer-Moore3.png' width = 500>
        </p>
      - rithm 문자열의 skip 배열  
            <p align = 'center'>
            <img src = 'image\str-Boyer-Moore4.png' width = 500>
            </p> 

- 코드
```py
def bad_character_table(pattern):
    table = {}
    m = len(pattern)
    for i in range(m):
        table[pattern[i]] = i
    return table

def good_suffix_table(pattern):
    m = len(pattern)
    table = [m] * m
    last_prefix_position = m
    
    for i in range(m - 1, -1, -1):
        if is_prefix(pattern, i + 1):
            last_prefix_position = i + 1
        table[m - i - 1] = last_prefix_position - i + m - 1

    for i in range(m - 1):
        length_suffix = suffix_length(pattern, i)
        table[length_suffix] = m - 1 - i + length_suffix
    return table

def is_prefix(pattern, p):
    m = len(pattern)
    j = 0
    for i in range(p, m):
        if pattern[i] != pattern[j]:
            return False
        j += 1
    return True

def suffix_length(pattern, p):
    length = 0
    j = len(pattern) - 1
    while p >= 0 and pattern[p] == pattern[j]:
        length += 1
        p -= 1
        j -= 1
    return length

def boyer_moore_search(text, pattern):
    bad_char = bad_character_table(pattern)
    good_suffix = good_suffix_table(pattern)
    n = len(text)
    m = len(pattern)
    
    s = 0  # shift of the pattern
    while s <= n - m:
        j = m - 1
        while j >= 0 and pattern[j] == text[s + j]:
            j -= 1
        if j < 0:
            print(f"패턴이 텍스트의 {s} 위치에서 발견되었습니다.")
            s += good_suffix[0]
        else:
            s += max(good_suffix[j], j - bad_char.get(text[s + j], -1))

# 사용 예제
text = "ABAAABCD"
pattern = "ABC"
boyer_moore_search(text, pattern)
```

### 카프-라빈 알고리즘
- Karp-Rabin 알고리즘
- 문자열 검색 알고리즘
- 주어진 문자열 내에서 특정 패턴을 효율적으로 찾는 방법을 제공합니다.
- 이 알고리즘은 해시 함수(hash function)를 사용하여 문자열 비교를 빠르게 수행합니다. 주로 문자열 검색, 문자열 유사성 검출, 스팸 필터링 등 다양한 응용 분야에서 사용
- 주요 개념
    1. 해시 함수 사용
    : 해시 함수를 사용하여 패턴과 텍스트의 서브스트링(부분 문자열)의 해시 값을 계산합니다. 해시 값이 일치하면 실제 문자열을 비교하고, 그렇지 않으면 해시 값을 재계산하여 다음 위치로 이동합니다.
    2. 해시 충돌 Hash Collision
    : 해시 함수는 해시 충돌 가능성이 있으므로, 두 서브스트링의 해시 값이 동일하더라도 실제 문자열이 다를 수 있습니다. 이 경우, 해시 값이 일치하는 문자열을 실제로 비교하여 확인합니다.
    3. 슬라이딩 윈도우
    : 텍스트에서 서브스트링의 해시 값을 효율적으로 업데이트하기 위해 슬라이딩 윈도우 기법을 사용합니다. 이 기법을 통해 새로운 서브스트링의 해시 값을 빠르게 계산할 수 있습니다.
- 알고리즘의 단계
    1. 패턴의 해시 값 계산
        - 패턴의 해시 값을 계산합니다.
    2. 텍스트 서브스트링의 해시 값 계산
        - 텍스트의 모든 서브스트링에 대해 해시 값을 계산합니다. 슬라이딩 윈도우 기법을 사용하여 효율적으로 해시 값을 업데이트합니다.
    3. 해시 값 비교
        - 서브스트링의 해시 값이 패턴의 해시 값과 일치하면 실제 문자열을 비교하여 패턴이 텍스트 내에 있는지 확인합니다.

- 코드
```py
def rabin_karp_search(text, pattern, prime=101):
    def hash_value(s, end, prime):
        h = 0
        for i in range(end):
            h = (h * 256 + ord(s[i])) % prime
        return h

    def rehash(old_hash, old_char, new_char, power, prime):
        new_hash = (old_hash - ord(old_char) * power) * 256 + ord(new_char)
        new_hash %= prime
        return new_hash

    m, n = len(pattern), len(text)
    if m > n:
        return

    pattern_hash = hash_value(pattern, m, prime)
    text_hash = hash_value(text, m, prime)
    power = pow(256, m - 1, prime)

    for i in range(n - m + 1):
        if pattern_hash == text_hash:
            if text[i:i + m] == pattern:
                print(f"패턴이 텍스트의 {i} 위치에서 발견되었습니다.")
        if i < n - m:
            text_hash = rehash(text_hash, text[i], text[i + m], power, prime)

# 사용 예제
text = "ABABDABACDABABCABAB"
pattern = "ABABCABAB"
rabin_karp_search(text, pattern)
```
## 문자열 암호화
### 1. 시저 암호 Caesar cipher

- 줄리어스 시저가 사용했다고 하는 암호이다.
- 시저는 기원전 100년경에서 로마에서 활약했던 장군
- 시저 암호에서는 평문에서 사용되고 있는 알파벳을 일정한 문자수만큼 평행이동 시킴으로써 암호화를 행한다
- 예시
    
    <p align = 'center'>
    <img src = 'image\str-caesar.png' width = 500>
    </p>
    
    - 1만큼 평행했을 때 1을 키값이라 한다.
    - 수신자 이외의 사람(키가 1이라는 사실을 모르는 사람)이 암호문 TBWFAQSJWBUFASZBO을 보고 다른 정보 없이도 SAVE PRIVATE RYAN라는 메시지를 맞출 수는 없을까?
- 시저 암호문에 대한 전사공격
    
    <p align = 'center'>
    <img src = 'image\str-caesar2.png' width = 500>
    </p>
    
    

### 문자변환표를 이용한 암호화(단일 치환 암호)

- 단순한 카이사르 암호화보다 훨씬 강력한 암호화 기법
- 문자 변환표의 예시
    
    <p align = 'center'>
    <img src = 'image\str-single1.png' width = 500>
    </p>
    
- 위 변환표를 사용한 암호화의 예시
    
    <p align = 'center'>
    <img src = 'image\str-single2.png' width = 500>
    </p>
    
    
- 단일 치환 암호의 복호화
    - 복호화하기 위해서는 모든 키의 조합(key space)가 필요하다.
    - 단일 치환 암호의 키의 총수
        - 26 * 25 * 24 * 23 * … * 1 = 26! = 403291461126605635584000000
    - 1초에 10억 개의 키를 적용하는 속도로 조사한다고 해도, 모든 키를 조사하는데 120억년 이상의 시간이 걸린다. 방법이 없을까?

### Bit열의 암호화

- 배타적 논리합(exclusive-or) 연산사용
    
    <p align = 'center'>
    <img src = 'image\str-xor.png' width = 500>
    </p>
    
    

## 문자열 압축
### Run-Length Encoding 알고리즘

- 저장소의 크기를 줄이며 정확한 정보를 저장하는 방법
- 같은 값이 몇 번 반복되는 가를 나타냄으로써 압축

    <p align = 'center'>
    <img src = 'image\str-run-length.png' width = 200>
    </p>
    

- 이 방법은 이미지 파일 포맷 중 BMP 파일포맷의 압축방법이다.
- 좀 더 효율적이고 일반적인 압축은 없을까? **허프만 코딩 알고리즘**
