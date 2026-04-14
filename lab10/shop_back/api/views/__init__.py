# Переключай импорт чтобы менять активный уровень:
# from .fbv import products_list, product_detail          # Level 2
# from .cbv import ProductListAPIView, ProductDetailAPIView  # Level 3
# from .mixins import ProductListAPIView, ProductDetailAPIView  # Level 4
from .generics import (                                    # Level 5 (active)
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)