import React from 'react';
import { ModalContent } from '@/types/modal';

type Props = {
  item: ModalContent;
};

const ModalDetail: React.FC<Props> = ({ item }) => {
  return <div>{item.text}</div>;
};

export default ModalDetail;
