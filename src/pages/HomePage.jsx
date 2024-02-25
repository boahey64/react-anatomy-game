import styled from 'styled-components';
import ImageLink from '../components/ImageLink.jsx';
import Header from '../components/header/Header.jsx';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-left: 1.5rem;
  align-items: center;
  justify-content: center;
`;

export default function HomePage() {
  return (
    <main className={'center'}>
      <Header />
      <h1>Advanced Anatomy</h1>
      <ControlContainer>
        <ImageLink path={'/muscles'} img={'./thumbnails/MuskelnThumbnail.png'} alt={'Muskeln'} />
        <ImageLink path={'/bones'} img={'./thumbnails/FemurThumbnail.png'} alt={'Knochen'} />
        <ImageLink path={'/tictactoe'} img={'./game/game-logo.png'} alt={'TicTacToe'} />
      </ControlContainer>
    </main>
  );
}
