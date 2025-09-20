import { useCallback, useState } from 'react';

type ModalPromise<T> = {
  resolve: (value: T) => void;
  reject: (reason?: any) => void;
};

export const useFormModal = <T>() => {
  const [promise, setPromise] = useState<ModalPromise<T>>();

  const open = useCallback(() => {
    return new Promise((resolve, reject) => {
      setPromise({ resolve, reject });
    });
  }, []);

  const close = () => {
    setPromise(undefined);
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
      isOpen: !!promise,
      submit,
      cancel,
    },
  };
};
export type UseModal = ReturnType<typeof useFormModal>;