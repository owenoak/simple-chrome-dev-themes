# Simple Chrome Dev Themes

Simple styling for Chrome devtools themes.  Allows you to easily change:
- Fonts
- Background / toolbar colors
- Javascript font colors
- Console (makes console background colors work like Firebug)

Note that this is based on the excellent
[Zero Base Themes](https://github.com/mauricecruz/zero-base-themes)
by Maurice Cruz and Simon Owen.

If you're looking for a more full-featured set of customizations, check that package out!

Also, note that this has been tested on Mac only.


# Contributing

Simple Chrome Dev Themes is built on LESS.
Grunt is used to listen for changes to LESS files and generates CSS.
This means [Node](http://nodejs.org/) is required.


## Getting Started

1. Clone this repo: `git clone https://github.com/owenoak/simple-chrome-dev-themes.git`.

1. Install dependencies: `npm install`.

1. To use an existing theme: `grunt`.
(If you're going to work on your own theme: `grunt watch` to listen for changes).

1. View `chrome://flags` and make sure `Enable Developer Tools experiments` is enabled.

1. From the hamburger menu in the upper-right, choose `More tools > Developer Tools`.  Click the `Settings` (cog) icon in the upper-right of the dev tools pane.  Click `Experiments` on the left, then check `Allow custom UI themes`.

1. Go to the `Extensions` screen.  Make sure `Developer mode` is checked (upper right).

1. Click `Load unpacked extensions...` and find the `theme-extension` folder inside this package.

1. Close and re-open the dev tools to see the new theme.


## Contributing to Template Source

All template files are located in the `/less` directory.
Files beginning with an `_` indicate template partials. They are imported via `config.less`.
Update `config.less` if you add/remove any partials.


## Changing Themes

1. Copy `/themes/oak.less` and modify color values accordingly.
1. Rename the file and save in the `/themes` directory.
1. In the main folder for this project, `grunt watch`.
1. Change `config.less` to look for your new theme.
1. Close and re-open the dev tools to see your changes.

***

## Additional Resources

Blog post and screencast showing how to get up and running and create your own theme as well:
http://s10wen.com/blog/2014/03/12/chrome-dev-tools-theming-with-zero-base-themes/

This is for the [Zero Base Themes](https://github.com/mauricecruz/zero-base-themes)
project, which this project is based on -- the same process applies.
