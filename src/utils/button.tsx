import { Link } from '@tanstack/react-router';
import { FaAngleRight } from 'react-icons/fa';

const Button = () => {
  return (
  <button className="bg-[#B23E3E] gap-4 flex items-center text-white font-bold px-4 py-3 rounded-sm transition-all duration-300 transform hover:scale-105 group">
                <Link to="/donate">
                  <div className="relative h-6 overflow-hidden">
                    <div className="transition-transform duration-800 ease-in-out group-hover:-translate-y-6">
                      <span className="block h-6">Donate Now</span>
                      <span className="block h-6">Sponsor Us</span>
                    </div>
                  </div>
                </Link>
                <FaAngleRight className="text-lg" />
              </button>
  )
}

export default Button;
