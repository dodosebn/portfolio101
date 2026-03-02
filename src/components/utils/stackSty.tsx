import React from 'react';
import { stackStyProps } from '@/types';

const StackSty = ({ stackName: IconComponent }: stackStyProps) => {
  return (
    <div>
      <IconComponent/>
    </div>
  );
};

export default StackSty;