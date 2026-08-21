import type { ReactNode } from "react";

export type OperationType =
  | "configuracoes"
  | "nova-empresa"
  | "prorrogar"
  | "liquidar"
  | "amortizacao"
  | "amortizar"
  | "cancelar"
  | "ceder";

export type DrawerKind = "company" | "settings" | "cessao";

export type LogEntry = {
  id: string;
  date: string;
  time: string;
  operation: OperationType;
  operationId?: string;
  user: string;
  description: ReactNode;
  drawer?: DrawerKind;
};

export const OPERATION_LABEL: Record<OperationType, string> = {
  configuracoes: "Configurações",
  "nova-empresa": "Nova empresa",
  prorrogar: "Prorrogar",
  liquidar: "Liquidar",
  amortizacao: "Amortização",
  amortizar: "Amortizar",
  cancelar: "Cancelar",
  ceder: "Ceder",
};

export const OPERATION_TAG: Record<
  OperationType,
  { color?: string; bordered?: boolean }
> = {
  configuracoes: { color: "default" },
  "nova-empresa": { color: "magenta" },
  prorrogar: { color: "volcano" },
  liquidar: { color: "green" },
  amortizacao: { color: "blue" },
  amortizar: { color: "blue" },
  cancelar: { color: "red" },
  ceder: { color: "purple" },
};

const USER = "{userName}";

function bold(text: string) {
  return <strong>{text}</strong>;
}

export const LOGS: LogEntry[] = [
  {
    id: "1",
    date: "24/09/2026",
    time: "00:00:00",
    operation: "configuracoes",
    user: USER,
    description: (
      <>
        Adicionou uma nova {bold("Regra de Elegibilidade.")}
      </>
    ),
    drawer: "settings",
  },
  {
    id: "2",
    date: "24/09/2026",
    time: "00:00:00",
    operation: "nova-empresa",
    user: USER,
    description: (
      <>
        Alterou as configurações da empresa: {bold("FIDC XPTO I.")}
      </>
    ),
    drawer: "company",
  },
  {
    id: "3",
    date: "24/09/2026",
    time: "00:00:00",
    operation: "nova-empresa",
    user: USER,
    description: (
      <>
        Criou uma nova Empresa: {bold("FIDC XPTO I.")}
      </>
    ),
    drawer: "company",
  },
  {
    id: "4",
    date: "24/09/2026",
    time: "00:00:00",
    operation: "prorrogar",
    user: USER,
    description: "Enviou uma solicitação de Prorrogação de Contratos para aprovação.",
  },
  {
    id: "5",
    date: "24/09/2026",
    time: "00:00:00",
    operation: "liquidar",
    user: USER,
    description: `Aprovou a Liquidação de Contratos solicitada por ${USER}.`,
  },
  {
    id: "6",
    date: "24/09/2026",
    time: "00:00:00",
    operation: "amortizacao",
    user: USER,
    description: "Os contratos foram amortizados.",
  },
  {
    id: "7",
    date: "24/09/2026",
    time: "00:00:00",
    operation: "amortizar",
    user: USER,
    description: `Aprovou a Amortização de Contratos solicitada por ${USER}.`,
  },
  {
    id: "8",
    date: "24/09/2026",
    time: "00:00:00",
    operation: "liquidar",
    user: USER,
    description: "Enviou uma solicitação para Liquidar Contratos para aprovação.",
  },
  {
    id: "9",
    date: "24/09/2026",
    time: "00:00:00",
    operation: "prorrogar",
    user: USER,
    description: `Aprovou a Prorrogação de Contratos solicitada por ${USER}.`,
  },
  {
    id: "10",
    date: "24/09/2026",
    time: "00:00:00",
    operation: "cancelar",
    user: USER,
    description: "Enviou uma solicitação de Cancelamento de Contratos para aprovação.",
  },
  {
    id: "11",
    date: "24/09/2026",
    time: "00:00:00",
    operation: "cancelar",
    user: USER,
    description: `Aprovou o Cancelamento de Contratos solicitado por ${USER}.`,
  },
  {
    id: "12",
    date: "24/09/2026",
    time: "00:00:00",
    operation: "ceder",
    user: USER,
    description: (
      <>
        Enviou uma solicitação de Cessão de Contratos de {bold("FIDC BULLLA CARTÕES ")}
        para {bold("BULLLA COMPANHIA SECURITIZADORA DE CREDITOS FINANCEIROS SA.")}
      </>
    ),
    drawer: "cessao",
  },
  {
    id: "13",
    date: "24/09/2026",
    time: "00:00:00",
    operation: "amortizacao",
    user: USER,
    description: "Enviou uma solicitação de Amortização de Contratos para aprovação.",
  },
  {
    id: "14",
    date: "24/09/2026",
    time: "00:00:00",
    operation: "configuracoes",
    user: USER,
    description: (
      <>
        Alterou as configurações da empresa {bold("FIDC XPTO I.")}
      </>
    ),
    drawer: "settings",
  },
];

export const CESSAO_PRODUCTS = [
  { product: "Crédito Parcelado", contracts: 1, value: "R$ 545,54" },
  { product: "Adiantamento Salarial", contracts: 1, value: "R$ 1.023,93" },
  { product: "Consignado", contracts: 1, value: "R$ 1.428,75" },
  { product: "Capital de Giro", contracts: 1, value: "R$ 961,80" },
  { product: "Antecipação de Recebíveis", contracts: 1, value: "R$ 2.835,40" },
];
