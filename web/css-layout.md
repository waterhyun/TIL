# CSS-Layout
## CSS Box Model
📍 CSS Box Model  
웹 페이지의 모든 HTML 요소를 감싸는 사각형 상자 모델

> 내용(content), 안쪽 여백(padding), 테두리(border), 외부 간격(margin)으로 구성되어 요소의 크기와 배치를 결정


### Box type
[html-css.md 참고](https://github.com/waterhyun/TIL/blob/master/web/html-css.md)
1. Block box
2. Inline box

박스 타입에 따라 페이지에서의 배치 흐름 및 다른 박스와 관련하여 박스가 동작하는 방식이 달라짐

### Box Display type
박스 표시 타입  
1. Outer display type : 박스가 문서 흐름에서 어떻게 동작할지를 결정
   1. Block
   2. Inline
2. Inner display type : 박스 내부의 요소들이 어떻게 배치될지를 결정
   1. Flexbox(속성: flex)

### Box 구성요소
<p align='center'>
<img src="images\css-box-model-consist.png" width="400">
</p>
- margin box
  - 이 박스와 다른 요소 사이의 공백 가장 바깥쪽 영역
  - 콘텐츠, 패딩 및 테두리를 래핑
  - 박스와 다른 요소 사이의 공백
  - margin 관련 속성을 사용하여 크기 조정
- border box
  - 콘텐츠와 패딩을 감싸는 테두리 영역
  - 콘텐츠와 패딩을 래핑
  - border 관련 속성을 사용하여 크기 조정
- padding box
  - 콘텐츠가 표시되는 영역
  - 콘텐츠 주위에 공백
  - padding 관련 속성을 사용하여 크기 조정
- content box
  - 콘텐츠 주위에 위치하는 공백 영역
  - 실제 콘텐츠가 표시되는 영역 크기
  - width 및 height 속성을 사용하여 크기 조정

#### Box 구성의 방향 별 속성 값
<p align='center'>
<img src="images\css-box-model-consist-direction.png" width="400" center>
</p>

#### 구성 요소 예시
[예시](02-box-model\02-part-of-box.html) 
- 테두리 큰 속성 3가지
  - 색, 굵기, 선의 종류
- shorthand
  - border에서는 순서가 상관이 없음
  - padding도 마찬가지 (상하-좌우 ➡ 개수에 따라서 다름)

### shorthand 속성
1. border
   - border-width, border-style, border-color를 한번에 설정하기 위한 속성

    ```css
    /* 작성 순서는 영향을 주지 않음 */
    border: 5px dotted black;
    ```

2. margin & padding
   - 4방향의 속성을 각각 지정하지 않고 한 번에 지정할 수 있는 속성

    ```css
    /* 4개 - 상우하좌 (시계방향) */
    margin: 10px 20px 30px 40px;
    padding: 10px 20px 30px 40px;

    /* 3개 - 상/좌우/하 */
    margin: 10px 20px 30px;
    padding: 10px 20px 30px;

    /* 2개 - 상하/좌우 */
    margin: 10px 20px;
    padding: 10px 20px;

    /* 1개 - 공통 */
    margin: 10px;
    padding: 10px;
    ```

### box-sizing 속성
📍 The standard CSS box model  
표준 상자 모델에서 width와 height 속성 값을 설정하면 이 값은 content box의 크기를 조정하게 됨 

<p align='center'>
<img src="images\the-standard-css-box-model.png" width="400">
</p>

실제 박스 크기는 350px가 아닌 테두리, 패딩 값을 모두 더한 값을 가짐

📍 The alternative CSS box model
<p align='center'>
<img src="images\the-alternative-css-box-model.png" width="400">
</p>
대체 상자 모델에서 만든 width와 height는 실제 상자의 너비  
실제 박스 크기를 정하기 위해 테두리와 패딩을 조정할 필요가 없음  

<br>
📌 대체 상자 모델로 변경  

<p align='center'>
<img src="images\box-sizing.png" width="400">
</p>

[예시](02-box-model\03-box-sizing.html) 

### 기타 display 속성
1. inline-block
   - inline과 block 요소 사이의 중간 지점을 제공하는 display 값
   - width 및 height 속성 사용 가능 ➡ blcok
   - padding, margin 및 border로 인해 다른 요소가 상자에서 밀려남 ➡ block
   - 새로운 행으로 넘어가지 않음 ➡ inline
   - 요소가 줄 바꿈 되는 것을 원하지 않으면서 너비와 높이를 적용하고 싶은 경우에 사용
   - [예시](02-box-model\04-inline-block.html) 
2. none
   - 요소를 화면에 표시하지 않고, 공간조차 부여되지 않음
   - Java Script를 통해 제어를 많이 함
   - [예시](02-box-model\05-none.html) 


## CSS position
📍 CSS Layout  
각 요소의 위치와 크기를 조정하여 웹 페이지의 디자인을 결정하는 것  
➡ Display, Position, Flexbox 등

📍 CSS Position  
요소를 Normal Flow에서 **제거**하여 다른 위치로 배치하는 것  
➡ 다른 요소 위에 올리기, 화면의 특정 위치에 고정시키기 등

<p align='center'>
<img src="images\css-position.png" width="400">
</p>

- z축은 모니터 얼굴 방향이라고 생각하면 됨

📍 CSS Position 유형
- static
- relative
- absolute
- fixed
- sticky

### static
- 요소를 normal flow에 따라 배치
- top, right, bottom, left 속성이 적용되지 않음
- 기본 값

### relative
- 요소를 normal flow에 따라 배치
- 자신이 원래 위치(static)을 기준으로 이동
  - 기준이 본인의 과거 위치
- top, right, bottom, left 속성으로 위치를 조정
- 다른 요소의 레이아웃에 영향을 주지 않음(요소가 차지하는 공간은 static일 때와 같음) - 📌 absolute와 다른 점

### absolute
[예시](03-css-layout-position\03-absolute.html)
- 요소를 normal flow에서 제거
- 가장 가까운 relative 부모 요소를 기준으로 이동
  - 만족하는 부모 요소가 없다면 body 태그를 기준으로 함
  - 즉, 어떤 부모를 찾고 움직임
- top, right, botoom, left 속성으로 위치를 조정
- 문서에서 요소가 차지하는 공간이 없어짐

### fixed
- 요소를 normal flow에서 제거
- 현재 화면영역(viewport)을 기준으로 이동
- 스크롤해도 **항상 같은 위치**에 유지
- top, right, bottom, left 속성으로 위치를 조정
- 문서에서 요소가 차지하는 공간이 없어짐

### sticky
[예시](03-css-layout-position\02-sticky.html)
- relative와 fixed의 특성을 결합한 속성
- 스크롤 위치가 임계점에 도달하기 전에는 relative처럼 동작
- 스크롤리 특정 임계점에 도달하면 fixed처럼 동작하여 화면에 고정됨
- 만약 다음 sticky 요소가 나오면 다음 sticky 요소가 이전 sticky 요소의 자리를 대체
  - 이전 sticky 요소가 고정되어 있던 위치와 다음 sticky 요소가 고정되어야 할 위치가 겹치게 되기 때문

### z-index

## CSS Flexbox
## 참고 