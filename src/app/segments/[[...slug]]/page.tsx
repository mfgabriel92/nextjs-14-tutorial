interface Params {
  params: {
    slug: string[];
  };
}

export default function OptionalSegments({ params }: Params) {
  return (
    <>
      <h1 className="text-2xl">Optional segments</h1>
      {params.slug?.map((s) => (
        <div
          key={s}
          className="text-gray-400"
        >
          <p className="text-xl">{s}</p>
        </div>
      ))}
    </>
  );
}
