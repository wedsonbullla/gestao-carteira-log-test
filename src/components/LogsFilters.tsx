import { Button, Checkbox, Col, DatePicker, Divider, Form, Input, Row, Select } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import type { Dayjs } from "dayjs";
import { OPERATION_LABEL, type OperationType } from "../data/logs";

export type FilterValues = {
  period?: [Dayjs, Dayjs] | null;
  operations?: OperationType[];
  user?: string;
};

export const EMPTY_FILTERS: FilterValues = {
  period: null,
  operations: [],
  user: "",
};

type Props = {
  values: FilterValues;
  onChange: (next: FilterValues) => void;
  onFilter: () => void;
  onClear: () => void;
};

const OPERATION_OPTIONS = Object.entries(OPERATION_LABEL).map(([value, label]) => ({
  value: value as OperationType,
  label,
}));

export function LogsFilters({ values, onChange, onFilter, onClear }: Props) {
  const operations = values.operations ?? [];
  const hasFilters = Boolean(values.period || operations.length || values.user?.trim());

  return (
    <section className="filters-card">
      <div className="filters-card__title">
        <span className="filters-card__icon">
          <FilterOutlined />
        </span>
        <span className="filters-card__title-text">Filtros</span>
      </div>
      <Divider className="filters-card__divider" />
      <Form layout="vertical" onFinish={onFilter}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12} lg={8}>
            <Form.Item label="Período" style={{ marginBottom: 0 }}>
              <DatePicker.RangePicker
                size="large"
                style={{ width: "100%" }}
                format="DD/MM/YYYY"
                placeholder={["Data início", "Data fim"]}
                value={values.period ?? null}
                onChange={(period) => onChange({ ...values, period: period as FilterValues["period"] })}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <Form.Item label="Tipo de Operação" style={{ marginBottom: 0 }}>
              <Select
                className="operation-select"
                size="large"
                mode="multiple"
                allowClear
                showSearch={false}
                placeholder="Todos os Tipos"
                maxTagCount="responsive"
                value={operations}
                options={OPERATION_OPTIONS}
                menuItemSelectedIcon={null}
                popupClassName="operation-select-dropdown"
                onChange={(next) => onChange({ ...values, operations: next })}
                optionRender={(option) => (
                  <span className="operation-select-option">
                    <Checkbox checked={operations.includes(option.value as OperationType)} />
                    {option.label}
                  </span>
                )}
              />
            </Form.Item>
          </Col>
          <Col xs={24} lg={8}>
            <Form.Item label="Operador/Aprovador" style={{ marginBottom: 0 }}>
              <Input
                size="large"
                placeholder="Buscar usuário"
                value={values.user}
                allowClear
                onChange={(event) => onChange({ ...values, user: event.target.value })}
                onPressEnter={onFilter}
              />
            </Form.Item>
          </Col>
        </Row>
        <div className="filters-card__actions">
          <Button htmlType="submit" size="large" type="primary" disabled={!hasFilters}>
            Filtrar
          </Button>
          <Button size="large" disabled={!hasFilters} onClick={onClear}>
            Limpar Filtros
          </Button>
        </div>
      </Form>
    </section>
  );
}
