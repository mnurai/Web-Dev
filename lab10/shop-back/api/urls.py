from django.urls import path
from api import views

urlpatterns = [
    # Category endpoints (from generics.py, always active based on init)
    path('categories/', views.CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:id>/', views.CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:id>/products/', views.CategoryProductsAPIView.as_view(), name='category-products'),
]

# Provide routing transparently based on which Product view is exported from api/views/__init__.py
if hasattr(views, 'ProductListAPIView'):
    # CBV, Mixins, Generics export classes
    urlpatterns += [
        path('products/', views.ProductListAPIView.as_view(), name='product-list'),
        path('products/<int:product_id>/', views.ProductDetailAPIView.as_view(), name='product-detail'),
    ]
else:
    # FBV exports functions
    urlpatterns += [
        path('products/', getattr(views, 'products_list', None), name='product-list'),
        path('products/<int:product_id>/', getattr(views, 'product_detail', None), name='product-detail'),
    ]