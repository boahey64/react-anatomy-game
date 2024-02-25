import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
      <h1>Advanced Anatomy</h1>
      <ControlContainer>
        <Link to={'/muscles'}>
          <img
            src={'./thumbnails/MuskelnThumbnail.png'}
            alt="Muskeln"
            width="400px"
            height="600px"
            onClick={() => console.log('click muscles')}
          />
        </Link>
        <Link to={'/bones'}>
          <img
            src={'./thumbnails/FemurThumbnail.png'}
            alt="Bones"
            width="400px"
            height="600px"
            onClick={() => console.log('click bones')}
          />
        </Link>
      </ControlContainer>
    </main>
  );
}
