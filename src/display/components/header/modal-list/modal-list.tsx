import React from 'react';
import { Props } from '@/types/header/modal-list';
import { ModalContent } from '@/types/header/modal';
import { ListItem } from '@/display/components/header';

const ModalList: React.FC<Props> = ({ elInfo }) => {
  const { modalList } = elInfo;
  return (
    <>
      {modalList.map((item: ModalContent) => (
        <ListItem key={item.id} itemInfo={{ item, elInfo }} />
      ))}
    </>
  );
};

export default ModalList;
