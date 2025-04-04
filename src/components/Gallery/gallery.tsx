import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PageIdentifier from "../Home/page_identifier";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "./gallery/1.jpg", alt: "image 1" },
    { src: "./gallery/2.jpg", alt: "image 2" },
    { src: "./gallery/3.jpg", alt: "image 3" },
    { src: "./gallery/4.jpg", alt: "image 4" },
    { src: "./gallery/5.jpg", alt: "image 5" },
    { src: "./gallery/6.jpg", alt: "image 6" },
    { src: "./gallery/7.jpg", alt: "image 7" },
    { src: "./gallery/8.jpg", alt: "image 8" },
    { src: "./gallery/9.jpg", alt: "image 9" },
    { src: "./gallery/10.jpg", alt: "image 10" },
    { src: "./gallery/11.jpg", alt: "image 11" },
    { src: "./gallery/12.jpg", alt: "image 12" },
    { src: "./gallery/13.jpg", alt: "image 13" },
    { src: "./gallery/14.jpg", alt: "image 14" },
    { src: "./gallery/15.png", alt: "image 15" },
    { src: "./gallery/16.jpeg", alt: "image 16" },
    { src: "./gallery/17.jpeg", alt: "image 17" },
    { src: "./gallery/18.jpeg", alt: "image 18" },
    { src: "./gallery/19.jpg", alt: "image 19" },
    { src: "./gallery/20.png", alt: "image 20" },
    { src: "./gallery/21.jpg", alt: "image 21" },
    { src: "./gallery/22.png", alt: "image 22" },
    { src: "./gallery/23.png", alt: "image 23" },
    { src: "./gallery/24.png", alt: "image 24" },
    { src: "./gallery/25.png", alt: "image 25" },
    { src: "./gallery/26.png", alt: "image 26" },
    { src: "./gallery/27.png", alt: "image 27" },
    { src: "./gallery/28.png", alt: "image 28" },
    { src: "./gallery/29.png", alt: "image 29" },
    { src: "./gallery/30.png", alt: "image 30" },
    { src: "./gallery/31.png", alt: "image 31" },
    { src: "./gallery/32.png", alt: "image 32" },
    { src: "./gallery/33.png", alt: "image 33" },
    { src: "./gallery/34.png", alt: "image 34" },
    { src: "./gallery/35.png", alt: "image 35" },
    { src: "./gallery/36.png", alt: "image 36" },
    { src: "./gallery/37.jpg", alt: "image 37" },
    { src: "./gallery/38.jpg", alt: "image 38" },
    { src: "./gallery/39.jpg", alt: "image 39" },
    { src: "./gallery/40.jpg", alt: "image 40" },
    { src: "./gallery/41.jpg", alt: "image 41" },
    { src: "./gallery/42.jpg", alt: "image 42" },
    { src: "./gallery/43.jpg", alt: "image 43" },
    { src: "./gallery/44.jpg", alt: "image 44" },
    { src: "./gallery/45.jpg", alt: "image 45" },
    { src: "./gallery/46.jpg", alt: "image 46" },
    { src: "./gallery/47.jpg", alt: "image 47" },
    // { src: "./gallery/48.jpg", alt: "image 48" },
  ];

  return (
    <>
      {/* <h1 className="text-8xl font-bold text-center py-2 pb-10">Gallery</h1> */}
      <PageIdentifier title="Gallery" tab_link="/gallery" />
      <div className="max-w-7xl mx-auto pt-8">
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger onClick={() => setSelectedImage(image.src)}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full hover:scale-105 hover:brightness-50 transition-all  cursor-pointer"
                  loading="lazy"
                />
              </DialogTrigger>
              <DialogContent className="bg-transparent p-0">
                <DialogTitle className="sr-only">Expanded Image</DialogTitle>
                <DialogDescription className="sr-only">
                  A full-size view of the selected image.
                </DialogDescription>
                <img
                  src={selectedImage ?? ""}
                  alt="Selected"
                  className="w-full"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
