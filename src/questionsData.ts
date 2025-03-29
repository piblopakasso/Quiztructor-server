interface Question {
  id: number
  mainText: string
  additionalText: string | null
  topics: string[]
  used: boolean
  reused: boolean
  mechanics: string[]
  quizzes: string[] | null
}

export function questionsData(): Question[] {
  return [
    {
      id: 1,
      mainText: 'Відповідність між медальйоном і його силою?',
      additionalText: 'Пригоди Джекі Чана',
      topics: ['мультфільми'],
      used: false,
      reused: true,
      mechanics: ['відповідність'],
      quizzes: null
    },
    {
      id: 2,
      mainText: 'Хто з цих спортсменів молодше/старше?',
      additionalText: 'Фото двох спортсменів',
      topics: ['спорт', 'футбол'],
      used: false,
      reused: true,
      mechanics: ['так/ні'],
      quizzes: null
    },
    {
      id: 3,
      mainText: 'Оберіть оригінал пісні?',
      additionalText: 'Мешап/Гачіремікс',
      topics: ['музика', 'крінж'],
      used: false,
      reused: true,
      mechanics: ['варіанти відповіді'],
      quizzes: null
    },
    {
      id: 4,
      mainText: 'Хто є автором гімну України?',
      additionalText: null,
      topics: ['музика', 'історія', 'загальне'],
      used: true,
      reused: false,
      mechanics: ['варіанти відповіді', 'вписати відповідь'],
      quizzes: ['Кахут #2']
    },
    {
      id: 5,
      mainText: 'Як звали батьків Гаррі Поттера?',
      additionalText: null,
      topics: ['фільми'],
      used: false,
      reused: false,
      mechanics: ['варіанти відповіді'],
      quizzes: null
    },
    {
      id: 6,
      mainText: 'Коли почалася Друга Світова Війна?',
      additionalText: 'Відео з питанням до Царьова',
      topics: ['історія', 'крінж'],
      used: false,
      reused: false,
      mechanics: ['варіанти відповіді'],
      quizzes: null
    }
  ]
}
