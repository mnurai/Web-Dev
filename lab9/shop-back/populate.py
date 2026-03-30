import os
import django
import random

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from django.contrib.auth.models import User
from api.models import Category, Product

# Create superuser
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'admin')
    print("Superuser created")

# Create categories
category_names = ['Electronics', 'Clothing', 'Books', 'Home & Garden']
categories = []

for name in category_names:
    cat, created = Category.objects.get_or_create(name=name)
    categories.append(cat)
    if created:
        print(f"Created category: {name}")

# Create products
for i in range(1, 21):
    product_name = f"Product {i}"
    category = random.choice(categories)
    product, created = Product.objects.get_or_create(
        name=product_name,
        defaults={
            'price': round(random.uniform(10.0, 500.0), 2),
            'description': f"Description for {product_name}",
            'count': random.randint(1, 100),
            'is_active': True,
            'category': category
        }
    )
    if created:
        print(f"Created product: {product_name}")

print("Data population complete.")
