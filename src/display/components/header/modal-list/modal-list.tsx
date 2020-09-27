import React from 'react';
import { Props } from '@/types/modal-list';
import { ModalContent } from '@/types/modal';
import { ListItem } from '@/display/components';

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
