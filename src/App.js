import Body from './components/Body';
import { Provider } from 'react-redux'
import appstore from './utils/appStore';
import {BrowserRouter} from 'react-router-dom'
import ScrollOnTop from './components/ScrollOnTop';
function App() {
  
  return (
   <>
      <Provider store={appstore}><Body/></Provider>
   </>
  );
}

export default App;
