import { Badge, Avatar } from "antd";
import { BellOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../assets/logo-bullla.svg";

export function AppHeader() {
  return (
    <header className="app-header">
      <img className="app-header__logo" src={logo} alt="Bullla" />
      <div className="app-header__right">
        <div className="app-header__block">
          <Badge count={21} size="small" color="#b60000">
            <span style={{ fontSize: 16, lineHeight: 1 }}>
              <BellOutlined />
            </span>
          </Badge>
          <div className="app-header__meta">
            <span className="app-header__meta-label">Central de Notificações</span>
            <span className="app-header__meta-action">Acessar</span>
          </div>
        </div>
        <div className="app-header__block">
          <Avatar icon={<UserOutlined />} />
          <div className="app-header__meta">
            <span className="app-header__meta-label">Aaron C. Oliveira</span>
            <span className="app-header__meta-role">Operações</span>
          </div>
        </div>
      </div>
    </header>
  );
}
