import { FaRegCompass } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 ">
      <div className="mx-auto max-w-5xl px-4 py-[4.15rem] sm:px-6 lg:px-8">
        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <Link href="https://www.github.com/Sayakdutt/quickShare" target="_blank">
              <FaGithub
                size={40}
                className=" text-gray-700 transition hover:text-gray-700/75"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/sayak-dutta-b5b971240/"
              target="_blank"
            >
              <FaLinkedin
                size={40}
                className=" text-gray-700 transition hover:text-gray-700/7"
              />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/Sayakd01" target="_blank">
              <FaSquareXTwitter
                size={40}
                className=" text-gray-700 transition hover:text-gray-700/75"
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
