import { Text } from "@/shared/ui/Text"
import cls from './ProductFilter.module.scss'
import { RadioGroup } from "@/shared/ui/RadioGroup"
import { Button } from "@/shared/ui/Button"
import { useGetAllCategoriesQuery } from "@/entities/Product";
import { ProductFilterSkeleton } from "./ProductFilterSkeleton";
import clsx from "clsx"

import { title } from '@/data/CatalogFilter.json'
import { QueryError } from "@/shared/ui/QueryError";
import { useState } from "react";

export interface ProductFilterProps {
  onApply: (val: string | undefined) => void;
  onReset: () => void;
}

export const ProductFilter = ({
  onApply,
  onReset
}: ProductFilterProps) => {
  const [category, setCategory] = useState<string | undefined>(undefined);
  const categories = useGetAllCategoriesQuery();

  const handleApply = () => {
    onApply(category);
  }

  const handleReset = () => {
    setCategory(undefined)
    onReset();
  }

  if (categories.isLoading) return <ProductFilterSkeleton/>
  if (categories.error) return <QueryError error={categories.error}/>

  return (
    <div className={cls.filter}>
      <Text as='h3' weight="semibold" className={clsx(cls.title, "mb-7")}>
        {title}
      </Text>

      <RadioGroup
        name="category"
        label="Category"
        options={categories.data}
        value={category}
        onChange={(val) => {setCategory(val)}}
      />

      <div className={cls.filter_contols}>
        <Button variant="dark" size='l' onClick={handleApply}>Apply</Button>
        <Button variant="text" size='l' onClick={handleReset}>Reset</Button>
      </div>
    </div>
  )
}
