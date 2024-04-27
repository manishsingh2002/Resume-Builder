import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { YourSelfComponent } from './Components/your-self/your-self.component';
import { ProfessionalExperienceComponent } from './Components/professional-experience/professional-experience.component';
import { EducationComponent } from './Components/education/education.component';
import { AchievementComponent } from './Components/achievement/achievement.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { TonguleLanguageComponent } from './Components/tongule-language/tongule-language.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    YourSelfComponent,
    ProfessionalExperienceComponent,
    EducationComponent,
    AchievementComponent,
    SkillsComponent,
    TonguleLanguageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
