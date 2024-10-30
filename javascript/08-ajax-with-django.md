# Ajax와 서버
- Ajax; Asynchronous JavaScript and XML
  - 비동기적인 웹 애플리케이션 개발에 사용하는 기술
# Ajax with follow
## 비동기 팔로우 구현
- 사전 준비
  - M:N까지 진행한 Django 프로젝트 준비
  - 가상 환경 생성, 활성화 및 패키지 설치 
- Ajax 적용
  - 기존 : HTML의 form 태그를 사용해 POST 메서드로 데이터를 제출(submit)
  - 변경 : axios를 사용해 POST 메서드로 데이터를 제출
    - form의 method와 action 속성이 불필요
    - 팔로우 버튼에 submit 이벤트가 발생하면(이벤트 리스너)
    - django가 json 데이터를 응답
    - JS에서 응답받은 json 데이터를 활용해 팔로우 버튼을 조작(DOM)
- Ajax 적용
  1. 프로필 페이지에 axios CDN 작성  
     <img src='images\ajax-with-follow.png' width=600 style='margin:8px'> 
  2. form 요소 선택을 위해 id 속성 지정 및 선택, action과 method 속성은 삭제(요청은 axios로 대체되기 때문)  
     - 팔로우 버튼 선택  
     <img src='images\ajax-with-follow02.png' width=600 style='margin:8px'> 
  3. form 요소에 이벤트 핸들러 할당, submit 이벤트의 기본 동작 취소하기  
     - 팔로우 버튼에 이벤트 리스너를 부착(submit 이벤트 감지)  
     - submit 이벤트의 기본 동작 취소
     <img src='images\ajax-with-follow03.png' width=600 style='margin:8px'> 
  4. axios 요청 코드 작성 (axios 준비)
     - url 작성에 필요한 user pk는 어떻게 작성해야 할까?
     - crsf token은 어떻게 보내야할까?   
     <img src='images\ajax-with-follow04.png' width=600 style='margin:8px'> 
  5. url에 작성할 user pk 가져오기 (HTML => JavaScript)
     - HTML에서 준비한 user의 pk를 조회 
     - callback 함수에서 form 태그에 접근할 수 있는 방법
       - event 객체, this, formTag 변수 자체  
     <img src='images\ajax-with-follow05.png' width=600 style='margin:8px'> 
    
     - 📌 `data-*` 속성
       - 사용자 지정 데이터 특성을 만들어 임의의 데이터를 HTML과 DOM 사이에서 교환할 수 있는 방법 
       - 예시 : data-my-id는 HTML 표기법이라서 myId로 이름을 변경해서 Console창에 뜸(JavaScript)  
       
       <img src='images\data.png' width=500 style='margin:8px'>    
       
       - 모든 사용자 지정 데이터는 JavaScript에서 dataset 속성을 통해 접근
       - ⚠ 주의사항
         - 대소문자 여부에 상관없이 xml 문자로 시작 불가
         - 세미콜론 포함 불가
         - 대문자 포함 불가
  6. 요청 url 작성 마무리  
     <img src='images\ajax-with-follow06.png' width=600 style='margin:8px'> 
  7. [csrf token 해결 시작] 문서상 input hidden 타입으로 존재하는 csrf token 데이터를 이제는 axios로 전송해야함  
     <img src='images\ajax-with-follow07.png' width=800 style='margin:8px'> 
  8. csrf 값을 가진 input 요소를 직접 선택후 axios에 작성하기(선택한 csrf token 값을 요청 headers에 세팅)
     https://docs.djangoproject.com/en/4.2/howto/csrf/  
     - If you activate CSRF_USE_SESSIONS or CSRF_COOKIE_HTTPONLY, you must include the CSRF token in your HTML and read the token from the DOM with JavaScript:
        ```html
        {% csrf_token %}
        <script>
        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        </script>
        ```
      - Setting the token on the AJAX request
        ```js
        const request = new Request(
            /* URL */,
            {
                method: 'POST',
                headers: {'X-CSRFToken': csrftoken},
                mode: 'same-origin' // Do not send CSRF token to another domain.
            }
        );
        fetch(request).then(function(response) {
            // ...
        });        
        ```   

     <img src='images\ajax-with-follow08.png' width=700 style='margin:8px'> 

     - 둘 중 하나에 들어가서 header를 쓰는게 맞는지 찾아보기(라이브러리니깐)
       - https://axios-http.com/kr/docs/req_config
       - https://axios-http.com/kr/docs/post_example
  9.  팔로우 버튼을 토글하기 위해서는 현재 팔로우 상태인지 언팔로우 상태인지에 대한 상태 확인이 필요
      - Django의 view 함수에서 팔로우 여부를 파악할 수 있는 변수를 추가로 생성해 **JSON 타입**으로 응답하기  
  10. 팔로우 상태 여부를 JavaScript에게 전달할 데이터 작성
      - 응답은 더 이상 HTML 문서가 아닌 JSON 데이터로 응답하도록 변경         
        <img src='images\ajax-with-follow10.png' width=700 style='margin:8px'> 
  11. 팔로우 요청 후 Django 서버로 부터 받은 응답 데이터 확인하기       
     <img src='images\ajax-with-follow11.png' width=700 style='margin:8px'>   
  
  12. 응답 데이터 is_followed에 따라 팔로우 버튼을 조작하기      
     <img src='images\ajax-with-follow12.png' width=700 style='margin:8px'>  
  
  13. 클라이언트와 서버 간 XHR 객체를 주고 받는 것을 확인하기 (개발자도구 - Network)     
     <img src='images\ajax-with-follow13-1.png' width=450 style='margin:8px'>  
     <img src='images\ajax-with-follow13-2.png' width=450 style='margin:8px'>   
  
  14. 팔로잉 수와 팔로워 수 비동기 적용
      - 해당 요소를 선택할 수 있도록 span 태그와 id 속성 작성        
        <img src='images\ajax-with-follow14.png' width=600 style='margin:8px'>   
  
  15. 각 span 태그를 선택      
     <img src='images\ajax-with-follow15.png' width=600 style='margin:8px'>   
  
  16. Django view 함수에서 팔로워, 팔로잉 인원 수 연산을 진행하여 결과를 응답 데이터로 전달    
     <img src='images\ajax-with-follow16.png' width=600 style='margin:8px'>   
  
  17. 응답 데이터를 받아 각 태그의 인원 수 값 변경에 활용    
     <img src='images\ajax-with-follow17.png' width=600 style='margin:8px'>   

# Ajax with likes
## 비동기 좋아요 구현
- Ajax 좋아요 적용 시 유의 사항
  - 전반적인 Ajax 적용은 팔로우 구현 과정과 모두 동일
  - 단, 팔로우와 달리 좋아요 버튼은 한 페이지에 여러 개가 존재
  - 그렇다면 모든 좋아요 버튼에 이벤트 리스너를 할당해야 할 까?
- 버블링 (복습)
  - 한 요소에 이벤트가 발생하면, 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의 핸들러가 동작하는 현상
  - 가장 최상단의 조상 요소(document)를 만날 대까지 이 과정이 반복되면서 요소 각각에 할당된 핸들러가 동작
  - 버블링이 필요한 이유
    - 각자 다른 동작을 하는 수행하는 버튼이 여러 개가 있다고 가정
    - 그렇다면 각 버튼마다 이벤트 핸들러를 할당해야 할까?
    - 각 버튼의 공통 조상 요소에 이벤트 핸들러 단 하나만 할당하기!
- 비동기 좋아요 구현 (Ajax 적용)
  1. 모든 좋아요 form 요소를 포함하는 최상위 요소 작성  
    <img src='images\ajax-with-like.png' width=500 style='margin:8px'>   
  
  2. 최상위 요소 선택 ➡ 이벤트 핸들러 할당 ➡ 하위 요소들의 submit 이벤트를 감지하고 submit 기본 이벤트를 취소    
    <img src='images\ajax-with-like02.png' width=700 style='margin:8px'>   
  
  3. axios 코드 작성 (url 작성에 필요한 article pk는 어떻게 작성해야 할까?)   
    <img src='images\ajax-with-like03.png' width=700 style='margin:8px'>   
  
  4. 각 좋아요 form에 article.pk를 부여 후 HTML의 article.pk 값을 JavaScript에서 참조하기  
    <img src='images\ajax-with-like04.png' width=500 style='margin:8px'>   
    - CurrentTarget & target (복습)
      - currentTarget
        - 현재 요소
        - 항상 이벤트 핸들러가 연결된 요소만을 참조하는 속성
        - this와 같음
      - target
        - 이벤트가 발생한 가장 안쪽의 요소(target)를 참조하는 속성
        - 실제 이벤트가 시작된 요소
        - 버블링이 진행 되어도 변하지 않음
  
  5. url 완성 후 요청 및 응답 확인  
    <img src='images\ajax-with-like05.png' width=700 style='margin:8px'>   
  
  6. 좋아요 버튼을 토글하기 위해서는 현재 사용자가 좋아요를 누른 상태인지 좋아요를 누르지 않은 상태인지에 대한 **상태 확인**이 필요
     1. Django의 view 함수에서 좋아요 여부를 파악할 수 있는 변수 추가 생성
     2. JSON 타입으로 응답하기  
  
  7. 좋아요 상태 여부를 JavaScript에게 전달할 데이터 작성 및 JSON 데이터 응답   
    <img src='images\ajax-with-like07.png' width=700 style='margin:8px'>   
  
  8. 응답 데이터 is_liked를 받아 isLiked 변수에 할당  
    <img src='images\ajax-with-like08.png' width=700 style='margin:8px'>   
  
  9. isLiked에 따라 좋아요 버튼을 토글하기 (그런데 어떤 게시글의 좋아요 버튼을 선택 했는지 구분이 필요)  
    <img src='images\ajax-with-like09.png' width=700 style='margin:8px'>   
  
  10. 문자와 article의 pk값을 혼합하여 각 버튼에 id 속성 값을 설정  
    <img src='images\ajax-with-like10.png' width=700 style='margin:8px'>   
  
  11. 각 좋아요 버튼을 선택 후 isLiked에 따라 버튼을 토글  
    <img src='images\ajax-with-like11.png' width=700 style='margin:8px'>   


## 버블링을 활용하지 않는 경우
1. querySelectorAll()을 사용해 전체 좋아요 버튼을 선택
   - querySelectorAll() 선택을 위한 class 적용   
     <img src='images\no-use-bubbling.png' width=700 style='margin:8px'>   

2. forEach()를 사용해 전체 좋아요 버튼을 순회하면서 진행  
   - forEach()를 사용해 전체 좋아요 버튼을 순회하면서 진행   
     <img src='images\no-use-bubbling02.png' width=700 style='margin:8px'>   