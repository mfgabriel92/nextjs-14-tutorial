import Image from "next/image";
import wondersImages, { WonderImage } from "@/app/photos/wonders";

interface Props {
  params: {
    id: string
  }
}

export default function Photo({ params }: Props) {
  const photo: WonderImage = wondersImages.find((p) => p.id === params.id)!;

  return (
    <div className="w-1/2 container mx-auto">
      <h1 className="text-3xl">{photo.name}</h1>
      <Image src={photo.src} alt={photo.name} className="object-cover aspect-square"/>
      <div className="bg-white p-4">
        <p className="text-gray-700">{photo.photographer}</p>
        <p className="text-gray-700">{photo.location}</p>
      </div>
    </div>
  )
}
