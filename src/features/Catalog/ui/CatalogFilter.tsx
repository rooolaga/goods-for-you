import { Text } from "@/shared/ui/Text"
import cls from './CatalogFilter.module.scss'
import { RadioGroup } from "@/shared/ui/RadioGroup"
import { useState } from "react"

const items = [
  { value: '1', label: 'smartphones' },
  { value: '2', label: 'laptops' },
  { value: '3', label: 'sneakers' },
  { value: '4', label: 'sneakers' },
  { value: '5', label: 'sneakers' },
  { value: '6', label: 'sneakers' },
  { value: '7', label: 'sneakers' },
  { value: '8', label: 'sneakers' },
]

export const CatalogFilter = () => {
  const [category, setCategory] = useState<string | null>(null);

  const onCategoryChange = (value: string) => {
    setCategory(value);
  }

  return (
    <div className={cls.filter}>
      <Text as='h3' wieght="semibold">
        <>Selection<br />by parameters {category}</>
      </Text>
      <RadioGroup name="category" label="Category" options={items} onChange={onCategoryChange}/>
    </div>
  )
}
