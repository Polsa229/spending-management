
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) {
    return null;
  }


  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-2  z-50 h-12 w-12 rounded-full bg-primary hover:bg-secondary/90 shadow-lg transition-all duration-300 flex justify-center items-center`}
      size="icon"
      aria-label={"backToTop"}
    >
      <ArrowUp className="h-8 w-8 text-light" />
    </button>
  );
};

export default BackToTop;
