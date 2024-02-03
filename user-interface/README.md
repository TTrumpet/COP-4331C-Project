# Code Cruiser - User Interface
UI for Code Cruiser game.

# Guide

# API Documentation

# CLI Documentation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Interface Requirements
| No: IR01 |
| -------- |
| Statement: The landing page shall show the actions for non-users, either login or check the leaderboard |
| Source: None |
| Dependency: F01 |
| Conflicts: None |
| Supporting Materials: N/A |
| Evaluation Method: The landing page will be the first page seen when opening the game. |
| Revision History: Created (1/30) -Victoria, Last Edited (1/31) -Victoria |

| No: IR02 |
| -------- |
| Statement: The Leaderboard UI will be shown when show_leaderboard is activated and shall show all player's top games based on the scoring algorithm and separated by coding language. |
| Source: Database |
| Dependency: F05 |
| Conflicts: None |
| Supporting Materials: N/A |
| Evaluation Method: show_leaderboard can read and print the top 10 user's scores. When the game ends, then the data will be sent to the database. On every leaderboard prompt, the data will be retrieved from the database. There will also be a refresh button on the leaderboard. |
| Revision History: Gavin (1/29 - 2/6) |

| No: IR02 | 
| -------- |
| Statement: Login will have a Profile UI with input areas for a new user to create a profile. Otherwise, the user will log in with their existing username and password, called get_profile. Get_profile shall get a player's account information stored in the database. The string input will have a maximum of 16 characters and a minimum of 8 characters. |
| Source: Database, DA01 |
| Dependency: create_new_user, IR03 |
| Conflicts: None |
| Supporting Materials: N/A |
| Evaluation Method: Player can log in multiple times after creating a new profile and see their revised settings through the UI. The data will be retrieved every time the player has to log in. |
| Revision History: Gavin & Tina (2/23 - 2/28) |

| No: IR03 |
| -------- |
| Statement: set_settings shall show the Settings UI and allow the user to customize and set certain parameters during gameplay, such as text color and text sizing. |
| Source: Database |
| Dependency: DA01 |
| Conflicts: None |
| Supporting Materials: Colorblind Friendly Palettes [8] and Accessible Software for Visually Impaired [4] |
| Evaluation Method: set_settings will be able to set a user's customization options and will be retrieved with the next login. These settings will be stored and retrieved from the database. |
| Revision History: Victoria (2/11 - 2/22) |

| No: IR04 |
| -------- |
| Statement: Game UI will show an area for the Code Generation to print on the screen and map the synchronous translation of a car moving with the speed of the user’s typing. |
| Source: Database |
| Dependency: Code Generation |
| Conflicts: None |
| Supporting Materials: N/A |
| Evaluation Method: The car should increase speed when typing speed increases. The area where the code generation is printed should be seen and generate more text as the user continues to type the correct characters. |
| Revision History: Victoria |

# Revision History
- (1/30) Created and pushed landing page user interface. -Victoria
- (1/30) Created and pushed new README contents. -Victoria
- (1/30) Created leaderboard and profile components. -Victoria
- (1/31) Created login component. -Victoria
- (1/31) Revised app routes. -Victoria
- (2/1) Worked on popups and leaderboard popup. -Gavin
- (2/2) Skipped hydration. -Victoria
- (2/3) Linked button presses to popup components. -Victoria