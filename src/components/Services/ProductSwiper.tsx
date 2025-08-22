import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";


import SlideA from "@/assets/wp/1.jpg";
import SlideB from "@/assets/wp/2.jpg";
import SlideC from "@/assets/wp/3.jpg";
import SlideD from "@/assets/wp/4.jpg";
import SlideE from "@/assets/wp/5.jpg";
import SlideF from "@/assets/wp/6.jpg";
import SlideG from "@/assets/wp/7.jpg";
import SlideH from "@/assets/wp/8.jpg";
import SlideI from "@/assets/wp/9.jpg";
import SlideJ from "@/assets/wp/10.jpg";
import SlideK from "@/assets/wp/11.jpg";
import SlideL from "@/assets/wp/12.jpg";


const images = [SlideA, SlideB, SlideC, SlideD, SlideE, SlideF, SlideG, SlideH, SlideI, SlideJ, SlideK, SlideL];

const ProductSwiper = () => {
  return (
    <div className="w-full max-w-7xl mx-auto pb-6">
      <Carousel 
      aria-label='Image carousel'
      className="relative"
    //   opts={{
    //     loop: true,
    //   }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      >
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-3 z-10" />
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index} className="basis-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <img
                className="mx-auto w-full"
                src={img}
                alt={`Slide ${index + 1}`}
                loading='lazy'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-3 z-10" />
      </Carousel>
    </div>
  );
};

export default ProductSwiper;
