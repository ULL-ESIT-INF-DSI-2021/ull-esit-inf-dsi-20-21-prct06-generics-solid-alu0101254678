import 'mocha';
import {expect} from 'chai';
import {Serie} from '../../src/ejercicio-3/series';

describe('Test que realiza pruebas sobre la clase Serie', () => {
  it('Se accede a sus atributos y a sus métodos', () => {
    const serie_1: Serie = new Serie('Los Simpsons', 1990);

    expect(serie_1).to.be.an.instanceof(Serie);
    expect(serie_1.get_fecha()).to.be.equal(1990);
    expect(serie_1.get_nombre()).to.be.equal('Los Simpsons');
  });
});
