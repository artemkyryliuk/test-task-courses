export type Detail = {
  id: number
  topic: string
  date: string
  description: string
  type: 'lecture' | 'practical session'
  completed?: boolean
  notes?: string
}

export type Course = {
  courseName: string
  courseDescription: string
  details: Detail[]
}

export type SortKeys = keyof Pick<Detail, 'id' | 'topic' | 'date'>
export type Order = 'asc' | 'desc'

export const courses: Course[] = [
  {
    courseName: 'Web Development Course',
    courseDescription:
      'Learn to build web applications and websites using various technologies, programming languages, and frameworks.',
    details: [
      {
        id: 1,
        topic: 'Introduction to HTML',
        date: '2023-08-01',
        type: 'lecture',
        description: 'Learn the basics of HTML markup and structure.',
      },
      {
        id: 2,
        topic: 'Introduction to HTML',
        date: '2023-08-05',
        type: 'practical session',
        description: 'Practice working with HTML elements.',
      },
      {
        id: 3,
        topic: 'CSS Styling',
        date: '2023-08-10',
        type: 'lecture',
        description: 'Explore different CSS properties for styling web pages.',
      },
      {
        id: 4,
        topic: 'CSS Styling',
        date: '2023-08-15',
        type: 'practical session',
        description: 'Apply CSS styles to create attractive web designs.',
      },
      {
        id: 5,
        topic: 'JavaScript Fundamentals',
        date: '2023-08-20',
        type: 'lecture',
        description: 'Get hands-on experience with JavaScript programming.',
      },
      {
        id: 6,
        topic: 'JavaScript Fundamentals',
        date: '2023-08-25',
        type: 'practical session',
        description: 'Practice writing JavaScript code to solve problems.',
      },
    ],
  },
  {
    courseName: 'Data Science Course',
    courseDescription:
      'Explore data analysis, machine learning, and statistical methods to extract valuable insights from large datasets.',
    details: [
      {
        id: 1,
        topic: 'Data Analysis Techniques',
        date: '2023-08-02',
        type: 'lecture',
        description: 'Learn various data analysis techniques using Python.',
      },
      {
        id: 2,
        topic: 'Data Analysis Techniques',
        date: '2023-08-06',
        type: 'practical session',
        description: 'Analyze real-world data sets with Python libraries.',
      },
      {
        id: 3,
        topic: 'Machine Learning Algorithms',
        date: '2023-08-12',
        type: 'lecture',
        description:
          'Discover popular machine learning algorithms and applications.',
      },
      {
        id: 4,
        topic: 'Machine Learning Algorithms',
        date: '2023-08-16',
        type: 'practical session',
        description:
          'Implement machine learning models and evaluate performance.',
      },
      {
        id: 5,
        topic: 'Data Visualization',
        date: '2023-08-22',
        type: 'lecture',
        description:
          'Visualize data to gain insights and make informed decisions.',
      },
      {
        id: 6,
        topic: 'Data Visualization',
        date: '2023-08-26',
        type: 'practical session',
        description:
          'Create compelling data visualizations using Python libraries.',
      },
    ],
  },
  {
    courseName: 'Mobile App Development Course',
    courseDescription:
      'Join the journey of developing mobile applications for Android and iOS using modern tools and programming languages.',
    details: [
      {
        id: 1,
        topic: 'Introduction to Mobile App Development',
        date: '2023-08-03',
        type: 'lecture',
        description:
          'Explore the world of mobile app development for Android and iOS.',
      },
      {
        id: 2,
        topic: 'Introduction to Mobile App Development',
        date: '2023-08-07',
        type: 'practical session',
        description:
          'Create simple mobile app prototypes using a visual builder.',
      },
      {
        id: 3,
        topic: 'User Interface Design',
        date: '2023-08-13',
        type: 'lecture',
        description:
          'Design intuitive and user-friendly mobile app interfaces.',
      },
      {
        id: 4,
        topic: 'User Interface Design',
        date: '2023-08-17',
        type: 'practical session',
        description: 'Develop interactive app layouts with a UI design tool.',
      },
      {
        id: 5,
        topic: 'App Deployment',
        date: '2023-08-23',
        type: 'lecture',
        description: 'Learn how to deploy your mobile apps to app stores.',
      },
      {
        id: 6,
        topic: 'App Deployment',
        date: '2023-08-27',
        type: 'practical session',
        description:
          'Publish your mobile apps to the Google Play Store and Apple App',
      },
    ],
  },
]
