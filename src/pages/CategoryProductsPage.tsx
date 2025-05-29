import { useParams } from "react-router-dom";
import { products } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CategoryProductsPage = () => {
  const { category } = useParams<{ category: string }>();
  const decodedCategory = category ? decodeURIComponent(category) : "";
  const filteredProducts = decodedCategory
    ? products.filter(
        (product) =>
          product.category.toLowerCase() === decodedCategory.toLowerCase()
      )
    : products;

  return (
    <>
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">{decodedCategory}</h1>
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-16">
              <p className="text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CategoryProductsPage;