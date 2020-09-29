import React, { useState } from 'react';
import { ModalContent } from '@/types/header/modal';
import Styles from './detail-list-item-style.scss';

type Props = {
  item: ModalContent;
};

const DetailListItem: React.FC<Props> = ({ item }) => {
  const [className, setClassName] = useState(Styles.listItem);
  const onMouseEnter = (): void => {
    setClassName([Styles.listItem, Styles.hoverListItem].join(' '));
  };
  const onMouseLeave = (): void => setClassName(Styles.listItem);

  return (
    <li
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {item.text}
    </li>
  );
};

export default DetailListItem;
