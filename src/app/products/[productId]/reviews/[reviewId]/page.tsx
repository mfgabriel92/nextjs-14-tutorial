import { notFound } from "next/navigation";

interface Params {
  params: {
    productId: string;
    reviewId: string;
  };
}

export default function ProductReviewDetails({ params }: Params) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <h1 className="text-2xl">
      Product #{params.productId} review #{params.reviewId}
    </h1>
  );
}
