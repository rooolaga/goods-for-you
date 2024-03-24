import cls from '../GoodForYouQuoz.module.scss';
import { Text } from "@/shared/ui/Text";
import { stepTitle } from "@/data/Quiz.json";
import { Checkbox } from "@/shared/ui/Checkbox";
import { useGetAllCategoriesQuery } from "@/entities/Product";
import { QueryError } from "@/shared/ui/QueryError";
import { FirstStepSkeleton } from "@/features/GoodsForYouQuiz/ui/steps/FirstStepSkeleton";

export const FirstStep = () => {
  const {data, isLoading, error} = useGetAllCategoriesQuery();

  if (error) return <QueryError error={error} />
  if (isLoading) return <FirstStepSkeleton />

  return (
    <>
      <Text as='h3' className="mb-8" weight="semibold">{stepTitle}</Text>
      <div className={cls.checkbox_list}>
        {data.map((option) => (
          <Checkbox label={option} key={option}/>
        ))}
      </div>
    </>
  );
};
