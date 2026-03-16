#task a
n = int(input())
a = list(map(int, input().split())) [:n]
print(*a[::2])

#task b
n = int(input())
a = list(map(int, input().split())) [:n]
print(*[x for x in a if x % 2 == 0])

#task c
n = int(input())
a = list(map(int, input().split())) [:n]
print(sum(1 for x in a if x > 0))

#task d
n = int(input())
a = list(map(int, input().split())) [:n]
print(sum(1 for i in range (1, n) if a[i] > a[i-1]))

#task e
n = int(input())
a = list(map(int, input().split())) [:n]
found = False
for i in range(1, n):
    if a[i] * a[i-1] > 0:
        found = True
        break
print("YES" if found else "NO")

#task f
n = int(input())
a = list(map(int, input().split())) [:n]
count = 0
for i in range(1, n-1):
    if a[i] > a[i-1]  and a[i] > a[i+1]:
        count += 1
print(count)

#task g
n = int(input())
a = list(map(int, input().split())) [:n]
for i in range(n // 2):
    a[i], a[n-1-i] = a[n-1-i], a[i]
print(*a)