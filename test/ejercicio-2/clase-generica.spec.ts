import 'mocha';
import {expect} from 'chai';

import {Fuerza} from '../../src/ejercicio-2/fuerza';
import {isConvertible} from '../../src/ejercicio-2/isConvertible';
import {Longitud} from '../../src/ejercicio-2/longitud';
import {Masa} from '../../src/ejercicio-2/masa';
import {Temperatura} from '../../src/ejercicio-2/temperatura';
import {Tiempo} from '../../src/ejercicio-2/tiempo';
import {Velocidad} from '../../src/ejercicio-2/velocidad';
import {Volumen} from '../../src/ejercicio-2/volumen';
import {Magnitud} from '../../src/ejercicio-2/clase-generica';

describe('Test que realiza pruebas sobre la clase Generica', () => {
  it('Se prueba la funcionalidad cuando T es de Velocidad', () => {
    const velocidad_1: Velocidad = new Velocidad(5);
    const magnitud_1: Magnitud<Velocidad> = new Magnitud(velocidad_1);

    expect(magnitud_1.convert()).to.be.equal(8.046);
    expect(magnitud_1.objeto).to.be.equal(velocidad_1);
    expect(magnitud_1.get_number()).to.be.equal(5);
    expect(magnitud_1.get_object()).to.be.equal(velocidad_1);
  });

  it('Se prueba la funcionalidad cuando T es de Volumen', () => {
    const volumen_1: Volumen = new Volumen(5);
    const magnitud_2: Magnitud<Volumen> = new Magnitud(volumen_1);

    expect(magnitud_2.convert()).to.be.equal(5000);
    expect(magnitud_2.objeto).to.be.equal(volumen_1);
    expect(magnitud_2.get_number()).to.be.equal(5);
    expect(magnitud_2.get_object()).to.be.equal(volumen_1);
  });

  it('Se prueba la funcionalidad cuando T es de Tiempo', () => {
    const tiempo_1: Tiempo = new Tiempo(5);
    const magnitud_3: Magnitud<Tiempo> = new Magnitud(tiempo_1);

    expect(magnitud_3.convert()).to.be.equal(300);
    expect(magnitud_3.objeto).to.be.equal(tiempo_1);
    expect(magnitud_3.get_number()).to.be.equal(5);
    expect(magnitud_3.get_object()).to.be.equal(tiempo_1);
  });

  it('Se prueba la funcionalidad cuando T es de Temperatura', () => {
    const temperatura_1: Temperatura = new Temperatura(5);
    const magnitud_4: Magnitud<Temperatura> = new Magnitud(temperatura_1);

    expect(magnitud_4.convert()).to.be.equal(279.15);
    expect(magnitud_4.objeto).to.be.equal(temperatura_1);
    expect(magnitud_4.get_number()).to.be.equal(5);
    expect(magnitud_4.get_object()).to.be.equal(temperatura_1);
  });

  it('Se prueba la funcionalidad cuando T es de Masa', () => {
    const masa_1: Masa = new Masa(5);
    const magnitud_5: Magnitud<Masa> = new Magnitud(masa_1);

    expect(magnitud_5.convert()).to.be.equal(5000);
    expect(magnitud_5.objeto).to.be.equal(masa_1);
    expect(magnitud_5.get_number()).to.be.equal(5);
    expect(magnitud_5.get_object()).to.be.equal(masa_1);
  });

  it('Se prueba la funcionalidad cuando T es de Longitud', () => {
    const longitud_1: Longitud = new Longitud(5);
    const magnitud_6: Magnitud<Longitud> = new Magnitud(longitud_1);

    expect(magnitud_6.convert()).to.be.equal(12.7);
    expect(magnitud_6.objeto).to.be.equal(longitud_1);
    expect(magnitud_6.get_number()).to.be.equal(5);
    expect(magnitud_6.get_object()).to.be.equal(longitud_1);
  });

  it('Se prueba la funcionalidad cuando T es de Fuerza', () => {
    const fuerza_1: Fuerza = new Fuerza(5);
    const magnitud_7: Magnitud<Fuerza> = new Magnitud(fuerza_1);

    expect(magnitud_7.convert()).to.be.equal(0.50986);
    expect(magnitud_7.objeto).to.be.equal(fuerza_1);
    expect(magnitud_7.get_number()).to.be.equal(5);
    expect(magnitud_7.get_object()).to.be.equal(fuerza_1);
  });
});


