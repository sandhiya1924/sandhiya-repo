def vowel_count(str):
    
    vowels = "aeiouAEIOU"
    count = len([char for char in str if char in vowels])

    print("no.of vowels:",count)
    
str = "gayathri"
vowel_count(str)
