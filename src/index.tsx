import * as ReactDOM from 'react-dom';
import { content } from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(content, document.getElementById('root') as HTMLElement);
registerServiceWorker();
