import 'mocha';
import {expect} from 'chai';
import {Dragon_Ball} from '../../src/ejercicio-1/dragon_ball';

describe('Test que realiza pruebas sobre la clase Dragon_Ball', () => {
  it('Se accede a su frase característica y atributos', () => {
    const goku: Dragon_Ball = new Dragon_Ball('goku', 100, 50, 'fuego', 200, 100, 90, 100);

    expect(goku).to.be.an.instanceof(Dragon_Ball);
    expect(goku.get_frase()).to.be.equal('Ka - me - ha - me - haaaa!');
    expect(goku.altura).to.be.equal(50);
    expect(goku.ataque).to.be.equal(200);
    expect(goku.defensa).to.be.equal(100);
    expect(goku.nombre).to.be.equal('goku');
    expect(goku.peso).to.be.equal(100);
    expect(goku.tipo).to.be.equal('fuego');
    expect(goku.velocidad).to.be.equal(90);
    expect(goku.vida).to.be.equal(100);
  });
});
