
export const safeParse = (data) => {
  try {
    return typeof data === "string" ? JSON.parse(data) : data;
  } catch {
    return null;
  }
};

export const ValidateProductPriceOptions = (priceOptions) => {
  if (!priceOptions) return "price Options is required";
  if (!Array.isArray(priceOptions)) {
    return "price options must be an array";
  }
  if (priceOptions.length === 0) {
    return "At least one price option is required";
  }
  const allowedunits = ["half", "full"];
  const seen = new Set(); //duplicate check

  for (let i = 0; i < priceOptions.length; i++) {
    const option = priceOptions[i];
    // required fields
    if (!option.unit || !option.price == null) {
      return `All fields is required in price option ${i + 1}`;
    }
    // unit validation
    if (!allowedunits.includes(option.unit)) {
      return `Invalid unit option in price option ${i + 1}`;
    }
    // price validation
    if (typeof option.price !== "number" || option.price <= 0) {
      return `Invalid price in option ${i + 1}`;
    }
    // duplicate check
    if (seen.has(option.unit)) {
      return `Duplicate unit '${option.unit}' in price option ${i + 1}`;
    }

    seen.add(option.unit);
  }
  return null;
};



