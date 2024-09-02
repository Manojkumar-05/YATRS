import React from "react";
import { motion } from "framer-motion";
import {
  IconLink,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import SocialMediaLinks from "../ui/Social";

const Contact = () => {
  return (
    <div className="w-full  h-[calc(100vh-64px)]">
      <section className="pt-12 pb-8">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Get in Touch with YAR Tech Services
              </h2>
              <p className="text-muted-foreground md:text-xl">
                We are here to help you with any inquiries, support, or
                information you need. Whether you’re interested in our products,
                services, partnerships, or career opportunities, we look forward
                to hearing from you.
              </p>
              <Link
                className="bg-black rounded-lg h-[2.5rem] w-[8rem] font-semibold flex justify-center items-center "
                to="/join"
              >
                <span>Join Now</span>{" "}
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                All Inquiries
              </h2>
              <div className="space-y-2">
                <p className="text-muted-foreground md:text-xl">
                  For all inquiries, please contact us at:
                </p>
                <div className="flex items-center gap-2">
                  <IconMail className="h-5 w-5 " />
                  <a
                    href="mailto:info@yarts.in"
                    className="text-primary hover:underline"
                  >
                    info@yarts.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <IconPhone className="h-5 w-5 " />
                  <a
                    href="tel:+916381281441"
                    className="text-primary hover:underline"
                  >
                    +91 6381281441
                  </a>
                </div>
                <div className=" md:text-xl flex gap-2 items-center">
                  <IconLink />
                  <a
                    href="http://yarts.in"
                    className="text-primary hover:underline"
                  >
                    yarts.in
                  </a>
                </div>
              </div>
              <p className=" md:text-xl">
                Support Hours: Monday to Saturday, 9:00 AM – 6:00 PM
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className=" bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SocialMediaLinks />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pb-8"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Office Locations
              </h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">Headquarters</h3>
                  <p className="text-muted-foreground">
                    YAR Tech Services, Venkatraya Nagar, Nizampet, Hyderabad,
                    Telangana 500090
                  </p>
                </div>
                {/* <div>
                  <h3 className="text-xl font-semibold">Regional Offices</h3>
                  <p>Madurai, Coimbatore, Chennai, Banglore</p>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
