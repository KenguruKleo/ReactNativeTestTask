# React Native Test Task

## Challenge
Here is [Challenge for task](https://github.com/KenguruKleo/ReactNativeTestTask/blob/master/challenge/ReactNativeTestTask.pdf)

## Prepare
Tested with Node 6.9.1
* Install dependency `npm install`
* Install globally `npm install react-native -g`

## Tested
* Android: Lenovo K920
* iOS iPhone 6 emulator

## Build and start in dev mode
* For Android: `react-native run-android`
* For iOS: `react-native run-ios`

# Credentials
List of hardcoded logins:
* admin : admin
* t : <empty>
* test : test
* new : 123456

## Description
All logic and data included into reducers (with Redux):
* auth - responsible for the authentication
* feed - contains data and action to work with news feeds

* Used *duck* notation for reducers - include constants, actions and reducers into one file for each reducer.
* User combineReducers for clear work with reducers state
* User redux-thunk to handle chain of actions
* Used local store for cash previous request and show it before receive new data or for offline.
* *Feed* page protected from work with not authorized user
* *Logout* (bottom of Feed page) - clear auth data and return to Login page
