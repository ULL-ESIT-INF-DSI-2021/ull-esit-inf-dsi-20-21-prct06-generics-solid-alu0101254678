/**
 * Importamos todas las clases que representan a los
 * universos, se encuentran en el mismo directorio
 */
import {DC} from './dc';
import {Dragon_Ball} from './dragon_ball';
import {Marvel} from './marvel';
import {Pokemon} from './pokemon';
import {Star_Wars} from './star_wars';

/**
 * Clase combat, que representa un combate entre dos luchadores que pueden ser de universos distintos, o incluso
 * del mismo universo, por eso se utilizan dos tipos de datos que llamamos T y U, que extienden a todas las clases
 * consideradas, tiene dos atributos, los dos luchadores
 */
export class Combat<T extends DC | Dragon_Ball | Marvel | Pokemon | Star_Wars, U extends DC | Dragon_Ball | Marvel | Pokemon | Star_Wars> {
  combatiente_1: T;
  combatiente_2: U;

  constructor(combatiente_1: T, combatiente_2: U) {
    this.combatiente_1 = combatiente_1;
    this.combatiente_2 = combatiente_2;
  }

  /**
   * Método que calcula el daño realizado del primer luchador al segundo, para ello
   * se basa en una conveniencia de tipos, y en tres fórmulas según el daño sea
   * super efectivo, normal, o poco efectivo
   * @returns un valor que representa el daño realizado del combatiente 1 al combatiente 2
   */
  efective_combatiente_1_to_combatiente_2(): number {
    const super_efectivo: number = 50 * (this.combatiente_1.ataque / this.combatiente_2.defensa) * 2;
    const normal: number = 50 * (this.combatiente_1.ataque / this.combatiente_2.defensa);
    const poco_efectivo: number = 50 * (this.combatiente_1.ataque / this.combatiente_2.defensa) * 0.5;


    if (this.combatiente_1.tipo === 'fuego') {
      if (this.combatiente_2.tipo === 'fuego') {
        return poco_efectivo;
      }
      if (this.combatiente_2.tipo === 'hierba') {
        return super_efectivo;
      }
      if (this.combatiente_2.tipo === 'agua') {
        return poco_efectivo;
      }
      if (this.combatiente_2.tipo === 'electrico') {
        return normal;
      }
    }

    if (this.combatiente_1.tipo === 'agua') {
      if (this.combatiente_2.tipo === 'agua') {
        return poco_efectivo;
      }
      if (this.combatiente_2.tipo === 'fuego') {
        return super_efectivo;
      }
      if (this.combatiente_2.tipo=== 'hierba') {
        return poco_efectivo;
      }
      if (this.combatiente_2.tipo === 'electrico') {
        return normal;
      }
    }
    if (this.combatiente_1.tipo === 'hierba') {
      if (this.combatiente_2.tipo === 'hierba') {
        return poco_efectivo;
      }
      if (this.combatiente_2.tipo=== 'fuego') {
        return poco_efectivo;
      }
      if (this.combatiente_2.tipo === 'agua') {
        return super_efectivo;
      }
      if (this.combatiente_2.tipo === 'electrico') {
        return normal;
      }
    }
    if (this.combatiente_1.tipo === 'electrico') {
      if (this.combatiente_2.tipo === 'electrico') {
        return poco_efectivo;
      }
      if (this.combatiente_2.tipo === 'fuego') {
        return normal;
      }
      if (this.combatiente_2.tipo === 'agua') {
        return super_efectivo;
      }
      if (this.combatiente_2.tipo === 'hierba') {
        return normal;
      }
    }
    return 0;
  }

  /**
   * Método que calcula el daño realizado del segundo luchador al primero, para ello
   * se basa en una conveniencia de tipos, y en tres fórmulas según el daño sea
   * super efectivo, normal, o poco efectivo
   * @returns un valor que representa el daño realizado del combatiente 2 al combatiente 1
   */
  efective_combatiente_2_to_combatiente_1(): number {
    const super_efectivo: number = 50 * (this.combatiente_2.ataque / this.combatiente_1.defensa) * 2;
    const normal: number = 50 * (this.combatiente_2.ataque / this.combatiente_1.defensa);
    const poco_efectivo: number = 50 * (this.combatiente_2.ataque / this.combatiente_1.defensa) * 0.5;


    if (this.combatiente_2.tipo === 'fuego') {
      if (this.combatiente_1.tipo === 'fuego') {
        return poco_efectivo;
      }
      if (this.combatiente_1.tipo === 'hierba') {
        return super_efectivo;
      }
      if (this.combatiente_1.tipo === 'agua') {
        return poco_efectivo;
      }
      if (this.combatiente_1.tipo === 'electrico') {
        return normal;
      }
    }

    if (this.combatiente_2.tipo === 'agua') {
      if (this.combatiente_1.tipo === 'agua') {
        return poco_efectivo;
      }
      if (this.combatiente_1.tipo === 'fuego') {
        return super_efectivo;
      }
      if (this.combatiente_1.tipo === 'hierba') {
        return poco_efectivo;
      }
      if (this.combatiente_1.tipo === 'electrico') {
        return normal;
      }
    }
    if (this.combatiente_2.tipo === 'hierba') {
      if (this.combatiente_1.tipo === 'hierba') {
        return poco_efectivo;
      }
      if (this.combatiente_1.tipo === 'fuego') {
        return poco_efectivo;
      }
      if (this.combatiente_1.tipo === 'agua') {
        return super_efectivo;
      }
      if (this.combatiente_1.tipo === 'electrico') {
        return normal;
      }
    }
    if (this.combatiente_2.tipo === 'electrico') {
      if (this.combatiente_1.tipo === 'electrico') {
        return poco_efectivo;
      }
      if (this.combatiente_1.tipo === 'fuego') {
        return normal;
      }
      if (this.combatiente_1.tipo === 'agua') {
        return super_efectivo;
      }
      if (this.combatiente_1.tipo === 'hierba') {
        return normal;
      }
    }
    return 0;
  }

  /**
   * Método que representa un combate entre dos combatientes, al principio se muestran los datos
   * de ambos, luego el daño que va haciendo el combatiente 1 al combatiente 2, y viceversa, y se
   * muestra la vida de ambos y una frase característica según su universo, luego el combate finaliza
   * cuando la vida de alguno de ellos llegue a cero, ya que se irá reduciendo en función del daño que haga
   * el contrario, llamando al método de arriba
   * @returns, realmente no devuelve nada, solo muestra la evolución del combate en la terminal
   */
  start() {
    do {
      console.log(`Nombre: ${this.combatiente_1.nombre}, Tipo: ${this.combatiente_1.tipo}, Ataque: ${this.combatiente_1.ataque}, Defensa: ${this.combatiente_1.defensa}, Velocidad: ${this.combatiente_1.velocidad}, Vida: ${this.combatiente_1.vida}`);
      console.log(`Nombre: ${this.combatiente_2.nombre}, Tipo: ${this.combatiente_2.tipo}, Ataque: ${this.combatiente_2.ataque}, Defensa: ${this.combatiente_2.defensa}, Velocidad: ${this.combatiente_2.velocidad}, Vida: ${this.combatiente_2.vida}`);

      const dano_a_combatiente_2: number = this.efective_combatiente_1_to_combatiente_2();
      console.log(`Daño de combatiente 1 a combatiente 2: ${dano_a_combatiente_2}`);
      console.log(this.combatiente_1.get_frase());
      const dano_a_combatiente_1: number = this.efective_combatiente_2_to_combatiente_1();
      console.log(`Daño de combatiente 2 a combatiente 1: ${dano_a_combatiente_1}`);
      console.log(this.combatiente_2.get_frase());

      this.combatiente_2.vida -= dano_a_combatiente_2;
      console.log(`vida de combatiente 2: ${this.combatiente_2.vida}`);
      this.combatiente_1.vida -= dano_a_combatiente_1;
      console.log(`vida de combatiente 1: ${this.combatiente_1.vida}`);
      if (this.combatiente_1.vida <= 0) {
        console.log(`Ha ganado ${this.combatiente_2.nombre}!`);
        return;
      }
      if (this.combatiente_2.vida <= 0) {
        console.log(`Ha ganado ${this.combatiente_1.nombre}!`);
        return;
      }
    } while (this.combatiente_1.vida > 0 && this.combatiente_2.vida > 0);
  }
}

const pikachu: Pokemon = new Pokemon('lapras', 10, 1, 'agua', 200, 50, 150, 30);
const iron_man: Marvel = new Marvel('iron man', 100, 50, 'fuego', 200, 100, 90, 100);
const combate_1: Combat<Pokemon, Marvel> = new Combat(pikachu, iron_man);
combate_1.start();


