import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {

  };

  return {
    isOpen,
    modalProps: {
      isOpen,
    },
  };
};
export type UseModal = ReturnType<typeof useModal>;