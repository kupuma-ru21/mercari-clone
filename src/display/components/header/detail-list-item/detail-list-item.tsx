import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import { ModalContent } from '@/types/header/modal';
import Styles from './detail-list-item-style.scss';

type Props = {
  detailItem: ModalContent;
};

const DetailListItem: React.FC<Props> = ({ detailItem }) => {
  const [className, setClassName] = useState(Styles.listItem);
  const onMouseEnter = (): void => {
    setClassName([Styles.listItem, Styles.hoverListItem].join(' '));
  };
  const onMouseLeave = (): void => setClassName(Styles.listItem);

  const { history } = useReactRouter();
  const clickDetailItem = (): void => {
    history.push(`/category/${detailItem.id}`);
  };

  return (
    <li
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={clickDetailItem}
    >
      {detailItem.text}
    </li>
  );
};

export default DetailListItem;
