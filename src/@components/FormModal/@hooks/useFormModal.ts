import { useCallback, useRef, useState } from 'react';

type ModalPromise<T> = {
  resolve: (value: T) => void;
  reject: (reason?: any) => void;
};

export const useFormModal = <T>() => {
  const [promise, setPromise] = useState<ModalPromise<T>>();
  const modalRef = useRef<HTMLDialogElement>(null);

  const open = useCallback(() => {
    modalRef.current?.showModal();
    return new Promise((resolve, reject) => {
      setPromise({ resolve, reject });
    });
  }, []);

  const close = () => {
    setPromise(undefined);
    modalRef.current?.close();
  };

  const submit = (form: T) => {
    promise?.resolve(form);
    close();
  };

  const cancel = () => {
    promise?.reject(null);
    close();
  };

  return {
    open,
    modalProps: {
      modalRef,
      isOpen: !!promise,
      submit,
      cancel,
    },
  };
};
export type UseModal = ReturnType<typeof useFormModal>;