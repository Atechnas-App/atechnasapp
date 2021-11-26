import { Provider } from 'react-redux';
import './App.css';
import { AppRoutes } from './routes/AppRoutes';
import store from './store/store';

function App() {
  return (   
    <div>
      <Provider store={store}>
      <AppRoutes/>
      </Provider>
    </div> 
  );
}

export default App;
