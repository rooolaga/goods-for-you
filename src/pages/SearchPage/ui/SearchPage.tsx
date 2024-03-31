import { MainLayout } from '@/widgets/MainLayout/ui/MainLayout'
import { Text } from '@/shared/ui/Text'
import { Search } from '@/widgets/Search'

export const SearchPage = () => {
  return (
    <MainLayout>
      <section>
        <div className="container pt-20 pb-20">
        <Text as='h1' weight='bold' className='mb-6'>All Products</Text>
          <Search className='mb-10'/>
        </div>
      </section>
    </MainLayout>
  )
}
