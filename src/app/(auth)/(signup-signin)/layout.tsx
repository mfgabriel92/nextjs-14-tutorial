export default function Name({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <h1 className="text-xl">Sign up & Sign in layout</h1>
      {children}
    </>
  );
}
