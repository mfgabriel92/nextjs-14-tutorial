import Link from "next/link";

export default function Home() {
  const productId = 100;

  return (
    <>
      <h1 className="text-2xl">Home</h1>
      <Link href={`product/${productId}`}> Go to product {productId}</Link>
    </>
  );
}
