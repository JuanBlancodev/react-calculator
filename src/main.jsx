import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './styles/main.css'

import { GlobalContextProvider } from './context/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
)
