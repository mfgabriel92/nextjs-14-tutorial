import Image from "next/image";
import wondersImages, { WonderImage } from "@/app/photos/wonders";
import { Modal } from "@/app/_components/Modal";

interface Props {
  params: {
    id: string;
  };
}

export default function Photo({ params }: Props) {
  const photo: WonderImage = wondersImages.find((p) => p.id === params.id)!;

  return (
    <Modal>
      <Image
        src={photo.src}
        alt={photo.name}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <p className="text-gray-700">{photo.photographer}</p>
        <p className="text-gray-700">{photo.location}</p>
      </div>
    </Modal>
  );
}
