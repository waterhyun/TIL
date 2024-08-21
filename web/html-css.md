<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [웹](#웹)
  - [Web page 구성 요소](#web-page-구성-요소)
- [웹 구조화](#웹-구조화)
  - [HTML](#html)
  - [Structure of HTML](#structure-of-html)
    - [HTML Element](#html-element)
    - [HTML Attributes](#html-attributes)
  - [Text Structure](#text-structure)
- [웹 스타일링](#웹-스타일링)
  - [CSS](#css)
  - [CSS 선택자](#css-선택자)
  - [명시도](#명시도)
  - [CSS 상속](#css-상속)
- [CSS Box Model](#css-box-model)
  - [박스 타입](#박스-타입)
- [참고](#참고)
  - [명시도 관련 문서](#명시도-관련-문서)
  - [HTML 스타일 가이드](#html-스타일-가이드)
  - [CSS 스타일 가이드](#css-스타일-가이드)
  - [MDN](#mdn)

<!-- TOC end -->

<!-- TOC --><a name=""></a>

# 웹
📍 World Wide Web  
인터넷으로 연결된 컴퓨터들이 정보를 공유하는 거대한 정보 공간

📍 Web  
Web site, Web application 등을 통해 사용자들이 정보를 검색하고 상호 작용하는 기술

- Web site : 인터넷에서 여러 개의 Web page가 모인 것으로 사용자들에게 정보나 서비스를 제공하는 공간
- Web page : HTML, CSS 등의 웹 기술을 이용하여 만들어진, 'Web site'를 구성하는 하나의 요소

## Web page 구성 요소
<p align="center">  
<img src="images\web-page.png" width="45%">  
<img src="images\web-page2.png" width="45%">  
</p>


# 웹 구조화
## HTML
📍 HyperText Markup Language  
웹 페이지의 **의미**와 **구조**를 정의하는 언어

- **Hypertext**
  - 의미 : 웹 페이지를 다른 페이지로 연결하는 링크, **참조**를 통해 사용자가 한 문서에서 다른 문서로 즉시 접근할 수 있는 텍스트
  - 특징
    - 비선형성
    - 상호연결성
    - 사용자 주도적 탐색
- **Markup Language**
  - 의미 : 태그 등을 이용하여 **문서나 데이터의 구조를 명시하는 언어** (ex: HTML, **Markdown**)
  - 예시
    <p align = 'center'>
      <img src="images\html-ex1.png" align="center" width=450>  
      <img src="images\html-ex2.png" align="center" width=450> 
  - 더 읽기가 편해졌고, 이를 위해 HTML tag가 등장 ➡ 페이지를 구조화
      <img src="images\html-ex3.png" align="center" width=450> 
      <img src="images\html-ex4.png" align="center" width=450> 
    </p>

## Structure of HTML

<p align = 'center'>
<img src="images\structure-html.png" align="center" width=450> 
</p>

- `<!DOCTYPE html>` : 해당 문서가 html로 문서라는 것을 나타냄
- `<html></html>` : 전체 페이지의 콘텐츠를 포함
- `<title></title>` : 브라우저 탭 및 즐겨찾기 시 표시되는 제목으로 사용

<p align = 'center'>
<img src="images\structure-html2.png" align="center" width=450> 
</p>

- `<head></head>`
  - HTML 문서에 관련된 설명, 설정 등 컴퓨터가 식별하는 메타데이터를 작성
  - **사용자에게 보이지 않음**
    - meta - 인코딩 데이터 직접 입력하지 않음
- `<body></body>`
  - HTML **문서의 내용**을 나타냄
  - 페이지에 표시되는 모든 콘텐츠를 작성
  - 한 문서에 하나의 body 요소만 존재

> HTML은 프로그래밍 언어가 아니기 때문에 꼭 들여쓰기를 해야하는 건 아니지만(들여쓰기가 기능이 있는 것이 아님) 보기 편하기 하기 위해 들여쓰기를 해주는 것을 권장(일반적으로 2칸)

> Open in Browser 플러그를 설치했다면 `alt+b`를 누르면 vscode에서 바로 브라우저를 열어줌

> `ctrl+shift+i`, `f12`, `마우스 오른쪽 버튼➡검사` 누르면 검사창 나옴 : 웹 페이지의 HTML 코드는 크롬 개발자 도구에서 확인 가능

### HTML Element
- 하나의 요소는 `여는 태그`와 `닫는 태그` 그리고 그 안의 `내용`으로 구성됨
- 닫는 태그는 태그 이름 앞에 슬래시가 포함됨
  - 닫는 태그가 없는 태그도 존재 (meta) 
    - 컨텐츠가 필요한 태그 ➡ 닫는 태그 필요 
    - (모든 태그 외울 필요는 없음)
  
  <p align = 'center'>
  <img src="images\html-element.png" align="center" width=450> 
  </p>

### HTML Attributes
- 사용자가 원하는 기준에 맞도록 요소를 설정하거나 다양한 방식으로 요소의 동작을 조절하기 위한 값
- 목적
  - 나타내고 싶지 않지만 추가적인 기능, 내용을 담고 싶을 때 사용
  - CSS에서 스타일 적용을 위해 해당 요소를 선택하기 위한 값으로 활용됨

  <p align = 'center'>
  <img src="images\html-attributes.png" align="center" width=500> 
  </p>

- 속성 작성 규칙
  - 속성은 요소 이름과 속성 사이에 **공백**이 있어야 함
  - 하나 **이상의 속성**들이 있는 경우엔 **속성 사이에 공백**으로 구분함
  - 속성 **값**은 **열고 닫는 따옴표**로 감싸야 함 (작은 따옴표도 작동은 하지만 그렇게 쓰지 않음)

> 📌TIP  
> `느낌표(!) + 탭` 누르면 HTML에서 필요한 내용을 자동완성 해줌

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <p>My page</p>
  <a href="https://ww.google.com/">구글</a> 
</body>
</html>
```

✏ 필수 속성
- `<a href="https://ww.google.com/">구글</a>` : href는 a태그의 필수 속성 (하이퍼 링크) - 자동완성 했을 때 자동으로 나오는 속성은 필수 속성
- `<img src="" alt="">`
  - src : 소스
  - alt : 대체 텍스트 (시각장애인을 위한 리더기)
  - `<img src="https://random.imagecdn.app/500/150" alt="sample-img">`
    - 랜덤 이미지 만들 수 있는 곳


## Text Structure
HTML Text structure : HTML의 주요 목적 중 하나는 **텍스트 구조와 의미를 제공**하는 것

예를 들어 `h1`(`<h1>대제목</h1>`) 요소는 단순히 텍스트를 크게만 만드는 것이 아닌 현재 문서의 최상위 제목이라는 의미를 부여하는 것

📌대표적인 HTML Text structure
- Heading & Paragraphs
  - h1~6, p
    - `h1`은 암묵적으로 대제목은 하나씩이라고 규칙이 있으나 여러 개 써도 괜찮음
- Lists
  - ol, ul, li
    ```html
    <ol>
      <li>파이썬</li>
      <li>알고리즘</li>
      <li>웹</li>
    </ol>
    <ul>
      <li>파이썬</li>
      <li>알고리즘</li>
      <li>웹</li>
    </ul>
    ```
- Emphasis & Importance
  - em(기울임), strong(볼드체)

# 웹 스타일링

## CSS
📍 Cascading Style Sheet 
웹 페이지의 **디자인**과 **레이아웃**을 구성하는 언어

CSS를 적용하지 않은 웹 사이트 모습
  <p align = 'center'>
  <img src="images\css-ex1.png" align="center" width=500> 
  </p>

```css
h1 {
  color : red;
  font_size: 30px;
}
```

  <p align = 'center'>
  <img src="images\css-ex2.png" align="center" width=500> 
  </p>

- 2가지가 선언된 것
- 이름만 봐서는 대충 뭘 하려는 지는 유추가 가능
- 그러나 모든 속성을 외울 수 없음
  - 대표적인건 정해져있음, 간혹 잘 안쓰는 스타일 속성은 그때가서 찾아서 씀
  - 그리고 vscode가 자동완성을 잘 해줌
- 직관성이 떨어지니깐 들여쓰기를 하지만 한 줄로 적어도 괜찮음(`;`은 이 줄이 끝난다는 뜻)

📍 CSS 적용 방법
1. 인라인(Inline) 스타일
    - HTML 요소 안에 style 속성 값으로 작성
    - 길어지면 직관성이 떨어지기 때문에 잘 안 씀 
      <p align = 'center'>
      <img src="images\css-style1.png" align="center" width=500> 
      </p>
2. 내부(Internal) 스타일 시트
    - head 태그 안에 style 태그에 작성
    - 가장 많이 사용할 예정(2-3 많이 사용)  
      <p align = 'center'>
      <img src="images\css-style2.png" align="center" width=500> 
      </p>
3. 외부(External) 스타일 시트
    - 별도 CSS 파일 생성 후 HTML link 태그를 사용해 불러오기 
      <p align = 'center'>
      <img src="images\css-style3.png" align="center" width=500> 
      </p>

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
  <style>
    h2{
      color: blue;
    }
  </style>
</head>

<body>
  <h1 style="color: red;">Inline Style</h1>
  <h2>Internal Style</h2>
  <h3>External Style</h3>
</body>

</html>
```

## CSS 선택자
⭐ 가장 중요함
실제 웹사이트는 복잡하므로, 선택자를 잘 선택하는 것이 중요함

📍 CSS Selectors  
HTML **요소를 선택**하여 **스타일을 적용**할 수 있도록 하는 선택자

CSS Selectors 종류
- 기본 선택자
  - 전체(*) 선택자
    - HTML 모든 요소를 선택
  - 요소(tag) 선택자
    - 지정한 모든 태그를 선택
    - 똑같은 태그가 많이 나와서 거의 무쓸모
  - 클래스(class) 선택자
    - `'.'(dot)`
    - 주어진 클래스 속성을 가진 모든 요소를 선택
  - 아이디(id) 선택자  
    - `'#'`
    - 주어진 아이디 속성을 가진 요소 선택
    - 문서에는 주어진 아이디를 가진 요소가 하나만 있어야 함 (요소 1개에만 적용)
  - 속성(attr) 선택자
- 결합자 (Combinators)
  - 자손 결합자(" "(space))
    - 첫 번재 요소의 자손 요소들 선택
    - 예시) `p span`은 `<p>` 안에 있는 모든 `<span>`를 선택 (하위 레벨 상관 없이)
  - 자식 결합자(">")
    - 첫 번째 요소의 직계 자식만 선택
    - 예) `ul > li`은 `<ul>` 안에 있는 모든 `<li>`를 선택 (**한 단계 아래 자식**들만)

혼용해서 쓰면 더 디테일하게 선택을 할 수 있게 됨

```html
  <style>
    * {
      color: red;
    }
    h2 {
      color: orange;
    }
    h3,
    h4 {
      color: blue;
    }
    /* 클래스 선택자 */
    .green {
      color: green;
    }
    /* 아이디 선택자 */
    #purple {
      color: purple;
    }
    /* 지식 결합자 (아이디 이름과 값과 무관)*/
    .green > span {
      font-size: 50px;
    }
    
    /* 자손 결합자 */
    .green li {
      color: brown;
    }
  </style>
```
CSS 명시도 우선순위
- !important
- inline style
- id 선택자
- class 선택자
- 요소(tag) 선택자
- 전체 선택자
- 소스 순서 - 동일한 우선순위의 스타일 규칙이 충돌할 경우, 나중에 정의된 규칙이 적용됨
      
<p align = 'center'>
<img src="images\css-selectors.png" align="center" width=200> 
</p>

## 명시도
📍 Specificity  
결과적으로 요소에 적용할 CSS 선언을 결정하기 위한 알고리즘

- CSS Selector에 가중치를 계산하여 어떤 스타일을 적용할지 결정
  - CSS; `Cascading` Style Sheet : 떨어지다
    - 계단식
    - 한 요소에 동일한 가중치를 가진 선택자가 적용될 때 CSS에서 **마지막에 나오는 선언**이 사용됨
- 동일한 요소를 가리키는 2개 이상의 CSS 규칙이 있는 경우 가장 높은 명시도를 가진 Selector가 승리하여 스타일이 적용됨

<p align="center">  
<img src="images\css-cascade.png" width="215">  
<img src="images\css-cascade2.png" width="300">  
</p>

**명시도가 높은 순**
1. Importance
   - !importance
   - 다른 우선순위 규칙보다 우선하여 적용하는 키워드
   - Cascade의 구조를 무시하고 강제로 스타일을 적용하는 방식이므로 사용을 권장하지 않음
2. Inline 스타일 ➡ 가시성도 떨어지고 우선순위도 높아서 버림
3. 선택자
   - id 선택자 > **class 선택자** > 요소 선택자
   - 앞으로 class 선택자만 쓸 예정 why? 여러가지 선택자를 쓰게 될 경우 우선순위를 고려하여 스타일을 적용해야함 (복잡🤢)
4. 소스 코드 선언 순서
  
명시도 예시
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    h2 {
      color: darkviolet !important;
    }

    p {
      color: blue;
    }

    .orange {
      color: orange;
    }

    .green {
      color: green;
    }

    #red {
      color: red;
    }
  </style>
</head>

<body>
  <p>1</p>
  <p class="orange">2</p>
  <p class="green orange">3</p>
  <p class="orange green">4</p>
  <p id="red" class="orange">5</p>
  <h2 id="red" class="orange">6</h2>
  <p id="red" class="orange" style="color: brown;">7</p>
  <h2 id="red" class="orange" style="color: brown;">8</h2>
</body>

</html>
```

## CSS 상속
기본적으로 CSS는 상속을 통해 부모 요소의 속성을 자식에게 상속해 재사용성을 높임

2가지 분류
- 상속되는 속성
  - Text 관련 요소(font, color, text-align), opacity, visibility 등
- 상속되지 않는 속성 (배치 관련)
  - box model 관련 요소 (width, height, border, box-sizing ...)
  - position 관련 요소 (position, top/right/bottom/left, z-index) 등

[참고 자료 : 스타일의 상속과 적용 우선 순위](https://poiemaweb.com/css3-inheritance-cascading)

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .parent {
      /* 상속 O */
      color: red;

      /* 상속 X */
      border: 1px solid black;
    }
  </style>
</head>

<body>
  <ul class="parent">
    <li>Hello</li>
    <li>Bye</li>
  </ul>
</body>

</html>
```
<img src="images\css-parent.png" width="400">  

<br>

📌상속 여부 확인
MDN의 각 속성별 문서 하단에서 상속 여부를 확인할 수 있음


# CSS Box Model
웹 페이지의 모든 HTML 요소를 감싸는 사각형 상자 모델

<img src="images\css-box-model.png" width="400">  
원은 네모 박스를 깎은 것

## 박스 타입
박스 타입에 따라 페이지에서 배치 흐름 및 다른 박스와 관련하여 박스가 동작하는 방식이 달라짐

- Block box
- Inline box

📌 박스 표시(Display) 타입
1. Outer display type  
    <p align = 'center'> <img src="images\css-box-model-outer-display-type.png" width="400"> </p>

     - 박스가 문서 흐름에서 어떻게 동작할 지를 결정
     - 속성
       - block
       - inline
     - 📌 **block 특징**   
       - 항상 새로운 행으로 나뉨
       - width, height 속성 사용 가능
       - padding, margin, border로 인해 다른 요소를 상자로부터 밀어냄
       - width 속성을 지정하지 않으면 박스 inline 방향으로 사용 가능한 공간을 몯 ㅜ차지함
         - 상위 컨테이너 너비 100%로 채우는 것
       - 대표적인 block 타입 태그
         - h1~6, p, div
     - 📌 **inline 특징**
       - 새로운 행으로 넘어가지 않음
       - width와 height 속성을 사용할 수 없음
       - 수직 방향
         - padding, margin, border가 적용되지만 다른 요소를 밀어낼 수는 없음
       - 수평 방향
         - padding, margins, borders가 적용되어 다른 요소를 밀어낼 수 있음
       - 대표적인 inline 타입 태그
         - a, img, span, strong, em
     - Normal flow
       - 일반적인 흐름 또는 레이아웃을 변경하지 않은 경우 웹 페이지 요소가 배치되는 방식   
         <p align = 'center'><img src="images\css-box-model-normal-flow.png" width="400"> </p>
       - 예시  
         <p align = 'center'>
           <img src="images\css-box-model-normal-flow-ex1.png" width="400">
           <img src="images\css-box-model-normal-flow-ex2.png" width="400">
         </p>
2. Inner display type  
    flexbox
    <p align = 'center'> <img src="images\css-box-model-inner-display-type.png" width="400"> </p>
    
      - 박스 내부의 요소들이 어떻게 배치될지를 결정
      - 속성
        - flex
      - 추후 CSS layout - Flexbox에서 진행 예정


# 참고
## 명시도 관련 문서
- [그림으로 보는 명시도](https://specifishity.com/)
- [명시도 계산기](https://specificity.keegan.st/)

## HTML 스타일 가이드
1. 대소문자 구분
   - HTML은 대소문자를 구분하지 않지만, 소문자 사용을 강력히 권장
   - 태그명과 속성명 모두 소문자로 작성
2. 속성 따옴표
   - 속성 값에는 큰 따옴표(")를 사용하는 것이 일반적
3. 공백 처리
   - HTML은 연속된 공백을 하나로 처리
   - Enter키로 줄 바꿈을 해도 브라우저에서 인식하지 않음(줄 바꿈 태그를 사용해야 함)
4. 에러 출력 없음
   - HTML은 문법 오류가 있어도 별도의 에러 메시지를 출력하지 않음 
5. 코드 구조와 포맷팅
   - 일관된 들여쓰기를 사용 (보통 2칸 공백)
   - 각 요소는 한 줄에 하나씩 작성
   - 중첩된 요소는 한 단계 더 들여쓰기 

## CSS 스타일 가이드
1. 코드 구조와 포맷팅
   - 일관된 들여쓰기를 사용 (보통 2칸 공백)
   - 선택자와 속성은 각각 새 줄에 작성
   - 중괄호 앞에 공백 넣기
   - 속성 뒤에는 콜론(:)과 공백 넣기
   - 마지막 속성 뒤에는 세미콜론(;) 넣기
2. 선택자 사용
   - class 선택자를 우선적으로 사용
   - id, 요소 선택자 등은 가능한 피할 것
   - 여러 선택자들과 함께 사용할 경우 우선순위 규칙에 따라 예기치 못한 스타일 규칙이 적용되어 전반적인 유지보수가 어려워지기 때문
3. 속성과 값
   - 속성과 값은 소문자로 작성
   - 0 값에는 단위를 붙이지 않음
4. 명명 규칙
   - 클래스 이름은 의미 있고 목적을 나타내는 이름을 사용
   - 케밥 케이스(Kebab-case)를 사용
   - 약어보다는 전체 단어를 사용
5. CSS 적용 스타일
   - 인라인(inline) 스타일은 되도록 사용하지 말 것
   - CSS와 HTML 구조 정보가 혼합되어 작성되기 때문에 코드를 이해하기 어렵게 만듦

> CSS의 모든 속성은 외우는 것이 아니다
> - 자주 사용되는 속성은 그리 많지 않으며 주로 활용하는 속성 위주로 사용하다 보면 자연스럽게 익히게 됨
> - 그 외 속성들은 필요할 때마다 검색해서 학습 후 사용할 것

## MDN
📍 MDN Web Docs  
Mozilla Developer Network에서 제공하는 온라인 문서로, 웹 개발자와 디자이너를 위한 종합적인 참고 자료
- HTML, CSS, JavaScript, 웹 API, 개발 도구 등 웹 기술에 대한 정보를 제공

📌 MDN 문서를 활용해야 하는 이유  
- 정확성 및 신뢰성
  - Mozilla와 웹 커뮤니티의 전문가들에 의해 작성되고 유지 관리
  - 웹 표준을 정확하게 반영하고 있으며, 신뢰할 수 있는 정보 소스를 제공
- 최신 웹 기술
  - 최신 웹 표준과 기술을 다루고 있어, 웹 개발자들이 최신 정보를 쉽게 접할 수 있음
- 명확한 설명과 예제
  - 복잡한 개념을 이해하기 쉽게 설명하고, 실습 가능한 예제 코드를 제공

📌 MDN 문서 결론  
- MDN 문서는 웹 개발 학습의 모든 단계에서 중요한 참고 자료
- 개발 과정에서 발생하는 다양한 문제에 대한 솔루션을 찾는 데 유용
- 이 문서를 활용함으로써, 웹 기술에 대한 깊은 이해를 얻고, 실무에 필요한 능력을 갖출 수 있음