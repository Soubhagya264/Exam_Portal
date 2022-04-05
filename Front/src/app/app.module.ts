import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoginComponent } from './pages/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/Admin/dashboard/dashboard.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/Admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/Admin/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { ViewCategoriesComponent } from './pages/Admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './pages/Admin/add-categories/add-categories.component';
import { DialogAddcategoryComponent } from './pages/Admin/dialog-addcategory/dialog-addcategory.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewQuizesComponent } from './pages/Admin/view-quizes/view-quizes.component';
import { AddQuizComponent } from './pages/Admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UpdateQuizComponent } from './pages/Admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/Admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionsComponent } from './pages/Admin/add-questions/add-questions.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SidebarUserComponent } from './pages/user/sidebar-user/sidebar-user.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { AttemptedQuizzesComponent } from './pages/user/attempted-quizzes/attempted-quizzes.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserdashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoriesComponent,
    DialogAddcategoryComponent,
    ViewQuizesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionsComponent,
    SidebarUserComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
    AttemptedQuizzesComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true
    })



  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
