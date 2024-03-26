import { Text } from "@/shared/ui/Text"
import cls from './CatalogFilter.module.scss'
import { RadioGroup } from "@/shared/ui/RadioGroup"
import { useState } from "react"
import { Button } from "@/shared/ui/Button"
import clsx from "clsx"

import { categories, title } from '@/data/CatalogFilter.json'


export const CatalogFilter = () => {
  const [category, setCategory] = useState<string | null>(null);

  const onCategoryChange = (value: string) => {
    setCategory(value);
  }

  return (
    <div className={cls.filter}>
      <Text as='h3' wieght="semibold" className={clsx(cls.title, "mb-7")}>
        {title}
      </Text>
      <RadioGroup name="category" label="Category" options={categories} onChange={onCategoryChange}/>
      <div className={cls.filter_contols}>
        <Button variant="dark" size='l'>Apply</Button>
        <Button variant="text" size='l'>Reset</Button>
      </div>
      
    </div>
  )
}
