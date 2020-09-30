import React, { memo } from 'react';
import {
  HeaderBottomLeft,
  HeaderBottomRight,
} from '@/display/components/header';
import Styles from './header-bottom-style.scss';

const HeaderBottom: React.FC = () => {
  return (
    <div className={Styles.headerBottomWrap}>
      <HeaderBottomLeft />
      <HeaderBottomRight />
    </div>
  );
};

export default memo(HeaderBottom);
