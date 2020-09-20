import React, { useState, memo } from 'react';
import useReactRouter from 'use-react-router';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { src, alt, placeholder } from '@/constans';
import Styles from './header-styles.scss';

const Header: React.FC = () => {
  const { history } = useReactRouter();
  const [state, setState] = useState({ search: '' });
  const returnHome = (): void => history.push('/');
  const onChange = (event): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (): void => history.push(`/search?keyword=${state.search}`);

  return (
    <div className={Styles.headerWrap}>
      <img src={src} alt={alt} onClick={returnHome} />
      <form aria-label="form" onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          fullWidth
          size="small"
          placeholder={placeholder}
          name="search"
          value={state.search}
          onChange={onChange}
        />
      </form>
      <SearchIcon
        titleAccess="svg"
        className={Styles.icon}
        onClick={onSubmit}
      />
    </div>
  );
};

export default memo(Header);
