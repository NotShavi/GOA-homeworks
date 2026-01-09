def are_you_playing_banjo(name):
    if name.find("r")==0 or name.find("R")==0:
        return f"{name} plays banjo"
    else:
        return f"{name} does not play banjo"
    

def minimum(arr):
    return min(arr)

def maximum(arr):
    return max(arr)



def reverse_seq(n):
    list=[]
    for i in range(n,0,-1):
        list.append(i)
    return list



def calculate(operation, value1, value2):
    if operation == '+':
        return value1 + value2
    elif operation == '-':
        return value1 - value2
    elif operation == '*':
        return value1 * value2
    elif operation == '/':
        return value1 / value2
    
    
def count_positives_sum_negatives(arr):
    if not arr:
        return []

    positives = 0
    negatives_sum = 0

    for x in arr:
        if x > 0:
            positives += 1
        elif x < 0:
            negatives_sum += x

    return [positives, negatives_sum]