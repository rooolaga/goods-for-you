import clsx from "clsx";
import cls from './QueryError.module.scss'
import { Text } from '../Text';

interface QueryErrorProps {
  className? : string,
  error: {
    status: string,
    data: string
  }
}

export const QueryError = ({
  className,
  error
}: QueryErrorProps) => {
  return (<div className={clsx(cls.query_error, className)}>
    <Text as='h3' color="white" weight="bold">Oops!</Text>
    <Text as='p' color="white" weight="bold">Something went wrong. Please try latter</Text>
    <div className={cls.error_block}>
      <Text as='h4' color="white" weight="bold">Error message: {error.status}</Text>
      <Text as='p' color="white">{JSON.stringify(error.data)}</Text>
    </div>
  </div>);
};
