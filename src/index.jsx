import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App.jsx";

const entryPoint = document.getElementById('root');
const root = ReactDOM.createRoot(entryPoint);
root.render(<App />);
