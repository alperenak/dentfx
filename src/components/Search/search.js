import React from 'react';
import Input from '../Input';
import searchIcon from '../../icons/search.svg';
import './search.scss';
export default function Search() {
  return (
    <div className='searchSectionWrapper'>
      <div className='searchSection'>
        <div className='searchBars'>
          <div className='keyword'>
            <Input
              type={'text'}
              placeholder={'Ara'}
              size={'responsive'}
              labelDescription={'Enter a word to search'}
              icon={{ src: searchIcon, position: 'right' }}
              label={'Keyword'}
            />
          </div>
          <div className='keyword'>
            <Input
              type={'text'}
              placeholder={'Ara'}
              size={'responsive'}
              labelDescription={'Enter a word to search'}
              icon={{ src: searchIcon, position: 'right' }}
              label={'Location'}
            />
          </div>
          <button
            type='button'
            style={{ marginBottom: '20px' }}
            className='btn btn-primary findJob'
          >
            Ara
          </button>
        </div>
      </div>
    </div>
  );
}
