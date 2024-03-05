import Link from "next/link";
import { Card } from "@/app/_components/Card";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl">Archived notifications</h1>
        <Link href="/dashboard">Default</Link>
      </div>
    </Card>
  )
}