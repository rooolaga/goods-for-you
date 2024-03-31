import { useGetAllCategoriesQuery } from "@/entities/Product";
import { QueryError } from "@/shared/ui/QueryError";
import { QuizSkeleton } from "@/features/QuizRecommend/ui/steps/QuizSkeleton";
import { QuizRecommend } from "@/features/QuizRecommend";

export const Quiz = () => {
  const {data, isLoading, error} = useGetAllCategoriesQuery();

  if(error) return <QueryError error={error} />
  if(isLoading) return <QuizSkeleton />

  return <QuizRecommend categories={data} />;
};
