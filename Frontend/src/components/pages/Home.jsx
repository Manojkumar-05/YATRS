import { FlipWords } from "../ui/ui-comp/flip-words";
import { TextGenerateEffect } from "../ui/ui-comp/text-generate-effect";
import NumberTicker from "../ui/ui-comp/number-ticker";
import { ArrowRightIcon } from "lucide-react";
import { Cardz } from "../ui/ProductCard";
import heroPng from "../assets/hero.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { CareerCards } from "../ui/CareerCards";


export function Home() {
  const words = ["Modern", "Cutting-Edge", "Cross-Industrial", "Optimized"];
  const navigate = useNavigate();

  return (
    <div>
      <div className="md:mt-[8rem] mt-[4rem] flex flex-col items-center gap-9 px-4 overflow-auto ">
        <section className="md:text-3xl lg:text-5xl text-[1.3rem] font-semibold mx-auto flex lg:flex-row gap-10">
          <div>
            <div className="flex">
              <TextGenerateEffect words={"Build"} />
              <FlipWords words={words} /> <br />
            </div>
            <TextGenerateEffect words={"tech solutions with YAR"} />
            <p className="md:text-base text-sm font-medium md:m-3  my-3 max-w-[30rem]">
              YAR Tech Services drives innovation and sustainable growth with
              cutting-edge solutions tailored to your industry's unique needs.
              Elevate your business with our expertise in advanced technologies.
            </p>
            <div className="flex gap-5 my-4 ">
              <Button
                className="bg-black rounded-lg h-[2.5rem] w-[8rem] font-semibold"
                onClick={() => navigate("/services")}
              >
                <span>Get Started</span>
              </Button>
              <Button
                className="bg-black rounded-lg h-[2.5rem] w-[8rem] font-semibold flex"
                onClick={() => navigate("/join")}
              >
                <span>Join Now</span>{" "}
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </Button>
            </div>
            <div className="flex flex-col gap-10 font-medium text-base md:text-2xl my-[2rem] md:flex-row ">
              <div className="h-7">
                <NumberTicker value={20} className="lg:ml-5" />+
                <br />
                Projects
              </div>
              <div className="h-7">
                <NumberTicker value={50} className="lg:ml-12" />+
                <br />
                Job Openings
              </div>
              <div className="h-7">
                <NumberTicker value={50} className="lg:ml-14" />+
                <br />
                Intern Openings
              </div>
            </div>
          </div>
          <img
            src={heroPng}
            alt="hero.png"
            className="h-[20rem] hidden sm:block animate-float"
          />
        </section>
        <CareerCards />
        <Cardz />
      </div>
    </div>
  );
}

