"""def factorial(n):
    result = 1
    for i in range(1,n+1):
        result*=i
    return result
num = int(input("Enter a number:"))
print("factorial of",num,"is", factorial(num))"""


def factorial(n):
        if n==0 or n==1:
            return 1
        else:
            return n* factorial(n-1)
num = int(input("Enter a number:"))
print("factorial of",num,"is", factorial(num))
