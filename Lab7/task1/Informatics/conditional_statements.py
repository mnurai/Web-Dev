#task a
a = int(input())
b = int(input())
print(max(a, b))

#task b
a = int(input())
if a % 4 == 0 and a % 100 != 0 or a % 400 == 0:
    print("YES")
else:
    print("NO")

#task c
a = int(input())
b = int(input())
if a == 1 and b == 1:
    print("YES")
elif b != 1 and a != 1:
    print("YES")
else:
    print("NO")

#task d
a = int(input())
if a > 0:
    print(1)
elif a < 0:
    print(-1)
else:
    print(0)

#task e
a = int(input())
b = int(input())
if a > b:
    print(1)
elif a < b:
    print(2)
else:
    print(0)