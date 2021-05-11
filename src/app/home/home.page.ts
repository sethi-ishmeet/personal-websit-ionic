import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  socials: SocialLinks[];
  private baseLinks: SocialLinks[] = [
    {
      image: '../../assets/twitter.png',
      link: 'https://twitter.com/IshmeetSing',
    },
    {
      image: '../../assets/linkedin.png',
      link: 'https://www.linkedin.com/in/ishmeetsinghsethi',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    this.toggleDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) =>
      this.toggleDarkTheme(mediaQuery.matches)
    );
  }

  toggleDarkTheme(isDark) {
    if (isDark) {
      this.socials = [
        ...this.baseLinks,
        {
          image: '../../assets/github-white.png',
          link: 'https://github.com/sethi-ishmeet',
        },
      ];
    } else {
      this.socials = [
        ...this.baseLinks,
        {
          image: '../../assets/github.png',
          link: 'https://github.com/sethi-ishmeet',
        },
      ];
    }
  }
}

interface SocialLinks {
  link: string;
  image: string;
}
