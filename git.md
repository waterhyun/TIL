##  CLI
Command Line Interface 명령줄 인터페이스  
글자를 입력하여 컴퓨터에 명령을 내리는 방식(나무위키)

장점  
- 효율성
- 정밀한 제어
- 표준성
  - window의 경우 cmd
  - unix 계열의 운영체제의 경우 bash
  - CLI 명령어는 대부분의 Unix 운영체제 기반 시스템에서 동일하게 작동하여 여러 환경에서 적용할 수 있어서 Bash로 설정 (🤔)


## shell
shell(쉘) program은 명령어 처리기로 키보드로 입력한 명령어를 운영체제에 전달하여 키보드로 입력한 명령어를 실행하게끔 하는 프로그램.

Bash는 Shell의 한 종류!

운영체제마다 명령어가 다르다는 문제점을 극복하기 위해 git bash를 사용함.  

window에서도 리눅스 운영체제의 명령어를 쓸 수 있도록 함.


# GIT
## 의미
**분산 버전 관리 시스템**  
버전을 여러 개의 복제된 저장소에 저장 및 관리  

**분산**
- 중앙 서버에 의존하지 않고도 동시에 다양한 작업을 수행 가능
- 개발자들 간의 작업 충돌을 줄여주고 개발 생산성을 향상
- 중앙 서버의 장애나 손실에 대비하여 백업과 복구가 용이
- 인터넷에 연결되지 않은 환경에서도 작업을 계속할 수 있다.
- 변경 이력과 코드를 로컬 저장소에 기록하고 나중에 중앙 서버와 동기화.

**버전 관리 시스템**  
- 변화를 기록하고 추적하는 것
- 변경 사항만 저장

## 영역
1. Working Directory
  - GUI 화면
  - 실제 작업 중인 파일들이 위치하는 영역
2. Staging Area
  - 안 보이는 영역
3. Repository
  - 안 보이는 영역
  - 버번(Commit) 이력과 파일들이 영구적으로 저장되는 영역 모든 버전(Commit)과 변경 이력이 기록
  - 반드시 staging area를 건너야 함.

## Commit하는 과정
1. `git init`를 현재 쓰는 로컬에 선언.
  - git의 버전 관리를 시작할 디렉토리에서 진행! = 로컬 저장소 설정
  - init? 초기화 (initialize의 줄임말)
  - 📌선언하면 `master`가 생김
  - ⚠ 주의 사항
    - desktop에서 git init은 하지 않기
    - 하위 폴더에서 git init하지 않기
  - 실수시 해결법
    - 숨겨진 파일 삭제(.git)
    - ls -a로 확인 가능/또는 폴더에서 직접 제거
2. `git add`
  - working directory영역에서 staging area으로 보내는 작업
  - `git add 파일명`: 해당 파일을 staging area에 전달
  - `git add .` : 수정된 전체 파일을 staging area에 전달
3. `git commit`
  - `git commit -m "message"`

### `git status`
변경 이력 확인하는 방법

### `git log`
commit history를 보는 방법  
너무 길면 짤리므로 `git log --oneline` 사용 권장.  
`enter`를 계속 쳐야하는 상황이 온다면 `q`를 눌러 탈출.

### 최초 설정
```bash
$ git config --global user.email you@example.com
$ git config --global user.name "Your Name"
```  
- `--global` 옵션을 이용하면 딱 한번의 설정으로 가능.
- 이 작업을 하지 않으면 `commit` 불가능

# Remote Repository
코드와 버전 관리 이력을 온라인 상의 특정 위치에 저장하여 여러 개발자가 협업하고 코드를 공유할 수 있는 저장공간.  
예시) gitlab, github, bitbucket (이중 가장 큰 것은 github)

## Push
`git remote add origin remote_repo_url`
- origin : 추가하는 원격 저장소 별칭
  - 보통 origin
  - 별칭을 사용해 **로컬 저장소 한 개**에 **여러 원격 저장소**를 추가할 수 있음.
- remote_repo_url : 원격 저장소 주소

`git push origin master`  
push를 통해 commit 내용을 upload  
변경 사항만큼만 push

## Pull & Clone
### Pull
`git pull remote_repo_url`
- 변경 사항 만큼만 내려받기

### Clone
`git clone remote_repo_url`
- 초기에 통재로 처음에 다 내려받는 것(복제)


## `.gitignore`
- git에서 특정 파일을 추적하지 못하도록 함.
- 폴더에 `.gitignore`를 만들어서 해당 파일에서 무시할 내용을 적음.

> [참고 사이트](https://www.toptal.com/developers/gitignore/)
> 쓸데없는 숨긴 폴더들이 많이 생기기 때문에 위 파일에서 한번에 올리는 것을 추천
> window, python, visualstudiocode

- 주의사항  
이미 git의 관리를 받은 이력이 있는 파일이나 디렉토리는 나중에 gitignore에 작성해도 적용이 되지 않음.
  - `git rm -cached` 명령어를 통해 git 캐시에서 삭제 필요.
  
  


