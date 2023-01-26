import { memo } from 'react';
interface productItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

 function ProductItemComponent({ product }: productItemProps) {
    return(
        <div>
            {product.title} - <strong>{product.price}</strong>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
});