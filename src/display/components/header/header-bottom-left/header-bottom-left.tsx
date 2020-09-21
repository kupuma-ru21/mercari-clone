import React, { memo } from 'react';
import { SearchByCategory, SearchByBrand } from '@/display/components';
import Styles from './header-bottom-left-style.scss';

const HeaderBottomLeft: React.FC = () => {
  return (
    <div className={Styles.leftSide}>
      <SearchByCategory />
      <SearchByBrand />
    </div>
  );
};

export default memo(HeaderBottomLeft);
