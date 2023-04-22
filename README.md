# Front end test R5 - Phone book

This is my approach to the phone book React test for R5, it is a SPA with one view divided into two parts, 
the Form to add contacts and the section were the user can search for save contacts. 

## Tech stack

- React Js
- CSS
- Vite

## First steps

- Clone the repo from [GitHub repo](https://github.com/Rigo9119/r5-phone-book).
- cd to r5-phone-book
- ```yarn ``` or ```yarn install ```
- Run the development server with ```yarn dev```
- Check the app in [local](http://localhost:5173/)

## Things that i would implement differently

- While context is one way to implemnt state management in my opinion if the app needs to scale the state and persist it 
a different approach and probably a different tool should be implemented, context + some kind of storage or use other 
state management library like [Zustand](https://github.com/pmndrs/zustand).

- On the other hand if a larger amount of data is needed i would implement some kidn of db like Firestore or other similar
tool.

- Use [Tailwind CSS](https://tailwindcss.com/) for the styles.


