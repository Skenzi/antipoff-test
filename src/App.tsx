import { RouterProvider } from 'react-router-dom';
import router from './routes/index';
import { Provider } from 'react-redux';
import store from './store';
import './styles/main.scss';

const App = () => {
    return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
    )
}

export default App;