import { useState } from 'react';
import Accordion from './components/Accordion';

const questions = [
  {
    title: 'How many team members can I invite?',
    content:
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
  },
  {
    title: 'What is the maximum file upload size?',
    content:
      'No more than 2GB. All files in your account must fit your allotted storage space.',
  },
  {
    title: 'How do I reset my password?',
    content:
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
  },
  {
    title: 'Can I cancel my subscription?',
    content:
      'Yes! Send us a message and we’ll process your request no questions asked.',
  },
  {
    title: 'Do you provide additional support?',
    content:
      'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
  },
];

function App() {
  return (
    <main className='bg-gradient-to-b from-violet-normal to-blue-soft min-h-screen flex flex-col justify-center items-center font-kumbhsans'>
      <Accordion questions={questions} />
    </main>
  );
}

export default App;
