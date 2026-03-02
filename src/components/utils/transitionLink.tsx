import { Link, useNavigate } from '@tanstack/react-router';
import React from 'react';
import type { TransitionLinkProps } from '../../types/index';

// Utility sleep function
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink: React.FC<TransitionLinkProps> = ({ children, href, ...props }) => {
  const navigate = useNavigate();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const body = document.querySelector('body');
    body?.classList.add('page-transition');

    await sleep(200);
    navigate({ to: href as any }); // Type assertion
    await sleep(200);

    body?.classList.remove('page-transition');
  };

  return (
    <Link to={href as any} {...props} onClick={handleTransition}>
      {children}
    </Link>
  );
};
export default TransitionLink;