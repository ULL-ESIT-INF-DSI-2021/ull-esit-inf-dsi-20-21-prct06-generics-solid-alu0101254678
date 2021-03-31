import 'mocha';
import {expect} from 'chai';
import {Marvel} from '../../src/ejercicio-1/marvel';

describe('Test que realiza pruebas sobre la clase Marvel', () => {
  it('Se accede a su frase característica y atributos', () => {
    const iron_man: Marvel = new Marvel('iron man', 100, 50, 'fuego', 200, 100, 90, 100);

    expect(iron_man).to.be.an.instanceof(Marvel);
    expect(iron_man.get_frase()).to.be.equal('Les vengaremos!');
    expect(iron_man.altura).to.be.equal(50);
    expect(iron_man.ataque).to.be.equal(200);
    expect(iron_man.defensa).to.be.equal(100);
    expect(iron_man.nombre).to.be.equal('iron man');
    expect(iron_man.peso).to.be.equal(100);
    expect(iron_man.tipo).to.be.equal('fuego');
    expect(iron_man.velocidad).to.be.equal(90);
    expect(iron_man.vida).to.be.equal(100);
  });
});
