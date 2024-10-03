# React Tree Map

We want to create a pure react component which uses divs and image tags and css to create a 1 level nested ecosystem map/tree map.

### Why not use d3?
- D3 is a bit too much for our use case. We want to keep it simple and use only react and css.
- Fixing any issues in d3 is a bit time consuming. We want to keep it simple and easy to maintain.

### React Tree Map Component

When generating code using Chat GPT, make sure to pass these constraints:

##### Styling
- We have tailwind css in our project. So, use tailwind css classes.
- Only for specific use cases, we can use css modules and add css in a separate css module file.

##### Tree Map
- Add min-width of a screen of 768px
- Add max-width of a screen of 1440px.
- We want to show each leaf node as 150px*150px.
- We want to show at least two columns in each category.
- we want to show at least 2 category columns in a row. For example we have 5 categories, we want to show at least 2 categories in a row. It can be between 2-4 categories in a row.
- We also want to show category name inside the category box, at on the top, and center aligned.
- We want to have max 4 columns in each category.
- We can use grid to layout categories and items in each category. Or Flexbox is fine too.
