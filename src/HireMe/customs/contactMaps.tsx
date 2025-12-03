import { MdAddIcCall } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { ContactDetail } from "@/types";

const ContactDetails: ContactDetail[] = [
  {
    id: 1,
    content: '+234 7069280208',
    logo: MdAddIcCall,
  },
  {
    id: 2,
    content: 'orjidominion32@gmail.com',
    logo: IoMdMailUnread,
  },
  {
    id: 3,
    content: 'Abakaliki, Nigeria',
    logo: FaLocationDot,
  },
  {
    id: 4,
    content: 'Whatsapp Me',
    logo: FaWhatsapp 

  }
];

export default ContactDetails;
