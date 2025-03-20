import logo from "../assets/chef-claude-icon.png";

export default function Header() {
    return (<header className="header">
        <img src={logo} alt="Chef Claude" />
        <span>Chef Claude</span>
    </header>)
}