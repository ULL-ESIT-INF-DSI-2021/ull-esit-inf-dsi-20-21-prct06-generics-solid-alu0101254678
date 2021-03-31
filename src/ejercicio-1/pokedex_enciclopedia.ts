/**
 * Importamos todas las clases que representan a los
 * universos
 */
import {DC} from './dc';
import {Dragon_Ball} from './dragon_ball';
import {Marvel} from './marvel';
import {Pokemon} from './pokemon';
import {Star_Wars} from './star_wars';

/**
 * Clase Pokedex_Enciclopedia, que es una colección de Pokemons, luchadores de Dragon Ball,
 * de Star Wars, por lo que opera sobre un tipo de dato T, que extiende a todas las demás clases, solo tiene
 * un atributo, y es el vector considerado de distintos tipos de datos
 */
export class Pokedex_Enciclopedia<T extends DC & Dragon_Ball & Marvel & Pokemon & Star_Wars> {
  vector_combatientes: Array<T>;

  constructor(vector_combatientes: Array<T>) {
    this.vector_combatientes = vector_combatientes;
  }

  /**
   * Método que muestra en forma de tabla la información del vector
   */
  mostrar_Combatientes() {
    for (let indice = 0; indice < this.vector_combatientes.length; indice ++) {
      console.table(this.vector_combatientes[indice]);
    }
  }
}

const pikachu: Pokemon = new Pokemon('pikachu', 10, 1, 'electrico', 100, 50, 150, 30);
const arceus: Pokemon = new Pokemon('arceus', 100, 50, 'normal', 200, 100, 90, 290);
const iron_man: Marvel = new Marvel('iron man', 100, 50, 'fuego', 5000, 400, 50, 900);

const coleccion: Pokedex_Enciclopedia<Pokemon & DC> = new Pokedex_Enciclopedia([pikachu, arceus, iron_man]);

coleccion.mostrar_Combatientes();
