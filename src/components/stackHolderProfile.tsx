import StackAnima from './customs/stackAnima';
import { useTheme } from './themeProvider';

const StackHolderProfile = () => {
  const { theme } = useTheme();
  
  const backgroundImage = theme === 'dark' 
    ? "url('/imgs/bg-img.jpg')" 
    : "url('/imgs/bg-2.avif')";

  return (
    <div
      style={{
        position: 'relative',
        backgroundImage,
        backgroundSize: 'cover',
        padding: '2rem',
        objectFit: 'cover',
      }}
      className='lg:w-[48%] lg:p-20 lg:flex justify-center relative' 
    >
      
      <div className="relative mx-auto w-44 h-44 lg:w-92 lg:h-92 lg:top-12"> 
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img
            src='/imgs/ebn1 (2).jpg'
            alt="My Profile"
            className="rounded-full w-full h-full border-[3px] border-solid border-[#d3d3d3]"
          />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <StackAnima />
        </div>
      </div>
    </div>
  );
};

export default StackHolderProfile;