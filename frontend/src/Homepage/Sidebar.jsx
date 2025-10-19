import { Link } from "react-router-dom";
import { FaUser, FaLeaf, FaBook, FaTrophy, FaClock, FaRobot, FaUserFriends, FaQuestionCircle, FaInfoCircle, FaEnvelope } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="homepage-sidebar">
      <Link className="sidebarButton" to="/profile">
        <FaUser /><span>Profile</span>
      </Link>
      <Link className="sidebarButton" to="/meditate">
        <FaLeaf /><span>Meditate</span>
      </Link>
      <Link className="sidebarButton" to="/journal">
        <FaBook /><span>Journal</span>
      </Link>
      <Link className="sidebarButton" to="/leaderboard">
        <FaTrophy /><span>Leaderboard</span>
      </Link>
      <Link className="sidebarButton" to="/pomodoro">
        <FaClock /><span>Pomodoro</span>
      </Link>
      <Link className="sidebarButton" to="/chatbot">
        <FaRobot /><span>Use AI</span>
      </Link>
      <Link className="sidebarButton" to="/add-friends">
        <FaUserFriends /><span>Add Friends</span>
      </Link>
      <Link className="sidebarButton" to="/faq">
        <FaQuestionCircle /><span>FAQ</span>
      </Link>
      <Link className="sidebarButton" to="/about">
        <FaInfoCircle /><span>About</span>
      </Link>
      <Link className="sidebarButton" to="/contact-us">
        <FaEnvelope /><span>Contact Us</span>
      </Link>
    </div>
  );
}
