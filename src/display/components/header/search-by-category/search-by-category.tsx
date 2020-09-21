import React, { memo } from 'react';
import ListIcon from '@material-ui/icons/List';
import Styles from './search-by-category-style.scss';

const SearchByCategory: React.FC = () => {
  return (
    <div className={Styles.categoryWrap}>
      <ListIcon className={Styles.icon} fontSize="small" />
      <span className={Styles.text}>カテゴリーから探す</span>
    </div>
  );
};

export default memo(SearchByCategory);
