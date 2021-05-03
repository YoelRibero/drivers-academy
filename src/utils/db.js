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
      path: 'costs',
      externalLink: false
    },
    {
      name: 'Simulacro de exámen',
      path: '/quiz',
      externalLink: true
    },
    {
      name: 'Requisitos para inicio de clases',
      path: 'requirement',
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
      subtitle: 'Ideal para personas sin conocimiento de manejo',
      description: [
        '25 clases prácticas',
        'Una clase de mecánica ligera.',
        'Presentación del vehiculo al examen práctico sin costo'
      ]
    },
    {
      title: 'Curso básico',
      price: '$17500',
      subtitle: 'Ideal para personas sin conocimiento de manejo',
      description: [
        '25 clases prácticas',
        'Una clase de mecánica ligera.',
        'Presentación del vehiculo al examen práctico sin costo'
      ]
    },
    {
      title: 'Curso básico',
      price: '$17500',
      subtitle: 'Ideal para personas sin conocimiento de manejo',
      description: [
        '25 clases prácticas',
        'Una clase de mecánica ligera.',
        'Presentación del vehiculo al examen práctico sin costo'
      ]
    },
    {
      title: 'Curso básico',
      price: '$17500',
      subtitle: 'Ideal para personas sin conocimiento de manejo',
      description: [
        '25 clases prácticas',
        'Una clase de mecánica ligera.',
        'Presentación del vehiculo al examen práctico sin costo'
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
      id: 1,
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
      id: 2,
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
    }
  ]
}
