import React, { memo } from 'react';
import { categoryArray, brandArray } from '@/constans';
import { Modal, SearchByCategory, SearchByBrand } from '@/display/components';
import Styles from './header-bottom-left-style.scss';

const HeaderBottomLeft: React.FC = () => (
  <div className={Styles.leftSide}>
    <Modal
      elInfo={{
        el: <SearchByCategory />,
        modal: categoryArray,
        name: 'category',
      }}
    />
    <Modal
      elInfo={{ el: <SearchByBrand />, modal: brandArray, name: 'brand' }}
    />
  </div>
);

export default memo(HeaderBottomLeft);
