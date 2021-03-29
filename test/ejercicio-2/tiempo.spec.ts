import 'mocha';
import {expect} from 'chai';
import {Tiempo} from '../../src/ejercicio-2/tiempo';

describe('Test que realiza pruebas sobre la clase Tiempo', () => {
  it('Se accede a sus atributos y a sus métodos', () => {
    const tiempo_1: Tiempo = new Tiempo(5);

    expect(tiempo_1).to.be.an.instanceof(Tiempo);
    expect(tiempo_1.get_object()).to.be.equal(tiempo_1);
    expect(tiempo_1.get_number()).to.be.equal(5);
    expect(tiempo_1.convert()).to.be.equal(300);
  });
});
