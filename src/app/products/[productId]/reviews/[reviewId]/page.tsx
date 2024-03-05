// import { notFound } from "next/navigation";
"use client"

interface Params {
  params: {
    productId: string;
    reviewId: string;
  };
}

export default function ProductReviewDetails({ params }: Params) {
  function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
  }

  const n = getRandomInt(2);

  if (n === 0) {
    throw new Error("Error loading review");
  }
  // if (parseInt(params.reviewId) > n) {
  //   notFound();
  // }

  return (
    <h1 className="text-2xl">
      Product #{params.productId} review #{params.reviewId}
    </h1>
  );
}
