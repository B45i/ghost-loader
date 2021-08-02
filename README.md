# Ghost Loader

## Getting Startd

-   intall the dependencies with `npm i`
-   Start the app by `npm start`
-   live app can be found here: [https://ghost-loader.vercel.app/](https://ghost-loader.vercel.app/)

## Technical Details

The idea of wrapping a component in a loader and automagically create a loader sounds awesome, but I was not able to figure out a way to pull that off.

I made a `Ghost` component that can either be used as an `HoC` to wrap the dynamically loaded content or it can be conditionally rendered in place of the dynamic content (`Article` example is built like this).

### `Ghost` component takes the following props:

`isLoading`: if the component is in a loading state or not.
`count`: Number of ghost entries.
`type`: type of Ghost component (can be `circle` or `rect`)
`height`/`width`: height and width of the ghost
`style`: custom inline-style

the default width is `100%` and the default height is `1rem`.

Animation is done by translating gradient applied to the `.ghost::after` in the `x-direction`.
This `pseudo-element` width is sent as `100vw`,
so that all animations have the same width and can start and end together.

## Sample Code

### As HoC

```html
<Ghost isLoading="{isLoading}" width="75%">
    <h4 className="user-name">{user.name}</h4>
</Ghost>
```

### As a replacement component

this way most of the style of the actual component can be reused.

```html
<h1 className="article-heading">
    {isLoading ? <Ghost height="100%" /> : item.title}
</h1>
```

## Notes

`npm-modules` and `dist` directories are removed from the zip to reduce the size, make sure to install the modules before running.

Google Drive Link: https://drive.google.com/file/d/1_2vYPTtefRQTMG2giZkshBRPo77a09NW/view?usp=sharing

Code is also hosted in a private GitHub repo, let me know if you need read access.

Right now the theme is set to black, which can be changed easily, let me know if the animation is not visible.
