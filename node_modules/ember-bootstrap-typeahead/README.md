# ember-bootstrap-typeahead

This is an ember wrapper for Twitter's JQuery Typeahead. It's packaged as a
simple ember cli add on. All you have to do is use `ember install ember-bootstrap-typeahead` and you'll be able to use the typeahead helper in your ember-cli app. This is forked from  https://github.com/Dhaulagiri/ember-cli-twitter-typeahead but as I found a lot of issues with that addon that didn't work for me, I just decided to make my own. Use it or fork it as desired.

My fork fixes several issues from the original:
 * the minLength property of the typeahead was in the wrong place and was thus ignored. This is essential if you want it to work like a combo box where clicking on the field causes the drop down to show up
 * I dropped the header and footer templates. I think most folks don't want either and end up having to explicitly say "" to disable them
 * Added default style.css so that it looks decent. The assumption on my part though is that you are using bootstrap, but it isn't strictly necessary. If you don't do this, it looks like crap - so fixed
 * the behavior when a value was selected made a huge assumption. It assumed that the underlying objects being rendered in the drop-down had a member variable called 'name' and that this was the value you wanted spit out of the 'onSelectAction' action....so I've changed it to use the displayKey instead so that you have more control over that. Might add a different field later so you can have super control over what's shown and what data is bound so to speak, but this works for my use-case for now.
 * the focusIn handler just plain broke and didn't make a whole lot of sense to me. I instead here just have it open the drop-down so that you can use this just like you would a normal HTML select (well almost anyways).
 * the example invocation implies that you can supply a filter function but it doesn't actually use it, so now you can provide a function that takes an array and a query string and returns a new filtered array

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)
* [Twitter Typeahead](https://github.com/twitter/typeahead.js/) via Bower

## Usage

To use this in your app, simply use:
```javascript
{{twitter-typeahead
  content=arrayOfDataForTypeahead
  filterContent=filterContentFn
  displayKey="propertyToDisplay"
  valueToken="propertyForValue"
  footerTemplate=handlebarsFooterTemplate
  emptyTemplate=handlebarsEmptyTemplate
  onSelectAction="ActionToRunWhenItemIsSelected"
  on-select-without-match="ActionToRunWhenEnterIsHitWithoutAMatch"
}}
```


## Installation

* `ember install ember-bootstrap-typeahead`

### Running Tests

To develop and test locally, simply clone the repository and run:
* `ember test`
* `ember test --server`

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
