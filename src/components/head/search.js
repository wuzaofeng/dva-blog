import React from 'react'
import PropTypes from "prop-types";
import { Input } from 'antd';
import style from './head.scss';
const { Search } = Input;

function SearchInput() {
  return (
    <Search
      className={style.input}
      placeholder="文章搜索"
      onSearch={value => console.log(value)}
    />
  )
}

SearchInput.propTypes = {
  col: PropTypes.object
}

export default SearchInput
