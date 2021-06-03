import uuid from 'react-uuid'

export const db = {
  menu: [
    {
      name: 'Inicio',
      path: '/',
      externalLink: true
    },
    {
      name: 'Nosotros',
      path: 'about-us',
      externalLink: false
    },
    {
      name: '¿Por qué elegirnos?',
      path: 'who-we-are',
      externalLink: false
    },
    {
      name: 'Simulacro de exámen',
      path: '/quiz',
      externalLink: true
    },
    {
      name: 'Requisitos para inicio de clases',
      path: 'requirements',
      externalLink: false
    },
    {
      name: 'Contacto',
      path: 'footer',
      externalLink: false
    }
  ],
  promotions: [
    {
      title: 'Curso básico',
      price: '$17500',
      subtitle: 'Ideal para personas sin ningún tipo de conocimiento de manejo',
      description: [
        '25 clases prácticas',
        'Una clase de mecánica ligera',
        'Presentación del vehiculo al examen práctico sin costo'
      ]
    },
    {
      title: 'Curso Perfeccionamiento',
      price: '$10500',
      subtitle: 'Para personas que tienen algún conocimiento de manejo',
      description: [
        '15 clases prácticas',
        'Una clase de mecánica ligera',
        'Presentación del vehiculo al examen práctico sin costo'
      ]
    },
    {
      title: 'Curso práctico',
      price: '$3500',
      subtitle: 'Pensado para personas con libreta que necesitan practicar',
      description: [
        '5 clases prácticas'
      ]
    },
    {
      title: 'Clase libre',
      price: '$700',
      subtitle: 'Se abona clase a clase',
      description: [
        'La utilización del vehículo en el exámen tendrá un costo adicional de $1200'
      ]
    }
  ],
  socialNetworks: [
    {
      name: 'Social Network Facebook',
      icon: 'iconFb',
      path: 'https://facebook.com'
    },
    {
      name: 'Social Network Instagram',
      icon: 'iconIt',
      path: 'https://instagram.com/academialibra'
    }
  ],
  questions: [
    {
      id: uuid(),
      quiz: '¿Cual es la línea de detención en cruce peatonal?',
      options: [
        {
          idOption: '1',
          value: 'Es la franja de color de 60 centímetros blanca que antecede al cruce',
          isCorrect: true
        },
        {
          idOption: '2',
          value: 'Es la franja de 20 centímetros',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'Las motocicletas pueden circular:',
      options: [
        {
          idOption: '1-2',
          value: '3 por senda',
          isCorrect: false
        },
        {
          idOption: '2-2',
          value: '2 por senda',
          isCorrect: true
        },
        {
          idOption: '3-2',
          value: 'ninguna es correcta',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'Al salir de un garage, su vehículo obtiene la preferencia',
      options: [
        {
          idOption: '1-3',
          value: 'Sobre los vehículos que circulan sobre su derecha',
          isCorrect: false
        },
        {
          idOption: '2-3',
          value: 'Sobre los vehículos que circulan sobre su izquierda',
          isCorrect: false
        },
        {
          idOption: '3-3',
          value: 'Sobre los peatones',
          isCorrect: false
        },
        {
          idOption: '4-3',
          value: 'Ninguna es correcta',
          isCorrect: true
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'En las esquinas (aunque el cruce no esté pintado), la preferencia de paso:',
      options: [
        {
          idOption: '1-4',
          value: 'Es siempre del peatón',
          isCorrect: true
        },
        {
          idOption: '2-4',
          value: 'Es del peatón solo si es acompañado por niños',
          isCorrect: false
        },
        {
          idOption: '3-4',
          value: 'Es del vehículo, si quien cruza lo hace lentamente',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'En un cruce no regulado, ¿que vehículo tiene el derecho de paso?',
      options: [
        {
          idOption: '1-5',
          value: 'El que se enfrenta al cartel de pare',
          isCorrect: false
        },
        {
          idOption: '2-5',
          value: 'El que aparece por la izquierda',
          isCorrect: false
        },
        {
          idOption: '3-5',
          value: 'El que aparece por la derecha',
          isCorrect: true
        },
        {
          idOption: '4-5',
          value: 'El que llega ultimo al cruce',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'Una velocidad adecuada nos permite:',
      options: [
        {
          idOption: '1-6',
          value: 'Reconocer con facilidad las señales de transito',
          isCorrect: false
        },
        {
          idOption: '2-6',
          value: 'Mantener una distancia prudente, razonable, con el vehículo de adelante',
          isCorrect: false
        },
        {
          idOption: '3-6',
          value: 'Mantener una distancia prudente con los vehículos que circulan en ambos lados',
          isCorrect: false
        },
        {
          idOption: '4-6',
          value: 'Todas son correctas',
          isCorrect: true
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'Es obligatorio el uso de luces bajas (cortas) encendidas en forma permanente',
      options: [
        {
          idOption: '1-7',
          value: 'Verdadero',
          isCorrect: true
        },
        {
          idOption: '2-7',
          value: 'Falso',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'La velocidad máxima que se debe conducir en carretera, fuera de las zonas urbanas y sub urbanas, en los tramos que no existe señalización que establezca un limite máximo permitido es:',
      options: [
        {
          idOption: '1-8',
          value: '45km/hora',
          isCorrect: false
        },
        {
          idOption: '2-8',
          value: '60km/hora',
          isCorrect: false
        },
        {
          idOption: '3-8',
          value: '90km/hora',
          isCorrect: true
        },
        {
          idOption: '4-8',
          value: '110km/hora',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'Usted debe reducir la velocidad a paso de peatón:',
      options: [
        {
          idOption: '1-9',
          value: 'Frente a un cartel de escuela',
          isCorrect: false
        },
        {
          idOption: '2-9',
          value: 'Frente a una obra en la vía pública',
          isCorrect: false
        },
        {
          idOption: '3-9',
          value: 'Frente a una feria',
          isCorrect: false
        },
        {
          idOption: '4-9',
          value: 'Frente a una aglomeración de personas por manifestación, partidos, etc.',
          isCorrect: false
        },
        {
          idOption: '5-9',
          value: 'Todas son correctas',
          isCorrect: true
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'Son de seguridad pasiva en los vehículos',
      options: [
        {
          idOption: '1-10',
          value: 'El mecanismo de dirección',
          isCorrect: false
        },
        {
          idOption: '2-10',
          value: 'Sistema de luces',
          isCorrect: false
        },
        {
          idOption: '3-10',
          value: 'Sistema de retención',
          isCorrect: true
        },
        {
          idOption: '4-10',
          value: 'Sistema de frenos',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'Si usted, en una calle de doble sentido realiza un giro a la izquierda debe:',
      options: [
        {
          idOption: '1-11',
          value: 'Mirar por el espejo retrovisor, aminorar la marcha, encender el señalero izquierdo y colocarse en paralelo junto al eje central',
          isCorrect: false
        },
        {
          idOption: '2-11',
          value: 'Siempre que sea necesario señalizar con brazo y mano extendido horizontalmente hacia afuera del vehículo',
          isCorrect: false
        },
        {
          idOption: '3-11',
          value: 'Ingresar a la nueva vía por la senda izquierda del sentido de circulación',
          isCorrect: false
        },
        {
          idOption: '4-11',
          value: 'Todas son correctas',
          isCorrect: true
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'Los signos de pare y ceda el paso son:',
      options: [
        {
          idOption: '1-12',
          value: 'Señales verticales reglamentarias que establecen prohibiciones o reestricciones',
          isCorrect: true
        },
        {
          idOption: '2-12',
          value: 'Señales de advertencia',
          isCorrect: false
        },
        {
          idOption: '3-12',
          value: 'Dispositivo de información',
          isCorrect: false
        },
        {
          idOption: '4-12',
          value: 'Solo b) y c) son correctas',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'La luz amarilla(ámbar)contínua en un semáforo le indica que:',
      options: [
        {
          idOption: '1-13',
          value: 'Si comenzó el cruce está obligado a despejarla',
          isCorrect: false
        },
        {
          idOption: '2-13',
          value: 'Si no comenzó el cruce, le da derecho a cruzar',
          isCorrect: false
        },
        {
          idOption: '3-13',
          value: 'Tengo precaución y no ingreso al cruce',
          isCorrect: false
        },
        {
          idOption: '4-13',
          value: 'Solo a) y c) son correctas',
          isCorrect: true
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'Esta prohibído estacionar a menos de 10mts antes de un cartel de pare o ceda paso',
      options: [
        {
          idOption: '1-14',
          value: 'Verdadero',
          isCorrect: true
        },
        {
          idOption: '2-14',
          value: 'Falso',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'Cuando enfrenta un cartel de ceda el paso, usted debe:',
      options: [
        {
          idOption: '1-15',
          value: 'Reducir la velocidad y detenerse si fuera necesario',
          isCorrect: false
        },
        {
          idOption: '2-15',
          value: 'Dejar pasar a los vehículos procedentes de la calle transversal',
          isCorrect: false
        },
        {
          idOption: '3-15',
          value: 'Preferencia a los peatones',
          isCorrect: false
        },
        {
          idOption: '4-15',
          value: 'Todas son correctas',
          isCorrect: true
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'En ruta,usted no podrá adelantar a otro vehículo usando la mitad izquierda de la calzada',
      options: [
        {
          idOption: '1-16',
          value: 'En un repecho próximo a una cumbre',
          isCorrect: false
        },
        {
          idOption: '2-16',
          value: 'En puentes o túneles',
          isCorrect: false
        },
        {
          idOption: '3-16',
          value: 'Cuando existe una línea amarilla contínua',
          isCorrect: false
        },
        {
          idOption: '4-16',
          value: 'Todas son correctas',
          isCorrect: true
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'El conductor del vehículo que circula delante suyo saca el brazo fuera del mismo y lo extiede hacia arriba,significa que realizará:',
      options: [
        {
          idOption: '1-17',
          value: 'Un giro a la derecha',
          isCorrect: true
        },
        {
          idOption: '2-17',
          value: 'Un giro a la izquierda',
          isCorrect: false
        },
        {
          idOption: '3-17',
          value: 'Una detención',
          isCorrect: false
        },
        {
          idOption: '4-17',
          value: 'Marcha atrás',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'El hidroplaneamiento es un fenómeno que se produce cuando:',
      options: [
        {
          idOption: '1-18',
          value: 'Circula a exceso de velocidad y acciona el freno de mano',
          isCorrect: false
        },
        {
          idOption: '2-18',
          value: 'El dibujo de los neumáticos no puede desalojar el agua de la calzada',
          isCorrect: true
        },
        {
          idOption: '3-18',
          value: 'Frena en forma imprevista sobre una mancha de aceite',
          isCorrect: false
        },
        {
          idOption: '4-18',
          value: 'Gira a alta velocidad',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'La hipoglucemia compromete la capacidad para conducir',
      options: [
        {
          idOption: '1-19',
          value: 'Falso',
          isCorrect: false
        },
        {
          idOption: '2-19',
          value: 'Verdadero',
          isCorrect: true
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'Se produce hidroplaneamiento cuando se forma una película de agua entre la calzada y el neumático,haciendo que se pierda el control del vehículo',
      options: [
        {
          idOption: '1-20',
          value: 'Verdadero',
          isCorrect: true
        },
        {
          idOption: '2-20',
          value: 'Falso',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'Los medicamentos pueden disminuir el rendimiento psicomotor de la persona',
      options: [
        {
          idOption: '1-21',
          value: 'Falso',
          isCorrect: false
        },
        {
          idOption: '2-21',
          value: 'Verdadero',
          isCorrect: true
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'El velocímetro permite:',
      options: [
        {
          idOption: '1-22',
          value: 'Controlar la velocidad',
          isCorrect: false
        },
        {
          idOption: '2-22',
          value: 'No pasarnos de la velocidad permitida',
          isCorrect: false
        },
        {
          idOption: '3-22',
          value: 'Solo a) es correcta',
          isCorrect: true
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'Todo vehículo que se encuentra circulando una rotonda tiene preferencia sobre quién pretende ingresar en ella',
      options: [
        {
          idOption: '1-23',
          value: 'Verdadero',
          isCorrect: true
        },
        {
          idOption: '2-23',
          value: 'Falso',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'Pueden circular por el carril preferencial de buses:',
      options: [
        {
          idOption: '1-24',
          value: 'Motocicletas y vehículos particulares,con mas de 3 pasajeros',
          isCorrect: false
        },
        {
          idOption: '2-24',
          value: 'Excepcionalmente en caso de emergencia vehículos del ministerio',
          isCorrect: false
        },
        {
          idOption: '3-24',
          value: 'Buses del transporte colectivo de pasajeros',
          isCorrect: false
        },
        {
          idOption: '4-24',
          value: 'Solo b) y c) con correctas',
          isCorrect: true
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'El alcohol es compatible con la conducción de vehículos',
      options: [
        {
          idOption: '1-25',
          value: 'Verdadero',
          isCorrect: false
        },
        {
          idOption: '2-25',
          value: 'Falso',
          isCorrect: true
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'Al momento de ser adelantado por otro vehículo, usted:',
      options: [
        {
          idOption: '1-26',
          value: 'Mantiene o disminuye la velocidad',
          isCorrect: true
        },
        {
          idOption: '2-26',
          value: 'Aumenta la velocidad',
          isCorrect: false
        },
        {
          idOption: '3-26',
          value: 'Enciende el señalero derecho para dar paso a la maniobra',
          isCorrect: false
        },
        {
          idOption: '4-26',
          value: 'Se acerca al carril izquierdo',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: '¿Podemos adelantar en un repecho?',
      options: [
        {
          idOption: '1-27',
          value: 'No',
          isCorrect: true
        },
        {
          idOption: '2-27',
          value: 'Solo con extremo cuidado',
          isCorrect: false
        },
        {
          idOption: '3-27',
          value: 'Solo en calles de un único sentido',
          isCorrect: false
        },
        {
          idOption: '4-27',
          value: 'Se puede siempre',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'En carretera se debe aminorar la marcha en:',
      options: [
        {
          idOption: '1-28',
          value: 'Zonas urbanas y caseríos',
          isCorrect: false
        },
        {
          idOption: '2-28',
          value: 'Curvas y cruces',
          isCorrect: false
        },
        {
          idOption: '3-28',
          value: 'Pasos a nivel y puentes',
          isCorrect: false
        },
        {
          idOption: '4-28',
          value: 'Todas las anteriores son correctas',
          isCorrect: true
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'El tiempo de reacción del conductor se ve afectado por:',
      options: [
        {
          idOption: '1-29',
          value: 'El estado de la ruta',
          isCorrect: false
        },
        {
          idOption: '2-29',
          value: 'La velocidad a la cual conduce',
          isCorrect: false
        },
        {
          idOption: '3-29',
          value: 'El cansancio',
          isCorrect: true
        },
        {
          idOption: '4-29',
          value: 'Los defectos mecánicos del vehículo',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: 'Usted puede circular sin espejo retrovisor cuando circula a baja velocidad',
      options: [
        {
          idOption: '1-30',
          value: 'Verdadero',
          isCorrect: true
        },
        {
          idOption: '2-30',
          value: 'False',
          isCorrect: true
        }
      ]
    }
  ]
}
