import { Link } from 'react-router-dom';

export default function ImageLink({ path, img, alt }) {
  return (
    <Link to={path}>
      <img
        src={img}
        alt={alt}
        width="400px"
        height="600px"
      />
    </Link>
  )
}
