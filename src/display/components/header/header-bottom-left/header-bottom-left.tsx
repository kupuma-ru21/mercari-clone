import React, { memo } from 'react';
import { categoryArray, brandArray } from '@/constans/header';
import {
  Modal,
  SearchByCategory,
  SearchByBrand,
} from '@/display/components/header';
import Styles from './header-bottom-left-style.scss';

const HeaderBottomLeft: React.FC = () => (
  <div className={Styles.leftSide}>
    <Modal
      elInfo={{
        el: <SearchByCategory />,
        modalList: categoryArray,
        name: 'category',
      }}
    />
    <Modal
      elInfo={{ el: <SearchByBrand />, modalList: brandArray, name: 'brand' }}
    />
  </div>
);

export default memo(HeaderBottomLeft);
