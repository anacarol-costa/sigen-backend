export class ItensProdutoDto {

  id: Number;
  descricao: String;
  opcoes: Array<OpcaoDto>;
}

class OpcaoDto {
  id: Number;
  nome: String;
  valor: Number;
}