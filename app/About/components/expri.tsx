import React from 'react';
import { eduFormal, eduSelf, experienceDetails } from './customs/expriItms';

const Expri: React.FC = () => {
  const sortedExperience = [...experienceDetails].sort((a, b) => b.date.localeCompare(a.date));
  const sortedEduFormal = [...eduFormal].sort((a, b) => b.date.localeCompare(a.date));
  const sortedEduSelf = [...eduSelf].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className='my-4'>
     
      <h1 className='text-2xl font-[650] py-3'>Experience</h1>
      <div className='space-y-4'>
        {sortedExperience.map((experience, index) => (
          <div key={`${experience.id}-${index}`} className='space-y-1'>
            <h1 className='font-semibold text-lg'>{experience.title}</h1>
            <p className='text-md text-gray-600 dark:text-gray-400'>{experience.duration}</p>
            <ul className='list-disc list-inside'>
              <li className='text-gray-700 dark:text-gray-300'>{experience.content}</li>
            </ul>
          </div>
        ))}
      </div>

      <div className='pt-3 border-b-[1.2px] border-b-black dark:border-gray-400 pb-2 my-6'></div>

      <section className='pt-3'>
        <h1 className='text-2xl font-[650] mb-4'>Education and Training</h1>

        <div className='space-y-4'>
          {sortedEduFormal.map((edu, index) => (
            <div key={`${edu.id}-${index}`} className='space-y-1'>
              <h1 className='font-semibold text-lg'>{edu.title}</h1>
              <p className='text-gray-600 dark:text-gray-400'>{edu.school}</p>
            </div>
          ))}
        </div>

        <div className='space-y-4 pt-4'>
          {sortedEduSelf.map((edu, index) => (
            <div key={`${edu.id}-${index}`} className='space-y-1'>
              <h1 className='font-semibold text-lg'>{edu.title}</h1>
              <p className='text-gray-600 dark:text-gray-400'>{edu.duration}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Expri;