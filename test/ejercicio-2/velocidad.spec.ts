import 'mocha';
import {expect} from 'chai';
import {Velocidad} from '../../src/ejercicio-2/velocidad';

describe('Test que realiza pruebas sobre la clase Velocidad', () => {
  it('Se accede a sus atributos y a sus métodos', () => {
    const velocidad_1: Velocidad = new Velocidad(5);

    expect(velocidad_1).to.be.an.instanceof(Velocidad);
    expect(velocidad_1.get_object()).to.be.equal(velocidad_1);
    expect(velocidad_1.get_number()).to.be.equal(5);
    expect(velocidad_1.convert()).to.be.equal(8.046);
  });
});
