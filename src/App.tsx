import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import { SidebarProvider } from './contexts/SidebarContext';

function App() {
  return (
    <SidebarProvider>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="videos-container">
            <VideoGrid/>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
