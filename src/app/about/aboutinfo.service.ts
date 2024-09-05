import { Injectable } from '@angular/core';
import { AboutInfo } from './aboutinfo';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutinfoService {
  // This is used for the selected about information. The overlay will display
  // whatever is in the curAboutInfo variable. It uses a behavior subject for
  // ease of updating.
  curAboutInfo = new BehaviorSubject<AboutInfo>({
    title: '',
    picture: '',
    picutreDescription: '',
    description: '',
  });

  // I feel I should justify the data that is in plain text here. I understand
  // that the proper way to do this would be to store it in a DB. However,
  // I would have to set up a backend for that which I would have to find a
  // host for and spend money on. Rather than doing that I decided to store it
  // here so that I can save money. Besides, it works anyways and doesn't need
  // to be loosely coupled.
  aboutInfoList: AboutInfo[] = [
    {
      title: 'RIT',
      picture: '../../assets/Rochester_Institute_of_Technology_Seal_(2018).svg',
      picutreDescription: 'An image of the RIT seal',
      description:
        "Right out of high school in 2021 I decided that I would go to RIT for the competitive opportunity it offered me in learning. I began my college career strong, quickly learning the fundamentals of computers and programs while starting on my math minor. As of now I have a mathematics minor and am close to graduating college. I have grown much from my early days at RIT and can look back and see all I've learned. ",
    },
    {
      title: 'Career Passion',
      picture: '../../assets/MathComputer.jpg',
      picutreDescription: 'An image of math on a computer',
      description:
        'Ever since I was young I have always had a love for math. I excelled at it through public school. There was a never ending thirst for knowledge when it came to math. I was enthralled by the possibilities and utility of it. The infinite depth of math was something to be loved. It offered me a meaningful path in such a world rotten with meaninglessness. In that sense, math was my friend. When I made it to high school I took a introduction to programming class. This was directly up my alley. Programming is similar to math in many ways and with more utility. It was a match made in heaven, for me. Eager to make this a career I continued my learning going into college. In college my learning did not stop, it grew. The love within me did not wane, it grew. I grew. Daily I dwell on the quandaries of the programs I write and math I use. I wish for the programs to be exellent and my understanding of math to be deep. I embrace the frustrating unknowing as I slog through bug after bug. I know that with every puzzle of the craft I solve, the more my love and joy grows. I take solace that challenges and mysteries of life are without end. Without them what would there be to overcome or understand?',
    },
    {
      title: 'Goals',
      picture: '../../assets/career.jpg',
      picutreDescription: 'A career icon',
      description:
        "In this current season of my life, I wish for a job in the software development field. I'm not particular about the position I work in, whether it is Front-end or back-end, Testing or development. There are some things I do desire. I want to do things I don't know how to do. I want to do to do something difficult. I want a team that pushes me forward. Let me explain.\n\nWhen I was a child I knew nothing. I didn't know how to get dressed, how to read or run. Yet I wanted to go to college to be an engineer. Why would a pitiful person who can't read even dream about doing something so impossible? It is because he had hope. He couldn't say he knew how to. He couldn't show any of his skills because he had none. Yet this dream was achieved. I find myself in a similar position. I won't lie and dare say that I know everything I need to for any job. I have the first fruits of progress in the projects I create but still a long way to go. It is for that very reason, that I have a long way to go, that I wish to work a job I don't understand. If I do nothing but what I'm familiar with in my life I will not ever reach my goals. What choice do I have? I am a flower quickly fading! If as a child I had given up my dreams and never learned or changed I would never have gone to college. That child had to let the world he lived in go away and learn to live in a new one. Every day is a process of dying and ushering the new in. When it comes to learning it can't be any other way. In that sense, I long for the unexpected.\n\nNow that it is clear why I want to do something I don't know how to do, I must explain why I must do something difficult. I have had the displeasure of working a job where nothing I did mattered. I would get paid and didn’t have to do much work but I hated the job. I would work on projects just to have them ignored. Then I wouldn’t be given any work and feel like I was missing out. My job lacked meaning. For something to have meaning it must be fought for with no guarantee of success. It must be reaching out for what’s good. It must be difficult. No good movie is about a character who had a good life, has a good life, and will always have a good life. They are about characters fighting tooth and nail against all that tries to tear them down so they may see their vision come to fruition. It is in that struggle for the good that meaning is produced. I am willing to do what’s difficult. The question is if you are willing to strive for what’s good.\n\nThis leads to my last point; I want a team that pushes me forward. Some of the moments of my life I look back on most fondly are those where I’m part of a team that really wants something. What immediately comes to mind is my high school soccer team which wanted the state championship. Day after day for months on end we’d practice. As iron sharpens iron we became better all with the aim of winning. Even though we came up a few minutes short of our goals I regret only not trying harder. That soccer team made me a better person. So I wish to be a part of another team like that. That starts with the team wanting something important. Maybe to change an industry for the better. Or change the world to be a better place. If the team I work for longs to see their grand visions to the end, they will supportively push me along with them. I would be glad to join them in their mission.\n\nSilly me wanting to do what I know not, who wants what’s difficult while doing what I think of a lot, still this dream is what I want. So to any employers reading this, if you have something new, full of meaning, and a team bursting with eagerness then truly I am yours. ",
    },
    {
      title: 'Hobbies',
      picture: '../../assets/Hobbies.jpg',
      picutreDescription: 'An image of several sport balls.',
      description:
        "I have several hobbies. I've enjoyed playing tennis ever since I was four years old. I played every week until I was about 16. I still play tennis occasionally as I still enjoy it. Another hobby of mine is soccer. Although I didn't start this as early as tennis, I have played more soccer in my life. I was always competing in soccer: in school, in spring league or on the play ground. In high school, my soccer team made it to the state championships but unfortunately lost. I continued my passion for soccer into college playing on several intramural teams. One of the intramural teams I played on ended up winning the championship. This was an absolute blast for me. I look to continue these fun sport hobbies into my adult life. ",
    },
  ];

  constructor() {}

  /**
   * Sets the next current about
   * @param aboutInfo
   */
  public setCurAbout(aboutInfo: AboutInfo): void {
    this.curAboutInfo.next(aboutInfo);
  }

  /**
   * Gets the curAboutInfo BehaviorSubject for observers to subscribe to
   * @returns The currentAboutInfo subject
   */
  public getSelectedAbout(): BehaviorSubject<AboutInfo> {
    return this.curAboutInfo;
  }

  /**
   * Get all of the about objects
   * @returns all of the about information as an array
   */
  public getAboutInfo(): AboutInfo[] {
    return this.aboutInfoList;
  }
}
