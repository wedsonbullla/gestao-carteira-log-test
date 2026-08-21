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

export const OPERATION_TAG: Record<OperationType, { color?: string }> = {
  configuracoes: { color: "default" },
  "nova-empresa": { color: "magenta" },
  prorrogar: { color: "volcano" },
  liquidar: { color: "green" },
  amortizacao: { color: "blue" },
  amortizar: { color: "blue" },
  cancelar: { color: "red" },
  ceder: { color: "purple" },
};

function bold(text: string) {
  return <strong>{text}</strong>;
}

export const LOGS: LogEntry[] = [
  {
    id: "1",
    date: "24/09/2026",
    time: "14:32:10",
    operation: "configuracoes",
    operationId: "#012345678",
    user: "Aaron C. Oliveira",
    description: <>Adicionou uma nova {bold("Regra de Elegibilidade.")}</>,
    drawer: "settings",
  },
  {
    id: "2",
    date: "24/09/2026",
    time: "11:18:44",
    operation: "nova-empresa",
    operationId: "#012345678",
    user: "Marina Souza",
    description: <>Alterou as configurações da empresa: {bold("FIDC XPTO I.")}</>,
    drawer: "company",
  },
  {
    id: "3",
    date: "23/09/2026",
    time: "18:02:09",
    operation: "nova-empresa",
    operationId: "#012345678",
    user: "Aaron C. Oliveira",
    description: <>Criou uma nova Empresa: {bold("FIDC XPTO I.")}</>,
    drawer: "company",
  },
  {
    id: "4",
    date: "23/09/2026",
    time: "09:41:00",
    operation: "prorrogar",
    operationId: "#012345678",
    user: "João Pereira",
    description: "Enviou uma solicitação de Prorrogação de Contratos para aprovação.",
  },
  {
    id: "5",
    date: "22/09/2026",
    time: "16:27:33",
    operation: "liquidar",
    operationId: "#012345678",
    user: "Carla Mendes",
    description: "Aprovou a Liquidação de Contratos solicitada por João Pereira.",
  },
  {
    id: "6",
    date: "22/09/2026",
    time: "10:05:12",
    operation: "amortizacao",
    operationId: "#012345678",
    user: "Pedro Almeida",
    description: "Os contratos foram amortizados.",
  },
  {
    id: "7",
    date: "21/09/2026",
    time: "15:50:21",
    operation: "amortizar",
    operationId: "#012345678",
    user: "Aaron C. Oliveira",
    description: "Aprovou a Amortização de Contratos solicitada por Marina Souza.",
  },
  {
    id: "8",
    date: "21/09/2026",
    time: "08:14:55",
    operation: "liquidar",
    operationId: "#012345678",
    user: "João Pereira",
    description: "Enviou uma solicitação para Liquidar Contratos para aprovação.",
  },
  {
    id: "9",
    date: "20/09/2026",
    time: "13:09:40",
    operation: "prorrogar",
    operationId: "#012345678",
    user: "Marina Souza",
    description: "Aprovou a Prorrogação de Contratos solicitada por João Pereira.",
  },
  {
    id: "10",
    date: "19/09/2026",
    time: "17:22:18",
    operation: "cancelar",
    operationId: "#012345678",
    user: "Carla Mendes",
    description: "Enviou uma solicitação de Cancelamento de Contratos para aprovação.",
  },
  {
    id: "11",
    date: "19/09/2026",
    time: "09:03:07",
    operation: "cancelar",
    operationId: "#012345678",
    user: "Pedro Almeida",
    description: "Aprovou o Cancelamento de Contratos solicitado por Carla Mendes.",
  },
  {
    id: "12",
    date: "18/09/2026",
    time: "12:45:00",
    operation: "ceder",
    operationId: "#012345678",
    user: "Aaron C. Oliveira",
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
    date: "18/09/2026",
    time: "08:30:29",
    operation: "amortizacao",
    operationId: "#012345678",
    user: "Marina Souza",
    description: "Enviou uma solicitação de Amortização de Contratos para aprovação.",
  },
  {
    id: "14",
    date: "17/09/2026",
    time: "19:11:02",
    operation: "configuracoes",
    operationId: "#012345678",
    user: "João Pereira",
    description: <>Alterou as configurações da empresa {bold("FIDC XPTO I.")}</>,
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
