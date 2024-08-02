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
        - **Delimited**: 구분자로 문자열의 끝을 표시. (예: C 언어의 문자열

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

## 패턴 매칭

## 문자열 암호화

## 문자열 압축