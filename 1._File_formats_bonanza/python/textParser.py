with open('../weather') as textFile:
    lines = textFile.readlines()   
    for line in lines:
        print(line)