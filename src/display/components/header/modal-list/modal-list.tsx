import React from 'react';
import useReactRouter from 'use-react-router';
import { ElInfo, ModalContent } from '@/types/modal';
import Styles from './modal-list-style.scss';

type Props = {
  itemInfo: {
    item: ModalContent;
    elInfo: ElInfo;
  };
};

const ModalList: React.FC<Props> = ({ itemInfo }) => {
  const { item, elInfo } = itemInfo;
  const { history } = useReactRouter();
  const transaction = (): void => {
    if (item.text === 'カテゴリー 一覧') {
      history.push(`/${elInfo.name}`);
      return;
    }
    history.push(`/${elInfo.name}/${item.id}`);
  };
  return (
    <li className={Styles.listItem} onClick={transaction}>
      {item.text}
    </li>
  );
};

export default ModalList;
