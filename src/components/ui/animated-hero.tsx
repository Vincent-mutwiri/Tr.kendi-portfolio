import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["passionate", "dedicated", "experienced", "innovative", "caring"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4" asChild>
              <a href="#education">
                View Credentials <MoveRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-6xl">
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl tracking-tighter text-center lg:text-left font-regular">
                <span className="text-foreground">I am a</span>
                <span className="relative flex w-full justify-center lg:justify-start overflow-hidden text-center lg:text-left md:pb-4 md:pt-1">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
                <span className="text-foreground">educator</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground text-center lg:text-left">
                Global-Minded Teaching Professional dedicated to fostering inclusive, 
                student-centered learning environments that nurture well-rounded, 
                culturally aware global citizens.
              </p>
              
              <div className="flex flex-row gap-3 justify-center lg:justify-start mt-4">
                <Button size="lg" className="gap-4" variant="outline" asChild>
                  <a href="tel:+254708114250">
                    Jump on a call <PhoneCall className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" className="gap-4" asChild>
                  <a href="#contact">
                    Get In Touch <MoveRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <picture>
                  <source srcSet="/profile.webp" type="image/webp" />
                  <img
                    src="/profile.png"
                    alt="Winfred Kendi - Early Childhood Education Professional"
                    width={800}
                    height={800}
                    loading="eager"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
