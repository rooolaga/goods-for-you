import { MainLayout } from '@/widgets/MainLayout/ui/MainLayout'
import { ProductList } from '@/entities/Product'
import { Text } from '@/shared/ui/Text'
import { InputText } from '@/shared/ui/InputText'
import cls from './SearchPage.module.scss'
import { Search } from '@/features/Search'

export const SearchPage = () => {
  return (
    <MainLayout>
      <section>
        <div className="container pt-20 pb-20">
        <Text as='h1' weight='bold' className='mb-6'>All Products</Text>
          <Search className='mb-10'/>  
          <ProductList />
        </div>
      </section>
    </MainLayout>
  )
}
