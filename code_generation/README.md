# Code Cruiser - Code Generation
Backend for the Code Cruiser game.

# API Documentation

## Development server

Download 'datasets' package: pip install datasets

# Functional Requirements

| No: F01 |
| ------- |
| Statement: login shall allow the player to log in to the game with a username and password. Each string input will have a maximum of 16 characters. The minimum is 8 characters. Then the username and password will be stored in the database. Validity will be checked in the database and S01. |
| Source: Landing Page UI |
| Dependency: Database, S01 |
| Conflicts: None |
| Supporting Materials: U.S. Average Character Length of a Password [8] |
| Evaluation Method: The player can log in to the game with a specific username and password when create_new_user. |
| Revision History: Axel & Gavin, 2/12 - 2/17 |

| No: F02 |
| ------- |
| Statement: start_game shall start the Game UI and Code Generation. |
| Source: Code Generation, Game UI |
| Dependency: start_single_player, start_multi_player, Quality Assurance |
| Conflicts: None |
| Supporting Materials: N/A |
| Evaluation Method: start_game switches to the Game UI and starts the Code Generation. When the user types more characters within the set time limit and nears the end of the generated code, more code will be generated. When the timer ends, will switch to finish_game. |
| Revision History: Tina |

| No: F03 |
| ------- |
| Statement: finish_game shall end start_game and show_leaderboard. |
| Source: IR02 and DA01 |
| Dependency: F02 |
| Conflicts: None |
| Supporting Materials: N/A |
| Evaluation Method: after start_game’s timer ends, finish_game should show_leaderboard and get_stats for the run. |
| Revision History: Tina |

| No: F04 |
| ------- |
| Statement: start_single_player shall start_game with the current player. |
| Source: Database |
| Dependency: F02 |
| Conflicts: None |
| Supporting Materials: N/A |
| Evaluation Method: start_single_player should be able to start_game with only the current player. Game UI will reflect that there is only a single player. |
| Revision History: Tina |


| No: F05 |
| ------- |
| Statement: start_multi_player shall connect to the server and start_game after matching with other players. |
| Source: Database |
| Dependency: F02, Server and Internet |
| Conflicts: None |
| Supporting Materials: N/A |
| Evaluation Method: start_multi_player should be able to connect to the server and randomly match players with the same settings. The Game UI will also reflect the players matched. |
| Revision History: Axel |

# Data Requirements

| No: DA01 |
| -------- |
| Statement: Complete get_stats. Player score is computed using the formula of the floor of the number of characters divided by the time in minutes. |
| Source: Average typing speed divided by the number of minutes. |
| Dependency: None |
| Conflicts: None |
| Supporting Materials: Average Typing Speed [3] |
| Evaluation Method: Python Unit Testing Framework [11] |
| Revision History: Tina, 1/29 - 2/18 |

| No: DA02 |
| -------- |
| Statement: Complete get_currency. Player score is computed using the formula of the floor of the number of characters divided by the time in seconds. |
| Source: Average typing speed divided by number of seconds. |
| Dependency: None |
| Conflicts: None |
| Supporting Materials: Average Typing Speed [3] |
| Evaluation Method: Python Unit Testing Framework [11] |
| Revision History: Tina, 1/29 - 2/18 |

| No: DA03 |
| -------- |
| Statement: Socket.io will be used for communication between client and server. |
| Source: Socket.io [12] |
| Dependency: None |
| Conflicts: None |
| Supporting Materials: None |
| Evaluation Method: QA01 |
| Revision History: Tina, Axel 1/29 - 2/18 |

# Revision History
- (2/18) Created Code Generation and Unit Test
- (2/19) Created MySQL Database locally