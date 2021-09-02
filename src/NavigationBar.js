import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function Navigator() {
  return (
    <div className="Navigator">
        <nav>
            <h2>Home Bank</h2>
            <ul classname="nvlink">
                <Link to='/'><li>Home</li></Link>
                <Link to='/batchprocessing'><li>Batch Processing</li></Link>
            </ul>
        </nav>
    </div>
  );
}

export default Navigator;
