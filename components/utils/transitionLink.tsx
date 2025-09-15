'use client';
import { TransitionLinkProps } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink  = ({children, href, ...props}: TransitionLinkProps) => {
    const router = useRouter();
    const handleTransition = async(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
e.preventDefault();
const body = document.querySelector('body');
body?.classList.add('page-transition');
await sleep(200);
router.push(href);
await sleep(200);

body?.classList.remove('page-transition');
    }
  return (
<Link href={href} {...props} onClick={handleTransition}>{children}</Link>
  )
}

export default TransitionLink;
