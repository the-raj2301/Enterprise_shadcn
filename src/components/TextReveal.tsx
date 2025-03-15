import { useState, useEffect } from "react";

const words = ["Engraving", "Lamination", "Bevelling", "Edging"];

function TextReveal() {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const word = words[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (deleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex((prev) => prev - 1), 100);
      } else {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (charIndex < word.length) {
        timeout = setTimeout(() => setCharIndex((prev) => prev + 1), 100);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1500);
      }
    }

    setDisplayText(word.substring(0, charIndex));

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-1">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-gray-900 to-sky-600 py-2 md:py-4 dark:bg-gradient-to-t dark:from-red-500 dark:to-white">
          Elevating style with
        </h1>
        <div className="flex items-center text-4xl md:text-6xl font-bold">
          <h1 className=" bg-clip-text text-transparent bg-gradient-to-t from-gray-900 to-sky-600 py-2 md:py-4 dark:bg-gradient-to-t dark:from-red-500 dark:to-white px-2">
            Glass
          </h1>
          {/* Fixed shifting issue by aligning text to left */}
          <h1 className="dark:text-primary lg:min-w-[12ch] text-left inline-block">
            {displayText}
          </h1>
        </div>
      </div>
      <h2 className="text-primary text-xl md:text-xl p-2 tracking-wide">
        Innovative glass designs for luxurious interiors
      </h2>
    </>
  );
}

export default TextReveal;
