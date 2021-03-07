import React from 'react';
import ReactDOM from 'react-dom';
import { MappingLayout } from './components/DropdownComponent/MappingLayout.js';
import './index.css';
const leftOptions = [
  {
    key: '',
    text: '--select--',
    value: '--select--'
  },
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess'
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu'
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano'

  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian'

  },
  {
    key: 'Matt',
    text: 'Matt',
    value: 'Matt'

  },
  {
    key: 'Justen Kitsune',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune'

  },
];

const rightOptions = [
  {
    key: '',
    text: '--select--',
    value: '--select--'
  },
  { key: 'af', value: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', text: 'Albania' },
  { key: 'dz', value: 'dz', text: 'Algeria' },
  { key: 'as', value: 'as', text: 'American Samoa' },
  { key: 'ad', value: 'ad', text: 'Andorra' },
  { key: 'ao', value: 'ao', text: 'Angola' },
  { key: 'ai', value: 'ai', text: 'Anguilla' },
  { key: 'ag', value: 'ag', text: 'Antigua' },
  { key: 'ar', value: 'ar', text: 'Argentina' },
  { key: 'am', value: 'am', text: 'Armenia' },
  { key: 'aw', value: 'aw', text: 'Aruba' },
  { key: 'au', value: 'au', text: 'Australia' },
  { key: 'at', value: 'at', text: 'Austria' },
  { key: 'az', value: 'az', text: 'Azerbaijan' },
  { key: 'bs', value: 'bs', text: 'Bahamas' },
  { key: 'bh', value: 'bh', text: 'Bahrain' },
  { key: 'bd', value: 'bd', text: 'Bangladesh' },
  { key: 'bb', value: 'bb', text: 'Barbados' },
  { key: 'by', value: 'by', text: 'Belarus' },
  { key: 'be', value: 'be', text: 'Belgium' },
  { key: 'bz', value: 'bz', text: 'Belize' },
  { key: 'bj', value: 'bj', text: 'Benin' },
]


ReactDOM.render(
  <MappingLayout leftOptions={leftOptions} rightOptions={rightOptions} />,
  document.getElementById('root')
);
