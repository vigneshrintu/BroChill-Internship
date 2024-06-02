import { socialMedia } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-0 relative" id="contact">
      
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Address
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Third Floor, Ravi Chambers, Kavuri Hills, Madhapur, Telangana 500083.
        </p>
      </div>

      <div className="relative z-10 flex mt-16 md:flex-col flex-col justify-between items-center">
        <div className="relative z-10 flex flex-col space-y-2 mb-4">
          <Link href={"/PrivacyPolicy"}><p className="text-center hover:underline"> Privacy Policy</p></Link>
          <Link href={"/TermsofService"}><p className="text-center hover:underline"> Terms of Service</p></Link>
          <Link href={"/CommunityGuidelines"}><p className="text-center hover:underline"> Content & Community Guidelines</p></Link>
        </div>

        <div className="relative z-10 flex items-center md:gap-3 gap-6 mb-4">
          {socialMedia.map((info) => (
            <Link key={info.id} href={info.url}>
              <div
                className="w-10 h-10 cursor-pointer flex justify-center items-center bg-transparent"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </Link>
          ))}
        </div>
        
        <p className="relative z-10 md:text-base text-sm md:font-normal font-light mb-4">
          Copyright © DudePro. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
