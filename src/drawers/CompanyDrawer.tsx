import { Button, Divider } from "antd";
import { ArrowLeftOutlined, BankOutlined } from "@ant-design/icons";

type Props = {
  onClose: () => void;
};

const ADDRESS = [
  ["Logradouro", "Avenida das Nações Unidas"],
  ["Número", "12.901"],
  ["Complemento", "Torre Oeste, 18º Andar - Sala 182"],
  ["Bairro", "Brooklin Novo"],
  ["Cidade", "São Paulo"],
  ["Estado", "SP"],
  ["CEP", "04578-000"],
];

export function CompanyDrawer({ onClose }: Props) {
  return (
    <div className="drawer-body">
      <div>
        <Button type="link" icon={<ArrowLeftOutlined />} onClick={onClose} style={{ paddingLeft: 0 }}>
          Voltar
        </Button>
        <h2 className="drawer-title" style={{ fontSize: 24, lineHeight: "32px", fontWeight: 600 }}>
          Detalhes da Operação
        </h2>
      </div>
      <div className="drawer-body__content">
        <div className="section-label">Informações da Empresa</div>
        <div className="company-card">
          <span className="icon-tile">
            <BankOutlined />
          </span>
          <div>
            <p className="company-card__name">FIDC XPTO I</p>
            <p className="company-card__cnpj">CNPJ: 48.392.104/0001-75</p>
          </div>
        </div>
        <div className="detail-card">
          <div className="detail-card__title">Endereço</div>
          <Divider style={{ margin: 0 }} />
          {ADDRESS.map(([label, value]) => (
            <div className="detail-field" key={label}>
              <span className="detail-field__label">{label}</span>
              <span className="detail-field__value">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="drawer-actions">
        <Button type="primary" size="large" block onClick={onClose}>
          Fechar
        </Button>
      </div>
    </div>
  );
}
