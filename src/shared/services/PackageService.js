
import packageData from '../data/packageService.json';

export const getCategories = () => {
  return packageData.packageCategories;
};

export const getPackages = () => {
  return packageData.packages;
};

export const getPackagesByCategory = (categoryId) => {
  if (categoryId === 'all') {
    return packageData.packages;
  }
  return packageData.packages.filter(pkg => pkg.category === categoryId);
};

export const findPackageById = (packageId) => {
  return packageData.packages.find(pkg => pkg.id === packageId);
};

export const findPackageDetailsById = (packageId) => {
  return packageData.packageDetails[packageId];
};

export const findCategoryById = (categoryId) => {
  return packageData.packageCategories.find(cat => cat.id === categoryId);
};