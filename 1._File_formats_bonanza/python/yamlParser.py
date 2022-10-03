import yaml

def meta_constructor(loader, node):
    return loader.construct_mapping(node)

yaml.add_constructor(u'tag:yaml.org,2002:opencv-matrix', meta_constructor)

with open('../weather.yaml', 'r') as stream:
    weather = yaml.load(stream, Loader=yaml.Loader)

print(weather)
print(weather["title"])