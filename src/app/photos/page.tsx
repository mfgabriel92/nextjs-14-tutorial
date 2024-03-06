import imgs from "@/app/photos/wonders";
import Link from "next/link";
import Image from "next/image";

export default function Photos() {
  return (
    <div className="container mx-auto">
      <h1 className="text-xl">Photos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {imgs.map((img, i) => (
          <Link key={img.id} href={`/photos/${img.id}`}>
            <Image src={img.src} alt={img.name} className="w-full object-cover aspect-square"/>
          </Link>
        ))}
      </div>
    </div>
  )
}