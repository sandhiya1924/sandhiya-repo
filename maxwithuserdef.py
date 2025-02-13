def find_max(lst):
        max_value = lst[0]
        for num in lst:
            if num > max_value:
                max_value = num
        return max_value
numbers = [10,30,45, 67, 103,45,56,88,95]
print("maximum value:",find_max(numbers))

