# 1
def get_count(sentence):
    vowels="aeiou"
    num=0
    for char in sentence:
        if char in vowels:
            num += 1
        else:
            pass
    return num

# 2
def filter_list(l):
    newlist = []
    for char in l:
        if type(char)==int or type(char)==float:
            newlist.append(char)
        else:
            pass
    return newlist

# 3
def solution(text, ending):
    first=text[::-1]
    second=ending[::-1]
    if first.startswith(second):
        return True
    else:
        return False

# 4
def century(year):
    years=str(year)
    if len(years)==1:
        return 1
    elif years[2:4]=="00":
        return int(years[0:2])
    elif len(years)==3 and years[1:3]=="00":
        return int(years[0])
    elif len(years)==2:
        return 1
    elif len(years)==3:
        return int(years[0])+1
    elif len(years)==4:
        return int(years[0:2])+1


# 5
def friend(x):
    newlist=[]
    for i in x:
        if len(i)==4:
            newlist.append(i)
        else:pass
    return newlist

# 6
def grow(arr):
    num=1
    for i in arr:
        num*=i
    return num

# 7
def goals(laLiga, copaDelRey, championsLeague):
    return laLiga+copaDelRey+championsLeague