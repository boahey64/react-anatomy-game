import { Link } from 'react-router-dom';

export default function MusclesPage({ winner, onRestart }) {
  return (
    <>
      <p>
        <Link to={'/'}>back</Link>
      </p>
      <h1 className={'center'}>Muskeln</h1>
    </>
  );
}
