import React, { useContext } from 'react';
import { ModalContext } from '@/contexts';
import { ModalContent } from '@/types/header/modal';
import { categoryDetail } from '@/constans/header';
import { DetailListItem } from '@/display/components';

const ModalDetail: React.FC = () => {
  const { state } = useContext(ModalContext);
  const detailkey = `categoryDetail${state.listItemID}`;
  return (
    <ul>
      {categoryDetail[detailkey].map((item: ModalContent) => (
        <DetailListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ModalDetail;
