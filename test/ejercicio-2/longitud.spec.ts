import 'mocha';
import {expect} from 'chai';
import {Longitud} from '../../src/ejercicio-2/longitud';

describe('Test que realiza pruebas sobre la clase Longitud', () => {
  it('Se accede a sus atributos y a sus métodos', () => {
    const longitud_1: Longitud = new Longitud(5);

    expect(longitud_1).to.be.an.instanceof(Longitud);
    expect(longitud_1.get_object()).to.be.equal(longitud_1);
    expect(longitud_1.get_number()).to.be.equal(5);
    expect(longitud_1.convert()).to.be.equal(12.7);
  });
});
