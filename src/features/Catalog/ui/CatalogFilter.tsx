import { Text } from "@/shared/ui/Text"
import cls from './CatalogFilter.module.scss'
import { RadioGroup } from "@/shared/ui/RadioGroup"
import { useState } from "react"
import { Button } from "@/shared/ui/Button"
import { useGetAllCategoriesQuery } from "@/entities/Product";
import { CatalogFilterSkeleton } from "@/features/Catalog/ui/CatalogFilterSkeleton";
import clsx from "clsx"

import { title } from '@/data/CatalogFilter.json'
import { QueryError } from "@/shared/ui/QueryError";

export const CatalogFilter = () => {
  const [category, setCategory] = useState<string | null>(null);
  const categories = useGetAllCategoriesQuery();
  const onCategoryChange = (value: string) => {
    setCategory(value);
  }

  if (categories.isLoading) return (
    <div className={cls.filter}>
      <CatalogFilterSkeleton/>
    </div>
  );

  if (categories.error) return (
    <QueryError error={categories.error}/>
  );

  return (
    <div className={cls.filter}>
      <Text as='h3' weight="semibold" className={clsx(cls.title, "mb-7")}>
        {title} {category}
      </Text>

      <RadioGroup name="category" label="Category" options={categories.data} onChange={onCategoryChange}/>

      <div className={cls.filter_contols}>
        <Button variant="dark" size='l'>Apply</Button>
        <Button variant="text" size='l'>Reset</Button>
      </div>

    </div>
  )
}
