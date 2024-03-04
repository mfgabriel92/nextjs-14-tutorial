"use client";

// import { Metadata } from "next";
import { useRouter } from "next/navigation";

interface Params {
  params: {
    productId: number;
  };
}

// export async function generateMetadata({ params }: Params): Promise<Metadata> {
//   const title = (await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Product #${params.productId}`);
//     }, 1500);
//   })) as string;

//   return {
//     title,
//   };
// }

// export function generateMetadata({ params }: Params): Metadata {
//   return {
//     title: `Product #${params.productId}`,
//   };
// }

export default function ProductDetails({ params }: Params) {
  const router = useRouter();

  function handleOrderNowClick() {
    router.push("/thank-you");
  }

  return (
    <>
      <h1 className="text-2xl">Product #{params.productId} details</h1>
      <button
        className="bg-white text-gray-900 px-2 py-1 my-4 hover:bg-gray-300"
        onClick={handleOrderNowClick}
      >
        Order now!
      </button>
    </>
  );
}
