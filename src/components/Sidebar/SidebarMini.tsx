import React from "react";
import { FiHome } from "react-icons/fi";
import { MdOutlineSlowMotionVideo, MdSubscriptions } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SidebarMini: React.FC = () => {
  return (
    <aside className="sidebar mini">
      <MiniItem icon={<FiHome />} label="Principal" />
      <MiniItem icon={<MdOutlineSlowMotionVideo />} label="Shorts" />
      <MiniItem icon={<MdSubscriptions />} label="Suscripciones" />
      <MiniItem icon={<FaUser />} label="Tú" />
    </aside>
  );
};

const MiniItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="mini-item">
    <span className="icon">{icon}</span>
    <span className="label">{label}</span>
  </div>
);

export default SidebarMini;
