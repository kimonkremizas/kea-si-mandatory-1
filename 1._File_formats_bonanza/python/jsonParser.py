import json
from types import SimpleNamespace

jsonFile = open('../weather.json', 'r', encoding='utf-8')

weather = json.load(jsonFile, object_hook=lambda d:SimpleNamespace(**d))

print(weather.title)