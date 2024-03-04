export default function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-4">
      {children}
      <h2 className="text-xl">Product details layout</h2>
    </div>
  );
}
