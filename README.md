# Yazılım Geliştirici Yetiştirme Kampı - Car Rental Angular Frontend  [![version][version-badge]][CHANGELOG]

Creative-Tim **[Material Dashboard Angular](https://www.creative-tim.com/product/material-dashboard-angular2/)** Angular template kullannılarak hazırlanmıştır.

# [Material Dashboard Angular Template Tanıtımı](https://www.creative-tim.com/product/material-dashboard-angular2/)


![Product Gif](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-dashboard-angular/material-dashboard-angular.gif)


## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)


## Versions

[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/html-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/material-dashboard)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/angular-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/material-dashboard-angular2)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/vue-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/vue-material-dashboard)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/react-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/material-dashboard-react)

| HTML | Angular | Vue | React |
| --- | --- | --- | --- |
| [![Material Dashboard HTML](https://github.com/creativetimofficial/public-assets/blob/master/material-dashboard-html/material-dashboard.jpg?raw=true)](https://www.creative-tim.com/product/material-dashboard) | [![Material Dashboard Angular](https://github.com/creativetimofficial/public-assets/blob/master/material-dashboard-angular/material-dashboard-angular.jpg?raw=true)](https://www.creative-tim.com/product/material-dashboard-angular2) | [![Vue Material Dashboard ](https://github.com/creativetimofficial/public-assets/blob/master/vue-material-dashboard/vue-material-dashboard.jpg?raw=true)](https://www.creative-tim.com/product/vue-material-dashboard) | [![Material Dashboard React](https://github.com/creativetimofficial/public-assets/blob/master/material-dashboard-react/material-dashboard-react.jpg?raw=true)](https://www.creative-tim.com/product/material-dashboard-react)

## Demo

| Dashboard | User Profile | Tables | Icons | Notifications |
| --- | --- | --- | --- | --- |
| [![Start page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-dashboard-angular/dashboard.png?raw=true)](https://demos.creative-tim.com/material-dashboard-angular2/#/dashboard) | [![User profile page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-dashboard-angular/user-profile.png?raw=true)](https://demos.creative-tim.com/material-dashboard-angular2/#/user-profile) | [![Tables page ](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-dashboard-angular/tables.png?raw=true)](https://demos.creative-tim.com/material-dashboard-angular2/#/table-list) | [![Icons Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-dashboard-angular/icons.png?raw=true)](https://demos.creative-tim.com/material-dashboard-angular2/#/maps) | [![Notifications page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-dashboard-angular/notifications.png?raw=true)](https://demos.creative-tim.com/material-dashboard-angular2/#/notifications)

[View More](https://demos.creative-tim.com/material-dashboard-angular2/#/dashboard).

## Quick start

Quick start options:

- [Download from Github](https://github.com/tiniestory/material-dashboard-angular2/archive/master.zip).
- [Download from Creative Tim](http://www.creative-tim.com/product/material-dashboard-angular2).

## Terminal Commands

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0 and angular 4.x.

1. Install NodeJs from [NodeJs Official Page](https://nodejs.org/en).
2. Open Terminal
3. Go to your file project
4. Make sure you have installed [Angular CLI](https://github.com/angular/angular-cli) already. If not, please install.
5. Run in terminal: ```npm install```
6. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### What's included

Within the download you'll find the following directories and files:

```
material-dashboard-angular
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── angular-cli.json
├── documentation
├── e2e
├── karma.conf.js
├── package-lock.json
├── package.json
├── protractor.conf.js
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── components
│   │   │   ├── components.module.ts
│   │   │   ├── footer
│   │   │   │   ├── footer.component.css
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.spec.ts
│   │   │   │   └── footer.component.ts
│   │   │   ├── navbar
│   │   │   │   ├── navbar.component.css
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.spec.ts
│   │   │   │   └── navbar.component.ts
│   │   │   └── sidebar
│   │   │       ├── sidebar.component.css
│   │   │       ├── sidebar.component.html
│   │   │       ├── sidebar.component.spec.ts
│   │   │       └── sidebar.component.ts
│   │   ├── dashboard
│   │   │   ├── dashboard.component.css
│   │   │   ├── dashboard.component.html
│   │   │   ├── dashboard.component.spec.ts
│   │   │   └── dashboard.component.ts
│   │   ├── icons
│   │   │   ├── icons.component.css
│   │   │   ├── icons.component.html
│   │   │   ├── icons.component.spec.ts
│   │   │   └── icons.component.ts
│   │   ├── layouts
│   │   │   └── admin-layout
│   │   │       ├── admin-layout.component.html
│   │   │       ├── admin-layout.component.scss
│   │   │       ├── admin-layout.component.spec.ts
│   │   │       ├── admin-layout.component.ts
│   │   │       ├── admin-layout.module.ts
│   │   │       └── admin-layout.routing.ts
│   │   ├── maps
│   │   │   ├── maps.component.css
│   │   │   ├── maps.component.html
│   │   │   ├── maps.component.spec.ts
│   │   │   └── maps.component.ts
│   │   ├── notifications
│   │   │   ├── notifications.component.css
│   │   │   ├── notifications.component.html
│   │   │   ├── notifications.component.spec.ts
│   │   │   └── notifications.component.ts
│   │   ├── table-list
│   │   │   ├── table-list.component.css
│   │   │   ├── table-list.component.html
│   │   │   ├── table-list.component.spec.ts
│   │   │   └── table-list.component.ts
│   │   ├── typography
│   │   │   ├── typography.component.css
│   │   │   ├── typography.component.html
│   │   │   ├── typography.component.spec.ts
│   │   │   └── typography.component.ts
│   │   ├── upgrade
│   │   │   ├── upgrade.component.css
│   │   │   ├── upgrade.component.html
│   │   │   ├── upgrade.component.spec.ts
│   │   │   └── upgrade.component.ts
│   │   └── user-profile
│   │       ├── user-profile.component.css
│   │       ├── user-profile.component.html
│   │       ├── user-profile.component.spec.ts
│   │       └── user-profile.component.ts
│   ├── assets
│   │   ├── css
│   │   │   └── demo.css
│   │   ├── img
│   │   └── scss
│   │       ├── core
│   │       └── material-dashboard.scss
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── tsconfig.json
├── tslint.json
└── typings

```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">



## Resources
- Demo: <https://demos.creative-tim.com/material-dashboard-angular2/#/dashboard>
- Download Page: <https://www.creative-tim.com/product/material-dashboard-angular2>
- Documentation: <https://demos.creative-tim.com/material-dashboard-angular2/#/documentation/tutorial>
- License Agreement: <https://www.creative-tim.com/license>
- Support: <https://www.creative-tim.com/contact-us>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/material-dashboard-angular2/issues)
- [Material Kit](https://www.creative-tim.com/product/material-kit?ref=github-mda-free) - For Front End Development

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Material Dashboard. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Material Dashboard. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.


## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us) instead of opening an issue.



## Licensing

- Copyright 2018 Creative Tim (https://www.creative-tim.com/)

- Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)


## Useful Links

- [More products](https://www.creative-tim.com/bootstrap-themes) from Creative Tim
- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)
- [Freebies](https://www.creative-tim.com/bootstrap-themes/free) from Creative Tim
- [Affiliate Program](https://www.creative-tim.com/affiliates/new) (earn money)

##### Social Media

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://www.instagram.com/CreativeTimOfficial>

[CHANGELOG]: ./CHANGELOG.md

[version-badge]: https://img.shields.io/badge/version-2.5.0-blue.svg
