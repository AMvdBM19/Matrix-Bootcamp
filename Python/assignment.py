## Sum variable
sum = 0
## Loop through numbers from 200 to 2700
for x in range(200, 2701):
    ## Conditionals to check if x is divisible by both 3 and 5
    if x%3 == 0 or x%5 == 0:
        sum += x
        ##print(x)
## Print the final sum
print(sum)

## Define fibonacci function
def fib(num):
    if num <= 0:
        return 0
    elif num == 1:
        return 1
    a, b = 0, 1
    for _ in range(2, num + 1):
        a, b = b, a + b
    return b
## User input & print
print(fib(int(input("Enter a number to find its Fibonacci value: "))))

# Write a function that finds and returns the longest word from a given string.
def longest_word(s):
    # Split the string into words and find the longest one
    words = s.split()
    # Use the max function with key=len to find the longest word
    longest = max(words, key=len)
    return longest

print(longest_word("The quick brown fox jumped over the lazy dog"))

## Palindrome function
def is_palindrome(str):
    # Remove spaces and convert to lowercase
    cleaned = str.replace(" ", "").lower()
    # Check if the cleaned string is equal to its reverse
    return cleaned == cleaned[::-1]

print(is_palindrome("A man a plan a canal Panama"))

## Declare function remove_negative(arr)
def remove_negative(arr):
    return [x for x in arr if x >= 0]

print(remove_negative([1, -2, 4, 1]))