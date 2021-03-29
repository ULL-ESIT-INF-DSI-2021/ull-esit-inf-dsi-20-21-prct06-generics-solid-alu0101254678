/**
 * Interfaz con el valor del atributo T,
 * la clase genérica instanciará sobre esta,
 * haciendo que tenga que implementar estos
 * métodos.
 *
 * La clase genérica extenderá a las demás clases,
 * es decir, que al final la clase genérica extenderá
 * de una única clase dependiendo del objeto que se
 * cree, a la vez de tener que implementar estos métodos
 * al final T se convertirá en Velocidad, Tiempo...
 */
export interface isConvertible<T> {
  get_object(): T;
  get_number(): number;
  convert(): number;
}
