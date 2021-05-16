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
    }
  ]
}
