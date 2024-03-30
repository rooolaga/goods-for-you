import { Text } from '@/shared/ui/Text'
import cls from './QuizRecommend.module.scss'
import { title, subtitle, stepTitle, nextButton } from '@/data/Quiz.json'

import { useLazyGetRecommendedProductsQuery } from "@/features/QuizRecommend/api/quizRecommend";
import { useState } from "react";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Step } from "@/features/QuizRecommend/ui/Step";
import { range } from "lodash";
import { ProductCard } from "@/entities/Product";
import { QueryError } from "@/shared/ui/QueryError";
import { ProductCardSkeleton } from "@/entities/Product/ui/ProductCard/ProductCardSkeleton";

export interface QuizRecommendProps {
  categories: string[];
}

export const QuizRecommend = ({categories}: QuizRecommendProps) => {
  const initCategoryChecks = categories.reduce((acc, item) => {
    acc[item] = false;
    return acc;
  }, {})

  const [getRecommended, recommended] = useLazyGetRecommendedProductsQuery();
  const [categoryChecks, setCategoryChecks] = useState(initCategoryChecks)
  const [isQuiz, setIsQuiz] = useState(true);


  const handleChangeCategory = (value) => {
    setCategoryChecks(prev => ({...prev, [value]: !prev[value]}))
  }

  const handleQuizSubmit = () => {
    getRecommended(
      Object.keys(categoryChecks).filter(key => categoryChecks[key])
    );
    setIsQuiz(false);
  }

  console.log(Object.values(categoryChecks).includes(true))

  return (
    <form className={cls.multistep_form}>
      <Step
        title={title}
        subtitle={subtitle}
        buttonValue={nextButton}
        onClickButton={handleQuizSubmit}
        buttonDisabled={!Object.values(categoryChecks).includes(true)}
        isActive={isQuiz}
      >
        <Text as='h3' className="mb-8" weight="semibold">{stepTitle}</Text>
        <div className={cls.checkbox_list}>
          {categories.map((option) => (
            <Checkbox
              label={option}
              key={option}
              checked={categoryChecks[option]}
              onChange={() => handleChangeCategory(option)}
            />
          ))}
        </div>
      </Step>

      <Step
        title='Your selection is ready!'
        buttonValue='Change selection'
        onClickButton={() => setIsQuiz(true)} isActive={!isQuiz}>
        <div className={cls.recommended}>
          {recommended.error && (<QueryError error={recommended.error} />)}

          {recommended.data && !recommended.isFetching ? (

            recommended.data.map(item => (
              <ProductCard
                id={item.id}
                title={item.title}
                price={item.price}
                src={item.thumbnail}
                key={`${item.title}_${item.id}`}
              />
            ))

          ) : (

            range(3).map(item => (
              <ProductCardSkeleton key={item}/>
            ))

          )}
        </div>
      </Step>

    </form>
  );
}
