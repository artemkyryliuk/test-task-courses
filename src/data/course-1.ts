import { Course } from './types/course'

export const course1: Course = {
  courseName: 'Course 1',
  details: [
    {
      id: 1,
      name: `Introduction to Programming for the Cloud`,
      date: '2023-08-15',
      description: `Cloud Application Development for Beginners.
      Front-end Development.
      Back-end and server-side Development.
      Programming Languages, Tools and Frameworks`,
      type: 'Lecture',
      completed: true,
    },
    {
      id: 2,
      name: `HTML5 and CSS3 Overview`,
      date: '2023-08-16',
      description: `Introduction to HTML and HTML tags.
      HTML5 Management & Support, Scripting.
      CSS: Styling HTML`,
      type: 'Lecture',
      completed: true,
    },
    {
      id: 3,
      name: `JavaScript Programming for Web Applications`,
      date: '2023-08-17',
      description: `JavaScript Overview.
      JavaScript Variables and Control Statements.
      JavaScript Functions and APIs.
      Client-side JavaScript, DOM objects`,
      type: 'Lecture',
      completed: true,
    },
    {
      id: 4,
      name: `HTML5 Elements`,
      date: '2023-08-18',
      description: `HTML5 tags and structural elements.
      HTML5 Input Elements and data Attributes`,
      type: 'Lecture',
      completed: false,
    },
    {
      id: 5,
      name: `HTML5 Elements`,
      date: '2023-08-19',
      description: `HTML5 tags and structural elements.
      HTML5 Input Elements and data Attributes`,
      type: 'Practical session',
      completed: false,
    },
    {
      id: 6,
      name: `GitHub`,
      date: '2023-08-20',
      description: `Introduction ot Git and GitHub.
      Repositories and Branches.
      Managing GitHub Projects`,
      type: 'Lecture',
      completed: false,
    },
    {
      id: 7,
      name: `GitHub`,
      date: '2023-08-21',
      description: `Introduction ot Git and GitHub.
      Repositories and Branches.
      Managing GitHub Projects`,
      type: 'Practical session',
      completed: false,
    },
  ],
  mutatedDetails: [],
}
