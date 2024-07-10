import Image from 'next/image';
import styles from './logo.module.scss';

/* eslint-disable-next-line */
export interface LogoProps {
  imageUrl?: string;
}

export function Logo(props: LogoProps) {
  const { imageUrl = '/images/logo-equatorial.png' } = props;

  return (
    <div className={styles['container']}>
      <Image src={imageUrl} alt="logo Equatorial" width={151} height={33} />
    </div>
  );
}

export default Logo;
