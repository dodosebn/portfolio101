import { MdAddIcCall } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";

interface ContactDetail {
  id: number;
  content: string;
  logo: React.ComponentType;
}

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
    logo: FaMagnifyingGlassLocation,
  },
];

export default ContactDetails;
