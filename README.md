[Live site here](http://zackpiper.com/bigger-pockets-challenge/).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

```
# To run the app locally
# Clone the repo and enter the directory
git clone https://github.com/zpipe07/bigger-pockets-challenge.git
cd bigger-pockets-challenge

# Run the app
npm run start
```

# UX Considerations

Accessibility
-------------
The design appeared to use placeholder text to describe the text fields. I
decided to use "floating" labels because 1) labels are important for
accessibility, and 2) even as a good-sighted user I like to have a label while
filling out a text input (sometimes I forget what an input field is for while
I'm filling it out). The floating label effect is pure CSS.

I used screen reader specific text in a couple spots to help accessibility. The
icon buttons have hidden text that allows screen readers to identify their
function. The edit fields have hidden labels associated with them.

Focus Control
-------------
I think it is important to be mindful of focus control within a web app. It can
greatly improve the experience for screen readers and users who simply
prefer to utilize the keyboard. The first place I purposely control focus is
upon submitting a new property. The focus is directed immediately to the new
property's edit button. I think this serves two purposes: 1) if the property was
submitted improperly, editing is only one key press away, and 2) if the new
property was rendered below the fold the focus forces the browser scroll down to
the property for visual confirmation.

The next focus control occurs when editing a property. After clicking the edit
button the focus is transferred to the edit form for obvious reasons.

# JavaScript
I enjoyed using React.js. I like how it handles application state. In my
implementation I hold the state that is returned from the database in the
ProperyList component: here I handle adding, editing, and deleting individual
Property components. I handle state that is specific to each property down in
the actual Property components: things like if the property is being edited or
not.

# CSS
The app is responsive. I prefer to develop with a mobile-first approach. I use
the [BEM naming convention](http://getbem.com/introduction/).

# To-Dos
- Unit tests. I was unfamiliar with the Jest testing environment and thus
  neglected to write any tests. Shame on me.
- Error handling. I don't currently have any sort of error alerting for the
  user. Errors simply print a message to the console.
