import { Metadata } from "next";

interface Params {
  params: {
    productId: number;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const title = (await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product #${params.productId}`);
    }, 1500);
  })) as string;

  return {
    title,
  };
}

// export function generateMetadata({ params }: Params): Metadata {
//   return {
//     title: `Product #${params.productId}`,
//   };
// }

export default function ProductDetails({ params }: Params) {
  return <h1 className="text-2xl">Product #{params.productId} details</h1>;
}
