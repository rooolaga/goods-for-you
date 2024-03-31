import cls from "../GoodForYouQuoz.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton";
import { range } from "lodash";

export const FirstStepSkeleton = () => {
  return (
    <div>
      <Skeleton height={35} className="mb-8"/>
      <div className={cls.checkbox_list}>
        {range(20).map((option) => (
          <Skeleton height={27} key={option}/>
        ))}
      </div>
    </div>
  );
};
