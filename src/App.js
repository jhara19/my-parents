import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routers } from './Routes/Router';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
