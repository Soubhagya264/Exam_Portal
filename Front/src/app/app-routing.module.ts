import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriesComponent } from './pages/Admin/add-categories/add-categories.component';
import { AddQuestionsComponent } from './pages/Admin/add-questions/add-questions.component';
import { AddQuizComponent } from './pages/Admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './pages/Admin/dashboard/dashboard.component';
import { DialogAddcategoryComponent } from './pages/Admin/dialog-addcategory/dialog-addcategory.component';
import { ShowResultsComponent } from './pages/Admin/show-results/show-results.component';
import { ShowUsersComponent } from './pages/Admin/show-users/show-users.component';
import { UpdateQuizComponent } from './pages/Admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/Admin/view-categories/view-categories.component';
import { ViewQuizQuestionsComponent } from './pages/Admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizesComponent } from './pages/Admin/view-quizes/view-quizes.component';
import { WelcomeComponent } from './pages/Admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AttemptedQuizzesComponent } from './pages/user/attempted-quizzes/attempted-quizzes.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { StartComponent } from './pages/user/start/start.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: '', component: WelcomeComponent },
      { path: 'categories', component: ViewCategoriesComponent },
      {path:'show-users',component:ShowUsersComponent},
      { path: 'add-categories', component: AddCategoriesComponent },
      { path: 'dialog', component: DialogAddcategoryComponent },
      { path: 'quizes', component: ViewQuizesComponent },
      { path: 'add-quiz', component: AddQuizComponent },
      { path: 'quiz/:qid', component: UpdateQuizComponent },
      {
        path: 'view-questions/:qid/:title',
        component: ViewQuizQuestionsComponent,
      },
      {
        path: 'add-questions/:qid/:title',
        component: AddQuestionsComponent,
      },
      {
        path:'show-results',
        component:ShowResultsComponent
      }
    ],
  }, //admin/dashboard
  {
    path: 'user-dashboard',
    component: UserdashboardComponent,
    canActivate: [NormalGuard],
    children: [
      { path: ':catId', component: LoadQuizComponent },
      { path: 'instructions/:qid', component: InstructionsComponent },
       {path:':catId/attempted-quizzes',component:AttemptedQuizzesComponent}
      
    ],
  },
  {path:'start/:qid',component:StartComponent,canActivate: [NormalGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
