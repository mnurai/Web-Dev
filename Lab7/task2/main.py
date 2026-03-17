from equipment import Racket, TennisBall

def run_inventory_check():
    pro_staff = Racket("Wilson", "Super pro 94", 250.00, 315)
    pure_drive = Racket("Baobab", "pure drive", 150.00, 300)
    championship_balls = TennisBall("Penn", "Championship", 5.5)

    inventory = [pro_staff, pure_drive, championship_balls]

    for item in inventory:
        print(f"Product: {item}")
        print(f"Details: {item.get_specs()}")
        print(item.apply_discount(10))

    pro_staff.re_string(55)
    championship_balls.open_can()

if __name__ == "__main__":
    run_inventory_check()