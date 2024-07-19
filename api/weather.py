# pip install requests
import requests
from pprint import pprint

# 서울의 위도 37.56 / 경도 126.97
lat = 37.56
lon = 126.97
api_key = 'API_KEY'

url = f'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}'
response = requests.get(url).json()

print(response)
print(type(response))

# 데이터 중 온도를 파싱
temp = response['main']['temp']
print(f'온도 = {temp}')

#서울 기준
city = 'Seoul,KR'
url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'
response = requests.get(url).json()
pprint(response)