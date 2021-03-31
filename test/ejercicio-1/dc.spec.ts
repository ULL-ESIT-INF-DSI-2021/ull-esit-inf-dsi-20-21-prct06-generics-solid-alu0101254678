import 'mocha';
import {expect} from 'chai';
import {DC} from '../../src/ejercicio-1/dc';

describe('Test que realiza pruebas sobre la clase DC', () => {
  it('Se accede a su frase característica y atributos', () => {
    const batman: DC = new DC('batman', 100, 50, 'fuego', 200, 100, 90, 100);

    expect(batman).to.be.an.instanceof(DC);
    expect(batman.get_frase()).to.be.equal('Es hora de que aprendas lo que significa ser un hombre!');
    expect(batman.altura).to.be.equal(50);
    expect(batman.ataque).to.be.equal(200);
    expect(batman.defensa).to.be.equal(100);
    expect(batman.nombre).to.be.equal('batman');
    expect(batman.peso).to.be.equal(100);
    expect(batman.tipo).to.be.equal('fuego');
    expect(batman.velocidad).to.be.equal(90);
    expect(batman.vida).to.be.equal(100);
  });
});
