export interface ButtonLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  target?: string;
  logo?: string;
  upperText?: string;
  lowerText?: string;
  
}

function ButtonLink({ className, href, children,target }: ButtonLinkProps) {
  return <a href={href} children={children} className={className} target={target}></a>;
}

export default ButtonLink;
