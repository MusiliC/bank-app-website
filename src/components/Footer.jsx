import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-col justify-start flex-1 mr-10 ">
          <img src={logo} className="w-[266px] h-[72px]" alt="" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy and reliable
          </p>
        </div>

        {/* links */}

        <div className="flex-[1.5]  w-full flex flex-row justify-between flex-wrap md:mt-0 mt:10">
          {footerLinks.map((link) => (
            <div
              key={link.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4
                className={`font-poppins font-medium text-[18px] leading-[27px] text-white `}
              >
                {link.title}
              </h4>
              <ul className="mt-4">
                {link.links.map((eachLink) => (
                  <li
                    key={eachLink.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4`}
                  >
                    {eachLink.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/*  */}

      <div className="flex flex-col md:flex-row items-center justify-between w-full pt-0 md:flex-6  border-t-[1px] border-t-[#3f3r45]">
        <p
          className={`font-poppins font-normal text-center text-[18px] mt-6 leading-[27px] text-white `}
        >
          @2023 MusiliBank. All rights reserved
        </p>

        <div className="flex flex-row mt-6">
          {socialMedia.map((social, i) => (
            <img
              src={social.icon}
              className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6`}
              key={social.id}
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
