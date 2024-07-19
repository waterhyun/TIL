# 클라이언트가 서버에 요청하는 두 가지 방법
- 서버: 부탁을 받으면 처리해주거나, 부탁대로 원하는 값을 돌려주는 역할
- 클라이언트: 부탁하는 역할

## 1. chrome
- . 웹 브라우저(크롬)을 켜서 주소창에 주소(URL)를 입력한다.
    - 크롬을 켜서 주소창에 아래 URL을 입력하기 (https://fakestoreapi.com/carts)  
      - https://fakestoreapi.com 가 서버 주소고
      - 뒷쪽이 내가 원하는 데이터의 요청 주소

## 2. python
- vscode를 켜고, 터미널 창을 열기
    - ctrl+`
- 아래 명령어를 실행하여 필요한 도구를 설치
    - requests: 파이썬에서 서버에 요청을 보낼 수 있는 도구
    - `$ pip install requests`
        - pip: 파이썬 패키지 관리 시스템(package installer for python)
- test.py(파이썬) 파일을 만들고, 아래처럼 파이썬 코드를 작성하기
    
    ```python
    import requests
    
    url = 'https://faktoreapi.com/carts'
    data = requests.get(url).json()
    print(data)
    ```
    
    - `url` 요청을 보내는 서버의 주소
    - `request.get(url)`  해당 서버(url)에 데이터를 달라고 요청을 보내는 함수
    - `.json`
        - 내부의 데이터를 json(파이썬의 딕셔너리와 비슷함)형태로 변환해주는 함수

# API
📍 application programming interface  

- 클라이언트가 원하는 기능을 수행하기 위해서 서버 측에 만들어 놓은 프로그램
    - 기능 예시: 데이터 저장, 조회, 수정 ,삭제 등등
- 서버 측에 특정 주소로 요청이 오면 정해진 기능을 수행하는 API를 미리 만들어 둡니다.
    - 클라이언트는 서버가 미리 만들어 놓은 주소로 요청을 보냄.

API가 반환하는 데이터는 어떻게 생겼을까? = JSON

# JSON

JavaScript Object Notation(Json)은 Javascript 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷

- 데이터를 저장하거나 전송할 때 많이 사용되는 경량의 텍스트 기반의 데이터 형식
- 통신 방법이나 프로그래밍 문법이 아니라 단순히 데이터를 표현하는 방법 중 하나
- 특징
    - 데이터는 중괄호({})로 둘러싸인 키-값 쌍의 집합으로 표현
    - 키 = 문자열/ 값 = 다양한 데이터 유형을 가질 수 있음
    - 값은 쉼표(,)로 구분

- json - python
    - 파이썬은 JSON을 활용하는 기능을 가짐.
    - 파싱(Parsing): 데이터를 의미 있는 구조로 분석하고 해석하는 과정
    - json.loads(): json 형식의 문자열을 파싱하여 python dictionary로 반환
    ```python
    import json

    # JSON 데이터
    json_data = '''
    [
  {
    "id": 1,
    "userId": 1,
    "date": "2020-03-02T00:00:00.000Z",
    "products": [
      {
        "productId": 1,
        "quantity": 4
      },
      {
        "productId": 2,
        "quantity": 1
      },
      {
        "productId": 3,
        "quantity": 6
      }
    ],
    "__v": 0
  },
  {
    "id": 2,
    "userId": 1,
    "date": "2020-01-02T00:00:00.000Z",
    "products": [
      {
        "productId": 2,
        "quantity": 4
      },
      {
        "productId": 1,
        "quantity": 10
      },
      {
        "productId": 5,
        "quantity": 2
      }
    ],
    "__v": 0
    }]
    '''

    # JSON 데이터 파싱하기
    data = json.loads(json_data)

    # JSON 데이터에서 정보 읽기
    user_id = data['userId']
    products = data['products']

    print(user_id)
    print(products)
    ```

<br>  


# OPEN API

- 외부에서 사용할 수 있도록 무료로 개방(OPEN)된 API
- 사용법은 공식 문서(Docs)에 명시되어 있음.
- 예시
    - OpenWeatherMap API: 기상 데이터 및 날씨 정보를 제공하는 오픈 API
    - 금융상품통합비교공시 API: 금융감독원에서 제공하는 금융 상품 정보를 제공하는 오픈 API
- 주의사항
    - 악성 사용자가 100만 개의 계정을 생성해 API에 요청을 보내는 상황을 생각.
        - 너무 많은 계정에서 동시에 요청을 보내면 서버가 견디지 못함
    - 이러한 문제점을 해결하기 위해 오픈 API는 `API KEY`를 활용하여 사용자를 확인
        - 사용자 인증 혹은 회원가입을 하면 서버에서 `API KEY`를 발급해준다.
        - 서버에 요청할 때 마다 해당 `API KEY`를 함께 보내 정상적인 사용자인 것을 확인함.
    - `API KEY`를 가지고 있는 악성 사용자가 1초에 100만 개의 요청을 보내는 상황
        - 서버가 견디지 못하여 정상적인 서비스가 불가능함
    - 일부 오픈 API는 사용량이 제한
        - 공식 문서의 일일 및 월간 사용량 제한을 반드시 확인
        - [주의] 사용량이 초과될 경우 요금이 청구될 수 있음.