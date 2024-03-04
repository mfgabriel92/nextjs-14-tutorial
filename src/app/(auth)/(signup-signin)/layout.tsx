export default function Name({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">Sign up & Sign in layout</h1>
      {children}
    </div>
  );
}
