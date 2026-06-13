import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { AbtUs } from './abt-us/abt-us';

export const routes: Routes = [
  {
    path: '',
    component: Home, 
  },
  { 
    path: '', 
    component: AbtUs,
  },
  { 
    path: '',
    component: Contact,
  },
];
