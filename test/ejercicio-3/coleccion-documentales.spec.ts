import 'mocha';
import {expect} from 'chai';
import {Documental} from '../../src/ejercicio-3/documentales';
import {Coleccion_Documentales} from '../../src/ejercicio-3/coleccion-documentales';

describe('Test que realiza pruebas sobre la clase Coleccion_Documentales', () => {
  it('Se accede a sus atributos y a sus métodos, así como a los métodos de basicStreamableCollection', () => {
    const coleccion: Coleccion_Documentales = new Coleccion_Documentales([
      new Documental('Documental de la 1', 1970),
      new Documental('Documental de Doscovery Chanel', 1980),
      new Documental('Documental del canal de historia', 2001),
    ]);

    expect(coleccion.obtenerNumeroObjetos()).to.be.equal(3);
    coleccion.añadirObjeto(new Documental('Documental de Paramount Channel', 1980));

    expect(coleccion.obtenerNumeroObjetos()).to.be.equal(4);

    expect(coleccion.obtenerObjetosPorNombre('Documental de la 2')).to.have.same.members([]);
  });
});
