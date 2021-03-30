/**
 * Interfaz generica que se llama streamable, opera
 * sobre un tipo de dato genérico, T
 */
export interface Streamable<T> {
  añadirObjeto(nuevo_Objeto: T): void;
  obtenerNumeroObjetos(): number;
}

/**
 * Interfaz generica que extiene a la interfaz anterior,
 * ya que tiene dos métodos que son más específicos, son
 * funciones de búsqueda, ambos métodos operan sobre un vector
 * con el tipo de dato T
 */
export interface SearchStreamable<T> extends Streamable<T>{
  obtenerObjetosPorNombre(nombre: string): T[];
  obtenerObjetosPorFecha(fecha: number): T[];
}
