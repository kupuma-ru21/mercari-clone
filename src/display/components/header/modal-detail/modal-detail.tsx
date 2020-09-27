import React, { useContext } from 'react';
import { ModalContext } from '@/contexts';
import { categoryDetail } from '@/constans/header';

const ModalDetail: React.FC = () => {
  const { state } = useContext(ModalContext);
  const detailkey = `categoryDetail_${state.listItemID}`;
  return (
    <ul>
      {categoryDetail[detailkey].map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default ModalDetail;
