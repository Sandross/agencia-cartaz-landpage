// React
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Styles
import styles from './styles.module.scss';

// Pages
import HomePage from '../Pages/HomePage';

// Components
import Layout from '../Components/Layout';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;