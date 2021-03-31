import 'mocha';
import {expect} from 'chai';
import {Star_Wars} from '../../src/ejercicio-1/star_wars';

describe('Test que realiza pruebas sobre la clase Star_Wars', () => {
  it('Se accede a su frase característica y atributos', () => {
    const luke: Star_Wars = new Star_Wars('luke', 100, 50, 'fuego', 200, 100, 90, 100);

    expect(luke).to.be.an.instanceof(Star_Wars);
    expect(luke.get_frase()).to.be.equal('Nunca. Nunca me convertiré al Lado Oscuro!');
    expect(luke.altura).to.be.equal(50);
    expect(luke.ataque).to.be.equal(200);
    expect(luke.defensa).to.be.equal(100);
    expect(luke.nombre).to.be.equal('luke');
    expect(luke.peso).to.be.equal(100);
    expect(luke.tipo).to.be.equal('fuego');
    expect(luke.velocidad).to.be.equal(90);
    expect(luke.vida).to.be.equal(100);
  });
});
