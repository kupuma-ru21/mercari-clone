import React, { memo } from 'react';
import { categoryArray, brandArray } from '@/constans';
import { Modal, SearchByCategory, SearchByBrand } from '@/display/components';
import Styles from './header-bottom-left-style.scss';

const HeaderBottomLeft: React.FC = () => (
  <div className={Styles.leftSide}>
    <Modal elInfo={{ el: <SearchByCategory />, modal: categoryArray }} />
    <Modal elInfo={{ el: <SearchByBrand />, modal: brandArray }} />
  </div>
);

export default memo(HeaderBottomLeft);
