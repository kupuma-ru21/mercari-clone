import React, { useContext } from 'react';
import { ModalContext } from '@/contexts';
import { ModalContent } from '@/types/header/modal';
import { categoryDetail } from '@/constans/header';
import { DetailListItem } from '@/display/components/header';
import Styles from './modal-detail-style.scss';

const ModalDetail: React.FC = () => {
  const { state } = useContext(ModalContext);
  const detailkey = `categoryDetail${state.listItemID}`;
  return (
    <ul className={Styles.modalDetailWrap}>
      {categoryDetail[detailkey].map((item: ModalContent) => (
        <DetailListItem key={item.id} detailItem={item} />
      ))}
    </ul>
  );
};

export default ModalDetail;
