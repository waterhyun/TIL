# Regular Expression
정규표현식(regular expression, regexp, regex, rational rexpression) 또는 정규식은 **특정한 규칙**을 가진 문자열의 집합을 표현하는 데 사용하는 형식 언어.

메타 문자: 원래 그 문자가 가진 뜻이 아니라 특별한 의미를 가진 문자.


📃예시  
Python에서 정규표현식 사용하는 방법
```python
importe re
m = re.search('(?<=abc)def'. 'abcdef')
m.group(0) # 'def'
```

# 정규식 문법
## Anchors
Anchors match a postion before or after other characters.

| syntax | example | description | example matches | example non-matches |
| ------ | -------| -------| ------ | ------|
| ^ | ^r | match start of line | **r**abbit | parrot |
| $ | t$ | match end of line | rabbi**t** | trap|
| \A | \Ar | match start of line |**r**accoon|ferret|
| \Z | t\Z | match end of line |foo**t**| trap|
| \b | \bfox\b | blank(fox 앞뒤로 공백), match characters at the start or end of a word|the **fox** ate| foxtrot|
| \B | \Bee\B | \b의 반대(ee 앞뒤로 공백이 있으면 안 됨),match characters in the middle of other non-space characters|tr**ee**s| bee|

## Matching types of character
| syntax | example | description | example matches | example non-matches |
| ------ | -------| -------| ------ | ------|
|.| c.e | anything except for a linebreak(`\n`) | **cl**ean, **che**ap | acert, cent |
|\d| \d | match a digit | **6060**-**842**, **2**b\|^**2**b | two, **___|
|\D| \D |match a non-digit | **The** 5 **cats ate** 12 **Angry men** | 5210032|
|\w|\wee\w |match word characters |t**rees**, **bee4**|The bee, eels eat meat|
|\W|\Wbat\W |match non-word characters |at **bat**|wombat|
|\s| \sfox\s| match whitespace(spaces, tabs, line breaks)|the **fox** ate | it's the fox.|
|\S| \See\S | match non-whitespace| t**rees** | the bee stung |
|\metacharacter |\., \^ | escape a metacharacter to match on the metacharacter | The cat ate**.**, 2**^**3 | the cat ate 23 |


## Character Classes []
Character classes are sets or ranges of characters.

| syntax | example | description | example matches | example non-matches |
| ------ | -------| -------| ------ | ------|
|[xy]|gr[ea]y|match several characters|**gray**, **grey** | green, greek|
|[x-y]|[a-e]|match a range of characters, range|**a**m**ber**, **b**r**a**n**d** | fox, join|
|[^xy]|gr[^ea]y|e,a가 아닌 것들,does not match several characters|**green**, **greek** | grey, grey|
|[\\^-]|4[\^\|.-+*/]\d|match metachracters inside the chracter class|**4^3**, **4.2** | 44, 23|

📌`[abc]` : a, b, c 중 한 개의 문자와 매치  
📌`[a-zA-Z]`: 모든 알파벳  
📌`[0-9]`: 모든 숫자 = `\d`  
📌`[^0-9]`: 숫자가 아닌 것 = `\D`  
📌 `[\t\n\r\f\v]`: whitespace 문자와 매치 = `\s`  
📌 `[^\t\n\r\f\v]`: whitespace 문자와 매치 = `\S`  
📌 `[a-zA-Z0-9_]`: 문자+숫자(alphanumeric)와 매치 = `\w`  
📌 `[^a-zA-Z0-9_]`: 문자+숫자(alphanumeric)가 아닌 문자와 매치 = `\W`


## Repetition +, ?, {}
Rather than matching single instance of characters, you can match repeated characters.

| syntax | example | description | example matches | example non-matches |
| ------ | -------| -------| ------ | ------|
|x*|ar*o|match zero or more times|cac**ao**, c**arro**t|arugula, artichoke|
|x+|re+|match one or more times|g**ree**n, t**ree**|trap, ruined|
|x?|ro?a|match zero or one times|**roa**st, **ra**nt|root, rear|
|x{m}|\we{2}\w|match m times|**deer**, **seer**|red, enter|
|x{m,}|2{3,}4||match m or more times|671-**2224**, **2222224**| 224, 123|
|x{m,n}|12{1,3}3|match between m and n times|**123**4, **12223**84|15335, 1222223|
|x*?, x+?, etc.|re+?|match the minimum number of times-known as a lazy quantifier|t**re**e|trout|

📌 `{1, }` = `+`  
📌 `{0,}` = `*`  
📌 `{0,1}` = `?`

## Capturing, alternation & backreferences
In order to extract specific parts of a string, you cna capture those parts, and even name the parts that you captured.

| syntax | example | description | example matches | example non-matches |
| ------ | -------| -------| ------ | ------|
|(x)|(iss)+|capturing a pattern|M**ississ**ippi, m**iss**ed| mist, persist|
|(?:x)|(?:ab)(cd)|create a group without capturing|Match: **abcd**, Group 1: **cd**|abcd|
|(?\<name\>x)|(?\<first\>\d)(?\<scrond\>\\d)\d*|creat a named capture group|Match: **1325**, first: 1, second:3| 2, hello|
|(X\|y)|(re\|ba)|match seveeral alternative patterns| **re**d, **ba**nter| rant, bear|
|\n|(b)(\w*)\1|reference previous captures where n is the group index starting at 1|**blob**,  **brib**e|bear, bring|
|\k\<name\>|(?\<first\>5)(\d*)\k\<first\>|reference named captures|**51245**|523|

## Lookahead
You can specify that specific characters must appear before or after you match, without including those characters in the match.
| syntax | example | description | example matches | example non-matches |
| ------ | -------| -------| ------ | ------|
|(?=x)| iss(?=ipp)| looks ahead at the next characters without uisng them in the match | Miss**iss**ippi | missed|
|(?!x)|ai(?!n)|looks ahead at next characters to not match on | f**ai**l | faint|
|(?<=x)|(?<=tr>)a|looks at previous characters for a match without using those in the match | tr**a**il | bear| 
|(?<!x)|(?!tr)a|looks at previous characters to not match on| be**a**r | trail|

# Python 정규 표현식을 지원하는 re 모듈
re 모듈은 파이썬을 설치할 때 자동으로 설치되는 표준 라이브러리  
```python
import re
p = re.compile('ab*')
```

- `re.compile`을 사용하여 정규표현식을 컴파일
  - p : 컴파일된 패턴 객체

## 정규식을 이용한 문자열 검색

|method|목적|
|---|---|
|`match()`|문자열의 처음부터 정규식과 매치되는지 조사|
|`search()`|문자열 전체를 검색하여 정규식과 매치되는지 조사|
|`findall()`|정규식과 매치되는 모든 문자열(substring)을 **리스트**로 리턴|
|`finditer()`| 정규식과 매치되는 모든 문자열(substring)을 반복 가능한 객체로 리턴|

```python
import re
p = re.compile('[a-z]+')
```

### `match()`
```python
m = p.match("python")
print(m)
# <re.Match object; span=(0, 6), match='python'>
m[0]
# 'python'
```

```python
m = p.match("3 python")
print(m) # None
```
"3 python" 문자열은 처음에 나오는 문자 3이 정규식에 부합되지 않으므로 None이 리턴

```python
p = re.compile(정규표현식)
m = p.match( '조사할 문자열' )
if m:
    print('Match found: ', m.group())
else:
    print('No match')

# No match

```
### `search()`
```python
m = p.search("python")
print(m)
# <re.Match object; span=(0, 6), match='python'>

m = p.search("3 python")
print(m)
# <re.Match object; span=(2, 8), match='python'>

```
문자열의 처음부터 검색하는 것이 아니라 문자열 전체를 검색하기 때문에 "3" 이후의 "python"문자열과 매치.

⭐`match` 메서드와 `search` 메서드는 문자열의 처음부터 검색할지의 여부에 따라 다르게 사용해야 한다.

### `findall()`
```python
result = p.findall("life is too short")
print(result)
# ['life', 'is', 'too', 'short']

```
패턴(`[a-z]+`)과 매치되는 모든 값을 찾아 리스트로 리턴

### `finditer()`
```python
result = p.finditer("life is too short")
print(result)
# <callable_iterator object at 0x01F5E390>
for r in result: print(r)
# <re.Match object; span=(0, 4), match='life'>
# <re.Match object; span=(5, 7), match='is'>
# <re.Match object; span=(8, 11), match='too'>
# <re.Match object; span=(12, 17), match='short'>

```
`finditer`는 `findall`과 동일하지만, 그 결과로 반복 가능한 객체(iterator object)를 리턴한다.  그리고 반복 가능한 객체가 포함하는 각각의 요소는 match 객체이다.


## Match 객체의 메서드
match 객체란? p.match, p.search 또는 p.finditer 메서드에 의해 리턴된 매치 객체(match object)를 의미.


|method|목적|
|---|---|
|`group`|매치된 문자열을 리턴|
|`start`|매치된 문자열의 시작 위치를 리턴|
|`end`|매치된 문자열의 끝 위치를 리턴|
|`span`|매치된 문자열의 (시작, 끝)에 해당하는 튜플을 리턴|

```python
p = re.compile('[a-z]+')
m = p.match("python")
m.group()
# 'python'
m.start()
# 0
m.end()
# 6
m.span()
# (0, 6)

m = p.search("3 python")
m.group()
# 'python'
m.start()
# 2
m.end()
# 8
m.span()
# (2, 8)
```

📌 모듈 단위로 수행하기
``` python 
m = re.match('[a-z]+', "python")
```

### compile option
- DOTALLS(S) - `.`이 줄바꿈 문자를 포함해 모든 문자와 매치될 수 있게 한다.
```python
import re
p = re.compile('a.b')
m = p.match('a\nb')
print(m)
# None

p = re.compile('a.b', re.DOTALL)
m = p.match('a\nb')
print(m)
# <re.Match object; span=(0, 3), match='a\nb'>
```
- IGNORESECASE(I) - 대소문자 관계없이 매치될 수 있게 한다. 
```python
p = re.compile('[a-z]+', re.I)
p.match('python')
# <re.Match object; span=(0, 6), match='python'>
p.match('Python')
# <re.Match object; span=(0, 6), match='Python'>
p.match('PYTHON')
# <re.Match object; span=(0, 6), match='PYTHON'>

```
- MULTILINE(M) - 여러 줄과 매치될 수 있게 한다. `^`, `$` 메타 문자 사용과 관계 있는 옵션이다.
```python
# multiline.py
import re
p = re.compile("^python\s\w+")

data = """python one
life is too short
python two
you need python
python three"""

print(p.findall(data))
# ['python one']
```

각 라인의 첫 번째를 가져오고 싶을  때
```python
# multiline.py
import re
p = re.compile("^python\s\w+", re.MULTILINE)

data = """python one
life is too short
python two
you need python
python three"""

print(p.findall(data))
# ['python one', 'python two', 'python three']
```
- VERBOSE(X) - verbose 모드를 사용할 수 있게 한다. 정규식을 보기 편하게 만들 수 있고 주석 등을 사용할 수 있게 딘다.
```python
charref = re.compile(r'&[#](0[0-7]+|[0-9]+|x[0-9a-fA-F]+);')
```
가독성이 없음
```python
charref = re.compile(r"""
 &[#]                # Start of a numeric entity reference
 (
     0[0-7]+         # Octal form
   | [0-9]+          # Decimal form
   | x[0-9a-fA-F]+   # Hexadecimal form
 )
 ;                   # Trailing semicolon
""", re.VERBOSE)
```
가독성이 생기도록 함

# 문법 요약

## Character classes  
|regex|description|
|---|---|
|`.`|	any character except newline|
|`\w`, `\d`, `\s`|	word, digit, whitespace|
|`\W`, `\D`, `\S`|	not word, digit, whitespace|
|`[abc]`|	any of a, b, or c|
|`[^abc]`|not a, b, or c|
|`[^a-g]`|character between a & g|

## Anchors
|regex|description|
|---|---|
|`^abc$`|		start / end of the string|
|`\b`, `\B`|	word, not-word boundary|

## Escaped characters
|regex|description|
|---|---|
|`\.`, `\*`, `\\`|	escaped special characters|
|`\t`, `\n`, `\r`|		tab, linefeed, carriage return|



## Groups & Lookaround
|regex|description|
|---|---|
|`(abc)`|	capture group|
|`\1`|	backreference to group #1|
|`(?:abc)`|non-capturing group|
|`(?=abc)`|	positive lookahead|
|`(?!abc)`|	negative lookahead|


## Quantifiers & Alternation
|regex|description|
|---|---|
|`a*`, `a+`, `a`|	0 or more, 1 or more, 0 or 1|
|`a{5}`, `a{2,}`|	exactly five, two or more|
|`a{1,3}`|	between one & three|
|`a+?`, `a{2,}?`|	match as few as possible|
|`ab\|cd`|	match ab or cd|


