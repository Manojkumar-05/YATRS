import { cn } from "@/lib/utils";
import Marquee from "./ui-comp/marquee";

const jobOpenings = [
  {
    title: "Software Developers",
    description:
      "Develop and maintain software solutions across various platforms.",
    requirements:
      "Proficiency in programming languages such as Java, Python, or C++; experience with software development lifecycle.",
  },
  {
    title: "Product Managers",
    description:
      "Oversee product development from ideation to launch, ensuring alignment with business goals.",
    requirements:
      "Strong project management skills, experience in product development, excellent communication abilities.",
  },
  {
    title: "Data Analysts",
    description:
      "Analyze data to provide insights that drive business decisions and strategies.",
    requirements:
      "Proficiency in data analysis tools, strong analytical skills, experience with big data technologies.",
  },
  {
    title: "IoT Engineers",
    description:
      "Design and implement IoT solutions to enhance connectivity and automation.",
    requirements:
      "Experience with IoT platforms and devices, strong problem-solving skills, knowledge of networking protocols.",
  },
  {
    title: "AI Specialists",
    description:
      "Develop and integrate AI solutions to improve product functionality and user experience.",
    requirements:
      "Expertise in machine learning algorithms, experience with AI frameworks, strong programming skills.",
  },
  {
    title: "Digital Marketing Experts",
    description:
      "Plan and execute digital marketing strategies to enhance our online presence and engagement.",
    requirements:
      "Experience with digital marketing tools and platforms, strong analytical and creative skills.",
  },
];
const firstRow = jobOpenings.slice(0, jobOpenings.length / 2);

const ReviewCard = ({ title, description, requirements }) => {
  return (
    <figure
      className={cn(
        "relative md:w-[500px] w-[200px] h-auto cursor-pointer overflow-hidden rounded-xl p-4 shadow-md",
        "bg-neutral-200 hover:bg-[#8a31c2dd] hover:text-white text-black transition-all duration-300 ease-in-out",
        "md:h-[180px] "
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* <img className="rounded-full" width="32" height="32" alt="" src={} /> */}
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold md:text-lg">
            {title}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-xs font-medium md:text-sm">
        <span className="font-bold">Description: </span>
        {description}
      </blockquote>
      <blockquote className="mt-2 text-xs font-medium md:text-sm">
        <span className="font-bold">Requirements: </span>
        {requirements}
      </blockquote>
    </figure>
  );
};

export function CareerCards() {
  return (
    <div className="relative flex h-auto w-full max-w-full flex-col items-center justify-center overflow-hidden rounded-lg gap-6 lg:gap-10 mt-5 lg:mt-[6rem] ">
      <h1 className="text-xl font-semibold md:text-2xl lg:text-4xl">
        Current Openings
      </h1>
      <Marquee
        pauseOnHover
        className="md:[--duration:25s] [--duration:10s] w-full"
      >
        {firstRow.map((jobOpenings) => (
          <ReviewCard key={jobOpenings.title} {...jobOpenings} />
        ))}
      </Marquee>
    </div>
  );
}
