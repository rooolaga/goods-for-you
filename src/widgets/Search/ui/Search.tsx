import { InputText } from '@/shared/ui/InputText'
import cls from './Search.module.scss'
import { Button } from '@/shared/ui/Button'
import clsx from 'clsx'
import { useState } from "react";
import { ProductList } from "@/entities/Product";
import { useDebounce } from "@/shared/hooks/useDebounce";

export interface SearchProps {
  className?: string | undefined
}

export const Search = ({
  className
}: SearchProps) => {
  const [page, setPage] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');

  const handleLoadMore = (value) => {
    setPage(value);
  }

  const updateSearch = (value) => {
    setSearch(value);
    setPage(0);
  }

  const debouncedUpdateSearch = useDebounce(updateSearch, 1000);

  const handleSearch = (value) => {
    setSearchInput(value);
    debouncedUpdateSearch(value)
  }

  const handleClickSearch = () => {
    updateSearch(searchInput)
  }

  return (<>
    <div className={clsx(cls.search, className)}>
      <div className={cls.search_field}>
        <InputText label="Search by title" value={searchInput} onChange={(e) => handleSearch(e.target.value)}/>
      </div>
      <Button size='m' onClick={handleClickSearch}>Search</Button>
    </div>
    <ProductList page={page} onLoadMore={handleLoadMore} limit={9} search={search}/>
  </>)
}
