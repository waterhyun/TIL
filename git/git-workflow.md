# git workflow
- 원격 저장소를 활용해 다른 사용자와 협업하는 방법

# Feature Branch Workflow
- shared repository model
- 각 사용자가 원격 저장소의 소유권을 공유 받는 방식
- 원격 저장소 공유
  - 소유권을 가진 사용자가 권한을 공유할 인원을 초대(collaborators)  
- 각 사용자는 원격 저장소의 소유권을 가진 상태
  - 따라서 clone을 통해 저장소를 로컬에 복제  
  <img src='images\workflow.png' width=500 style='margin:8px'>  
- 기능 추가를 위해 branch 생성 및 기능 구현  
  <img src='images\workflow02.png' width=500 style='margin:8px'>  
- 기능 구현 후 원격 저장소에 브랜치 반영   
  <img src='images\workflow03.png' width=500 style='margin:8px'>    
  <img src='images\workflow04.png' width=500 style='margin:8px'>    
  <img src='images\workflow05.png' width=500 style='margin:8px'>  
  <img src='images\workflow06.png' width=500 style='margin:8px'>  
  <img src='images\workflow07.png' width=500 style='margin:8px'>  
  <img src='images\workflow08.png' width=500 style='margin:8px'>  
  <img src='images\workflow09.png' width=500 style='margin:8px'>  
  <img src='images\workflow10.png' width=500 style='margin:8px'>  

# Forking Workflow
- Fork & Pull model
- 각 사용자가 소유권이 없는 원격 저장소를 복제하는 방식
- Fork : 다른 사용자의 원격 저장소를 자신의 계정으로 복사하는 것
  - 특징
    - 원본 저장소와 연결을 유지하면서 독립적인 복사본을 만듦
    - 원본 저장소에 영향을 주지 않고 변경 사항을 만들 수 있음
  - 목적
    - 오픈소스 프로젝트에 기여
    - 기존 프로젝트를 기반으로 새로운 프로젝트 시작
    - 원본 저장소와 연결을 유지하면서 독립적으로 개발
- fork 후 작업 흐름
  - fork한 저장소를 로컬에 clone
  - 브랜치 생성 후 변경 사항 작업
  - 변경 사항을 fork한 저장소에 push
  - 원본 저장소로 Pull Reqeust 생성하여 변경 사항 제안

<img src='images\fork.png' width=500 style='margin:8px'>      
<img src='images\fork02.png' width=500 style='margin:8px'>      
<img src='images\fork03.png' width=500 style='margin:8px'>      
<img src='images\fork04.png' width=500 style='margin:8px'>      
<img src='images\fork05.png' width=500 style='margin:8px'>    
<img src='images\fork06.png' width=500 style='margin:8px'>    
<img src='images\fork07.png' width=500 style='margin:8px'>    
<img src='images\fork08.png' width=500 style='margin:8px'>    
<img src='images\fork09.png' width=500 style='margin:8px'>    
<img src='images\fork10.png' width=500 style='margin:8px'>    
