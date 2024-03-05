import { Card } from "@/app/_components/Card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl">Notifications</h1>
        <Link href="/dashboard/archived">Archived</Link>
      </div>
    </Card>

  )
}