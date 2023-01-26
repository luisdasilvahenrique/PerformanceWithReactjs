import { memo } from 'react';
interface productItemProps {
  product: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  };

  onAddToWishList: (id: number) => void;
}

 function ProductItemComponent({ product, onAddToWishList }: productItemProps) {
    return(
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <br/>
            <button onClick={() => onAddToWishList(product.id)}> add to wish list</button>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
});