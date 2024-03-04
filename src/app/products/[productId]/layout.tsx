export default function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <h2 className="text-xl">Product details layout</h2>
    </>
  );
}
