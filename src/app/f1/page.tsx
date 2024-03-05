import Link from "next/link";

export default function F1() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">F1</h1>
      <Link href="/f1/f2">F2</Link>
    </div>
  )
}