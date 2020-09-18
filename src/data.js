import React from 'react';
import OaklandHigh from './picSrc/oaklandHigh.jpg';
import Laney from './picSrc/laney.jpg';
import UCI from './picSrc/uci.png';
import CoA from './picSrc/CoA.png';
import AboutMe from './InternetExplorerTabContent/AboutMe';
import Resume from './InternetExplorerTabContent/Resume';

export const schools = [
    {
        name: 'University of California, Irvine',
        icon: UCI,
        degree: 'Bachelor of Science in Computer Science',
        years: '2018 - 2020',
    },
    {
        name: 'Laney College',
        icon: Laney,
        degree: 'Associate of Science - Transfer in Mathematics',
        years: '2016 - 2018',
    },
    {
        name: 'College of Alameda',
        icon: CoA,
        degree: 'Associate of Science - Transfer in Mathematics',
        years: '2016 - 2018',
    },
    {
        name: 'Oakland High School',
        icon: OaklandHigh,
        degree: 'High School Diploma',
        years: '2012 - 2016',
    }
];

export const skills = [
    {
        name: 'C++',
        level: 75
    },
    {
        name: 'ReactJS',
        level: 90,
    },
    {
        name: 'CSS3',
        level: 50,
    },
    {
        name: 'HTML5',
        level: 70,
    },
    {
        name: 'React Native',
        level: 70,
    },
    {
        name: 'C',
        level: 60,
    },
    {
        name: 'Python',
        level: 85,
    },
    {
        name: 'Javascript',
        level: 90,
    },
    {
        name: 'NodeJS',
        level: 70,
    },
    {
        name: 'ExpressJS',
        level: 70,
    },
    {
        name: 'Git',
        level: 90,
    },
    {
        name: 'AWS',
        level: 50,
    },
    {
        name: 'NoSQL',
        level: 80,
    },
    {
        name: 'SQL',
        level: 60,
    },
    {
        name: 'Java',
        level: 65,
    },
];

export const jobs = [
    {
        company: '</develop> for good',
        location: 'United States',
        position: 'Fullstack Engineer',
        years: 'Sep 2020 - Present',
        info: 'Info',
        start: {
            month: 9,
            year: 2020,
        },
        description: [
            '',
            '',
            '',
            '',
        ],
    },
    {
        company: 'Ippo Earrings',
        location: 'Irvine, CA',
        position: 'Fullstack Engineer',
        years: 'Jul 2020 - Present',
        info: 'Ippo Earrings is a jewelry startup that sells handcrafted jewelries and customers could order custom made jewelries.',
        start: {
            month: 7,
            year: 2020,
        },
        description: [
            'Architected client-side using React and Redux and server-side using NodeJS, ExpressJS, MongoDB, and Datadog',
            'Implemented a web monitoring tool to track traffic and user activities to improve product analysis',
            'Utilized Stripe to process payments and Oauth to authenticate and authorize sign ins',
            'Hosted backend server on Heroku',
        ],
    },
    {
        company: 'Episource',
        location: 'Gardena, CA',
        position: 'Software Engineer Intern',
        years: 'Jun 2020 - Aug 2020',
        info: 'Info',
        start: {
            month: 6,
            year: 2020,
        },
        description: [
            'Created responsive and scalable UI components using ReactJS that are both maintainable and reusable',
            'Developed EpiAnalyst dashboards to enhance the user experiences for over 500 insurance companies',
            'Refined old structure to improve querying speed from O(n^2) to O(nlogn)',
            'Eliminated bugs with Jest tests to ensure correct functionality and data and reduced 90% of manual testings',
        ],
    },
    {
        company: 'Prism Software',
        location: 'Irvine, CA',
        position: 'Quality Assurance Technician',
        years: 'Mar 2020 - Jun 2020',
        info: 'Info',
        start: {
            month: 3,
            year: 2020,
        },
        description: [
            'Programmed Python scripts to automate software testing, resulting in a 60% decrease of manual testing time',
            'Automated web app testing with Selenium improving product delivery speed by 26%',
            'Black box tested company software products to prevent bugs'
        ],
    },
    {
        company: 'Blueprint at UCI',
        location: 'Irvine, CA',
        position: 'Developer',
        years: 'Sep 2019 - Jun 2020',
        info: 'Info',
        start: {
            month: 9,
            year: 2019,
        },
        description: [
            'Coordinated with a team of 6 to create a full-stack project for a nonprofit organization that allows users to scrape blogs from various websites and reshare them onto their Shopify blog', 
            'Organized team meetings and tasks to improve productivity and efficiency',
            'Focused on creating UCI Blueprint website using ReactJS',
        ],
    },
    {
        company: 'Dreams for Schools',
        location: 'Irvine, CA',
        position: 'Appjam+ Program Mentor',
        years: 'Sep 2019 - Dec 2019',
        info: 'Info',
        start: {
            month: 9,
            year: 2019,
        },
        description: [
            'Empowered 20 middle schoolers with learning disabilities to develop their interests in computer science', 
            'Mentored 4 kids to give them a hands-on technical experience in building a mobile game app using Thunkable',
            'Collaborated with 3 mentors to compose weekly lesson plans to motivate kids and cultivate their curiosities'
        ],
    },
    {
        company: 'King Kong Chinese Restaurant',
        location: 'Castro Valley, CA',
        position: 'Manager',
        years: 'Jan 2014 - Sep 2018',
        info: 'Info',
        start: {
            month: 1,
            year: 2014,
        },
        description: [
            'stuf',
            'stuff',
        ],
    },
];

export const tabs = [
    {
        name: 'About Me',
        component: <AboutMe/>,
    },
    {
        name: 'Resume',
        component: <Resume/>,
    },
    {
        name: 'Notapp',
        component: '',
    },
    {
        name: 'Stoinks',
        component: '',
    },
    {
        name: 'Dindle',
        component: '',
    },
    {
        name: 'ai Message',
        component: '',
    },
    {
        name: 'Transcend Life',
        component: '',
    },
    {
        name: 'User Login Database',
        component: '',
    },
    {
        name: 'Website Blocker',
        component: '',
    },
    {
        name: 'Keylogger',
        component: '',
    },
    {
        name: 'Yelp Decision Maker',
        component: '',
    },
    {
        name: 'Rob the Mafia',
        component: '',
    },
    {
        name: 'QuakeUp',
        component: '',
    },
];

