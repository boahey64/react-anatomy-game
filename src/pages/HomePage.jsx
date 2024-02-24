import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main>
      <section className="quiz-grid">
        <Link to={'/muscles'}>
          <img
            src={'./thumbnails/MuskelnThumbnail.png'}
            alt="Muskeln"
            width="400px"
            height="800px"
            onClick={() => console.log('click muscles')}
          />
        </Link>
        <Link to={'/muscles'}>
          <img
            src={'./thumbnails/FemurThumbnail.png'}
            alt="Muskeln"
            width="400px"
            height="800px"
            onClick={() => console.log('click bones')}
          />
        </Link>
        <div className={'center'}>
          {/*    <h1>Advanced Anatomy</h1>*/}

          {/*    <div className="quiz-preview">*/}
          {/*        <div className="quiz-picture" data-keywords="Knochen">*/}
          {/*            <img*/}
          {/*                src="thumbnails/FemurThumbnail.png"*/}
          {/*                alt="Hand drawn tic tac toe game board"*/}
          {/*            />*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*    <div className="quiz-preview">*/}
          {/*        <div className="quiz-picture" data-keywords="Knochen">*/}
          {/*            <img*/}
          {/*                src="thumbnails/MuskelnThumbnail2.png"*/}
          {/*                alt="Hand drawn tic tac toe game board"*/}
          {/*            />*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*<button className="quiz-preview">*/}
          {/*  <a href="./selection/Knochen.jsx">*/}
          {/*    <div className="quiz-picture" data-keywords="Knochen">*/}
          {/*      <img*/}
          {/*          className="thumbnail"*/}
          {/*          src="thumbnails/FemurThumbnail.png"*/}
          {/*          onContextMenu="return false;"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*    <div className="quiz-info">Knochen</div>*/}
          {/*  </a>*/}
          {/*</button>*/}

          {/*  <button className="quiz-preview">*/}
          {/*    <a href="./selection/Muskel.jsx">*/}
          {/*      <div className="quiz-picture" data-keywords="Knochen">*/}
          {/*        <img*/}
          {/*          className="thumbnail"*/}
          {/*          src="thumbnails/MuskelnThumbnail2.png"*/}
          {/*          onContextMenu="return false;"*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*      <div className="quiz-info">Muskeln</div>*/}
          {/*    </a>*/}
          {/*  </button>*/}
        </div>
      </section>
    </main>
  );
}
