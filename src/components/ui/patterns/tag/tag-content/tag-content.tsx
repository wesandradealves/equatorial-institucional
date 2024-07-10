import styles from './tag-content.module.scss';

/* eslint-disable-next-line */
export class TagContentProps {
  label?: String = '';
}

export function TagContent(props: TagContentProps) {
  const { label = 'Label' } = props;

  return (
    <div className={styles.tag}>
      <span>{label}</span>
    </div>
  );
}

export default TagContent;
