nums = [1, 2, 3, 4, 5]
nums = list(map(lambda x:x*2,nums))

words = ["apple", "banana", "cherry"]
words = list(map(lambda x:x.capitalize(),words))

nums2 = [10, 20, 30, 40]
nums2 = list(map(lambda x:x+5,nums2))

nums3 = [5, 12, 8, 20, 7]
nums3 = list(filter(lambda x:x>10,nums3))

words2 = ["cat", "dog", "elephant", "ant"]
words2 = list(filter(lambda x:len(x)>3,words2))

nums4 = [2, 3, 4, 5, 6]
nums4 = list(filter(lambda x:x%2==0,nums4))