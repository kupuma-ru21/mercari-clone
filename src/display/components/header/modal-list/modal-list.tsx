import React from 'react';
import { ModalContent } from '@/types/modal';
import Styles from './modal-list-style.scss';

type Props = {
  item: ModalContent;
};

const ModalList: React.FC<Props> = ({ item }) => (
  <li className={Styles.listItem}>{item.text}</li>
);

export default ModalList;
