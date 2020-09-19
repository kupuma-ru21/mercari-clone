import React from 'react';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { src, alt, placeholder } from '@/display/home/constans';
import Styles from '../../styles/header-styles.scss';

const Header: React.FC = () => {
  const onSubmit = () => {
    console.log('aaaa');
  };
  return (
    <div className={Styles.headerWrap}>
      <img src={src} alt={alt} />
      <form onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          fullWidth
          size="small"
          placeholder={placeholder}
        />
      </form>
      <SearchIcon className={Styles.icon} />
    </div>
  );
};

export default Header;
