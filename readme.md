# Spring Components

The spring-components module is a proof of concept to see whether or not it is possible to build a scalable web component library with StencilJS which can then be used without hassle in existing projects regardless of the tooling.

## Instructions

- Clone the repository `git clone https://github.com/spring-media/spring-components`

### spring-components

 1. `cd` into `/spring-components`
 2. Install the necessary dependencies `yarn`
 3. Start the development server `yarn start`

### react-demo
 1. `cd` into `/react-demo`
 2. Install the necessary dependencies `yarn`
 3. Start the development server `yarn start`

### vue-demo
 1. `cd` into `/vue-demo`
 2. Install the necessary dependencies `yarn`
 3. Start the development server `yarn start`


## Components

#### spring-marquee
Requires a set of `<span>` elements with the class name of `.item`

```html
<spring-marquee>
	<span class="item">Web Components</span>
	<span class="item">React</span>
	<span class="item">Vue</span>
</spring-marquee>
``` 

#### spring-live-ticker
Requires plain text and has an optional `subtitle` prop
```html
<spring-live-ticker  subtitle="This just in:">
	Web Components are useful
</spring-live-ticker>
```

#### spring-graphql
Takes an [ISO 3166 Alpha-2 code](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) as a prop
```html
<spring-graphql country-code="DE" />
```

## Live App Demos

 - [react demo](https://react-spring-components-demo-e3ysqbusv.now.sh)
 - [vue demo](https://vue-spring-components-demo-hntnaj5na.now.sh/)

