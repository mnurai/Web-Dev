#for loop
#task a
a = int(input())
b = int(input())
for i in range(a, b + 1):
    if i % 2 == 0:
        print(i)

#task b
a = int(input())
b = int(input())
c = int(input())
d = int(input())
for i in range(a, b + 1):
    if i % d == c:
        print(i, end = " ")

#task c
a = int(input())
b = int(input())
for i in range(a, b + 1):
    sqrt = int(math.isqrt(i))
    if sqrt * sqrt == i:
        print(i)

#task d
a = input()
b = input()
print(a.count(b))

#task e
a = input()
print(sum(int(i) for i in a))

#task f
a = input()
print(int(a[::-1]))

#task g
a = int(input())
for i in range(2, a + 1):
    if a % i == 0:
        print(i)
        break

#task h
a = int(input())
for i in range(1, a + 1):
    if a % i == 0:
        print(i, end = " ")

#task i
a = int(input())
count = 0
for i in range(1, a + 1):
    if a % i == 0:
        count += 1
print(count)

#task j
sum = 0
for i in range(100):
    sum += int(input())
print(sum)

#task k
sum = 0
n = int(input())
for i in range(n):
    sum += int(input())
print(sum)

#task l
a = input()
print(int(a, 2))

#task m
count = 0
n = int(input())
for i in range(n):
     a = int(input())
     if a == 0:
         count += 1
print(count)


#while loop
#task a
a = int(input())
i = 1
while i * i <= a:
    print(i * i)
    i += 1

#task b
a = int(input())
i = 2
while i <= a:
    if a % i == 0:
        print(i)
        break
    i += 1

#task c
a = int(input())
i = 1
while i <= a:
    print(i, end =" ")
    i *= 2

#task d
a = int(input())
i = 1
while i < a:
    i *= 2
print("YES" if i == a else "NO")

#task e
a = int(input())
k = 0
i = 1
while i < a:
    i *= 2
    k += 1
print(k)