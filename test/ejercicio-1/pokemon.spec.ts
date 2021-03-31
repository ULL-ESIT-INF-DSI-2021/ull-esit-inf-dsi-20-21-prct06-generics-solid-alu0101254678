import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';

describe('Test que realiza pruebas sobre la clase Pokemon', () => {
  it('Se accede a su frase característica y atributos', () => {
    const pikachu: Pokemon = new Pokemon('pikachu', 100, 50, 'electrico', 200, 100, 90, 100);

    expect(pikachu).to.be.an.instanceof(Pokemon);
    expect(pikachu.get_frase()).to.be.equal('Te elijo a ti!');
    expect(pikachu.altura).to.be.equal(50);
    expect(pikachu.ataque).to.be.equal(200);
    expect(pikachu.defensa).to.be.equal(100);
    expect(pikachu.nombre).to.be.equal('pikachu');
    expect(pikachu.peso).to.be.equal(100);
    expect(pikachu.tipo).to.be.equal('electrico');
    expect(pikachu.velocidad).to.be.equal(90);
    expect(pikachu.vida).to.be.equal(100);
  });
});
