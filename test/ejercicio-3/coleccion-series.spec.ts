import 'mocha';
import {expect} from 'chai';
import {Serie} from '../../src/ejercicio-3/series';
import {Coleccion_Series} from '../../src/ejercicio-3/coleccion-series';

describe('Test que realiza pruebas sobre la clase Coleccion_Series', () => {
  it('Se accede a sus atributos y a sus métodos, así como a los métodos de basicStreamableCollection', () => {
    const coleccion: Coleccion_Series = new Coleccion_Series([
      new Serie('Los Simpsons', 1990),
      new Serie('La casa de papel', 2020),
      new Serie('Ataque a los titanes', 2020),
    ]);

    expect(coleccion.obtenerNumeroObjetos()).to.be.equal(3);
    expect(coleccion.obtenerNumeroObjetos()).not.to.be.equal(2);

    expect(coleccion).is.an.instanceof(Coleccion_Series);

    const serie_Gumball: Serie = new Serie('Gumball', 2015);
    coleccion.añadirObjeto(serie_Gumball);

    expect(coleccion.obtenerNumeroObjetos()).to.be.equal(4);

    expect(coleccion.obtenerObjetosPorFecha(2000)).to.have.same.members([]);
    expect(coleccion.obtenerObjetosPorNombre('El zorro')).to.have.same.members([]);
    expect(coleccion.obtenerObjetosPorNombre('Gumball')).to.have.same.members([serie_Gumball]);
  });
});
