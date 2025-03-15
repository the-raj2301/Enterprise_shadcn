import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CardProps {
  title: string;
  subTitle: string;
  image: string;
}

const EnhancedCard = ({ image, title, subTitle }: CardProps) => {
  return (
    <Card className="overflow-hidden border-none transition-all bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px] hover:shadow-[0_0_30px_#00ffff] h-[350px] group">
      <CardContent className="bg-white dark:bg-neutral-950 rounded-lg p-6 dark:text-white h-full flex flex-col justify-between">
        <h1 className="text-4xl font-bold py-2">{title}</h1>
        <AspectRatio ratio={16 / 9} className="rounded-sm overflow-hidden mb-4">
          <img src={image} alt={title} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-130 md:brightness-50 group-hover:brightness-90" loading="lazy" />
        </AspectRatio>
        <p className="text-sm text-gray-600 dark:text-gray-300">{subTitle}</p>
      </CardContent>
    </Card>
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