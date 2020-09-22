import React from 'react';
import useReactRouter from 'use-react-router';
import { ModalContent } from '@/types/modal';
import Styles from './modal-list-style.scss';

type Props = {
  item: ModalContent;
};

const ModalList: React.FC<Props> = ({ item }) => {
  const { history } = useReactRouter();
  const transaction = (): void => history.push(`/category/${item.id}`);
  return (
    <li className={Styles.listItem} onClick={transaction}>
      {item.text}
    </li>
  );
};

export default ModalList;
