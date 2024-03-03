interface Params {
  params: {
    productId: number;
    reviewId: number;
  };
}

export default function ProductReviewDetails({ params }: Params) {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl">
        Product #{params.productId} review #{params.reviewId}
      </h1>
    </div>
  );
}
