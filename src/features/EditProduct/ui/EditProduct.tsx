import cls from './EditProduct.module.scss'
import { Property } from "@/shared/ui/Property";
import { InputText } from "@/shared/ui/InputText";
import { QueryError } from "@/shared/ui/QueryError";
import { useState } from "react";
import { Rating, RatingProps } from "@/shared/ui/Rating";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
import { useUpdateProductMutation } from "@/features/EditProduct";


export interface ProductFormData {
  price: number;
  discount: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
  description: string;
}

export interface EditProductProps  extends ProductFormData{
  id: number;
  rating: number;
  title: string;
  className? : string;
}

export const EditProduct = ({
  id,
  rating,
  title,
  className,
  ...props
}: EditProductProps) => {
  const [updateProduct, result] = useUpdateProductMutation();

  const [readonly, setReadonly] = useState(true);
  const [data, setData] = useState<ProductFormData>({...props})

  const updateFields = (fields: Partial<ProductFormData>) => {
    setData(prev => ({...prev, ...fields}));
  }

  const handleUpdateProduct = async () => {
    setReadonly(true);
    updateProduct({id, data});
  }

  if(result.error) return <QueryError error={result.error} />

  return (
    <div className={className}>
      <div className={cls.title_wrapper}>
        <Text as='h3' weight='semibold' className="mb-13">{title}</Text>
        <Property label='SKU ID' children={id}/>
      </div>

      <Property label='Rating'>
        <Rating value={Math.round(rating) as RatingProps['value']}/>
      </Property>

      <InputText
        value={data.price}
        label='Base price'
        readOnly={readonly}
        className={cls.editable_prop}
        onChange={(e) => updateFields({price: e.target.value})}
      />

      <InputText
        value={data.discountPercentage}
        label='Discount percentage'
        readOnly={readonly}
        className={cls.editable_prop}
        onChange={(e) => updateFields({discountPercentage: e.target.value})}
      />

      <Property label='Discount price'>
        {Math.round((1 - data.discountPercentage / 100) * data.price)}$
      </Property>

      <InputText
        value={data.stock}
        label='Stock'
        readOnly={readonly}
        className={cls.editable_prop}
        onChange={(e) => updateFields({stock: e.target.value})}
      />

      <InputText
        value={data.brand}
        label='Brand'
        readOnly={readonly}
        className={cls.editable_prop}
        onChange={(e) => updateFields({brand: e.target.value})}
      />

      <InputText
        value={data.category}
        label='Category'
        readOnly={readonly}
        className={cls.editable_prop}
        onChange={(e) => updateFields({category: e.target.value})}
      />

      <InputText
        value={data.description}
        label='Description'
        readOnly={readonly}
        className={cls.editable_prop}
        onChange={(e) => updateFields({description: e.target.value})}
      />

      {readonly ? (
        <Button size="l" onClick={() => setReadonly(false)}>
          Edit
        </Button>
      ):(
        <Button size="l" onClick={handleUpdateProduct}>Save</Button>
      )}
    </div>
  );
};
