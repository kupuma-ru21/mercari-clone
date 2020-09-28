import React, { useContext } from 'react';
import { ModalContext } from '@/contexts';
import { categoryDetail } from '@/constans/header';
import Styles from './modal-detail-style.scss';

const ModalDetail: React.FC = () => {
  const { state } = useContext(ModalContext);
  const detailkey = `categoryDetail_${state.listItemID}`;
  return (
    <ul>
      {categoryDetail[detailkey].map((item) => (
        <li key={item.id} className={Styles.listItem}>
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default ModalDetail;
