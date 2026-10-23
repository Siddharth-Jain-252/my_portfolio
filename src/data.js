export const aboutData = {
  name: 'Siddharth Mittal Jain',
  avatar: 'SMJ',
  university: 'B.Tech CSE · 3rd Year',
  email: 'jainsiddharth252@gmail.com',
  location: 'Lucknow, India',
  bio: 'I am an AI Engineer and Backend Developer with strong expertise in Java, C++, Python, and modern AI technologies. I specialize in building scalable backend systems, designing efficient algorithms, and developing intelligent applications powered by machine learning and large language models.',
  links: [
    { label: 'GitHub', url: 'https://github.com/Siddharth-Jain-252/', icon: 'gh' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/-siddharth-jain/', icon: 'li' },
    { label: 'Twitter', url: 'https://x.com/Siddharth_252_', icon: 'tw' },
    { label: 'Resume', url: 'https://drive.google.com/file/d/1MGWqlR3NXxyEjndK7hpxrO2FeJEkVroR/view?usp=sharing', icon: 'cv' },
    { label: 'LeetCode', url: 'https://leetcode.com/u/SiddharthJain252/', icon: 'lc' },
  ],
}

export const skillsData = [
  { broad: 'Languages', technologies: ['Java', 'C++', 'Python', 'PostgreSQL'] },
  { broad: 'Frontend', technologies: ['React', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { broad: 'Backend', technologies: ['FastAPI', 'Flask', 'REST APIs', 'Spring Boot'] },
  { broad: 'Database', technologies: ['PostgreSQL', 'Redis'] },
  { broad: 'DevOps & Cloud', technologies: ['Docker', 'Git', 'GitHub Actions', 'AWS', 'Vercel'] },
  { broad: 'AI / ML', technologies: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'LangChain'] },
]

export const projectsData = [
  {
    name: 'Chat App',
    picture: '/images/ChatAppPic.png',
    description: 'A real-time anonymous chat application built with Spring Boot and WebSockets. Features include user authentication, private messaging, group chats, and message history stored in PostgreSQL.',
    tags: ['Spring Framework', 'Java', 'WebSockets', 'PostgreSQL', 'ReactJS', 'Tailwind CSS'],
    websiteLink: null,
    githubLink: 'https://github.com/Siddharth-Jain-252/ChatApp',
  },
  {
    name: 'Air Writing',
    picture: '/images/AirWritingPic.png',
    description: 'A CNN project that detects digit written in air without any physical contact. Built using FastAPI it performs digit recognition in low latency.',
    tags: ['CNN', 'MediaPipe', 'FastAPI', 'Tensorflow', 'Docker', 'OpenCV', 'React', 'Tailwind CSS'],
    websiteLink: 'https://airwriting2.vercel.app/',
    githubLink: 'https://github.com/Siddharth-Jain-252/air_writing',
  },
  {
    name: 'Swadist',
    picture: '/images/SwadistPic.png',
    description: "A full-stack project that provide an estimation on how long will it take to get user's order delivered. Features include a 24x7 AI based customer service chat bot.",
    tags: ['Scikit-learn', 'Llama 3', 'React', 'FastAPI', 'Docker', 'Tailwind CSS'],
    websiteLink: 'https://swadist-zeta.vercel.app/',
    githubLink: 'https://github.com/Siddharth-Jain-252/Swadist',
  },
  {
    name: 'Instagram Spam Detector',
    picture: '/images/InstagramSpamPic.png',
    description: 'An interactive platform to detect whether a given Instagram profile is a spam account or not. Built using a dataset of Instagram profiles, the app provides real-time predictions based on user input.',
    tags: ['Scikit-learn', 'Javascript', 'Css', 'HTML'],
    websiteLink: 'https://fake-id-detection-3.onrender.com/',
    githubLink: 'https://github.com/Siddharth-Jain-252/Fake_Id_Detection',
  },
  {
    name: 'MyKeyboard',
    picture: '/images/MyKeyboardPic.png',
    description: "A custom keyboard application that learns from user input to provide personalized and accurate next-word predictions. Built using user's typing history, the app offers a seamless typing experience",
    tags: ['LSTM', 'Tensorflow', 'React', 'Tailwind CSS'],
    websiteLink: null,
    githubLink: 'https://github.com/Siddharth-Jain-252/MyKeyboard',
  },
]
