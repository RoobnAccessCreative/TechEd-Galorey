# Setup

run `npm i` in the command line, then `npm run dev` to launch.

# My Wireframes

![lowfi mobile and desktop wireframes showing a navbar and an array of square images](/wireframes.png)

# Self Reflection

## What Went Well 🤩

I believe that I was successful in delivering a Minimum Value Product for the given requirements, as I think it meets all of them:

- 🎯 `Implement the useState hook to manage gallery state (e.g. selected image).`

  - My API data is stored in a useState, as well as my modal status.

- 🎯 `Use useEffect for initial fetching of images from an external API.`

  - i dont know how to do anything but this with useEffect, but an example from research can be seen in previous iterations of `Image.jsx`.

- 🎯 `Return JSX from multiple components (e.g., an ImageItem component for each image and a Gallery component to display them).`

  - All my addtional components are stored in a components folder with their corresponding CSS files.

- 🎯 `Use the .map() function to render an array of images dynamically`

- 🎯 `Implement functionality to display a larger version of an image when its thumbnail is clicked.`

  - My modal dims and blurs the screen to higlight the modal, showing a larger, full version of the image along with its title.

- 🎯 `Ensure all images have meaningful alt text.`

  - Alt text was supplied with the API.

- 🎯 `Ensure basic keyboard navigation for image selection (e.g., thumbnails should be focusable and activatable with Enter/Space).`
  - images can be visably cycled though with the `Tab` key and their modal will appear on `Enter`.

On top of this, I believe my site (while simplistic) is aesthetically pleasing enough, though it can definitely be elaborated upon in the future.

## What I failed to achieve

- I failed to expand my image gallery with a better API. I have never used an API that uses keys, so neither of upsplashes supplied methods seemed clear to me, and I decided to focus on the MVP instead. Specifically, I was struggling a bit with setup but mostly what to call and how to format it.

There were some further stretch goals that I also did not get to even try and include, such as:

- additional themes to suit more people
- an option to save or download any of the images
- a search option
