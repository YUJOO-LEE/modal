import React, { useEffect, useRef } from 'react';
import type { UseModal } from './@hooks/useFormModal';
import { allowScroll, preventScroll } from './@utils';
import styles from './index.module.css';

type Props<T> = UseModal<T>['modalProps']& {
  title: string;
  description: string;
};

export const FormModal = <T,>(props: React.PropsWithChildren<Props<T>>) => {
  const { title, description, modalRef, isOpen, submit, cancel, children } = props;

  const triggerElementRef = useRef<HTMLElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const formObject: Record<string, any> = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    submit(formObject as T);
  };

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target !== event.currentTarget) return;
    cancel();
  };

  useEffect(() => {
    if (!isOpen) return;
    triggerElementRef.current = document.activeElement as HTMLElement;

    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
      triggerElementRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <dialog
      ref={modalRef}
      className={styles.wrapper}
      aria-modal
      aria-labelledby={title}
      aria-describedby={description}
      onClick={handleBackdropClick}
    >
      <header>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </header>
      <form method="dialog" onSubmit={handleSubmit}>
        <div className={styles.content}>
          {children}
        </div>
        <menu className={styles.action}>
          <button type="button" className={styles.cancel} onClick={cancel}>취소</button>
          <button type="submit" className={styles.submit} value="Submit">제출하기</button>
        </menu>
      </form>
    </dialog>
  );
};
export { useFormModal } from './@hooks/useFormModal';