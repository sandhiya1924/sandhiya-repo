def ispalindrome(s):
    return s ==s[::-1]
s="90"
ans= ispalindrome(s)
if ans:
    print("yes")
else:
    print("no")
