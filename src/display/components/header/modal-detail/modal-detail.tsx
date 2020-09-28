import React, { useContext } from 'react';
import { ModalContext } from '@/contexts';
import { ModalContent } from '@/types/header/modal';
import { categoryDetail } from '@/constans/header';
import Styles from './modal-detail-style.scss';

const ModalDetail: React.FC = () => {
  const { state } = useContext(ModalContext);
  const detailkey = `categoryDetail${state.listItemID}`;
  return (
    <ul>
      {categoryDetail[detailkey].map((item: ModalContent) => (
        <li key={item.id} className={Styles.listItem}>
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default ModalDetail;
