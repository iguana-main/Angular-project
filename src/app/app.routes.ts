import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { AbtUs } from './abt-us/abt-us';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home',
    component: Home, 
  },
  { 
    path: '', 
    title: 'App About',
    component: AbtUs,
  },
  { 
    path: '',
    title: 'App Contact', 
    component: Contact,
  },
];
