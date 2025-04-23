import "./Sidebar.css";
import { FiHome, FiClock, FiThumbsUp, FiList, FiVideo, FiBookOpen } from "react-icons/fi";
import { MdSubscriptions, MdOutlineSlowMotionVideo } from "react-icons/md";
import {  BsClockHistory } from "react-icons/bs";
import { useSidebar } from "../contexts/SidebarContext";
import SidebarMini from "./SidebarMini";

const Sidebar: React.FC = () => {
    const { isOpen } = useSidebar();

    if (!isOpen) return <SidebarMini />;
  return (
    <aside className="sidebar">
      <div className="section">
        <SidebarItem icon={<FiHome />} label="Principal" active />
        <SidebarItem icon={<MdOutlineSlowMotionVideo />} label="Shorts" />
        <SidebarItem icon={<MdSubscriptions />} label="Suscripciones" dot />
      </div>

      <div className="section">
        <SidebarItem icon={<BsClockHistory />} label="Historial" />
        <SidebarItem icon={<FiList />} label="Playlists" />
        <SidebarItem icon={<FiVideo />} label="Tus videos" />
        <SidebarItem icon={<FiBookOpen />} label="Tus cursos" />
        <SidebarItem icon={<FiClock />} label="Ver más tarde" />
        <SidebarItem icon={<FiThumbsUp />} label="Videos que me gustan" />
      </div>

      <div className="section">
        <h4>Suscripciones</h4>
        <SidebarChannel name="Santuario de Luján" />
        <SidebarChannel name="The Soul of Rain" />
        <SidebarChannel name="María con nosotros" />
        <SidebarChannel name="Para Salvarte JHS" />
        <SidebarChannel name="Misión Ruah Four" />
        <SidebarChannel name="Milagros de la Fe" />
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  dot?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, dot }) => (
  <div className={`sidebar-item ${active ? "active" : ""}`}>
    <span className="icon">{icon}</span>
    <span>{label}</span>
    {dot && <span className="dot" />}
  </div>
);

const SidebarChannel: React.FC<{ name: string }> = ({ name }) => (
  <div className="sidebar-channel">
    <div className="avatar" />
    <span>{name}</span>
    <span className="dot live" />
  </div>
);

export default Sidebar;
