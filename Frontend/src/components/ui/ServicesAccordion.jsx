import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";
import { Button } from "@nextui-org/react"; 

// New data array
const accordionData = [
  {
    title: "Agri Tech",
    content:
      "Transforming agriculture with advanced technologies to enhance productivity, efficiency, and sustainability in farming practices.",
  },
  {
    title: "Healthcare",
    content:
      "Innovating healthcare solutions to improve patient outcomes, streamline operations, and facilitate the delivery of high-quality care.",
  },
  {
    title: "Renewable Energy",
    content:
      "Driving the future of clean energy with sustainable solutions that harness the power of wind, solar, and other renewable resources.",
  },
  {
    title: "Bio Tech",
    content:
      "Pioneering advancements in biotechnology to address critical challenges in medicine, agriculture, and environmental protection.",
  },
  {
    title: "Aerospace",
    content:
      "Enhancing aerospace technology with cutting-edge solutions for improved safety, performance, and efficiency in air and space travel.",
  },
  {
    title: "Automotive",
    content:
      "Revolutionizing the automotive industry with innovations in electric vehicles, autonomous driving, and advanced manufacturing techniques.",
  },
  {
    title: "Banking",
    content:
      "Modernizing banking and financial services with secure, efficient, and user-friendly digital solutions.",
  },
  {
    title: "Retail",
    content:
      "Elevating the retail experience with technology-driven solutions that optimize operations, enhance customer engagement, and drive sales.",
  },
  {
    title: "Food Tech",
    content:
      "Innovating the food industry with sustainable practices and advanced technologies to improve food production, safety, and distribution.",
  },
  {
    title: "Manufacturing",
    content:
      "Transforming manufacturing processes with automation, IoT, and smart technologies to increase efficiency and reduce costs.",
  },
  {
    title: "Communication",
    content:
      "Advancing communication technologies to enable faster, more reliable, and more secure information exchange across the globe.",
  },
  {
    title: "Life Sciences",
    content:
      "Driving breakthroughs in life sciences with innovative research and development solutions that improve health and well-being.",
  },
  {
    title: "AR/VR",
    content:
      "Creating immersive experiences with augmented reality (AR) and virtual reality (VR) technologies for various applications, from training to entertainment.",
  },
];

export function ServicesAccordion() {
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? accordionData : accordionData.slice(0, 5);

  return (
    <div className="w-full max-w-xl mx-auto">
      <Accordion type="single" collapsible>
        {displayedItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>
              <div className="flex items-center justify-between w-full">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent
              className={`animate-${
                item.isOpen ? "accordion-down" : "accordion-up"
              }`}
            >
              <div className="py-4 text-sm lg:text-medium leading-relaxed">
                {item.content}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex justify-center mt-4">
        <Button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 h-[2.5rem] w-[8rem] bg-black border-none hover:bg-neutral-950 transition-all duration-300 ease-in-out"
        >
          {showAll ? "Show less" : "Show more"}
        </Button>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionTrigger,
//   AccordionContent,
// } from "@radix-ui/react-accordion";
// import { Button } from "@/components/ui/button";

// export function ServicesAccordion() {
//   const [showAll, setShowAll] = useState(false);
//   return (
//     <div className="w-full max-w-3xl mx-auto">
//       <Accordion type="single" collapsible>
//         <AccordionItem value="item-1">
//           <AccordionTrigger className="bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
//             <div className="flex items-center justify-between w-full">
//               <h3 className="text-lg font-semibold">
//                 What is the refund policy?
//               </h3>
//             </div>
//           </AccordionTrigger>
//           <AccordionContent className="bg-card text-card-foreground">
//             <div className="py-4 text-sm leading-relaxed">
//               We offer a 30-day money-back guarantee on all purchases. If you're
//               not satisfied with your purchase, you can request a full refund
//               within 30 days of the original purchase date.
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-2">
//           <AccordionTrigger className="bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
//             <div className="flex items-center justify-between w-full">
//               <h3 className="text-lg font-semibold">
//                 How do I contact customer support?
//               </h3>
//             </div>
//           </AccordionTrigger>
//           <AccordionContent className="bg-card text-card-foreground">
//             <div className="py-4 text-sm leading-relaxed">
//               You can reach our customer support team by email at
//               support@example.com or by phone at 1-800-555-1234. Our support
//               team is available Monday through Friday, 9am to 5pm EST.
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-3">
//           <AccordionTrigger className="bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
//             <div className="flex items-center justify-between w-full">
//               <h3 className="text-lg font-semibold">
//                 What payment methods do you accept?
//               </h3>
//             </div>
//           </AccordionTrigger>
//           <AccordionContent className="bg-card text-card-foreground">
//             <div className="py-4 text-sm leading-relaxed">
//               We accept all major credit cards, including Visa, Mastercard,
//               American Express, and Discover. We also accept PayPal and Apple
//               Pay.
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//         {showAll && (
//           <>
//             <AccordionItem value="item-4">
//               <AccordionTrigger className="bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
//                 <div className="flex items-center justify-between w-full">
//                   <h3 className="text-lg font-semibold">
//                     How long does shipping take?
//                   </h3>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent className="bg-card text-card-foreground">
//                 <div className="py-4 text-sm leading-relaxed">
//                   We offer standard shipping that typically takes 5-7 business
//                   days. We also offer expedited shipping options for an
//                   additional fee.
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem value="item-5">
//               <AccordionTrigger className="bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
//                 <div className="flex items-center justify-between w-full">
//                   <h3 className="text-lg font-semibold">
//                     Do you offer international shipping?
//                   </h3>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent className="bg-card text-card-foreground">
//                 <div className="py-4 text-sm leading-relaxed">
//                   Yes, we offer international shipping to most countries.
//                   Shipping rates and delivery times may vary depending on the
//                   destination.
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem value="item-6">
//               <AccordionTrigger className="bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
//                 <div className="flex items-center justify-between w-full">
//                   <h3 className="text-lg font-semibold">
//                     What is your return policy?
//                   </h3>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent className="bg-card text-card-foreground">
//                 <div className="py-4 text-sm leading-relaxed">
//                   We accept returns within 30 days of delivery for a full
//                   refund. Items must be in new, unused condition with all
//                   original packaging and tags.
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem value="item-7">
//               <AccordionTrigger className="bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
//                 <div className="flex items-center justify-between w-full">
//                   <h3 className="text-lg font-semibold">
//                     Do you offer gift wrapping?
//                   </h3>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent className="bg-card text-card-foreground">
//                 <div className="py-4 text-sm leading-relaxed">
//                   Yes, we offer complimentary gift wrapping on all orders.
//                   Simply select the gift wrapping option at checkout.
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem value="item-8">
//               <AccordionTrigger className="bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
//                 <div className="flex items-center justify-between w-full">
//                   <h3 className="text-lg font-semibold">
//                     How do I track my order?
//                   </h3>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent className="bg-card text-card-foreground">
//                 <div className="py-4 text-sm leading-relaxed">
//                   You can track your order by logging into your account on our
//                   website and viewing the order details. You can also contact
//                   our customer support team for assistance.
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem value="item-9">
//               <AccordionTrigger className="bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
//                 <div className="flex items-center justify-between w-full">
//                   <h3 className="text-lg font-semibold">
//                     Do you offer any discounts or promotions?
//                   </h3>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent className="bg-card text-card-foreground">
//                 <div className="py-4 text-sm leading-relaxed">
//                   Yes, we offer various discounts and promotions throughout the
//                   year. You can check our website or sign up for our newsletter
//                   to stay up-to-date on the latest offers.
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem value="item-10">
//               <AccordionTrigger className="bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
//                 <div className="flex items-center justify-between w-full">
//                   <h3 className="text-lg font-semibold">
//                     How do I leave a product review?
//                   </h3>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent className="bg-card text-card-foreground">
//                 <div className="py-4 text-sm leading-relaxed">
//                   You can leave a product review by logging into your account on
//                   our website and navigating to the product page. Simply click
//                   the "Write a Review" button to share your feedback.
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem value="item-11">
//               <AccordionTrigger className="bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
//                 <div className="flex items-center justify-between w-full">
//                   <h3 className="text-lg font-semibold">
//                     Do you offer any warranties?
//                   </h3>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent className="bg-card text-card-foreground">
//                 <div className="py-4 text-sm leading-relaxed">
//                   Yes, we offer a 1-year warranty on all of our products. If you
//                   experience any issues with your purchase, please contact our
//                   customer support team for assistance.
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem value="item-12">
//               <AccordionTrigger className="bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
//                 <div className="flex items-center justify-between w-full">
//                   <h3 className="text-lg font-semibold">
//                     How do I become a reseller?
//                   </h3>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent className="bg-card text-card-foreground">
//                 <div className="py-4 text-sm leading-relaxed">
//                   If you're interested in becoming a reseller, please visit our
//                   website and fill out the reseller application form. Our team
//                   will review your application and get in touch with you.
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem value="item-13">
//               <AccordionTrigger className="bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
//                 <div className="flex items-center justify-between w-full">
//                   <h3 className="text-lg font-semibold">
//                     Do you offer any volume discounts?
//                   </h3>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent className="bg-card text-card-foreground">
//                 <divQ className="py-4 text-sm leading-relaxed">
//                   Yes, we offer volume discounts for larger orders. The discount
//                   amount varies depending on the total order value. Please
//                   contact our sales team for more information.
//                 </divQ>
//               </AccordionContent>
//             </AccordionItem>
//           </>
//         )}
//       </Accordion>
//       <div className="flex justify-center mt-4 ">
//         {!showAll && (
//           <Button
//             variant="outline"
//             onClick={() => setShowAll(true)}
//             className="flex items-center gap-2 bg-black border-none"
//           >
//             Show more
//           </Button>
//         )}
//         {showAll && (
//           <Button
//             variant="outline"
//             onClick={() => setShowAll(false)}
//             className="flex items-center gap-2 bg-black border-none"
//           >
//             Show less
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// }
