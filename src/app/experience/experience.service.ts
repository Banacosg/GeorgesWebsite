import { Injectable } from '@angular/core';
import { Job, Software, Classes, Importance } from './experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  // I feel I should justify the data that is in plain text here. I understand
  // that the proper way to do this would be to store it in a DB. However,
  // I would have to set up a backend for that which I would have to find a
  // host for and spend money on. Rather than doing that I decided to store it
  // here so that I can save money. Besides, it works anyways and doesn't need
  // to be loosely coupled.
  jobs: Job[] = [
    {
      jobName: 'CDS Legal',
      position: 'IT Intern',
      startDate: '05/2024',
      endDate: '08/2024',
      description:
        'Complete Discovery Source (CDS) is a company that manages legal data for legal companies. CDS was my first job in the technology industry. My main role at the company was doing odd tasks and projects. I did an audit of the DNS server and Exchange Online to clean both of those services up. I wrote many Python and Powershell scripts to help with those projects and others. I also learned about various functions of Active Directory on the job along with Solarwinds and Relativity. ',
      importance: Importance.veryImportant,
    },
    {
      jobName: 'Hannaford',
      position: 'Supervisor/Bookkeeper',
      startDate: '04/2019',
      endDate: '03/2024',
      description:
        'Hannaford is a supermarket company where I worked my first job. For my time at Hannaford, I was a loyal associate who, through hard work, worked my way up from no experience to being a supervisor. I worked hard to improve my skills at the job. I also led a cashier competition to help the cashiers become faster to give the customers a better experience.',
      importance: Importance.important,
    },
    {
      jobName: 'Tallo Properties',
      position: 'Property Manager',
      startDate: '05/2023',
      endDate: '08/2023',
      description:
        'Tallo properties is a company that owns and maintains properties. Tallo Properties was a summer job where I learned a lot of unexpected skills. Although not relevant to software engineering, these skills are relevant to life. I learned a lot of skills pertaining to to fixing houses or making them better. For the most part I fixed and painted walls but there were a smattering of other skills that I learned.',
      importance: Importance.important,
    },
  ];

  software: Software[] = [
    {
      softwareName: 'Python',
      yearsOfExperience: 4,
      description:
        "I've been working in Python since I was in highschool in 2020. I've done many school assignments in Python and wrote many scripts. I enjoy using the language for quick and easy projects.",
      skillLevel: 3,

      importance: Importance.veryImportant,
    },
    {
      softwareName: 'Java',
      yearsOfExperience: 4,
      description:
        "Java is a language I've used many times over the years. It is the object oriented language I'm most comfortable with. I like Java for larger projects that require a more thought out approach.",
      skillLevel: 4,

      importance: Importance.veryImportant,
    },
    {
      softwareName: 'C++',
      yearsOfExperience: 1,
      description:
        "I've used C++ once in a class I took before college. Although it has been a while since I've worked in the language, it taught me some foundational ideas in many other languages such as typing, array manipulation and I/O.",
      skillLevel: 2,

      importance: Importance.important,
    },
    {
      softwareName: '.NET',
      yearsOfExperience: 1,
      description:
        'I used .NET for my Concepts of Parallel and Distributed Systems class. I programmed multiple parallel applications in the framework including the prime number generator which can be seen on the portfolio page.',
      skillLevel: 2,

      importance: Importance.important,
    },
    {
      softwareName: 'C',
      yearsOfExperience: 2,
      description:
        "In the C language I learned a lot about the parts that are hidden when programming in higher level languages such as Java or Python. I learned pointers, memory allocation and freeing. Although I don't often find myself using C I have used it to edit compilers and create a garbage collection system.",
      skillLevel: 3,

      importance: Importance.important,
    },
    {
      softwareName: 'HTML',
      yearsOfExperience: 2,
      description:
        "HTML is a language that I've used to create websites. I've spent a lot of time recently learning the ins and outs of HTML elements and how to best manipulate a the DOM tree to achieve desired effects.",
      skillLevel: 4,

      importance: Importance.veryImportant,
    },
    {
      softwareName: 'CSS',
      yearsOfExperience: 2,
      description:
        "CSS is necessary to work with HTML. Any HTML I write I heavily style with CSS. Although I don't consider myself a great designer I am learning what all the styles do to slowly get more of a handle on my web designs.",
      skillLevel: 3,

      importance: Importance.important,
    },
    {
      softwareName: 'Angular',
      yearsOfExperience: 2,
      description:
        'Web developement frameworks are extremely useful in developing a website today. Angular allows my to do many repetitive tasks quickly by providing a framework with many useful features. This website was created using Angular.',
      skillLevel: 3,

      importance: Importance.veryImportant,
    },
    {
      softwareName: 'JavaScript',
      yearsOfExperience: 2,
      description:
        "I've used JS in a few situations. First I used JS for scripting a spreadsheet before I knew that was a bad idea. More recently I've used JS to script websites to give them functionality. The They website on the portfolio uses JS scripting.",
      skillLevel: 3,

      importance: Importance.veryImportant,
    },
    {
      softwareName: 'TypeScript',
      yearsOfExperience: 1,
      description:
        "Where would this website be without TypeScript? It wouldn't exist. I use Angular TS so all the functionality on this web page uses typescript. My experience with typescript goes as far as my experience with Angular.",
      skillLevel: 2,

      importance: Importance.important,
    },
    {
      softwareName: 'Tailwindcss',
      yearsOfExperience: 1,
      description:
        "This is the first website I've used Tailwind on. Every new website I make I want to try something different. Tailwind was one of the different things I wanted to do. I like that Tailwind is helpful without being restrictive like many CMSs.",
      skillLevel: 3,

      importance: Importance.important,
    },
    {
      softwareName: 'Springboot',
      yearsOfExperience: 2,
      description:
        'My first experience with Springboot was with the Webstore I created in school. Springboot was amazingly easy to work with and allowed for decoupling of data storage from functionality from the frontend. ',
      skillLevel: 2,

      importance: Importance.veryImportant,
    },
    {
      softwareName: 'SML',
      yearsOfExperience: 1,
      description:
        'Standard Meta Language is a programming language that heavily uses pattern matching. Although unconventional, it has its use cases such as in syntactic parsing. I used this language to write a syntax parser in one of my classes. Although not intuitive, it expanded my horizons.',
      skillLevel: 1,

      importance: Importance.unimportant,
    },
    {
      softwareName: 'SQL',
      yearsOfExperience: 1,
      description:
        'It is hard to do much without big data these days. I took a whole class on databases, most of it focused on SQL. I learned a lot about the functions of a database and created a large data base with many tables myself.',
      skillLevel: 3,

      importance: Importance.veryImportant,
    },
    {
      softwareName: 'MIPS',
      yearsOfExperience: 1,
      description:
        'Knowledge of CPU architecture is necessary for anyone who wants to write efficent code. In a class that focused on the architecture of RISC CPUs we learned MIPS to better understand why CPU designs are the way they are. Although not particularly useful, the language expanded my understanding of all languages and prgramming keywords.',
      skillLevel: 3,

      importance: Importance.unimportant,
    },
    {
      softwareName: 'Microsoft Excel',
      yearsOfExperience: 4,
      description:
        'I have used Microsoft Excel to do a lot of statistical analysis. My first large project was at Hannaford where I would do statistics on cashier data. Later on I used Microsoft Excel to do data analysis on audits at CDS Legal. Excel is a go to for small to mid-sized data analysis/storage.',
      skillLevel: 4,

      importance: Importance.important,
    },
    {
      softwareName: 'Microsoft Visual Studio Code',
      yearsOfExperience: 4,
      description:
        "A vast majority of the code I've written in the last few years has been written in VSC. I have become familiar with most of the main functions as well as many of the shortcuts.",
      skillLevel: 4,

      importance: Importance.important,
    },
    {
      softwareName: 'IntelliJ IDEA',
      yearsOfExperience: 3,
      description:
        'I have limited experience in IntelliJ. There were a few projects that I developed in IntelliJ my freshman year of college but I find it easier to keep all of my code in one IDE.',
      skillLevel: 2,

      importance: Importance.unimportant,
    },
    {
      softwareName: 'Active Directory',
      yearsOfExperience: 1,
      description:
        'At CDS legal I decided to learn about Active Direcory to become more useful to my company. I spent time creating my own Active Direcory lab environment which was both good for virtual machine experience and Active Directory.',
      skillLevel: 2,

      importance: Importance.unimportant,
    },
    {
      softwareName: 'Relativity',
      yearsOfExperience: 1,
      description:
        'A software CDS Legal used often was Relativity. Relativity has to do with how the SQL servers run. I am familiar with the software and its funciton.',
      skillLevel: 1,

      importance: Importance.unimportant,
    },
    {
      softwareName: 'Git Versioning',
      yearsOfExperience: 3,
      description:
        "All of my versioning is done with Git. I started using Git as soon as I started college. Although I'm not a professional at versioning, I am familiar with the basic functionality.",
      skillLevel: 3,

      importance: Importance.veryImportant,
    },
    {
      softwareName: 'Exchange Online',
      yearsOfExperience: 1,
      description:
        'As a part of one of my projects at CDS Legal I worked with Exchange Online to ensure that the distribution lists were still in use. I created a Python script to fetch and analyze the data.',
      skillLevel: 2,

      importance: Importance.unimportant,
    },
    {
      softwareName: 'Vim',
      yearsOfExperience: 3,
      description:
        'A lot of school projects need to be done on the school servers and submitted there as well. Since the tools to work on certain projects are already available on the school servers it is easier to work on school projects using Vim on the school servers. About half of my school projects have been completed on school servers using Vim.',
      skillLevel: 3,

      importance: Importance.important,
    },
    {
      softwareName: 'JavaFx',
      yearsOfExperience: 2,
      description:
        "I've used JavaFx to assist me in creating multiple GUIs. I started with my Lunar Landing video game which can be seen in the portfolio section. I also used JavaFx for the graph project which is also in the portfolio section.",
      skillLevel: 2,

      importance: Importance.unimportant,
    },
    {
      softwareName: 'PyTorch',
      yearsOfExperience: 1,
      description:
        'I used PyTorch to create a CNN. This project can be seen in my portfolio section.',
      skillLevel: 2,

      importance: Importance.unimportant,
    },
    {
      softwareName: 'Wireshark',
      yearsOfExperience: 1,
      description:
        'Wireshark is a tool for monitoring packets on the local network. I used this tool in a networking class to learn how networks are used.',
      skillLevel: 2,

      importance: Importance.unimportant,
    },
    {
      softwareName: 'Packet Tracer',
      yearsOfExperience: 1,
      description:
        'Packet Tracer is a tool where fake network topologies can be simulated for test or learning sake. I used this tool in a networking to create many topologies to learn about the first four layers of the OSI model.',
      skillLevel: 3,

      importance: Importance.important,
    },
  ];

  classes: Classes[] = [
    {
      className: 'Calculus A, B, C and Multivariable',
      school: 'RIT',
      toolsUsed: [],
      learningDescription:
        'Throughout high school and college I learned calculus, up through multivariable. The knowledge is a greate tool for being able to understand any physical or purely mathematical problem.',

      importance: Importance.important,
    },
    {
      className: 'Analysis of Algorithms',
      school: 'RIT',
      toolsUsed: ['Python', 'Vim', 'VSC'],
      learningDescription:
        "I learned about common algorithms such as Dijkstra's algorithm, binary search, Strassen's Algorithm, and sorting. I also learned the theory behind algorithms and how I figure out algorithms for myself.",

      importance: Importance.veryImportant,
    },
    {
      className: 'Intro to Software Engineering',
      school: 'RIT',
      toolsUsed: [
        'Angular',
        'CSS',
        'HTML',
        'Typescript',
        'Springboot',
        'Trello',
      ],
      learningDescription:
        'This class was a practical class in how to create products as a software engineer. I worked in a team to create a webstore using modern day languages, frameworks and tools. At the end of the class we had a working product which can be seen in the images on the portfolio page.',

      importance: Importance.veryImportant,
    },
    {
      className: 'Intro Artificial Intelligence',
      school: 'RIT',
      toolsUsed: ['Prolog', 'Python'],
      learningDescription:
        "Artificial Intelligence is an important topic in today's world. I learned about many different approaches to AI such as purely logical, decision trees classifiers, k-means, algorithms and neural networks.",

      importance: Importance.important,
    },
    {
      className: 'Graph Theory',
      school: 'RIT',
      toolsUsed: [],
      learningDescription:
        'Many problems in computer science involve graphs. That is why I decided to take graph theory. Graph theory gave me some different ways to approach graphs that I so often work with. ',

      importance: Importance.important,
    },
    {
      className: 'Principles of Data Management',
      school: 'RIT',
      toolsUsed: ['Datagrip', 'SQL', 'Java'],
      learningDescription:
        'This class was based around a semester long project. Every week we learned about an aspect of databases and then tried to implement that aspectin the next sprint. We created a video game database with a front end for fetching certain data and statistics.',

      importance: Importance.veryImportant,
    },
    {
      className: 'Concepts of Computer Systems',
      school: 'RIT',
      toolsUsed: ['MIPS', 'Vim', 'Logisim'],
      learningDescription:
        "This was one of the most informative classes I've taken. This class took a deep dive into the way that computers work from the logic gates that are used to the way assembly is compiled into machine code and run on the CPU.",

      importance: Importance.important,
    },
    {
      className: 'Combinatorics',
      school: 'RIT',
      toolsUsed: [],
      learningDescription:
        'To finish my math minor, I took a combinatorics class to better understand how to count. That is what combinatorics is, a field in mathematics to count how many of something there is. This class taught me many methods of counting and gave me the ability to count in difficult situations, such as with a lot of restraints on objects.',

      importance: Importance.important,
    },
    {
      className: 'Programming Language Concepts',
      school: 'RIT',
      toolsUsed: ['C', 'SML', 'Programming Languages BPC Languages'],
      learningDescription:
        'Programming language concepts went over many different programming paradigms. Imperative, functional, object-oriented, logical, and pattern matching. We worked with programming languages designed for learning with one programming concept pushed to the max.',

      importance: Importance.veryImportant,
    },
    {
      className: 'Data Comm & Networks',
      school: 'RIT',
      toolsUsed: ['Wireshark', 'Packet Tracer'],
      learningDescription:
        'This class focused on the first four layers of the OSI model of networking. We started by learning about the physical layer and worked our way to the transport layer. We learned about VLANS, LANs, subnetting, supernetting, switches, routers, and many protocols.',

      importance: Importance.important,
    },
  ];

  constructor() {}

  /**
   *
   * @returns the job array
   */
  public getJobs(): Job[] {
    return this.jobs;
  }

  /**
   *
   * @returns the software array
   */
  public getSoftware(): Software[] {
    return this.software;
  }

  /**
   *
   * @returns the classes array
   */
  public getClasses(): Classes[] {
    return this.classes;
  }
}
