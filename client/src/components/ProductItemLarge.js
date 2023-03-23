
function ProductItemLarge({ product }) {
  return (
    <>
      <div>
        {product.imageUrl &&
          product.imageUrl.map((imageUrl) => <img alt={product.title} height="50" width="50" src={product.imageUrl} />)}
      </div>
      <div>

      </div>
      <div>
        <p>{product.createdAt}</p>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
      <div>
        {product.ratings &&
          product.ratings.map((rating) => (
            (<div>
                <p key={`commentId_${rating.id}`}>{rating.rating}</p>
                <p key={`commentId_${rating.id}`}>"{rating.description}"</p>
            </div>)
          ))
        }
      </div>
    </>
  );
}

export default ProductItemLarge;
