import { memo, useState } from 'react';
// import { AddProductionToWishList } from './addProductToWishList';
import { AddProductionToWishListProps } from './addProductToWishList'
import dynamic from 'next/dynamic';

const AddProductToWishList = dynamic<AddProductionToWishListProps>(() => {
  return import('./addProductToWishList').then(mod => mod.AddProductionToWishList)
}, {
  loading: () => <span>Carregando...</span>
})

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
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>Adicionar aos favoritos</button>
      <br />

      {isAddingToWishList && (
        <AddProductToWishList
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
});