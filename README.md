Music lovers rejoice! In this activity, you will be building a music search and "catalog" system. This activity will reinforce experience with React fundamentals, specifically those pertaining to dataflow in React when utilizing fetch and managing state among components.

Our goal will be to build a website that will allow a user to search for an artist and see a list of songs. A user will be able to click on a song to open a "detail" view of that song.

Now let's take a moment to consider what variables we may track with state in our application:

Day 1

App
Search: This will be our search term. We want to declare this as a property of "App" because we will make our API search happen at the App level so that the data is available to all children of the application.
Data: The data from our API call should be stored in state so that we do not lose it when the app triggers a re-render.
Message: It is good practice to have a state variable to capture any error or success messages that may emit or that we would expect to emit from the API call.

SearchBar
SearchTerm: This will make a bit more sense in practice, but we will need to store the search term somewhere as we type it. This is because we want to control the form. Otherwise we would have an uncontrolled form where the data would be handled by the DOM itself. We don't want to have to worry about implementing new, different hooks to reference the actual DOM itself, so instead we will "control" our form by having local state to represent the user's input.

Gallery
Gallery itself will not need to track state!
GalleryItem
View: This will be a Boolean state variable that toggles the "detail" view of a given song.

Day 2

Continuing with our music library interface, this section of our code-along will handle building a form to enter custom search data. Here we will touch on the topic of controlled forms. We will see more about the inverse uncontrolled forms in a future lesson, so for now our focus will be a bit more tightly scoped.

Our goal in this section of the code-along:

Add our controlled form.
Fetch custom data from our API.
Render our data to the screen.