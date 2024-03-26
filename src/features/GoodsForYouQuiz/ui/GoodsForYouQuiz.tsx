import { useState } from "react"
import { Text } from '@/shared/ui/Text'
import cls from './GoodForYouQuoz.module.scss'
import { Button } from "@/shared/ui/Button"
import { Checkbox } from "@/shared/ui/Checkbox"

import {title, subtitle, stepTitle, typesList, nextButton} from '@/data/Quiz.json'

type FormData = {
  productType: string[],
  productSize: string[]
}

const initialFormData: FormData = {
  productType: [],
  productSize: []
}

export const GoodsForYouQuiz = () => {
  
  const [data, setData] = useState(initialFormData)

  function updateFields(fields: Partial<FormData>) {
    setData(prev => ({...prev, ...fields}));
  }

  /**TODO
   * steps
   */

  return (
    <form className={cls.multistep_form}>
      <div className={cls.header}>
        <Text as='h2' wieght='bold' className="mb-2">{title}</Text>
        <Text as='span' color="gray" wieght="semibold">
          {subtitle}
        </Text>
      </div>

      <div className={cls.body}>
        <Text as='h3' className="mb-8" wieght="semibold">{stepTitle}</Text>
        <div className={cls.checkbox_list}>
          {typesList.map(({label}, index) => (
            <Checkbox label={label} key={index}/>
          ))}
        </div>
      </div>

      <div className={cls.footer}>
        <Text as='span' color='gray' wieght="semibold">1 of 2</Text>
        <Button variant='outline' size='s'>{nextButton}</Button>
      </div>
    </form>
  );
}