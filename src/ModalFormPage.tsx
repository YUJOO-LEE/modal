import { useState } from 'react';
import { FormModal, useFormModal } from './@components/FormModal';
import styles from './ModalFormPage.module.css';

const ModalFormPage = () => {
  const { modalProps, open } = useFormModal<FormValues>();

  const [result, setResult] = useState<FormValues>();

  const resultList = Object.keys(result ?? {}).map((key) => (
    <li key={key}>
      {key}: {result?.[key as keyof FormValues]}
    </li>
  ));

  const handleOpen = async () => {
    const result = await open();
    if (!result) return;
    setResult(result);
  };

  return (
    <div className={styles.wrapper}>
      <button autoFocus className={styles.button} onClick={handleOpen}>
        신청 폼 작성하기
      </button>
      {resultList.length > 0 && (
        <div className={styles.result}>
          <h3>폼 결과</h3>
          {resultList}
        </div>
      )}

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

type FormValues = {
  email: string;
  name: string;
  phone?: string;
};