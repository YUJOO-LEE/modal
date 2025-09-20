import { useState } from 'react';
import type { UseModal } from './@hooks/useFormModal';

type Props = UseModal['modalProps'];

export const FormModal = (props: Props) => {
  const { isOpen, submit, cancel } = props;

  const [form, setForm] = useState('hi');

  const handleSubmit = () => {
    submit(form);
  };

  return (
    <dialog open={isOpen}>
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