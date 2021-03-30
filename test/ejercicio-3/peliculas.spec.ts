import 'mocha';
import {expect} from 'chai';
import {Pelicula} from '../../src/ejercicio-3/peliculas';

describe('Test que realiza pruebas sobre la clase Pelicula', () => {
  it('Se accede a sus atributos y a sus métodos', () => {
    const pelicula_1: Pelicula = new Pelicula('Pokémon', 2007);

    expect(pelicula_1).to.be.an.instanceof(Pelicula);
    expect(pelicula_1.get_fecha()).to.be.equal(2007);
    expect(pelicula_1.get_nombre()).to.be.equal('Pokémon');
  });
});
