"use client"

interface ErrorProps {
  error: Error,
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  return (
    <>
      <h1 className="text-xl">
        Roses are red, violets are blue. The sever is rekt, and so are you.
      </h1>
      <p>{error.message}</p>
      <button className="bg-white text-gray-900 px-2 py-1 my-2" onClick={reset}>Try again</button>
    </>
  )
}