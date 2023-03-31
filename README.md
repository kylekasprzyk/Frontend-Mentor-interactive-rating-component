<div id="top"></div>

<div align="center">
  <h1><img src="https://www.frontendmentor.io/static/images/logo-mobile.svg" alt="frontendmentor"> Frontend Mentor - Interactive rating component solution</h1>
  <h2>
    <a href="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI"><strong>Frontend Mentor Challenge</strong></a>  </h2>
    <p>
    <a href="https://kylekasprzyk.github.io/Frontend-Mentor-interactive-rating-component/">My Solution</a>
  </p>
</div>

<!-- bagdes -->
<div align="center">
  <!-- profile -->
  <a href="https://www.frontendmentor.io/profile/kylekasprzyk">
    <img src="https://img.shields.io/badge/Profile-Kyle%20Kasprzyk-blue" alt="Kyle Kasprzyk">
  </a>
  <!-- status -->
    <a href="#">
    <img src="https://img.shields.io/badge/Status-Complete-brightgreen" alt="Status Complete">
  </a>
</div>

![](./design/desktop-preview.jpg)

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

## Links

[Solution URL](https://www.frontendmentor.io/solutions/interactive-rating-component-solution-C7VcLlqaC2)

[Live Site URL](https://kylekasprzyk.github.io/Frontend-Mentor-interactive-rating-component/)

## Built with

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=plastic&logo=html5&logoColor=white)
  
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=plastic&logo=css3&logoColor=white)
  
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E)

## What I learned

I added a waving animation for the card component on page load.

```css
.card {
    width: 25.75rem;
    height: 26rem;
    border-radius: 1.875rem;
    padding: 2rem;
    animation: rotateCard 1000ms ease-in-out;
}

@keyframes rotateCard {
    0% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(10deg);
    }

    50% {
        transform: rotate(-10deg);
    }

    75% {
        transform: rotate(10deg);
    }

    100% {
        transform: rotate(0deg);
    }
}
```

## Author

- Frontend Mentor - [@kylekasprzyk](https://www.frontendmentor.io/profile/kylekasprzyk)
