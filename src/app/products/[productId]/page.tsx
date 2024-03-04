interface Params {
  params: {
    productId: number;
  };
}

export default function ProductDetails({ params }: Params) {
  return <h1 className="text-2xl">Product #{params.productId} details</h1>;
}
