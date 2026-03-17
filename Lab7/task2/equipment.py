class TennisItem:
    def __init__(self, brand, model, price):
        self.brand = brand
        self.model = model
        self.price = price
        self.is_in_stock = True

    def apply_discount(self, percentage):
        self.price -= self.price * (percentage / 100)
        return f"New price for {self.model}: ${self.price:.2f}"

    def get_specs(self):
        return f"Standard {self.brand} sports gear"

    def __str__(self):
        return f"{self.brand}, {self.model} - {self.price:.2f}"

class Racket(TennisItem):
    def __init__(self, brand, model, price, weight):
        super().__init__(brand, model, price)
        self.weight = weight

    def re_string(self, tension):
        print(f"Restring the {self.model} to {tension}")

    def get_specs(self):
        return f"{self.model} which weights {self.weight}"

class TennisBall(TennisItem):
    def __init__(self, brand, model, price, ball_count=5, surface_type="Hard Court"):
        super().__init__(brand, model, price)
        self.ball_count = ball_count
        self.surface_type = surface_type

    def open_can(self):
        print (f"Opening a new can of {self.ball_count} balls from {self.brand}")

    def get_specs(self):
        return f"Ball set: made from {self.surface_type}"