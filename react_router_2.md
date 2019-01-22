# Expanding Our Ultimate Image Fetcher

So, our Ultimate Image Fetcher is, thus far, perfect. However, we need some way to preserve our favorite animal pictures for viewing later.

Let's make another route called `/favorites`.

## The Problem

Some of you might be a little nervous about this - for good reason. Theoretically, we should be able to add to our favorites from _either_ the Random Image or Random Breed Image components. However, each of these components hold their own state. How might we accomplish this?

The answer is with a _function argument_, allowing us to pass image URLs up to our top-level parent component's state. Create a function in App called `addFavImage`. That function should take an argument, `url`, that we're going to pass all the way up from our Image component. `addFavImage` will then compile the URL and a unique ID (that you generate) into an object. It'll then add that object to a new part of state, an array of images.

## The Component

Let's create a component, `FavImages`, that will render a list of all of our favorite images. These should be thumbnails - that is, very small versions of the images - in a grid. When you click on an image, it should take you to the route `/favorites/:id`, which renders the full image in an Image component.

All of the components we're creating today, it's worth noting, are functional components - they don't actually hold any state. By adding a single part of state to our App component, we are expanging the functionality of our site significantly.

## Bonus: Comments

Add an array of comments, empty at first, to each new favorite image object you create in App's state. In the route `/favorites/:id`, users should be able to write and post a comment underneath the image.
