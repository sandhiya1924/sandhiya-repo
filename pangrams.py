"""import string
s= "The quick brown fox jumps over the lazy dog."
for letter in string.ascii_lowercase:
    if s.lower().count(letter)==0:
        print(false)
        break
    else:
        print(true)"""

import string
s="python is great"
res = all(letter in s.lower() for letter in string.ascii_lowercase)
print(res)
