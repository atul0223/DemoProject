import React, { useState } from 'react';

// Sample Data (merged into this file, with more dummy data added)
const courses = [
  {
    id: 1,
    title: 'React Basics',
    description: 'Learn the fundamentals of React for building user interfaces.',
    lessons: [
      { id: 1, title: 'Introduction to React', youtubeLink:'https://youtu.be/LX4JUscM9Sk?si=Jq0rLV65nvTwn95N'},
      { id: 2, title: 'Components and Props', youtubeLink: 'https://youtu.be/HKX__TQ9ff0?si=b3HQ5bUpE4yiJJzE' },
    ],
  },
  {
    id: 2,
    title: 'Tailwind CSS Mastery',
    description: 'Master Tailwind CSS for responsive and utility-first designs.',
    lessons: [
      { id: 1, title: 'Getting Started with Tailwind', youtubeLink:'https://youtu.be/mr15Xzb1Ook?si=V4z1149FdtFdQRqJ'},
      { id: 2, title: 'Responsive Design Techniques', youtubeLink: 'https://youtu.be/2IV08sP9m3U?si=y6kvtI7roXI0DVHc' },
    ],
  },
  {
    id: 3,
    title: 'JavaScript Fundamentals',
    description: 'Build a strong foundation in JavaScript programming.',
    lessons: [
      { id: 1, title: 'Variables and Data Types', youtubeLink: 'https://youtu.be/HGCDMJXS1cc?si=VdRnKHjXAl4iZJ62' },
      { id: 2, title: 'Functions and Scope', youtubeLink: 'https://youtu.be/uH-tVP8MUs8?si=X9yEeAhKf-KMTpRz' },
      { id: 3, title: 'Arrays and Objects', youtubeLink:'https://youtu.be/vVYOHmqQDCU?si=lhq1CdVszoWz9vUs'},
    ],
  },
  {
    id: 4,
    title: 'Advanced React',
    description: 'Dive deeper into advanced React concepts and hooks.',
    lessons: [
      { id: 1, title: 'React Hooks Overview', youtubeLink: 'https://youtu.be/LOH1l-MP_9k?si=ANlPjL-V5hHHwzOD' },
      { id: 2, title: 'State Management with Context', youtubeLink: 'https://youtu.be/QEEz11ubRbs?si=iOe2Ies-EzZwzPTb' },
    ],
  },
];

// Define Home Component (as a function in the same file)
function Home({ setCurrentView, setSelectedCourseId }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center text-black">Available Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-black">{course.title}</h2>
            <p className="text-black mb-4">{course.description}</p>
            <button
              onClick={() => {
                setSelectedCourseId(course.id);
                setCurrentView('course');
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Define Course Component (as a function in the same file)
function Course({ selectedCourseId, setCurrentView, setSelectedLessonId }) {
  const course = courses.find((c) => c.id === selectedCourseId);

  if (!course) {
    return <div className="text-center text-black mt-4">Course not found.</div>;
  }

  return (
    <div>
      <button
        onClick={() => setCurrentView('home')}
        className="mb-4 bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
      >
        Back to Home
      </button>
      <h1 className="text-2xl font-bold mb-4 text-black">{course.title}</h1>
      <p className="text-black mb-4">{course.description}</p>
      <h2 className="text-xl font-semibold mb-2 text-black">Lessons:</h2>
      <ul className="list-disc pl-5">
        {course.lessons.map((lesson) => (
          <li key={lesson.id} className="mb-2 text-black">
            <button
              onClick={() => {
                setSelectedLessonId(lesson.id);
                setCurrentView('lesson');
              }}
              className="text-blue-500 hover:underline"
            >
              {lesson.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Define Lesson Component (as a function in the same file)
function Lesson({ selectedCourseId, selectedLessonId, setCurrentView }) {
  const course = courses.find((c) => c.id === selectedCourseId);
  const lesson = course?.lessons.find((l) => l.id === selectedLessonId);

  if (!course || !lesson) {
    return <div className="text-center text-black mt-4">Lesson not found.</div>;
  }

  return (
    <div>
      <button
        onClick={() => setCurrentView('course')}
        className="mb-4 bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
      >
        Back to Course
      </button>
      <h1 className="text-2xl font-bold mb-4 text-black">{lesson.title}</h1>
      <p className="mb-4 text-black">
        Watch the video lesson here:{' '}
        <a
          href={lesson.youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Open YouTube Video
        </a>
      </p>
      <p className="text-black">This is a placeholder for lesson content. Click the link above to view the video on YouTube.</p>
    </div>
  );
}

// Main App Component (now handling state and conditional rendering)
function LMS() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [selectedLessonId, setSelectedLessonId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar - Adjusted for black text */}
      <nav className="bg-gray-200 p-4 shadow-md">  {/* Changed background for visibility with black text */}
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-black">LMS App</h1>
          <button
            onClick={() => {
              setCurrentView('home');
              setSelectedCourseId(null);
              setSelectedLessonId(null);
            }}
            className="text-black hover:underline"
          >
            Home
          </button>
        </div>
      </nav>

      {/* Main Content - Conditional Rendering */}
      <main className="container mx-auto p-4 mt-6">
        {currentView === 'home' && (
          <Home setCurrentView={setCurrentView} setSelectedCourseId={setSelectedCourseId} />
        )}
        {currentView === 'course' && selectedCourseId && (
          <Course
            selectedCourseId={selectedCourseId}
            setCurrentView={setCurrentView}
            setSelectedLessonId={setSelectedLessonId}
          />
        )}
        {currentView === 'lesson' && selectedCourseId && selectedLessonId && (
          <Lesson
            selectedCourseId={selectedCourseId}
            selectedLessonId={selectedLessonId}
            setCurrentView={setCurrentView}
          />
        )}
      </main>
    </div>
  );
}

export default LMS;
