## Github Profile 꾸미기

🔎 사전 준비
- 본인의 **github username**으로 github repository를 생성
- public ✅
- Initialize this repository with: Add a README file ✅


### Header
[참고 사이트: capsule-render](https://github.com/kyechan99/capsule-render/tree/master)

위 사이트에 들어가서 *How to Use* 부분에서 *Markdown*부분 복사해서 붙여넣기.
```markdown
![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90)
```

선택한 옵션
> - type=venom
> - color=auto
> - height=150
> - section=header
> - text=Lee%20soohyun (%20은 공백을 의미)
> - fontSize=35
> - theme=tokyonight

## 방문자 수 Hits
[참고 사이트: Hits 뱃지 생성](https://hits.seeyoufarm.com/)  
[참고 사이트: 컬러 생성](https://mybrandnewlogo.com/ko/color-palette-generator)

1. Hits 뱃지 생성 사이트에 들어가서
TARGET URL에 깃허브 URL 넣기.  

2. 색상은 위 컬러 생성 사이트에서 맘에 드는 것 골라 넣기.


내가 선택한 옵션
```markdown
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fwaterhyun&count_bg=%236D92FE&title_bg=%23000000&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
```

- BORDER: ROUND
- TITLE BG COLOR: #140f07
- COUNT BG COLOR: #64a4fe

## 뱃지 만들기
[참고 사이트: 뱃지 생성 사이트](https://shields.io/)  
[참고 사이트: 뱃지 이미지와 컬러](https://simpleicons.org/)

```MARKDOWN
<img src="https://img.shields.io/badge/넣고 싶은 기술 명-색상?style=for-the-badge&logo=넣고 싶은 기술 명&logoColor=white">
```

예시 - Python  
뱃지 이미지 사이트에서 python을 검색한 뒤 컬러를 복사해서 #을 제외하고 붙여준다.
```MARKDOWN
<img src="https://img.shields.io/badge/Python-3766AB?style=flat&logo=Python&logoColor=white">
```
결과  
<img src="https://img.shields.io/badge/Python-3766AB?style=flat&logo=Python&logoColor=white"/>

보통 `<img src = ""/>` 이렇게 끝나면   
<img src="https://img.shields.io/badge/Python-3766AB?style=flat&logo=Python&logoColor=white"/>
<img src="https://img.shields.io/badge/Python-3766AB?style=flat&logo=Python&logoColor=white"/>

이렇게 나오기 때문에
끝에 `</a>`를 붙여준다.  
<img src="https://img.shields.io/badge/Python-3766AB?style=flat&logo=Python&logoColor=white"/></a> 
<img src="https://img.shields.io/badge/Python-3766AB?style=flat&logo=Python&logoColor=white"/></a>

## README stats
[참고 사이트: GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats)
- Top Languages Card

```MARKDOWN
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=waterhyun&layout=compact&size_weight=0.5&count_weight=0.5)
```

옵션
> - username = 내 이름
> - layout = compact

## 기타
### 오른쪽 정렬
```markdown

<div align="Right">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fwaterhyun&count_bg=%236D92FE&title_bg=%23000000&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

</div>
```
