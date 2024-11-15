- [인증 with DRF](#인증-with-drf)
  - [인증](#인증)
  - [인증 정책 설정](#인증-정책-설정)
  - [Token 인증 설정](#token-인증-설정)
  - [Dj-Rest-Auth 라이브러리](#dj-rest-auth-라이브러리)
  - [Token 발급 및 활용](#token-발급-및-활용)
- [권한 with DRF](#권한-with-drf)
  - [권한 정책 설정](#권한-정책-설정)
  - [IsAuthenticated 설정](#isauthenticated-설정)
- [인증 with Vue](#인증-with-vue)
  - [회원가입](#회원가입)
  - [로그인](#로그인)
  - [요청과 토큰](#요청과-토큰)
  - [인증 여부 확인](#인증-여부-확인)
- [참고](#참고)
  - [기타 기능 구현](#기타-기능-구현)
  - [Django Signals](#django-signals)
  - [환경변수](#환경변수)
  - [Vue 참고 자료](#vue-참고-자료)


# 인증 with DRF
- 시작하기 전에
  - 인증 로직 진행을 위해 User 모델 관련 코드 활성화 
  - user ForeignKey 주석 해제  
    <img src ='images\vue-with-drf02-01.png' width=550 style='margin:8px'>   

  - serializers의 read_only_fields 주석 해제  
    <img src ='images\vue-with-drf02-02.png' width=550 style='margin:8px'>   
  
  - article_list view 함수에서 게시글 생성 시 user 정보도 저장될 수 있도록 주석 해제  
    <img src ='images\vue-with-drf02-03.png' width=550 style='margin:8px'>   
  
  - DB 초기화
    - db.sqlite3 삭제
    - migrations 파일 삭제
  - Migration 과정 재진행

## 인증
- Authentication 인증
  - 수신된 요청을 해당 요청의 사용자 또는 자격 증명과 연결하는 매커니즘
  - 누구인지를 확인하는 과정
- Permissions 권한
  - 요청에 대한 접근 허용 또는 거부 여부를 결정
- 📌 인증과 권한
  - 순서상 인증이 먼저 진행되며 수신 요청을 해당 요청의 사용자 또는 해당 요청이 서명된 토큰(Token)과 같은 자격 증명 자료와 연결
  - 그런 다음 권한 및 제한 정책은 인증이 완료된 해당 자격 증명을 사용하여 요청을 허용해야 하는 지를 결정
- DRF에서의 인증
  - 인증은 항상 View 함수 시작 시, 권한 및 제한 확인이 발생하기 전, 다른 코드의 진행이 허용되기 전에 실행됨
  - 인증 자체로는 들어오는 요청을 허용하거나 거부할 수 없으며, 단순히 요청에 사용된 자격 증명만 식별한다는 점에 유의
  - https://www.django-rest-framework.org/api-guide/authentication/ 

- 승인되지 않은 응답 및 금지된 응답
  - 인증되지 않은 요청이 권한을 거부하는 경우 해당되는 두 가지 오류 코드를 응답
  - 📌 HTTP 401 Unauthorized
    - 요청된 리소스에 대한 유효한 인증 자격 증명이 없기 때문에 클라이언트 요청이 완료되지 않았음을 나타냄 (누구인지를 증명할 자료가 없음)
  - 📌 HTTP 403 Forbidden (Permission Denied)
    - 서버에 요청이 전달되었지만, 권한 때문에 거절되었단느 것을 의미
    - 401과 다른 점은 서버는 클라이언트가 누구인지 알고 있음

## 인증 정책 설정
1. 전역 설정
   - 프로젝트 전체에 적용되는 기본 인증 방식을 정의
   - DEFAULT_AUTHENTICATION_CLASSES를 사용
   - 기본 값: SessionAuthentication과 BasicAuthentication
   - 사용 예시  
      <img src ='images\vue-with-drf02-04.png' width=550 style='margin:8px'>   
2. View 함수 별 설정
   - authentication_classes 데코레이터를 사용
   - 개별 view에 지정하여 재정의
   - 사용 예시   
      <img src ='images\vue-with-drf02-05.png' width=550 style='margin:8px'>   

- DRF가 제공하는 인증 체계
  - BasicAuthentication
  - TokenAuthentication ✅ 
  - SessionAuthentication
  - RemoteUserAuthentication
- TokenAuthentication
  - token 기반 HTTP 인증 체계
  - 기본 데스크톱 및 모바일 클라이언트와 같은 클라이언트-서버 설정에 적합
  - 서버가 인증된 사용자에게 토큰을 발급하고 사용자는 매 요청마다 발급받은 토큰을 요청과 함께 보내 인증 과정을 거침
  - https://www.django-rest-framework.org/api-guide/authentication/#tokenauthentication 


## Token 인증 설정
1. 인증 클래스 설정
   - TokenAuthentication 활성화 코드 주석 해제
   - 전역 인증 정책을 Token 방식으로 설정    
      <img src ='images\vue-with-drf02-06.png' width=550 style='margin:8px'>   
2. ISTALLED_APPS 추가
   - rest_framework.authtoken 주석 해제   
      <img src ='images\vue-with-drf02-07.png' width=550 style='margin:8px'>   
3. Migrate 진행  
  <img src ='images\vue-with-drf02-08.png' width=550 style='margin:8px'>   
4. 토큰 생성 코드 작성
  - accounts/signals.py 주석 해제
  - 인증된 사용자에게 자동으로 토큰을 생성해주는 역할  
    <img src ='images\vue-with-drf02-09.png' width=550 style='margin:8px'>   

- 📌 토큰 인증 방식 과정   
  <img src ='images\vue-with-drf-auth-process.png' width=600 style='margin:8px'>   

## Dj-Rest-Auth 라이브러리
- Dj-Rest-Auth 
  - 회원가입, 인증(소셜미디어 인증 등), 비밀번호 재설정, 사용자 세부 정보 검색, 회원 정보 수정 등 다양한 인증 관련 기능을 제공하는 라이브러리
  - https://github.com/iMerica/dj-rest-auth  
- Dj-Rest-Auth 설치 및 적용
  - 설치   
     ```bash
     $ pip install 'dj-rest-auth'
     ```   

    <img src ='images\vue-with-drf02-10.png' width=450 style='margin:8px'>   
  - 추가 App 주석 해제   
    <img src ='images\vue-with-drf02-11.png' width=550 style='margin:8px'>   
  - 추가 URL 주석 해제  
    <img src ='images\vue-with-drf02-12.png' width=550 style='margin:8px'>   
- Dj-Rest-Auth의 Registration(등록) 기능 추가 설정
  1. 패키지 추가 설치  
     ```bash
     $ pip install 'dj-rest-auth[with-social]'
     ```  
  2. 추가 App 등록      
    <img src ='images\vue-with-drf02-14.png' width=550 style='margin:8px'>   
    <img src ='images\vue-with-drf02-15.png' width=550 style='margin:8px'>   
  3. 추가 URL 등록  
    <img src ='images\vue-with-drf02-16.png' width=550 style='margin:8px'>   
  4. Migrate  
    <img src ='images\vue-with-drf02-17.png' width=550 style='margin:8px'>   
  
  - https://dj-rest-auth.readthedocs.io/en/latest/installation.html#registraion-optional  

## Token 발급 및 활용
- Token 발급
  - 회원 가입 및 로그인을 진행하여 토큰 발급 테스트하기
  - 라이브러리 설치로 인해 추가 된 URL 목록 확인
    - http://127.0.0.1:8000/accounts/  

    <img src ='images\vue-with-drf02-18.png' width=550 style='margin:8px'>   

  - 회원 가입 진행(DRF 페이지 하단 회원 가입 form 사용)
    - http://127.0.0.1:8000/accounts/signup/    
    
    <img src ='images\vue-with-drf02-19.png' width=550 style='margin:8px'>   
  
  - 로그인 진행 (DRF 페이지 하단 로그인 form 사용)
    - http://127.0.0.1:8000/accounts/login/    
    
    <img src ='images\vue-with-drf02-20.png' width=550 style='margin:8px'>   

  - 로그인 성공 후 DRF로 부터 발급 받은 Token 확인
    - 이제 이 Token을 Vue에서 별도로 저장하여 매 요청마다 함께 보내야 함 

    <img src ='images\vue-with-drf02-21.png' width=550 style='margin:8px'>

- Token 활용
  - 게시글 작성 과정을 통해 Token 사용 방법 익히기
  - Postman을 활용해 게시글 작성 요청
    - http://127.0.0.1:8000/api/v1/articles/  
  - Body에 게시글 제목과 내용 입력
    - http://127.0.0.1:8000/api/v1/articles/  

    <img src ='images\vue-with-drf02-22.png' width=550 style='margin:8px'>  
  
  - Headers에 발급받은 Token 작성 후 요청 성공 확인
    - key: "Authorization"
    - Value: "Token 토큰 값"  

    <img src ='images\vue-with-drf02-23.png' width=550 style='margin:8px'>  

- 클라이언트가 Token으로 인증 받는 방법

  1. "Authorization" HTTP Header에 포함
  2. 키 앞에 있는 문자열 "Token"이 와야 하며 "공백"으로 두 문자열을 구분해야 함  
    
    <img src ='images\vue-with-drf02-24.png' width=550 style='margin:8px'>  
  
  - https://www.django-rest-framework.org/api-guide/authentication/#tokenauthentication

- Token 데이터 확인  
  <img src ='images\vue-with-drf02-25.png' width=550 style='margin:8px'>  
- 📌 <mark>발급 받은 Token을 인증이 필요한 요청마다 함께 보내야 함</mark>

# 권한 with DRF

## 권한 정책 설정
- 권한 설정 방법
  - 전역 설정
  - View 함수별 설정
- 전역 설정
  - 프로젝트 전체에 적용되는 기본 권한 방식을 정의
  - DEFAULT_PERMISSION_CLASSES를 사용
  - 기본 값: rest_framework.permissions.AllowAny
  - 사용 예시  
    <img src ='images\vue-with-drf02-26.png' width=550 style='margin:8px'>  
- View 함수 별 설정
  - permission_classes 데코레이터를 사용
  - 개별 view에 지정하여 재정의
  - 사용 예시  
    <img src ='images\vue-with-drf02-27.png' width=550 style='margin:8px'>  

- DRF가 제공하는 권한 정책
  1. IsAuthenticated ✅
     - 인증되지 않은 사용자에 대한 권한을 거부하고 그렇지 않은 경우 권한을 허용
     - 등록된 사용자만 API에 액세스할 수 있도록 하려는 경우에 적합 
  2. IsAdminUser
  3. IsAuthenticatedOrReadOnly 
  4. ...
  - https://www.django-rest-framework.org/api-guide/permissions/#api-reference 

## IsAuthenticated 설정
- IsAuthenticated 권한 설정
  - DEFAULT_PERMISSION_CLASSES 주석 해제
  - 기본적으로 모든 View 함수에 대한 접근을 허용   
    <img src ='images\vue-with-drf02-28.png' width=550 style='margin:8px'>  
  - permission_classes 관련 코드 주석 해제
  - 전체 게시글 조회 및 생성시에만 인증된 사용자만 진행 할 수 있도록 권한 설정   
    <img src ='images\vue-with-drf02-29.png' width=550 style='margin:8px'>  

- 권한 활용
  - 만약 관리자만 전체 게시글 조회가 가능한 권한이 설정되었을 때, 인증된 일반 사용자가 조회 요청을 할 경우 어떻게 되는지 응답 확인하기
  - 테스트를 위해 임시로 관리자 권한 클래스 IsAdminUser로 변경  
    <img src ='images\vue-with-drf02-30.png' width=550 style='margin:8px'>  
  - 전체 게시글 조회 요청
    - http://127.0.0.1:8000/api/v1/articles/
    - 403 Forbidden 응답 확인  
    
    <img src ='images\vue-with-drf02-31.png' width=550 style='margin:8px'>  
  
  - IsAdminUser 삭제 후 IsAuthenticated 권한으로 복구  
    <img src ='images\vue-with-drf02-32.png' width=550 style='margin:8px'>  

# 인증 with Vue
- 정상 작동하던 게시글 전체 조회가 작동하지 않음
  - 401 status code 확인
  - 게시글 조회 요청 시 인증에 필요한 수단(token)을 보내지 않고 있으므로 게시글 조회가 불가능해진 것 

  <img src ='images\vue-with-drf02-33.png' width=550 style='margin:8px'>  

## 회원가입
- SignUpView route 관련 코드 주석 해제      
  <img src ='images\vue-with-drf02-34.png' width=550 style='margin:8px'>  
- App 컴포넌트에 SignUpView 컴포넌트로 이동하는 RouterLink 작성    
  <img src ='images\vue-with-drf02-35.png' width=550 style='margin:8px'>  
- 회원가입 form 작성  
  <img src ='images\vue-with-drf02-36.png' width=550 style='margin:8px'>  
- 사용자 입력 데이터와 바인딩 될 반응형 변수 작성  
  <img src ='images\vue-with-drf02-37.png' width=550 style='margin:8px'>  
- SignUpView 컴포넌트 출력 확인  
  <img src ='images\vue-with-drf02-38.png' width=550 style='margin:8px'>  
- 회원가입 요청을 보내기 위한 SignUp 함수가 해야 할 일
  - 사용자 입력 데이터를 받아
  - 서버로 회원가입 요청을 보냄  

  <img src ='images\vue-with-drf02-39.png' width=550 style='margin:8px'>  

- 컴포넌트에 사용자 입력 데이터를 저장하고 store에 signUp 함수를 호출하는 함수 작성  
  <img src ='images\vue-with-drf02-40.png' width=550 style='margin:8px'>  
- 실제 회원가입 요청을 보내는 store의 signUp 함수 작성  
  <img src ='images\vue-with-drf02-41.png' width=550 style='margin:8px'>  
- 회원가입 테스트  
  <img src ='images\vue-with-drf02-42.png' width=550 style='margin:8px'>  
- Django DB 확인  
  <img src ='images\vue-with-drf02-43.png' width=550 style='margin:8px'>  

## 로그인
- LogInView route 관련 코드 주석 해제  
  <img src ='images\vue-with-drf02-44.png' width=550 style='margin:8px'>  
- App 컴포넌트에 LogInView 컴포넌트로 이동하는 RouterLink 작성  
  <img src ='images\vue-with-drf02-45.png' width=550 style='margin:8px'>  
- 로그인 form 작성  
  <img src ='images\vue-with-drf02-46.png' width=550 style='margin:8px'>  
- 사용자 입력 데이터와 바인딩 될 반응형 변수 작성  
  <img src ='images\vue-with-drf02-47.png' width=550 style='margin:8px'>  
- LogInView 컴포넌트 출력 확인  
  <img src ='images\vue-with-drf02-48.png' width=550 style='margin:8px'>  

- 로그인 요청을 보내기 위한 LogIn 함수가 해야 할 일
  - 사용자 입력 데이터를 받아
  - 서버로 로그인 요청 및 응답 받은 토큰 저장  
  
  <img src ='images\vue-with-drf02-49.png' width=550 style='margin:8px'>  


- 컴포넌트에 사용자 입력 데이터를 저장 후 store의 LogIn 함수를 호출하는 함수 작성  
  <img src ='images\vue-with-drf02-50.png' width=550 style='margin:8px'>  
- 실제 로그인 요청을 보내는 store의 Login함수 작성  
  <img src ='images\vue-with-drf02-51.png' width=550 style='margin:8px'>  
- 로그인 테스트
  - 응답 객체 안에 Django가 발급한 Token이 함께 온 것을 확인  
    <img src ='images\vue-with-drf02-52.png' width=550 style='margin:8px'>  


## 요청과 토큰
- Token을 store에 저장하여 인증이 필요한 요청마다 함께 보낸다.
- 토큰 저장 로직 구현
  - 반응형 변수 token 선언 및 토큰 저장  
    <img src ='images\vue-with-drf02-53.png' width=550 style='margin:8px'>  
  - 다시 로그인 요청 후 store에 저장된 토큰 확인  
    <img src ='images\vue-with-drf02-54.png' width=550 style='margin:8px'>  
- 토큰이 필요한 요청
  - 게시글 전체 목록 조회 시
    - 게시글 전체 목록 조회 요청 함수 getArticles에 token 추가  
      <img src ='images\vue-with-drf02-55.png' width=550 style='margin:8px'>  
    - 401 상태 코드가 사라지고 게시글이 정상적으로 출력되는 것을 확인  
      <img src ='images\vue-with-drf02-56.png' width=550 style='margin:8px'>  
  - 게시글 작성 시
    - 게시글 생성 요청 함수 createArticle에 token 추가  
      <img src ='images\vue-with-drf02-57.png' width=550 style='margin:8px'>  
    - 게시글 작성 확인  
      <img src ='images\vue-with-drf02-58.png' width=550 style='margin:8px'>  


## 인증 여부 확인
- 사용자의 인증(로그인) 여부에 따른 추가 기능 구현
  - 인증 되지 않은 사용자
    - 메인 페이지 접근 제한
  - 인증 된 사용자
    - 회원가입 및 로그인 페이지에 접근 제한
- 인증 상태 여부를 나타낼 속성 값 지정
  - token 소유 여부에 따라 로그인 상태를 나타낼 isLogin 변수 작성
  - 그리고 computed를 활용해 token 값이 변할 때만 상태를 계산하도록 함  
    <img src ='images\vue-with-drf02-59.png' width=550 style='margin:8px'>  

- 인증 되지 않은 사용자는 메인 페이지 접근 제한
  - 전역 네비게시연 가드 beforeEach를 활용해 다른 주소에서 메인 페이지로 이동 시 인증 되지 않은 사용자라면 로그인 페이지로 이동시키기  
    <img src ='images\vue-with-drf02-60.png' width=550 style='margin:8px'>  
  - 브라우저 local storage에서 token을 삭제 후 메인 페이지 접속 시도  
    <img src ='images\vue-with-drf02-61.png' width=550 style='margin:8px'>  
- 인증된 사용자는 회원가입과 로그인 페이지에 접근 제한
  - 다른 주소에서 회원가입 또는 로그인 페이지로 이동 시 이미 인증된 사용자라면 메인 페이지로 이동 시키기  
    <img src ='images\vue-with-drf02-62.png' width=550 style='margin:8px'>  
  - 로그인 후 회원가입, 로그인 페이지 접속 시도  
    <img src ='images\vue-with-drf02-63.png' width=550 style='margin:8px'>  

# 참고
## 기타 기능 구현
- 자연스러운 흐름을 위한 기타 기능 구현
  - 로그인 성공 후 자동으로 메인 페이지로 이동하기  
    <img src ='images\vue-with-drf02-64.png' width=550 style='margin:8px'>  
  - 회원가입 성공 후 자동으로 로그인까지 진행하기  
    <img src ='images\vue-with-drf02-65.png' width=550 style='margin:8px'>  

## Django Signals
- 이벤트 알림 시스템
- 애플리케이션 내에서 특정 이벤트가 발생할 때, 다른 부분에게 신호를 보내어 이벤트가 발생했음을 알릴 수 있음
- 주로 모델의 데이터 변경 또는 저장, 삭제와 같은 작업에 반응하여 추가적인 로직을 실행하고자 할 때 사용
  - 예를 들어, 사용자가 새로운 게시글을 작성할 때마다 특정 작업(예시: 이메일 알림 보내기)을 수행하려는 경우

## 환경변수
- environment variable 환경 변수
  - 애플리케이션의 설정이나 동작을 제어하기 위해 사용되는 변수
- 환경 변수의 목적
  - 개발, 테스트 및 프로덕션 환경에서 다르게 설정되어야 하는 설정 값이나 민감한 정보(ex. API Key)를 포함
  - 환경 변수를 사용하여 애플리케이션의 설정을 관리하면, 다양한 환경에서 일관된 동작을 유지하면서 필요에 따라 변수를 쉽게 변경할 수 있음
  - 보안적인 이유를 피하고, 애플리케이션을 다양한 환경에 대응하기 쉽게 만들어 줌
- Vite에서 환경변수를 사용하는 법
  - .env.local 파일 생성 및 API 변수 작성
  - 주의 사항
    - 변수명은 반드시 VITE_접두어를 작성해야 함
    - 변수명과 값 사이에 공백이 없어야 함  
    <img src ='images\vue-with-drf02-66.png' width=550 style='margin:8px'>  

## Vue 참고 자료
- Vue 프로젝트 진행 시 유용한 자료
  - Awesome Vue.js
    - Vue와 관련하여 선별된 유용한 자료를 아카이빙 및 관리하는 프로젝트
    - https://github.com/vuejs/awesome-vue 
    - https://awesome-vue.js.org/ 
  - Vuetify
    - Vue를 위한 UI 라이브러리 (ex. Bootstrap)
    - https://vuetifyjs.com/en/

- 설치한 라이브러리 정리  
  <img src ='images\vue-with-drf02-67.png' width=450 style='margin:8px'>  
  - vue
    ```bash
    $ npm i pinia-plugin-persistedstate
    ``` 
    ```bash
    $ npm i axios
    ``` 
  - django
    ```bash
    $ pip install djangorestframework
    ``` 
    ```bash
    $ pip install django-cors-headers
    ``` 
    ```bash
    $ pip install dj-rest-auth
    ``` 
    ```bash
    $ pip install 'dj-rest-auth[with-social]''
    ``` 
