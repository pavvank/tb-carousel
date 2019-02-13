import { Component } from '@angular/core';
import { Custom } from './image-card/custom.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tb-carousel-example';

  constructor() { }

  dataImage = [
    "https://ichef.bbci.co.uk/images/ic/976x549_b/p04znpys.jpg",
    "https://i.pinimg.com/originals/ac/53/4d/ac534d5ab4d1852ea4894258928729a6.jpg",
    "https://mocah.org/thumbs/4537643-nature-animals-puffins-depth-of-field-birds-faroe-islands-stone-stones.jpg",
    "https://w-dog.net/wallpapers/5/8/471352898612125.jpg",
    "https://dreamsky10.com/wp-content/uploads/2017/07/Animal-Wallpaper-Hd-Butterfly-Of-Pics-Nature-Animals-by-md.sopon1_.jpg",
    "https://cdn.allwallpaper.in/wallpapers/1920x1080/185/animals-nature-tigers-widescreen-wild-1920x1080-wallpaper.jpg",
    "https://chainimage.com/images/nature-animals-insects-hd-wallpapers-for-desktop.jpg",
    "https://hdwallpaperim.com/wp-content/uploads/2017/08/23/472356-water-underwater-nature-animals-sea-jellyfish-dark-black_background-deep_sea-748x421.jpg",
    "https://chainimage.com/images/nature-animals-hd-wallpapers-2014.jpg",
    "https://i.ytimg.com/vi/9NNoVlxrwso/maxresdefault.jpg",
    "https://secure.i.telegraph.co.uk/multimedia/archive/03597/POTD_chick_3597497k.jpg"];


  dataText = [{ "heading": "Moon", "content": "The Moon is an astronomical body that orbits planet Earth and is Earth's only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary). The Moon is after Jupiter's satellite Io the second-densest satellite in the Solar System among those whose densities are known." },
  { "heading": "Sun", "content": "Earth's nearest star" },
  { "heading": "Earth", "content": "Only planet to hold life in milky way" }];

  dataComponent : Custom[] = [
    new Custom(101, "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/220px-FullMoon2010.jpg", "Moon", "The Moon is an astronomical body that orbits planet Earth and is Earth's only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary). The Moon is after Jupiter's satellite Io the second-densest satellite in the Solar System among those whose densities are known."),
    new Custom(102, "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sun_poster.svg/500px-Sun_poster.svg.png", "Sun", "The Sun is a G-type main-sequence star that comprises about 99.86% of the mass of the Solar System. The Sun has an absolute magnitude of +4.83, estimated to be brighter than about 85% of the stars in the Milky Way, most of which are red dwarfs.[28][29] The Sun is a Population I, or heavy-element-rich,[b] star.[30] The formation of the Sun may have been triggered by shockwaves from one or more nearby supernovae"),
    new Custom(103, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/220px-The_Earth_seen_from_Apollo_17.jpg", "Earth", "Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago.[24][25][26] Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. Earth revolves around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times."),
  ];

  abc(){
    console.log("Done clicking !!");
    
    this.dataComponent = [
      new Custom(101, "Hello", "Moon2", "The Moon is an astronomical body that orbits planet Earth and is Earth's only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary). The Moon is after Jupiter's satellite Io the second-densest satellite in the Solar System among those whose densities are known."),
      new Custom(102, "HI", "Sun1", "The Sun is a G-type main-sequence star that comprises about 99.86% of the mass of the Solar System. The Sun has an absolute magnitude of +4.83, estimated to be brighter than about 85% of the stars in the Milky Way, most of which are red dwarfs.[28][29] The Sun is a Population I, or heavy-element-rich,[b] star.[30] The formation of the Sun may have been triggered by shockwaves from one or more nearby supernovae"),
      new Custom(103, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/220px-The_Earth_seen_from_Apollo_17.jpg", "Earth", "Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago.[24][25][26] Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. Earth revolves around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times."),
    ];
  }
}



