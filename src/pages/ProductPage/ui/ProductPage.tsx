import cls from "./ProductPage.module.scss";
import { MainLayout } from "@/widgets/MainLayout/ui/MainLayout";
import { Text } from "@/shared/ui/Text";
import 'slick-carousel/slick/slick.css';
import { Property } from "@/shared/ui/Property";
import { Rating } from "@/shared/ui/Rating";
import { ProductSlider, useGetProductQuery } from "@/entities/Product";
import { useParams } from 'react-router-dom';
import { QueryError } from "@/shared/ui/QueryError";
import { ProductPageSkeleton } from "./ProductPageSkeleton";


export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const {data, isLoading, error} = useGetProductQuery(id);

  return (
    <MainLayout>
      <div className="container pt-20 pb-20">

        {error && <QueryError error={error}/>}

        {isLoading && <ProductPageSkeleton />}

        {data && (
          <>
            <Text as="h1" weight="bold" className="mb-13">{data.title}</Text>
            <div className={cls.about_page}>
              <ProductSlider images={data.images} alt={data.title}/>
              <div>
                <div className={cls.title_wrapper}>
                  <Text as='h3' weight='semibold' className="mb-13">{data.title}</Text>
                  <Property label='SKU ID' children={data.id}/>
                </div>
                <Property label='Rating'>
                  <Rating value={data.rating}/>
                </Property>
                <Property label='Base price' children={`${data.price}$`}/>
                <Property
                  label='Discount percentage'
                  children={`${data.discountPercentage}%`}
                />
                <Property label='Discount price'>
                  {Math.round((1 - data.discountPercentage / 100) * data.price)}$
                </Property>
                <Property label='Stock' children={data.stock}/>
                <Property label='Brand' children={data.brand}/>
                <Property label='Category' children={data.category}/>
                <Property label='Description' children={data.description}/>
              </div>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};
