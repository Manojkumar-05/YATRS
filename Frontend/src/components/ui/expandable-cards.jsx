import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./hooks/use-outside-click";
import EdgeComputing from "../assets/Cards/edge-computing.jpg";
import Ai from "../assets/Cards/ai.jpg";
import Ar from "../assets/Cards/ARVR.jpg";
import Cloud from "../assets/Cards/Cloud.jpg";
import cbu from "../assets/Cards/Cognitive-Business-Operations.jpg";
import Da from "../assets/Cards/DataAnalytics.jpg";
import Ds from "../assets/Cards/Digital-Engineering.jpg";
import Dm from "../assets/Cards/Digital-Marketing.jpg";
import Es from "../assets/Cards/Enterprise-Solutions.jpg";
import Iot from "../assets/Cards/IoT.jpg";
import Net from "../assets/Cards/Networking.jpg";
import Sus from "../assets/Cards/Sustainability.jpg";

const cards = [
  {
    // Example : Do it for all like this
    title: "Edge Computing",
    src: EdgeComputing,
    content: () => (
      <p>
        Optimize data processing and reduce latency with edge computing
        solutions that bring computation closer to the source of data
        generation.
      </p>
    ),
  },
  {
    title: "AI",
    src: Ai,
    content: () => (
      <p>
        Leverage the power of Artificial Intelligence to automate processes,
        gain insights, and enhance decision-making across your organization.
      </p>
    ),
  },
  {
    title: "Data Analytics",
    src: Da,
    content: () => (
      <p>
        Transform your data into actionable insights with advanced data
        analytics services, helping you make informed business decisions.
      </p>
    ),
  },
  {
    title: "IoT",
    src: Iot,
    content: () => (
      <p>
        Connect devices and systems with Internet of Things (IoT) solutions that
        improve operational efficiency, enable real-time monitoring, and drive
        innovation.
      </p>
    ),
  },
  {
    title: "Cloud",
    src: Cloud,
    content: () => (
      <p>
        Enhance scalability, flexibility, and security with our cloud computing
        services, designed to meet the demands of modern businesses.
      </p>
    ),
  },
  {
    title: "AR/VR",
    src: Ar,
    content: () => (
      <p>
        Create immersive experiences with Augmented Reality (AR) and Virtual
        Reality (VR) technologies for applications ranging from training to
        customer engagement.
      </p>
    ),
  },
  {
    title: "Enterprise Solutions",
    src: Es,
    content: () => (
      <p>
        Streamline operations and drive growth with enterprise solutions
        tailored to meet the specific needs of your business.
      </p>
    ),
  },
  {
    title: "Digital Engineering",
    src: Ds,
    content: () => (
      <p>
        Innovate and transform your product development process with digital
        engineering solutions that integrate cutting-edge technologies and
        methodologies.
      </p>
    ),
  },
  {
    title: "Cognitive Business Operations",
    src: cbu,
    content: () => (
      <p>
        Enhance business operations with cognitive technologies that automate
        processes, improve efficiency, and enable smarter decision-making.
      </p>
    ),
  },
  {
    title: "Networking",
    src: Net,
    content: () => (
      <p>
        Ensure robust, reliable, and secure communication infrastructure with
        our comprehensive networking solutions.
      </p>
    ),
  },
  {
    title: "Digital Marketing",
    src: Dm,
    content: () => (
      <p>
        Boost your online presence and drive customer engagement with our
        strategic digital marketing services.
      </p>
    ),
  },
  {
    title: "Sustainability",
    src: Sus,
    content: () => (
      <p>
        Adopt sustainable practices with our eco-friendly solutions designed to
        minimize environmental impact and promote long-term growth.
      </p>
    ),
  },
];

export default function ExpandableCards() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] ">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute m-4 items-center justify-center  rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <p className="text-white bg-black w-10 rounded-full">X</p>
            </motion.button>
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral- text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral- text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {/* <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-[#460073] te"
                  >
                    See More
                  </motion.a> */}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow- text-neutral-400 [mask:linear-gradient(to_bott,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-[90%] mx-auto w-screen grid grid-cols-1 md:grid-cols-3 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  bg-black hover:bg-neutral-900 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full items-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-80 rounded-lg object-cover object-top ]"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral- text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral- text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}
