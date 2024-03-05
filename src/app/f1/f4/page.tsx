import Link from "next/link";

export default function F4() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">F4</h1>
      <Link href="/f1/f3">F3</Link>
      <Link href="/about">About</Link>
    </div>
  )
}