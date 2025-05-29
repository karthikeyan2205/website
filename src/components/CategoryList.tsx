
import { Link } from 'react-router-dom';
import { getAllCategories } from '@/data/products';

const CategoryList = () => {
  const categories = getAllCategories();
  
  // Category icons could be implemented with actual images in a real app
  const getCategoryImage = (category: string) => {
    const images: Record<string, string> = {
      Electronics: '/images/img1.jpeg',
      Accessories: '/images/categories/furniture.jpg',
      SpareParts: '/images/img2.jpeg',
      PhoneDisplay: '/images/img3.jpg',
      // Add more mappings as needed
    };
    // Fallback to a placeholder if not found
    return images[category] || '/images/categories/placeholder.jpg';
  };
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category} 
              to={`/category/${category.toLowerCase()}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
                <div className="aspect-square relative">
                  <img 
                    src={getCategoryImage(category)} 
                    alt={category} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                    <h3 className="text-white text-xl font-medium">{category}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
