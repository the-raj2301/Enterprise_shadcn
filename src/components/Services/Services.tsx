import Card from "../Home/card";
import PageIdentifier from "../Home/page_identifier";

const Services = () => {
  return (
    <>
    <PageIdentifier title="Services" tab_link="/services" />
    <div className="max-w-7xl mx-auto justify-center items-center">
      <Card />
      <div className="w-full flex justify-center items-center">
        <h1 className="text-2xl md:text-5xl font-bold p-20 text-neutral-400 dark:text-neutral-700">
          Services Section Is Under Development
        </h1>
      </div>
    </div>
    </>
  );
};

export default Services;
