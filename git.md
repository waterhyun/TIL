# 1. CLI
Command Line Interface 명령줄 인터페이스  
글자를 입력하여 컴퓨터와 상호작용하는 방식.

✅장점  
- 효율성
- 정밀한 제어
- 표준성
  - window의 경우 cmd
  - unix 계열의 운영체제의 경우 bash

✅CLI 도구
- Bash : 리눅스 및 유닉스 시스템에서 주로 사용하는 셸(Shell)
- PowerShell: 윈도우 시스템에서 사용되는 강력한 스크립팅 언어 겸 셸
-CMD: 윈도우 운영 체제에 기본적으로 포함된 CLI



## Shell
Shell(쉘)은 사용자가 컴퓨터와 대화할 수 있도록 도와주는 프로그램.  

Bash는 Shell의 한 종류!

운영체제마다 명령어가 다르다는 문제점을 극복하기 위해 git bash를 사용함.
- 윈도우 운영 체제에서 Git을 사용하기 위한 도구
- 리눅스 환경에서 사용하는 Bash Shell을 윈도우에서 사용할 수 있도록 해줌.
- 이를 통해 윈도우 사용자도 리눅스 명령어와 Git 명령어를 함께 사용할 수 있음.(git commit 등등)

window에서도 리눅스 운영체제의 명령어를 쓸 수 있도록 함.

<br>

# 2. GIT
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
1. **Working Directory**
    - GUI 화면
    - 실제 작업 중인 파일들이 위치하는 영역
2. **Staging Area**
    - 안 보이는 영역
3. **Repository**
    - 안 보이는 영역
    - 버번(Commit) 이력과 파일들이 영구적으로 저장되는 영역 모든 버전(Commit)과 변경 이력이 기록
    - 반드시 staging area를 건너야 함.

## 주요 명령어
### 파일 및 디렉토리 이동과 확인
- `cd` - Change Directory
```bash
cd /path/to/directory  # 지정한 디렉토리로 이동
cd ..                  # 상위 디렉토리로 이동
cd ~                   # 홈 디렉토리로 이동

```
- `ls` - List
```bash
ls         # 기본 목록
ls -la     # 숨김 파일을 포함한 상세 목록
```
- `pwd` - Print Working Directory
```bash
pwd  # 현재 작업 중인 디렉토리의 경로 출력
```
### 파일 및 디렉토리 관리
- `touch`
```bash
touch filename.txt  # 빈 파일 생성
```
- `mkdir`- Make Directory
```bash
mkdir new_directory  # 새로운 디렉토리 생성
mkdir -p path/to/directory  # 경로 상에 없는 디렉토리도 함께 생성
```
- `rm`- Remove
```bash
rm filename.txt          # 파일 삭제
rm -r directory_name     # 디렉토리와 그 안의 내용 삭제
rm -f filename.txt       # 강제로 파일 삭제
```
### 파일 내용 보기
- `cat` - Concatenate
```bash
cat filename.txt            # 파일 내용 출력
cat file1.txt file2.txt     # 두 파일의 내용을 연속적으로 출력

```
### 프로그램 및 파일 실행
- `start`
```bash
start notepad.exe           # 메모장 실행
start filename.txt          # 파일을 기본 프로그램으로 열기
```



## ⭐ Commit하는 과정
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

### ⭐`git status`
변경 이력 확인하는 방법

### ⭐`git log`
commit history를 보는 방법  
너무 길면 짤리므로 `git log --oneline` 사용 권장.  
`enter`를 계속 쳐야하는 상황이 온다면 `q`를 눌러 탈출.

### 최초 설정
```bash
  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
```  
- `--global` 옵션을 이용하면 딱 한번의 설정으로 가능.
- 이 작업을 하지 않으면 `commit` 불가능

##  Remote Repository
코드와 버전 관리 이력을 온라인 상의 특정 위치에 저장하여 여러 개발자가 협업하고 코드를 공유할 수 있는 저장공간.  
예시) gitlab, github, bitbucket (이중 가장 큰 것은 github)

### 1. Push ⭐
`git remote add origin remote_repo_url`
- origin : 추가하는 원격 저장소 별칭
  - 보통 origin
  - 별칭을 사용해 **로컬 저장소 한 개**에 **여러 원격 저장소**를 추가할 수 있음.
- remote_repo_url : 원격 저장소 주소

`git remote -v`
- 현재 프로젝트에 등록된 리모트 저장소 확인
- `-v` 옵션을 통해 단축이름과 URL함께 확인

`git push origin master`  
push를 통해 commit 내용을 upload  
변경 사항만큼만 push


### 2. Pull & Clone ⭐
#### Pull
`git pull remote_repo_url`
- 변경 사항 만큼만 내려받기

#### Clone
`git clone remote_repo_url`
- 초기에 통재로 처음에 다 내려받는 것(복제)


### 3. `.gitignore`
- git에서 특정 파일을 추적하지 못하도록 함.
- 폴더에 `.gitignore`를 만들어서 해당 파일에서 무시할 내용을 적음.

> [참고 사이트](https://www.toptal.com/developers/gitignore/)
> 쓸데없는 숨긴 폴더들이 많이 생기기 때문에 위 파일에서 한번에 올리는 것을 추천
> window, python, visualstudiocode

- 주의사항  
이미 git의 관리를 받은 이력이 있는 파일이나 디렉토리는 나중에 gitignore에 작성해도 적용이 되지 않음.
  - `git rm -cached` 명령어를 통해 git 캐시에서 삭제 필요.

  
## Git revert & reset

### 1. revert
특정 commit을 없었던 일로 만드는 작업.  
변경 사항을 안전하게 실행 취소할 수 있도록 순방향 실행 취소 작업.

`git revert <commit id>`
- id는 일부만 적어도 됨(앞에 4자리 정도)

🔗 **작동원리**
- 단일 commit을 실행 취소하는 것 (재설정)
- 프로젝트 기록에서 commit을 없었던 일로 처리 후 그 결과를 새로운 commit으로 추가함.
  - 없어진 commit의 기록은 남아 있게 됨
  - commit의 개수 유지  

즉, commit 기록에서 commit을 삭제하거나 분리하는 대신, 지정된 변경 사항을 바전시키는 새 commit을 생성  
<br>
❓ **왜** revert는 지우고자 하는 commit을 남겨둘까?
- 분산 버전 관리 시스템이므로 다른 사람들과의 싱크를 맞추기 위해 남겨진다.  
(git에서 기록이 손실되는 것을 방지하며 기록의 무결성과 협업의 신뢰성을 높임)


⚠ **주의사항**
- 새로운 commit이 추가 됨으로 메세지를 작성해야하는 vim이 나타남.
  - vim이란?
    > - 입력 모드와 명령 모드가 있음.
    >- 입력 모드로 전환 `i` (아래에 insert라고 표시)
    > - 명령 모드로 전환 `esc`
    > - 아주 가벼운 에디터라 기본 에디터로 내장되어 있는 경우가 많음.
  - vim이 나타나는 경우 메시지를 입력
    - git이 추천해준 `revert"second"`를 그대로 시용하는 것을 권장
    - 저장하고 끄는 방법 `:wq`
      > - w: write
      > - q: quit

**옵션**
- `git revert id1, id2, id3` : 여러 개 나열하여 revert
- `git revert id1..id3`: 여러 개 나열하여 revert
- `git revert --no-edit id`: 메시지를 알아서 등록하고자 할 때.


### 2. reset
특정 커밋으로 되돌아 가는 작업

`git reset <option><id>`

🔗 **작동원리**
- 특정 commit으로 되돌아 갔을 때, 되돌아간 commit이후의 commit은 모두 삭제 (위험)
- 되돌아 간 후 기록에서 삭제
- 삭제된 커밋들의 기록을 어떤 영역에 남겨둘 것인지 옵션을 활용해 조정 가능.

**옵션**
1) `--soft`  
삭제된 commit의 기록을 staging area에 남김
    - 남겨져 있음
2) `--mixed`(default)  
삭제된 commit의 기록을 working directory에 남김
    - 남겨져 있음 
3) `--hard`  
삭제된 commit의 기록을 남기지 않음
    - 남겨져 있지 않음
    - 이미 삭제한 commit으로 다시 돌아가고 싶을 때(복구)
    ```bash
    git reflog
    git reset --hard <복구하고자 하는 commitID>
    ```
    




## restore
- modified 상태의 파일 되돌리기
- working directory에서 파일을 수정한 뒤, 파일의 수정 사항을  취소하고, 원래 모습대로 되돌리는 작업
- unstage 명령어 간 차이 “commit 존재 여부에 의한 차이”
  - git 저장소에 commit이 없는 경우
      - `git rm —cached` : staging area에서 working directory로 되돌리기
  - git 저장소에 commit이 존재하는 경우
      - `git restore —staged` : staging area에서 working directory로 되돌리기
