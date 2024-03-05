"use client"

interface ErrorProps {
  error: Error
}

export default function ErrorBoundary({ error }: ErrorProps) {
  return (
    <>
      <h1 className="text-xl">
        Roses are red, violets are blue. The sever is rekt, and so are you.
      </h1>
      <p>{error.message}</p>
    </>
  )
}