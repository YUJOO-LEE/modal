import { FormModal, useFormModal } from './@components/FormModal';
import styles from './ModalFormPage.module.css';

const ModalFormPage = () => {
  const { modalProps, open } = useFormModal();

  const handleOpen = async () => {
    const result = await open();
    console.log('Modal closed with result:', result);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handleOpen}>
        Open Modal
      </button>
      <FormModal {...modalProps} />
    </div>
  );
};

export default ModalFormPage;
