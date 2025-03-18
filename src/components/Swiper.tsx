import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const images = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg"];

const Swiper = () => {
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
            <CarouselItem key={index}>
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

export default Swiper;
