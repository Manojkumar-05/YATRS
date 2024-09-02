
import { useNavigate } from "react-router-dom";
const Careers = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full py-12 md:mt-[-5rem] mt-0 md:pt-24 lg:pt-32 ">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text">Careers</h1>
            <p className="text-xl mt-4 text-white">
              Join Our Team and Build the Future
            </p>
            <p className="text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              At YAR Tech Services, we are passionate about innovation,
              cutting-edge technologies, and making a positive impact on the
              world. Our dynamic and diverse team is at the heart of everything
              we do, and we are always looking for talented individuals who
              share our vision and values.
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-3xl font-semibold text-gray-800">
                Why Work with Us?
              </h2>
              <ul className="list-disc list-inside mt-4 space-y-4 text-gray-600">
                <li>
                  <span className="font-semibold text-gray-800 ">
                    Innovative Environment:
                  </span>{" "}
                  Be part of a culture that encourages creativity, innovation,
                  and continuous learning.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 ">
                    Cutting-Edge Technologies:
                  </span>{" "}
                  Projects that utilize latest technologies and
                  shape the future of various industries.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 ">
                    Collaborative Culture:
                  </span>{" "}
                  Join a team that values collaboration, open communication, and
                  mutual respect.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 ">
                    Professional Growth:
                  </span>{" "}
                  Access opportunities for professional development, training,
                  and career advancement.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 ">
                    Impactful Work:
                  </span>{" "}
                  Contribute to meaningful projects that make a difference in
                  the world.
                </li>
              </ul>
            </div>

            <div className="bg-black shadow-lg rounded-lg p-8 text-center">
              <h2 className="text-3xl font-semibold text-white  ">
                How to Apply
              </h2>
              <p className="mt-4 text-neutral-300 leading-relaxed">
                If you are ready to take your career to the next level and be
                part of a team that is shaping the future, we would love to hear
                from you. Please send your resume and a cover letter to{" "}
                <a
                  href="mailto:info@yarts.in"
                  className="text-blue-600 hover:underline"
                >
                  info@yarts.in
                </a>
                . Be sure to specify the position you are applying for in the
                subject line.
              </p>
              <p className="mt-4 text-neutral-300 leading-relaxed">
                Join YAR Tech Services and help us build wonders through
                innovation and cutting-edge technologies. Together, we can
                transform the world.
              </p>
              <button
                onClick={() => navigate("/join")}
                className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300"
              >
                Explore Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
