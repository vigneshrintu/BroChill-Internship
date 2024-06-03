import { socialMedia } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-0 relative" id="contact">
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Contact <span className="text-yellow-500">Us</span>
        </h1>
        <p className="text-white-100 md:mt-10 my-5 text-center text-md font-normal">
          bropro.app@gmail.com
        </p>
      </div>

      <div className="relative z-10 flex mt-16 md:flex-col flex-col lg:flex-row justify-between items-center w-full px-4">
        <p className="relative z-10 text-sm md:font-normal font-normal mb-2 lg:mb-0 lg:mr-auto">
          Copyright © DudePro. All Rights Reserved
        </p>
        <div className="relative z-10 flex items-center md:gap-3 gap-6 mb-4 lg:mb-0 lg:ml-auto">
          {socialMedia.map((info) => (
            <Link key={info.id} href={info.url}>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center bg-transparent">
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
