interface Params {
  params: {
    productId: number;
  };
}

export default function ProductDetails({ params }: Params) {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl">Product #{params.productId} details</h1>
    </div>
  );
}
