import React from 'react';
import { experienceDetails } from './customs/expriItms';
import { FaCheckDouble } from 'react-icons/fa6';

const Expri: React.FC = () => {
  const sortedExperience = [...experienceDetails].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <div className="my-4 px-5 md:px-3">
      <div>
        <section className="border border-l-2 border-black">
          <h1 className="text-2xl font-[650] pb-3">Experience</h1>

          <div className="space-y-4">
            {sortedExperience.map((experience, index) => (
              <div
                key={`${experience.id}-${index}`}
                className="relative pl-10 space-y-1"
              >
                <span className="absolute left-1 top-2 w-4 h-4 bg-[#FFA500] rounded-full border-2 border-white shadow" />

                {index !== sortedExperience.length + 1 && (
                  <span className="absolute left-1.5 top-6 w-[1.5px] h-full bg-gray-300"></span>
                )}

                <h1 className="font-semibold text-lg">
                  {experience.title.split(' | ')[0]}
                  <span className="font-bold text-xl inline-block bg-linear-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent">
                    {' '}
                    &nbsp; | &nbsp;{' '}
                  </span>
                  {experience.title.split(' | ')[1]}
                </h1>

                <p className="text-md text-gray-600 dark:text-gray-400">
                  {experience.duration}
                </p>

                <ul className="list-outside space-y-3">
                  {experience.content.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-700 dark:text-gray-300 leading-8 flex gap-1"
                    >
                      <span className="mt-2 text-[#FFA500]">
                        <FaCheckDouble size={15} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Expri;
