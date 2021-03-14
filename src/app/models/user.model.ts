export interface IUsuario {
  exito?: boolean;
  id_rol?: number;
  desc_rol?: string;
  id?: number;
}

export class Resultado implements IUsuario {
  constructor (
  exito?: boolean,
  id_rol?: number,
  desc_rol?: string,
  id?: number) {}
}
