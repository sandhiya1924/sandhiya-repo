print(0)
print(1)
count = 2
def Fibonacci(prev1,prev2):
    global count
    if count<= 30:
        newFibo = prev1+ prev2
        print(newFibo)
        prev2 = prev1
        prev1 = newFibo
        count +=1
        Fibonacci(prev1,prev2)
    else:
        return
Fibonacci(1,0)
              
