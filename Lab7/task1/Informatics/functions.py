#task a
a, b, c, d= map(int, input().split())
def findMin(a, b, c, d) :
    min = a
    if b < min:
        min = b
    if c < min:
        min = c
    if d < min:
        min = d
    return min
print(findMin(a, b, c, d))

#task b
a, n = map(int, input().split())
def power(x, n):
    return a ** n
print(power(a, n))

#task c
x, y = map(int, input().split())
def xor(x, y):
    return (x or y) and not (x and y)
print(int(xor(x, y)))