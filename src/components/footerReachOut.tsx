import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaCreativeCommons } from "react-icons/fa6";

const FooterReachOut = () => {
  return (
    <div className="flex footer justify-between border-t-[1.3px]
     border-gray-400 my-4 pt-2">
      <div className="flex gap-2">
        <span className="pt-1">
          <FaCreativeCommons />
        </span>{" "}
        <p>26 Learning_Dodo's</p>
      </div>
      <div className="pt-1">
        <ul className="flex gap-2">
          <li>
            <a href="mailto:orjidominion32@gmail.com">
              <IoMailOutline />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/orji/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/dodosebn">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://x.com/Learning_Dodos"></a>
            <FaXTwitter />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterReachOut;
