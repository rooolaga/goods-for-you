import { useState } from "react"
import { Text } from '@/shared/ui/Text'
import cls from './GoodForYouQuoz.module.scss'
import { Button } from "@/shared/ui/Button"
import { Checkbox } from "@/shared/ui/Checkbox"

import {title, subtitle, stepTitle, typesList, nextButton} from '@/data/Quiz.json'
import { FirstStep } from "@/features/GoodsForYouQuiz/ui/steps/FirstStep";

type FormData = {
  productType: string[],
  productSize: string[]
}

const initialFormData: FormData = {
  productType: [],
  productSize: []
}

export const GoodsForYouQuiz = () => {

  const [data, setData] = useState(initialFormData);


  const updateFields = (fields: Partial<FormData>) => {
    setData(prev => ({...prev, ...fields}));
  }

  // TODO steps

  return (
    <form className={cls.multistep_form}>
      <div className={cls.header}>
        <Text as='h2' weight='bold' className="mb-2">{title}</Text>
        <Text as='span' color="gray" weight="semibold">
          {subtitle}
        </Text>
      </div>

      <div className={cls.body}>
        <FirstStep />
      </div>

      <div className={cls.footer}>
        <Text as='span' color='gray' weight="semibold">1 of 2</Text>
        <Button variant='outline' size='s'>{nextButton}</Button>
      </div>
    </form>
  );
}
