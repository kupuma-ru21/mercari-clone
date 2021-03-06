import React, { memo } from 'react';
import { HeaderTop, HeaderBottom } from '@/display/components/header';
import Styles from './header-style.scss';

const Header: React.FC = () => {
  return (
    <div className={Styles.headerWrap}>
      <HeaderTop />
      <HeaderBottom />
    </div>
  );
};

export default memo(Header);
