
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import GalleryPage from './pages/GalleryPage';
import Layout from './layout/Layout';
import DetailPage from './pages/DetailPage';
import EditPage from './pages/EditPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path ="/home" element={<HomePage />} />
          <Route path ="/create" element={<CreatePage />} />
          <Route path ="/gallery" element={<GalleryPage />} />
          <Route path ="/:id" element={<DetailPage />} />
          <Route path ="/:id/edit" element={<EditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
