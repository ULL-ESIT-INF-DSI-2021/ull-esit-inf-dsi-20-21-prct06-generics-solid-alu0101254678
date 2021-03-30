import 'mocha';
import {expect} from 'chai';
import {Pelicula} from '../../src/ejercicio-3/peliculas';
import {Coleccion_Peliculas} from '../../src/ejercicio-3/coleccion-peliculas';

describe('Test que realiza pruebas sobre la clase Coleccion_Peliculas', () => {
  it('Se accede a sus atributos y a sus métodos, así como a los métodos de basicStreamableCollection', () => {
    const coleccion: Coleccion_Peliculas = new Coleccion_Peliculas([
      new Pelicula('Pokémon', 2007),
    ]);

    expect(coleccion.obtenerNumeroObjetos()).to.be.equal(1);

    const pelicula_zorro: Pelicula = new Pelicula('El zorro', 2000);
    coleccion.añadirObjeto(pelicula_zorro);

    expect(coleccion.obtenerNumeroObjetos()).to.be.equal(2);

    expect(coleccion.obtenerObjetosPorFecha(2000)).to.have.same.members([pelicula_zorro]);
    expect(coleccion.obtenerObjetosPorNombre('El zorro')).to.have.same.members([pelicula_zorro]);
  });
});
