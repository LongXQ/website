import { AccessibleIcon } from '@radix-ui/react-accessible-icon';

export const RadixLogo = ({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & { label?: string }) => (
  <AccessibleIcon label={label || 'Radix Logo'}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      {...props}
    >
      <path
        d="M17 35C10.3726 35 5 30.0751 5 24C5 17.9249 10.3726 13 17 13L17 35Z"
        fill="currentColor"
      />
      <rect x="5" width="12" height="12" fill="currentColor" />
      <circle cx="24" cy="6" r="6" fill="currentColor" />
    </svg>
  </AccessibleIcon>
);
