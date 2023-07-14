# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Advice generator app solution](#frontend-mentor---advice-generator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: https://advice-generator-app-anotherinthefire.vercel.app/

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Vite.js](https://vitejs.dev/) - faster deployment
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- [Axios](https://axios-http.com/)


### What I learned

Axios and new styling techniques

```jsx
const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then(res => setData(res.data.slip))
      .catch(err => console.log(err));
  };

{data && (
            <div className="mt-10">
              <p className="text-primary-neonGreen font-medium text-sm">ADVICE #{data.id}</p>
              <p className="px-10 text-2xl font-bold text-primary-lightCyan">&quot;{data.advice}&quot;</p>
            </div>
          )}
```

return
```jsx
{data && (
            <div className="mt-10">
              <p className="text-primary-neonGreen font-medium text-sm">ADVICE #{data.id}</p>
              <p className="px-10 text-2xl font-bold text-primary-lightCyan">&quot;{data.advice}&quot;</p>
            </div>
          )}
```


### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [suntzaur](https://suntzaur-portfolio.vercel.app/)
- Frontend Mentor - [@anotherinthefire](https://www.frontendmentor.io/profile/anotherinthefire)

## Acknowledgments

to Ron Ultra
