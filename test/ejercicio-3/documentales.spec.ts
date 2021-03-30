import 'mocha';
import {expect} from 'chai';
import {Documental} from '../../src/ejercicio-3/documentales';

describe('Test que realiza pruebas sobre la clase Documental', () => {
  it('Se accede a sus atributos y a sus métodos', () => {
    const documental_1: Documental = new Documental('Documental de la 1', 1970);

    expect(documental_1).to.be.an.instanceof(Documental);
    expect(documental_1.get_fecha()).to.be.equal(1970);
    expect(documental_1.get_nombre()).to.be.equal('Documental de la 1');
  });
});
