import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import "./card.css";

interface CardProps {
  title: string;
  subTitle: string;
  image: string;
}

const EnhancedCard = ({ image, title, subTitle }: CardProps) => {
  return (
    <div className="overflow-hidden relative rounded-lg dark:bg-neutral-900 bg-white glow-on-hover animate-border-hoverShift ">
      <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 animate-border-colorShift rounded-lg z-0"></div>
      <Card className="relative rounded-lg m-px z-10">
        <CardContent className="p-6 dark:text-white h-full flex flex-col justify-between">
          <h1 className="text-4xl font-bold py-2">{title}</h1>
          <AspectRatio
            ratio={16 / 9}
            className="rounded-sm overflow-hidden mb-4"
          >
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-300 scale-105 md:brightness-95 brightness-90"
              loading="lazy"
            />
          </AspectRatio>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {subTitle}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

function MiniCard() {
  return (
    <div className="w-full max-w-7xl m-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center justify-center mb-8 p-4 lg:p-2 gap-8">
        <EnhancedCard
          image="./img/eng.png"
          title="Engraving"
          subTitle="We do high quality CNC Engraving Designs and customized patterns for glass, mirrors."
        />
        <EnhancedCard
          image="./img/lam2.jpeg"
          title="Lamination"
          subTitle="We offer premium lamination services for durability and aesthetics"
        />
        <EnhancedCard
          image="./img/text.jpg"
          title="Frosting"
          subTitle="Add privacy and elegance with our expert frosting techniques"
        />
      </div>
    </div>
  );
}

export default MiniCard;