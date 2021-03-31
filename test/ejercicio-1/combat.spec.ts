import 'mocha';
import {expect} from 'chai';
import {DC} from '../../src/ejercicio-1/dc';
import {Dragon_Ball} from '../../src/ejercicio-1/dragon_ball';
import {Marvel} from '../../src/ejercicio-1/marvel';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Star_Wars} from '../../src/ejercicio-1/star_wars';
import {Combat} from '../../src/ejercicio-1/combat';

describe('Test que realiza pruebas sobre la clase Combat', () => {
  it('Se accede correctamente a los atributos y a los métodos', () => {
    const lapras: Pokemon = new Pokemon('lapras', 10, 1, 'agua', 200, 50, 150, 30);
    const iron_man: Marvel = new Marvel('iron man', 100, 50, 'fuego', 200, 100, 90, 100);
    const combate_1: Combat<Pokemon, Marvel> = new Combat(lapras, iron_man);

    expect(combate_1).to.be.an.instanceof(Combat);
    expect(combate_1.combatiente_1).to.be.equal(lapras);
    expect(combate_1.combatiente_2).to.be.equal(iron_man);
    expect(combate_1.combatiente_2).not.to.be.equal(lapras);

    expect(combate_1.efective_combatiente_1_to_combatiente_2()).to.be.equal(200);
    expect(combate_1.efective_combatiente_2_to_combatiente_1()).to.be.equal(100);
  });
});
