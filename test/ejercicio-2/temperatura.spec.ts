import 'mocha';
import {expect} from 'chai';
import {Temperatura} from '../../src/ejercicio-2/temperatura';

describe('Test que realiza pruebas sobre la clase Temperatura', () => {
  it('Se accede a sus atributos y a sus métodos', () => {
    const temperatura_1: Temperatura = new Temperatura(5);

    expect(temperatura_1).to.be.an.instanceof(Temperatura);
    expect(temperatura_1.get_object()).to.be.equal(temperatura_1);
    expect(temperatura_1.get_number()).to.be.equal(5);
    expect(temperatura_1.convert()).to.be.equal(279.15);
    expect(temperatura_1.convert()).not.to.be.equal(274.15);
  });
});
