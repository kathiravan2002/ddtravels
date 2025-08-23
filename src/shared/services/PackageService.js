// packageService.js - Helper functions for package data management

import packageData from './data/packageService.json';

class PackageService {
  
  // Get all package categories
  static getPackageCategories() {
    return packageData.packageCategories || [];
  }

  // Get all packages
  static getAllPackages() {
    return packageData.packages || [];
  }

  // Get packages by category
  static getPackagesByCategory(categoryId) {
    if (categoryId === 'all') {
      return this.getAllPackages();
    }
    return packageData.packages.filter(pkg => pkg.category === categoryId) || [];
  }

  // Get package by ID
  static getPackageById(packageId) {
    return packageData.packages.find(pkg => pkg.id === packageId) || null;
  }

  // Get package details by ID
  static getPackageDetailsById(packageId) {
    return packageData.packageDetails[packageId] || null;
  }

  // Get packages by search term
  static searchPackages(searchTerm) {
    const term = searchTerm.toLowerCase();
    return packageData.packages.filter(pkg => 
      pkg.title.toLowerCase().includes(term) ||
      pkg.description.toLowerCase().includes(term) ||
      pkg.category.toLowerCase().includes(term)
    );
  }

  // Get featured packages (you can customize this logic)
  static getFeaturedPackages(limit = 6) {
    return packageData.packages.slice(0, limit);
  }

  // Get packages by price range (if you add price field to packages)
  static getPackagesByPriceRange(minPrice, maxPrice) {
    return packageData.packages.filter(pkg => {
      // This assumes you add a basePrice field to your packages
      if (pkg.basePrice) {
        const price = parseInt(pkg.basePrice.replace(/[^\d]/g, ''));
        return price >= minPrice && price <= maxPrice;
      }
      return true;
    });
  }

  // Get related packages based on category
  static getRelatedPackages(packageId, limit = 3) {
    const currentPackage = this.getPackageById(packageId);
    if (!currentPackage) return [];
    
    return packageData.packages
      .filter(pkg => pkg.category === currentPackage.category && pkg.id !== packageId)
      .slice(0, limit);
  }

  // Get package statistics
  static getPackageStats() {
    const packages = this.getAllPackages();
    const categories = this.getPackageCategories().filter(cat => cat.id !== 'all');
    
    const stats = {
      totalPackages: packages.length,
      categoriesCount: categories.length,
      packagesByCategory: {}
    };

    categories.forEach(category => {
      stats.packagesByCategory[category.id] = this.getPackagesByCategory(category.id).length;
    });

    return stats;
  }

  // Validate package data
  static validatePackage(packageData) {
    const requiredFields = ['id', 'title', 'category', 'image'];
    return requiredFields.every(field => packageData.hasOwnProperty(field));
  }

  // Get car options for a package
  static getCarOptionsForPackage(packageId) {
    const packageDetails = this.getPackageDetailsById(packageId);
    return packageDetails ? Object.values(packageDetails.carOptions) : [];
  }

  // Get cheapest car option for a package
  static getCheapestCarOption(packageId) {
    const carOptions = this.getCarOptionsForPackage(packageId);
    if (carOptions.length === 0) return null;

    return carOptions.reduce((cheapest, car) => {
      const cheapestPrice = parseInt(cheapest.price.replace(/[^\d]/g, ''));
      const carPrice = parseInt(car.price.replace(/[^\d]/g, ''));
      return carPrice < cheapestPrice ? car : cheapest;
    });
  }

  // Format package for display
  static formatPackageForDisplay(packageData) {
    return {
      ...packageData,
      formattedTitle: packageData.title.length > 50 
        ? packageData.title.substring(0, 50) + '...' 
        : packageData.title,
      categoryName: this.getPackageCategories()
        .find(cat => cat.id === packageData.category)?.name || 'Unknown Category'
    };
  }
}

export default PackageService;

// Alternative export for individual functions
export const {
  getPackageCategories,
  getAllPackages,
  getPackagesByCategory,
  getPackageById,
  getPackageDetailsById,
  searchPackages,
  getFeaturedPackages,
  getPackagesByPriceRange,
  getRelatedPackages,
  getPackageStats,
  validatePackage,
  getCarOptionsForPackage,
  getCheapestCarOption,
  formatPackageForDisplay
} = PackageService;