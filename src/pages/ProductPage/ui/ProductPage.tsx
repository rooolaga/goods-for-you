import cls from "./ProductPage.module.scss";
import { MainLayout } from "@/widgets/MainLayout/ui/MainLayout";
import { Text } from "@/shared/ui/Text";
import 'slick-carousel/slick/slick.css';
import { ProductSlider, useGetProductQuery } from "@/entities/Product";
import { useParams } from 'react-router-dom';
import { QueryError } from "@/shared/ui/QueryError";
import { ProductPageSkeleton } from "./ProductPageSkeleton";
import { EditProduct } from "@/features/EditProduct";


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
              <EditProduct id={id} rating={data.rating} {...data} />
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};
