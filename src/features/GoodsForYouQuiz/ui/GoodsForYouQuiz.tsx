import { useState } from "react"
import { Text } from '@/shared/ui/Text'
import cls from './GoodForYouQuoz.module.scss'
import { Button } from "@/shared/ui/Button"
import { Checkbox } from "@/shared/ui/Checkbox"


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
    <div className={cls.multistep_form}>
      <div className={cls.header}>
        <Text as='h2' wieght='bold'>We will select the perfect product for you</Text>
        <Text as='span' color="gray">
          Answer three questions and we will send you a catalog with the most suitable products for you.
        </Text>
      </div>

      <div className={cls.body}>
        <Text as='h3' className="mb-8">What type of product are you considering?</Text>
        <div className={cls.checkbox_list}>
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
          <Checkbox label="sneakers" />
        </div>
      </div>

      <div className={cls.footer}>
        <Text as='span' color='gray'>1 of 2</Text>
        <Button variant='outline' size='s'>Next step</Button>
      </div>
    </div>
  );
}