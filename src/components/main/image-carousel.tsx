import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
export const ImageCarousel = ({
  images,
  alt,
}: {
  images: StaticImageData[];
  alt: string;
}) => {
  return (
    <Carousel>
      <CarouselContent>
        {images.map((img, idx) => (
          <CarouselItem key={idx}>
            <Image
              alt={alt}
              src={img}
              className={`w-full object-cover rounded-md mb-3`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="absolute left-0 bg-accent border cursor-pointer"
        variant={"ghost"}
      />
      <CarouselNext
        className="absolute right-0 bg-accent border cursor-pointer"
        variant={"ghost"}
      />
    </Carousel>
  );
};
