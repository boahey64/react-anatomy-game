import './Header.css'
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin-left: 1.5rem;
    align-items: center;
    justify-content: space-between;
`;

export default function Header() {
  const [searchValue, setSearchValue] = useState('Suche');

  function handleChange(event) {
    setSearchValue(event.target.value);
    console.log('handleChange: ', searchValue);
  }

  return (
    <HeaderContainer>
      <div><p><Link to={'/'}>Advanced Anatomy</Link></p></div>
      <div><p>Menü</p></div>
      <div><p><input type={'text'} value={searchValue} onChange={handleChange}></input></p></div>
      <div><p>Change Language</p></div>
    </HeaderContainer>
  )
}
