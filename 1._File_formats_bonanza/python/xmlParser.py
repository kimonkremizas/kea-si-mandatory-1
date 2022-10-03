import xml.etree.ElementTree as ET

weather = ET.parse('../weather.xml').getroot()
for x in weather:
    print(x.tag, x.text)
