"use client";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger multiple times
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  return (
    <div className="pt-28">
      <h2 className="text-lg">My Featured Projects</h2>
      <Link href="https://xurealty-japan.com" passHref target="_blank">
        <div
          ref={ref}
          className={`relative overlay p-8 md:px-5 py-10 mt-16 flex flex-col md:flex-row gap-3 cursor-pointer transition-transform hover:scale-105 duration-300 transform fade-up ${
            inView ? "fade-up-active" : ""
          }`}
        >
          <div>
            <Image
              src="/crossyou.jpg"
              width={150}
              height={150}
              alt="Cross You Real Estate Web App"
            />
          </div>
          <div>
            <div className="flex gap-2">
              <p className="text-[#cdd7ee]">A Real Estate Web App</p>
              <GoArrowUpRight color="#5ce4cf" />
            </div>
            <p className="pt-2 text-sm">
              Web app with property listing and management features.
            </p>
            <div className="flex gap-3 pt-3 text-xs">
              <span className="bg-[#5ce4cf] bg-opacity-20 text-[#5ce4cf] p-1 rounded-md">
                NEXT
              </span>
              <span className="bg-[#5ce4cf] bg-opacity-20 text-[#5ce4cf] p-1 rounded-md">
                Tailwind
              </span>
              <span className="bg-[#5ce4cf] bg-opacity-20 text-[#5ce4cf] p-1 rounded-md">
                MongoDB
              </span>
              <span className="bg-[#5ce4cf] bg-opacity-20 text-[#5ce4cf] p-1 rounded-md">
                AWS
              </span>
            </div>
          </div>
        </div>
      </Link>

      <Link href="https://purip586.github.io/cross-u" passHref target="_blank">
        <div
          ref={ref}
          className={`relative overlay p-8 md:px-5 py-10 mt-16 flex flex-col md:flex-row gap-3 cursor-pointer transition-transform hover:scale-105 duration-300 transform fade-up ${
            inView ? "fade-up-active" : ""
          }`}
        >
          <div>
            <Image
              src="/cross_you_landing.jpg"
              width={150}
              height={150}
              alt="Cross You Real Estate Web App"
            />
          </div>
          <div>
            <div className="flex gap-2">
              <p className="text-[#cdd7ee]">A Service Landing Page</p>
              <GoArrowUpRight color="#5ce4cf" />
            </div>
            <p className="pt-2 text-sm">
              An old version of landing page designed for Cross You Co. Ltd.
            </p>
            <div className="flex gap-3 pt-3 text-xs">
              <span className="bg-[#5ce4cf] bg-opacity-20 text-[#5ce4cf] p-1 rounded-md">
                SCSS
              </span>
              <span className="bg-[#5ce4cf] bg-opacity-20 text-[#5ce4cf] p-1 rounded-md">
                Javascript
              </span>        
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
