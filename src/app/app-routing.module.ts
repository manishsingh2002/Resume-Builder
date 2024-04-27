import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourSelfComponent } from './Components/your-self/your-self.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProfessionalExperienceComponent } from './Components/professional-experience/professional-experience.component';
import { EducationComponent } from './Components/education/education.component';
import { AchievementComponent } from './Components/achievement/achievement.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { TonguleLanguageComponent } from './Components/tongule-language/tongule-language.component';
import { ProjectsComponent } from './Components/projects/projects.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'yourself',
    component: YourSelfComponent,
  },
  {
    path: 'project',
    component: ProjectsComponent,
  },
  {
    path: 'professionalexperience',
    component: ProfessionalExperienceComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'achievement',
    component: AchievementComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'tongulelanguage',
    component: TonguleLanguageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
