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

      <FormModal title="정보 입력 모달" description="정보를 입력하세요" {...modalProps}>
        <label>
          <p>Email</p>
          <input name="email" type="email" required />
        </label>
        <label>
          <p>Name</p>
          <input name="name" type="text" required />
        </label>
        <label>
          <p>Phone (Optional)</p>
          <input name="phone" type="tel" />
        </label>
      </FormModal>
    </div>
  );
};

export default ModalFormPage;
