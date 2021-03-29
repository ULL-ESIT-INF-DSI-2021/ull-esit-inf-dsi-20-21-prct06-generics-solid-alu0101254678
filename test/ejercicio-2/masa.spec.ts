import 'mocha';
import {expect} from 'chai';
import {Masa} from '../../src/ejercicio-2/masa';

describe('Test que realiza pruebas sobre la clase Masa', () => {
  it('Se accede a sus atributos y a sus métodos', () => {
    const masa_1: Masa = new Masa(5);

    expect(masa_1).to.be.an.instanceof(Masa);
    expect(masa_1.get_object()).to.be.equal(masa_1);
    expect(masa_1.get_number()).to.be.equal(5);
    expect(masa_1.convert()).to.be.equal(5000);
  });
});
