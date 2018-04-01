# Functional Front End
For 4/4/18 Hero Lunch and Learn

## Setup

1. `git clone https://github.com/jefflombard/functionalFrontEnd-hero.git`
1. `cd ffe`
1. `npm install` or `yarn install`
1. Check out to the branch you want to run with `git checkout <branch-name>`
1. `npm run start` or `yarn start`

## What is functional programming?
>Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. Functional programming is declarative rather than imperative, and application state flows through pure functions. Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.
>
> Functional programming is a programming paradigm, meaning that it is a way of thinking about software construction based on some fundamental, defining principles (listed above). Other examples of programming paradigms include object oriented programming and procedural programming.”

-- [From Master the JavaScript Interview: What is Functional Programming? By Eric Elliot](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

### Why Choose Functional Programming?

- [Quora: What's so great about functional programming?](https://www.quora.com/What-is-so-great-about-functional-programming-What-are-the-main-points-of-it-and-why-are-they-useful)

- [Composition is better than inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA)

## The Shadow DOM W3 Spec

> This specification describes a method of combining multiple DOM trees into one hierarchy and how these trees interact with each other within a document, thus enabling better composition of the DOM.

From [W3 - Shadow DOM](https://www.w3.org/TR/shadow-dom/)


### Implications

We can *compose* a large complex DOM tree with multiple smaller simpler DOM trees.

This allows us to encapsulate complexity and essentially gives us the ability to define our own elements, we can take a functional approach to the frontend!

#### Example

Page - HTML for a Header, Navigation, and Text:
```html
	<html>
        <body>
        	<div class="header">
            	<h1>My Website<span class="subheader">a simple website</span></h1>
            </div>
            <div class="navigation">
            	<ul>
                	<li>
                    	<a href="/home.html">Home</a>
                    </li>
                    <li>
                      	<a href="/about.html">About</a>
                    </li>
                    <li>
                    	<a href="/contact.html">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="page-content">
            	<p>University City Phillies gravy the wall Manayunk Pat's Jersey Shore Rita's Eagles Victory McNabb Orange Line Citizen's Bank Park Fishtown hoagie Italian Market Flyers Geno's Rocky FDR practice stromboli Vet Independence Hall Comcast roll Love Park cheeseteak South Street youse.</p>
                <p>passyunk Bob and Barbara's Victory Cheez Whiz Italian Market Pat's the wall Love Park phantic Temple Flyers Bob Brady Mummers whiz Fishtown Tastykake jawn Point Breeze 95 Action News Liberty Bell gravy FDR Jersey Shore state store sixers Roots pretzel youse Frank Rizzo.</p>
            </div>
        </body>
    </html>
```

Simplified Page - Self Defined Components:
```
	<html>
    	<body>
        	<header />
            <navigation />
            <page-content />
        </body>
    </html>
```
##### Why is this a good thing?
It significantly reduces complexity, allowing us to zoom to the level of granularity that we need to solve problems. Higher level problems are easier to deal with.

##### Critiques

> I can just use code folding in my editor for that.

With this approach you can also encapsulate `Javascript` or `CSS`.

## Functional Front End Example

Build a table that displays data from an external `JSON` source.

### Using Dumb Components to build a Table (`01-using-dumb-components`)

#### What are 'dumb' components?

Components whose only job is to render markup. They are not aware of any state and do not contain any javascript.

Read More: [Dumb Components and Smart Components](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43)

### How to handle grabbing data from an external source

#### Container Components (`02-container-components`)

> Wait isn't this kind of like inheritance if you want to share data between two components?

Yes, this approach gets hairy if you need to share state.

#### Dispatch a Redux action and Manage State with Redux

##### What is Redux?

A state management library influenced by the [`elm programming language`](http://elm-lang.org/)

1. Redux gives you a global state object.
2. This global state object is immutable, you have to interact with it by dispatching  declarative actions.
3. Your reducers interpret those actions and return an appropriate state object

#### Other Approaches to Retrieving Data and Further Reading

[React AJAX Best Practices](https://www.javascriptstuff.com/react-ajax-best-practices/)

### Filtering Data (`04-filtering`)

[Array Manipulation in JavaScript](https://medium.com/@JeffLombardJr/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c)

#### Testing your code (`05-testing`)

A functional frontend lets you cover the majority of your work with unit testing. Which is faster and less costly than other approaches that would require more integration tests. Functional programming doesn't eliminate the need for integration and other test types, it just reduces the need for them.

[The Testing Pyramid - Martin Fowler](https://martinfowler.com/bliki/TestPyramid.html)

### Parsing Unreliable JSON Data with Recursion (`06-json-recursion`)

## Additional Reading/Resources on Functional Javascript

- [Eric Elliot Medium](https://medium.com/@_ericelliott)
- [Dan Abramov Explains Redux](https://egghead.io/courses/getting-started-with-redux)
- [FunFunFunction](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q)
- [Stephen Grider on Udemy](https://www.udemy.com/user/sgslo/)
- [Exploring ES6](http://exploringjs.com/es6/)
