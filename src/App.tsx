import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { SidebarProvider } from './contexts/SidebarContext'

function App() {

  return (
    <SidebarProvider>
<Header/>
<Sidebar />
    </SidebarProvider>
  )
}

export default App
