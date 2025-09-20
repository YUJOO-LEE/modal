import { useEffect, useState } from 'react';
import type { UseModal } from './@hooks/useFormModal';
import styles from './index.module.css';
import { allowScroll, preventScroll } from './@utils';

type Props = UseModal['modalProps'];

export const FormModal = (props: Props) => {
  const { modalRef, isOpen, submit, cancel } = props;

  const [form, setForm] = useState('hi');

  const handleSubmit = () => {
    submit(form);
  };

  useEffect(() => {
    if (!isOpen) return;
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, [isOpen]);

  return (
    <dialog ref={modalRef} className={styles.wrapper}>
      <form method="dialog">
        <p>

        </p>
        <menu>
          <button onClick={cancel}>Close</button>
          <button onClick={handleSubmit}>Submit</button>
        </menu>
      </form>
    </dialog>
  );
};
export { useFormModal } from './@hooks/useFormModal';