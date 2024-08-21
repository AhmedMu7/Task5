import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainSectionComponent,AboutmeComponent,SkillsComponent,PortfolioComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task5';
}
