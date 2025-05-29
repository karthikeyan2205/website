import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllCategories } from "@/data/products";

const CategoriesPage = () => {
  const categories = getAllCategories();

  return (
    <>
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Product Categories</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${encodeURIComponent(category)}`}
                className="block bg-white rounded-lg shadow p-6 text-center hover:bg-muted transition"
              >
                <h2 className="text-xl font-semibold">
                  <Link to={`/category/${encodeURIComponent(category)}`}>{category}</Link>
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CategoriesPage;
