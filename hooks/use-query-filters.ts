import React from "react";
import qs from "qs";
import { Filters } from "./use-filters";
import { useRouter, useSearchParams } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();

  React.useEffect(() => {
    const params = {
      ...filters.prices,
      pizzaTypes: Array.from(filters.pizzaTypes),
      sizes: Array.from(filters.sizes),
      selectedIngredients: Array.from(filters.selectedIngredients),
    };

    const query = qs.stringify(params, { arrayFormat: "comma" });

    router.push(`?${query}`, { scroll: false });
  }, [filters, router]);
};
