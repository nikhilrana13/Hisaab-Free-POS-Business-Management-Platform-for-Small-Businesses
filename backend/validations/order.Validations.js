

export const OrderProductValidation = (products) => {
  if (!products) return "products is required";

  if (!Array.isArray(products)) {
    return "Products must be an array";
  }

  if (products.length === 0) {
    return "At least one Product is required";
  }

  for (let i = 0; i < products.length; i++) {
    const option = products[i];

    if (!option.product) {
      return `Product id is required ${i + 1}`;
    }
    if(!option.selectedPriceOptionId){
        return "SelectedPriceOption Id is required"
    }
    if (typeof option.quantity !== "number" || option.quantity <= 0) {
      return `Invalid quantity - must be a positive number ${i + 1}`;
    }
  }

  return null;
};

