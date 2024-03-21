import { InputText } from '@/shared/ui/InputText'
import cls from './Search.module.scss'
import { Button } from '@/shared/ui/Button'
import clsx from 'clsx'

export interface SearchProps {
  className?: string | undefined
}

export const Search = ({
  className
}: SearchProps) => {
  return (
    <div className={clsx(cls.search, className)}>
      <div className={cls.search_field}>
        <InputText label="Search by title" />
      </div>
      <Button size='m'>Search</Button>
    </div>
  )
}
