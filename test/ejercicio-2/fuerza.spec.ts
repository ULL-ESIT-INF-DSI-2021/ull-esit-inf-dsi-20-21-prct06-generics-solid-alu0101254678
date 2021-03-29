import 'mocha';
import {expect} from 'chai';
import {Fuerza} from '../../src/ejercicio-2/fuerza';

describe('Test que realiza pruebas sobre la clase Fuerza', () => {
  it('Se accede a sus atributos y a sus métodos', () => {
    const fuerza_1: Fuerza = new Fuerza(5);

    expect(fuerza_1).to.be.an.instanceof(Fuerza);
    expect(fuerza_1.get_object()).to.be.equal(fuerza_1);
    expect(fuerza_1.get_number()).to.be.equal(5);
    expect(fuerza_1.convert()).to.be.equal(0.50986);
  });
});
