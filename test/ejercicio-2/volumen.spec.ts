import 'mocha';
import {expect} from 'chai';
import {Volumen} from '../../src/ejercicio-2/volumen';

describe('Test que realiza pruebas sobre la clase Volumen', () => {
  it('Se accede a sus atributos y a sus métodos', () => {
    const volumen_1: Volumen = new Volumen(5);

    expect(volumen_1).to.be.an.instanceof(Volumen);
    expect(volumen_1.get_object()).to.be.equal(volumen_1);
    expect(volumen_1.get_number()).to.be.equal(5);
    expect(volumen_1.convert()).to.be.equal(5000);
  });
});
