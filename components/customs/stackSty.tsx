import React from 'react';
import { stackStyProps } from '@/types';

const StackSty = ({ stackName: IconComponent }: stackStyProps) => {
  return (
    <div>
      <IconComponent color='red' />
    </div>
  );
};

export default StackSty;
