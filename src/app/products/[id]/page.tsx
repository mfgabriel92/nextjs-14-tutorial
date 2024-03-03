interface Params {
  params: {
    id: number;
  };
}

export default function ProductDetails({ params }: Params) {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl">Product #{params.id} details</h1>
    </div>
  );
}
