export interface ExpenseModel {
  id: string;
  anoMovimentacao: number;
  mesMovimentacao: number;
  orgaoCodigo: number;
  orgaoNome: string;
  unidadeCodigo: number; //Float
  unidadeNome: string;
  categoriaEconomicaCodigo: number;
  categoriaEconomicaNome: string;
  grupoDespesaCodigo: number;
  grupoDespesaNome: string;
  modalidadeAplicacaoCodigo: number;
  modalidadeAplicacaoNome: string;
  elementoCodigo: number;
  elementoNome: string;
  subelementoCodigo: number;
  subelementoNome: string;
  funcaoCodigo: number;
  funcaoNome: string;
  subfuncaoCodigo: number;
  subfuncaoNome: string;
  programaCodigo: number;
  programaNome: string;
  acaoCodigo: number;
  acaoNome: string;
  fonteRecursoCodigo: number;
  fonteRecursoNome: string;
  empenhoAno: number;
  empenhoModalidadeNome: string;
  empenhoModalidadeCodigo: number;
  empenhoNumero: number;
  subempenho: number;
  indicadorSubempenho: string;
  credorCodigo: number;
  credorNome: string;
  modalidadeLicitacaoCodigo: number;
  modalidadeLicitacaoNome: string;
  valorEmpenhado: number; //Float
  valorLiquidado: number; //Float
  valorPago: number; //Float
}
