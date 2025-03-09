import React from 'react';
import { eduFormal, eduSelf, experienceDetails } from './customs/expriItms';

const Expri = () => {
  return (
    <div>
      <h1 className='text-2xl font-[650]'>Experience</h1>
      <div>
        {experienceDetails.map((experience) => (
          <div key={experience.id}>
            <h1 className='font-semibold'>{experience.title}</h1>
            <p className='text-md'>{experience.duration}</p>
            <ul>
              <li>{experience.content}</li>
            </ul>
          </div>
        ))}
      </div>

      <section className='pt-3'>
      <h1 className='text-2xl font-[650]'>Education and Training</h1>
      <div>
        {eduFormal.map((edu) => (
          <div key={edu.id} style={{
            lineHeight: '1.75rem',
           }}>
            <h1 className='font-semibold'>{edu.title}</h1>
            <p>{edu.school}</p>
          </div>
        ))}
      </div>
      <div>
        {eduSelf.map((edu) => (
          <div key={edu.id}>
            <h1 className='font-semibold'>{edu.title}</h1>
            <p className='text-md'>{edu.duration}</p>
          </div>
        ))}
      </div>
      </section>
    </div>
  );
}

export default Expri;
