from .generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView
)

# You can switch implementations by uncommenting the relevant lines below
# and commenting out the imports from .generics for Product views.
# Note: You may also need to modify api/urls.py if switching to FBV.

# from .fbv import products_list, product_detail
# from .cbv import ProductListAPIView, ProductDetailAPIView
# from .mixins import ProductListAPIView, ProductDetailAPIView
