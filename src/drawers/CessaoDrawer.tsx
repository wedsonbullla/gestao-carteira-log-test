import { Button, Divider, Table, Tag } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  BankOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { CESSAO_PRODUCTS } from "../data/logs";

type Props = {
  onClose: () => void;
};

export function CessaoDrawer({ onClose }: Props) {
  const totalContracts = CESSAO_PRODUCTS.reduce((sum, row) => sum + row.contracts, 0);

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
        <div className="party-row">
          <article className="party-card">
            <span className="icon-tile">
              <DollarOutlined />
            </span>
            <div className="party-card__text">
              <p className="party-card__title">
                Cedente: <strong>FIDC BULLLA CARTÕES</strong>
              </p>
              <p className="company-card__cnpj">46.655.552/0001-36</p>
            </div>
          </article>
          <span className="party-arrow">
            <ArrowRightOutlined />
          </span>
          <article className="party-card">
            <span className="icon-tile">
              <BankOutlined />
            </span>
            <div className="party-card__text">
              <p className="party-card__title">
                Cessionário: <strong>BULLLA COMPANHIA SECURITIZADORA DE CREDITOS FINANCEIROS SA</strong>
              </p>
              <p className="company-card__cnpj">46.655.552/0001-11</p>
            </div>
          </article>
        </div>
        <Divider style={{ margin: 0 }} />
        <div className="stat-block">
          <div className="stat-block__head">
            <span className="section-label">Contratos Cedidos</span>
            <Tag color="blue">3</Tag>
          </div>
          <div className="stat-card">
            <p className="stat-card__label">VALOR TOTAL CEDIDO</p>
            <p className="stat-card__value">R$ 6.795,42</p>
          </div>
        </div>
        <div className="section-label">Visão Consolidada dos Contratos Cedidos</div>
        <Table
          className="cessao-table"
          rowKey="product"
          pagination={false}
          dataSource={CESSAO_PRODUCTS}
          columns={[
            { title: "Produto", dataIndex: "product" },
            { title: "Contratos Cedidos", dataIndex: "contracts" },
            { title: "Valor", dataIndex: "value" },
          ]}
          summary={() => (
            <Table.Summary.Row>
              <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
              <Table.Summary.Cell index={1}>{totalContracts}</Table.Summary.Cell>
              <Table.Summary.Cell index={2}>R$ 6.795,42</Table.Summary.Cell>
            </Table.Summary.Row>
          )}
        />
      </div>
      <div className="drawer-actions">
        <Button type="primary" size="large" block onClick={onClose}>
          Fechar
        </Button>
      </div>
    </div>
  );
}
