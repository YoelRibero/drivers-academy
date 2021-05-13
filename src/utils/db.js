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
      quiz: '¿Cuánto es 2 + 2?',
      options: [
        {
          idOption: '1',
          value: '1',
          isCorrect: false
        },
        {
          idOption: '2',
          value: '2',
          isCorrect: false
        },
        {
          idOption: '3',
          value: '3',
          isCorrect: false
        },
        {
          idOption: '4',
          value: '4',
          isCorrect: true
        }
      ]
    },
    {
      id: uuid(),
      quiz: '¿Cuánto es 4 + 4?',
      options: [
        {
          idOption: '1-2',
          value: '2',
          isCorrect: false
        },
        {
          idOption: '2-2',
          value: '4',
          isCorrect: false
        },
        {
          idOption: '3-2',
          value: '6',
          isCorrect: false
        },
        {
          idOption: '4-2',
          value: '8',
          isCorrect: true
        }
      ]
    },
    {
      id: uuid(),
      quiz: '¿Cuánto es 3 + 3?',
      options: [
        {
          idOption: '1-3',
          value: '2',
          isCorrect: false
        },
        {
          idOption: '2-3',
          value: '4',
          isCorrect: false
        },
        {
          idOption: '3-3',
          value: '6',
          isCorrect: true
        },
        {
          idOption: '4-3',
          value: '8',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: '¿Cuánto es 1 + 1?',
      options: [
        {
          idOption: '1-4',
          value: '2',
          isCorrect: true
        },
        {
          idOption: '2-4',
          value: '4',
          isCorrect: false
        },
        {
          idOption: '3-4',
          value: '6',
          isCorrect: false
        },
        {
          idOption: '4-4',
          value: '8',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: '¿Cuánto es 5 + 5?',
      options: [
        {
          idOption: '1-5',
          value: '2',
          isCorrect: false
        },
        {
          idOption: '2-5',
          value: '4',
          isCorrect: false
        },
        {
          idOption: '3-5',
          value: '10',
          isCorrect: true
        },
        {
          idOption: '4-5',
          value: '8',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: '¿Cuánto es 6 + 6?',
      options: [
        {
          idOption: '1-6',
          value: '12',
          isCorrect: true
        },
        {
          idOption: '2-6',
          value: '14',
          isCorrect: false
        },
        {
          idOption: '3-6',
          value: '16',
          isCorrect: false
        },
        {
          idOption: '4-6',
          value: '18',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: '¿Cuánto es 7 + 7?',
      options: [
        {
          idOption: '1-7',
          value: '12',
          isCorrect: false
        },
        {
          idOption: '2-7',
          value: '14',
          isCorrect: true
        },
        {
          idOption: '3-7',
          value: '16',
          isCorrect: false
        },
        {
          idOption: '4-7',
          value: '18',
          isCorrect: false
        }
      ]
    },
    {
      id: uuid(),
      quiz: '¿Cuánto es 8 + 8?',
      options: [
        {
          idOption: '1-8',
          value: '12',
          isCorrect: false
        },
        {
          idOption: '2-8',
          value: '14',
          isCorrect: false
        },
        {
          idOption: '3-8',
          value: '16',
          isCorrect: true
        },
        {
          idOption: '4-8',
          value: '18',
          isCorrect: false
        }
      ]
    }
  ]
}
