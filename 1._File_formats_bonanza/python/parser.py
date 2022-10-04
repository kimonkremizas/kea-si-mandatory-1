import json, yaml, csv, xmltodict

textPath = '../weather'
jsonPath = '../weather.json'
xmlPath = '../weather.xml'
csvPath = '../weather.csv'
yamlPath = '../weather.yaml'

def parse_text(file_path):
    with open(file_path) as text_file:
        parsedFile = text_file.read()
        return parsedFile

def parse_json(file_path):
    with open(file_path) as json_file:
        parsedFile = json.load(json_file)
        return parsedFile

def parse_xml(file_path):
    with open(file_path) as xml_file:
        parsedFile = xmltodict.parse(xml_file.read())
        return parsedFile

def parse_csv(file_path):
    with open(file_path) as csv_file:
        parsedFile = csv.DictReader(csv_file)
        return parsedFile

def parse_yaml(file_path):
    with open(file_path) as yaml_file:
        parsedFile = yaml.safe_load(yaml_file)
        return parsedFile


print(parse_text(textPath))
print(parse_json(jsonPath))
print(parse_xml(xmlPath))
print(parse_csv(csvPath))
print(parse_yaml(yamlPath))