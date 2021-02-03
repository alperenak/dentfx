import React, { useState } from 'react';
import searchIcon from '../../icons/search.svg';
import './search.scss';
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
export default function Search() {
  const history = useHistory();
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const submitSearch = () => {
    history.push(`searchPage?keyword=${keyword}&city=${location}`);
  };

  return (
    <div className='searchSectionWrapper'>
      <div className='searchSection'>
        <div className='searchBars'>
          <div className='keyword'>
            <TextField
              style={{ backgroundColor: 'white', color: 'black' }}
              placeholder='Keyword'
              size='small'
              variant='outlined'
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
            <TextField
              style={{
                backgroundColor: 'white',
                color: 'black',
                marginLeft: '10px',
              }}
              placeholder='Location'
              size='small'
              variant='outlined'
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>
          <button
            type='button'
            className='btn btn-primary findJob'
            onClick={submitSearch}
          >
            Ara
          </button>
        </div>
      </div>
    </div>
  );
}
