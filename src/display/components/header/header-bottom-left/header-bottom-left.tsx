import React, { memo } from 'react';
import { Modal, SearchByCategory, SearchByBrand } from '@/display/components';
import Styles from './header-bottom-left-style.scss';

const HeaderBottomLeft: React.FC = () => {
  return (
    <div className={Styles.leftSide}>
      <Modal el={<SearchByCategory />} />
      <Modal el={<SearchByBrand />} />
    </div>
  );
};

export default memo(HeaderBottomLeft);
