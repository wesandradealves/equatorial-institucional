import styles from './text-link.module.scss';

/* eslint-disable-next-line */
export interface TextLinkProps {
  label: string;
  url: string;
  icon?: string;
  position?: string;
}

export function TextLink(props: TextLinkProps) {
  const {icon = '', position = '' } = props;

  return (
    <div className={styles['container']}>
      <a href={props.url} style={{flexDirection: `${position == 'left' ? 'row' : 'row-reverse' }`}}>
        {props.label}
        <span className={`material-symbols-rounded ${styles.icon}`}>
          {icon}
        </span>
      </a>
    </div>
  );
}

export default TextLink;
