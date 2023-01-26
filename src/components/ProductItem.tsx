import { memo } from 'react';
interface productItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };

  onAddToWishList: (id: number) => void;
}

 function ProductItemComponent({ product, onAddToWishList }: productItemProps) {
    return(
        <div>
            {product.title} - <strong>{product.price}</strong>

            <button onClick={() => onAddToWishList(product.id)}></button>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
});