interface productItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

export function ProductItem({ product }: productItemProps) {
    return(
        <div>
            {product.title} - <strong>{product.price}</strong>
        </div>
    )
}
