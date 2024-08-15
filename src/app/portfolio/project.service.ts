import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [
    {
      name: 'They Website',
      year: 2024,
      description:
        "This is the first website I ever created. I used this project to get a better handle on HTML, CSS and Javascript that I learned earlier that summer. One of my favorite aspects of the project was the testimonial menu. I craeted the menu from the ground up using no CMS. The contents of the website is strange but it has a message that I hope you can find. Although it isn't much I had fun creating it and learned a lot.",
      projectType: 'Personal Project',
      imagePaths: [
        {
          path: '../../assets/they.png',
          description: 'This is an image of the They website.',
        },
      ],
      projectLink: 'https://banacosg.github.io/They-Website/',
      githubLink: 'https://github.com/Banacosg/They-Website',
    },
    {
      name: "Latarte's Barn Doors",
      year: 2024,
      description:
        'After creating my first website I learned of the importance of a framework. I took an online Angular course to learn the basics of Angular. To sharpen my skills I created this website. It is a webstore with some additional features that gave me plenty of practice with Angular. Among the many things learned were routing, life cycle hooks, services, and responsize design. The directives and component structure were welcome additions as well.',
      projectType: 'Personal Project',
      imagePaths: [
        {
          path: "../../assets/Latarte'sBarnDoors.png",
          description:
            "This is an image of the home page of Latarte's Barn Doors.",
        },
      ],
      projectLink: 'https://fascinating-banoffee-3318bb.netlify.app/home',
      githubLink: 'https://github.com/Banacosg/LatarteBarnDoors',
    },
    {
      name: 'Graph Project',
      year: 2024,
      description:
        'Ever since started college I have always had an interest in graphs. I had some free time so I decided to create a relatively barebones desktop application that could be used to create graphs. It adhears to the MVC architecture and was created using JavaFX. One of the more challenging aspects of the project was getting the graph to scale as the window was resized. Another challenge was creating hitboxes for the lines. However, through a week of hard work, the application eventually worked and had a few features. Feel free to download it from github and play around with it.',
      projectType: 'Personal Project',
      imagePaths: [
        {
          path: '../../assets/GraphEditor.png',
          description:
            "An image of the graph application with the word 'Hello' written on it.",
        },
      ],
      projectLink: '',
      githubLink: 'https://github.com/Banacosg/graph',
    },
    {
      name: 'AI Project',
      year: 2023,
      description:
        'It is the 2020s, the time of AI. It is necessary for everyone to be somewhat aquainted with AI. I took on a beginner project of creating a CNN to be trained and tested on the MINIST dataset (the hand-written digit dataset) and CIFAR10 (the dataset with certain classes of objects). With modern tools it didn\t take long to get a model operational. I used PyTorch to create the layers of the CNN and define the hyperparameters. When the model was tested it scored a 99.1% on MINIST. This project gave me a basic understanding of neural networks and the modern tools to create them.',
      projectType: 'Personal Project',
      imagePaths: [
        {
          path: '../../assets/MnistExamples.png',
          description: 'An image of some of the Mnist dataset.',
        },
      ],
      projectLink: '',
      githubLink: 'https://github.com/Banacosg/CNN',
    },
    {
      name: 'Lunar Landing Video Game',
      year: 2021,
      description:
        'The first major project I completed at RIT was making a video game called Lunar Landing. This was a group project that I completed with a classmate. I implemented the GUI for the video game along with the BFS algorithm which powers the hinting system. This project got me familiar with GIT. As of 2024 the video game still works and is on GitHub if you want to try it.',
      projectType: 'School Group Project',
      imagePaths: [
        {
          path: '../../assets/Lunarlanding.png',
          description: 'An image of a solved lunar landing board.',
        },
      ],
      projectLink: '',
      githubLink: 'https://github.com/Banacosg/Lunar-Landing-VG',
    },
    {
      name: 'Webstore',
      year: 2023,
      description:
        "As a part of a software class I was tasked with creating a webstore with a group of four others. We worked in an agile team with monthly spirits, a trello board and Git version control. We created this webstore with Angular as the front-end and SpringBoot as the back-end. I helped with the testing and creation of tickets and documentation on the project. This project got me familiar with the inner workings of a software development team and ready for a real software development job. Although I didn't start up the back-end for the screenshots I got, the images still give a good idea of how the applicaiton did work.",
      projectType: 'School Group Project',
      imagePaths: [
        {
          path: '../../assets/beachballersFP.png',
          description: 'An image of the front page of the webstore.',
        },
        {
          path: '../../assets/createproduct.png',
          description: 'An image of the product creation webpage.',
        },
        {
          path: '../../assets/customizeproduct.png',
          description: 'An image of the product customization page.',
        },
        {
          path: '../../assets/productpagepng.png',
          description: 'An image of the products page.',
        },
      ],
      projectLink: '',
      githubLink: 'https://github.com/Banacosg/BeachBallersWebstore',
    },
    {
      name: 'Multi-Threaded Prime Number Generator',
      year: 2023,
      description:
        'As a part of a class in parallel and distributed system I had to create a multi-threaded prime number generator. I created a prime number generator using the Miller-Rabin algorithm. Along with the extremely fast algorithm, it is also a multi-threaded which allows it to leverage many cores. This allows my algorithm to generate over 100 1024 bit primes in less than 10 seconds.',
      projectType: 'School Project',
      imagePaths: [
        {
          path: '../../assets/primes.png',
          description: 'An image of 70 1024 bit primes generated in 4.77s.',
        },
      ],
      projectLink: '',
      githubLink: 'https://github.com/Banacosg/Primes',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  constructor() {}
}
