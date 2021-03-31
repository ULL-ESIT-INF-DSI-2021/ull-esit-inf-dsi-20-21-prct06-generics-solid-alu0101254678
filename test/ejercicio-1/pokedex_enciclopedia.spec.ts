import 'mocha';
import {expect} from 'chai';
import {Pokedex_Enciclopedia} from '../../src/ejercicio-1/pokedex_enciclopedia';
import {DC} from '../../src/ejercicio-1/dc';
import {Dragon_Ball} from '../../src/ejercicio-1/dragon_ball';
import {Marvel} from '../../src/ejercicio-1/marvel';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Star_Wars} from '../../src/ejercicio-1/star_wars';


describe('Test que realiza pruebas sobre la clase Pokedex_Enciclopedia', () => {
  it('Se accede correctamente al vector', () => {
    const pikachu: Pokemon = new Pokemon('pikachu', 10, 1, 'electrico', 100, 50, 150, 30);
    const arceus: Pokemon = new Pokemon('arceus', 100, 50, 'normal', 200, 100, 90, 290);
    const iron_man: Marvel = new Marvel('iron man', 100, 50, 'fuego', 5000, 400, 50, 900);
    const batman: DC = new DC('batman', 100, 50, 'fuego', 200, 100, 90, 100);
    const goku: Dragon_Ball = new Dragon_Ball('goku', 100, 50, 'fuego', 200, 100, 90, 100);
    const luke: Star_Wars = new Star_Wars('luke', 100, 50, 'fuego', 200, 100, 90, 100);

    const blastoise: Pokemon = new Pokemon('blastoise', 10, 1, 'agua', 300, 60, 140, 90);

    const coleccion: Pokedex_Enciclopedia<DC & Dragon_Ball & Marvel & Pokemon & Star_Wars> = new Pokedex_Enciclopedia([pikachu, arceus, iron_man, batman, goku, luke]);

    expect(coleccion.vector_combatientes).to.have.same.members([pikachu, arceus, iron_man, batman, goku, luke]);
    expect(coleccion.vector_combatientes).not.to.have.same.members([blastoise]);
  });
});
