import MarketPlace from './Images/MarketPlace.gif'
import BidMock from './Images/AuctionSite.gif'
import EmailMock from './Images/JavaScriptEmail.gif'
import Rootbound from './Images/rootbound.gif'
import RicomaMock from './Images/ricomaMock.gif'

import MugAnimation from './Images/Renders/mug.png'
import MCMCouchAnimation from './Images/Renders/MCMCouch.png'
import ComputerAnimation from './Images/Renders/computer.png'
import FactoryAnimation from './Images/Renders/FactoryVideo.mp4'
import PhoneAnimation from './Images/Renders/PhoneVideo.mp4'
import RobotAnimation from './Images/Renders/RobotVideo.mp4'

import FastFood from './Images/FastFood.MP4'
import QuikDeliv from './Images/QuikDeliv.MP4'


export const webProjects = [
    {
        id: 1,
        title: 'Market Place',
        tools: 'React, TypeScript',
        description: "This exercise is to show some JavaScript/TypeScript and the React framework in a real world setting. The goal was to create a mock-up of a generic marketplace page using an API.",
        code: 'https://github.com/peter33chavez/mock-item-card',
        mockup: MarketPlace

    },
    {
        id: 2,
        title: 'Rootbound',
        tools: 'React, Redux, Node.js, Next.js, Firebase',
        description: "Rootbound is the Hybrid E-Commerce Shop that I started back in 2020. The website utilizes techniques like lazy loading, SDKs, WebHooks, and database manipulation to provide the best user experience.",
        mockup: Rootbound

    },
    {
        id: 3,
        title: 'Ricoma Mock Website',
        tools: 'React, Redux, Styled-Components',
        description: "For this project I have implemented a e-Commerce shop with Redux",
        code: 'https://github.com/peter33chavez/Ricoma-Mock',
        mockup: RicomaMock

    },
    {
        id: 4,
        title: 'Auction Commerce',
        tools: 'Django, SQLite, HTML, CSS',
        description: 'E-Commerce auction website that utilizes creation of listings, making bid offers, leaving comments, saving to watch list, and searching via category. Login/Register with server/client side validation is also available. ',
        site: 'http://devpeter.pythonanywhere.com',
        code: 'https://github.com/peter33chavez/commerce-Project2',
        mockup: BidMock

    },
    {
        id: 5,
        title: 'JavaScript Email',
        tools: 'JavaScript, Django, SQLite, HTML, CSS',
        description: 'Email Dashboard uses Javascript handling for all routing through Inbox, Compose, Sent, and Archived tabs within the logged-in view. Django is used to handle Customer login validation and API calls.',
        site: 'http://jsemail.pythonanywhere.com/login',
        code: 'https://github.com/peter33chavez/mail-project3',
        mockup: EmailMock
    },
]

export const mobileProjects = [
    {
        id: 6,
        title: 'QuikDeliv',
        tools: 'React Native, TypeScript, Firebase, Tailwind, GraphQL, ApolloClient',
        description: 'Track your packages quickly. Mock showcases a fullstack React Native app with data filtering and GraphQL data merging',
        code: 'https://github.com/peter33chavez/QuickDeliv',
        mockup: QuikDeliv,
        mockupType: "video"

    },
    {
        id: 7,
        title: 'FastFood',
        tools: 'React Native, TypeScript, Sanity, Tailwind, Redux',
        description: 'Get the food you want when you want it. Mock showcases UI/UX capabilities as well as e-commerce cart management on a mobile scale.',
        code: 'https://github.com/peter33chavez/FastFood',
        mockup: FastFood,
        mockupType: "video",
    },
]

export const animationProjects = [
   
    {
        id: 8,
        title: 'Robot - Animation',
        tools: 'Blender',
        mockup: RobotAnimation,
        mockupType: "video"
    },
    {
        id: 9,
        title: 'Factory - Animation',
        tools: 'Blender',
        mockup: FactoryAnimation,
        mockupType: "video"
    },
    {
        id: 10,
        title: 'Phone - Animation',
        tools: 'Blender',
        mockup: PhoneAnimation,
        mockupType: "video"
    },
    {
        id: 11,
        title: 'Computer - 3D',
        tools: 'Blender',
        mockup: ComputerAnimation,
    },
    {
        id: 12,
        title: 'Couch - 3D',
        tools: 'Blender',
        mockup: MCMCouchAnimation,
    },
    {
        id: 13,
        title: 'Mug - 3D',
        tools: 'Blender',
        mockup: MugAnimation,
    },
]