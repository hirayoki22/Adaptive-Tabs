import { Component, OnInit } from '@angular/core';
import { Tab } from '../tabs/tab.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myTabs: Tab[];
  myTabs2: Tab[];

  constructor() { }

  ngOnInit(): void {
    this.myTabs = this.getTabs();
    this.myTabs2 = this.getTabs();

    this.myTabs2.unshift({
      header: 'Make your own yeast',
      content: {
        images: ['../../../assets/img/img02.webp'],
        text: `As more people bake their blues away while stuck at home during the COVID-19 pandemic, yeast is reportedly becoming harder to find on grocery store shelves. There’s no shame in turning to carbohydrates for comfort in times like these. But what’s one to do when a key ingredient for satisfying that craving is becoming as elusive as a roll of toilet paper?<br><br>
        Though baker’s yeast may be dwindling in stores, more and more recipes for making it at home are popping up on Twitter. If baking is your way of taking this moment to learn something new or become more self-sufficient, coming up with your own yeast could be the next survival skill to hone.`
      }
    },
    {
      header: 'Build anything',
      content: {
        images: ['../../../assets/img/img03.jpg'],
        text: `Built as frameworks from the ground up.<br><br>
        Each theme is architected as an extension of Bootstrap, built for a specific set of problems. This means not only extending the base components of Bootstrap, but also adding completely new components, utilities, and plugins.<br><br>
        The Boostrap team reviews every new theme and update against a set of guidelines we wrote. These cover tons of factors including design, component flexibility, class naming, directory structure, build tooling, plugin reusability…the list goes on and on.Components, plugins, and build tools are all thoroughly documented with live examples and markup for easier use and customization—just like Bootstrap itself. Not comfortable diving that deep? No worries, you just use the compiled CSS and examples pages!`
      }
    });
  }

  private getTabs(): Tab[] {
    return [
      {
        header: 'Messenger desktop app',
        content: {
          images: ['../../../assets/img/img01.webp'],
          text: `Facebook Messenger finally has its own desktop app, making it easier to message and video chat with friends and family from your computer.<br><br>
          The app, which is now available on the Microsoft Store and Mac App Store, lets you message friends and start video calls, just like on the mobile and web versions. It also includes a dark mode, which Facebook has been rolling out as one of the new features introduced to the desktop’s redesign.<br><br>
          Now more than ever, people are using technology to stay in touch with the people they care about, even when physically apart. Over the past month, we saw more than a 100% increase in people using their desktop browser for audio and video calling on Messenger. Now with apps for MacOS and Windows, the best of Messenger is coming to desktop, including unlimited and free group video calls.`
        }
      },
      {
        header: 'HBO\'s best shows',
        content: {
          images: ['../../../assets/img/img06.jpg'],
          text: `Those folks who signed for AT&T's Elite Unlimited plan, expecting that it will be their gateway to HBO Max when it launches next month, might be a bit miffed about today's HBO announcement but it is all for a good cause.<br><br>
          The Elite plan starts at $45 for a line if you are a family of five, up to $85 for single line, and includes an HBO subscription among many other perks. Said HBO, however, now part of the AT&T family of media companies with the Time Warner merger, announced that is is making some of its best shows free as part of the #StayHomeBoxOffice campaign meant to ease the burden of coronavirus lockdown.<br><br>Those under quarantine, or those who are simply saving the world by chillaxing at home, will now have the option to stream old and new show classics like "The Sopranos," "The Wire," "Succession," "Barry," "Silicon Valley," "Veep," "Ballers," "True Blood," "Six Feet Under," and many more, for free on HBO Now and Go.`
        }
      },
      {
        header: 'The Last of Us 2',
        content: {
          images: ['../../../assets/img/img04.webp'],
          text: `ony y Naughty Dog anunciaron hoy que habían tomado la difícil decisión de atrasar el lanzamiento The Last of Us: Part 2, lo que causó la tristeza de los fans que estaban esperando con ansias el lanzamiento de este título para PlayStation 4.<br><br>
          Por supuesto las reacciones en redes sociales no se hicieron esperar, con memes y frases que hacen referencia a la ironía de que la pandemia causó el atraso en un juego con temática de una pandemia.<br><br>
          En un largo reporte sobre la "cultura crunch" en Naughty Dog (Uncharted, The Last of Us), Kotaku habló con desarrolladores anónimos en el estudio, quienes discutieron los efectos de atraso del juego de febrero a abril - el punto principal siendo que el crunch no reduciría como resultado del tiempo adicional de desarrollo.`
        }
      },
      {
        header: 'The latest iPad Pro disables mics',
        content: {
          images: ['../../../assets/img/img05.jpg'],
          text: `These days, any connected device with a microphone could arguably be treated with suspicion, from smart speakers to phones to computers. Apple helped to address privacy concerns in 2018 by adding a feature that disconnects MacBook microphones when the laptops' lids are closed. The documentation of the latest iPad Pro models (as spotted by 9to5Mac) shows that the company's new tablets sport a similar capability. When a user closes the cover of a compatible case, the iPad's security chip will cut the mic, which should help prevent snooping.<br><br>
          When the case's cover is closed, software can't access audio data, whether from a standard app or one with root privileges. This means that even if the iPad's firmware is affected by malware, a bad actor won't be able to listen in. For the feature to work, the user has to have a case that's MFI or "Made for iPad" compliant. Any current iPad cases designed by Apple will suffice, including the Smart Folio, Smart Keyboard Folio and the Magic Keyboard, which should be available in May. Certified third-party cases should work, too.`
        }
      }
    ];
  }
}
