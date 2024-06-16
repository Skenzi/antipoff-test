import { createRoot } from 'react-dom/client';
import App from './App';

const runApp = () => {
    const rootElement = document.querySelector('#app');
    const root = createRoot(rootElement);
    root.render(App())
}

runApp()