import React, { memo } from 'react';
import MoreIcon from '@material-ui/icons/More';
import Styles from './search-by-brand-style.scss';

const SearchByBrand: React.FC = () => {
  return (
    <div className={Styles.brandWrap}>
      <MoreIcon className={Styles.icon} fontSize="small" />
      <span className={Styles.text}>ブランドから探す</span>
    </div>
  );
};

export default memo(SearchByBrand);
