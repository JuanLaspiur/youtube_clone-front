import './App.css';
import Header from './components/Header/Index';
import Sidebar from './components/Sidebar/Sidebar';
import VideoGallery from './components/VideoGallery';
// import VideoGrid from './components/VideoGrid/VideoGrid';
import VideoPlayer from './components/VideoPlayer';
import { SidebarProvider } from './contexts/SidebarContext';

function App() {
  return (
    <SidebarProvider>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="videos-container row">
          <VideoPlayer
            title='🎙️ Pablo Daguerre en Radio TFK: "Voy a las marchas porque soy hijo de la educación pública"'
            youtubeId="HE_0KF3Dx1E"
          />
          <VideoGallery/>
          </div>
          
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
