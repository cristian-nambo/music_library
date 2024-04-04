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

Day 5

Now that we have spent some time learning about the Context hook in React, we will be refactoring our Music Library code-along to implement Context!

Our aim here will be to simplify our application and increase scalability by making some of our state variables "global" by using Context.

We will not be adding any features in this code-along. Ideally, once we are done our application should have the same set of features that we started with. This code-along will allow us to see a different approach to accomplishing the same task!

Before getting started, navigate to your music-library folder that you created for the last code-along. We will start by branching off of our existing project; we want to build these features in a separate feature branch. Let's plan to call it withContext.

Planning
Even when we are refactoring a project, we want to first take stock of what we are working with and determine our plan and the changes we want to make.

Let's start with our components and consider what state properties they will be tracking in the new version.

App: This file will still be the core of our application, and it will now be the context provider for both the searchTerm and data variables.
SearchBar: We will adapt our searchBar to access the searchTerm variable from context. Further, we will plan to adapt our search bar to use an uncontrolled form submittal!
Gallery: This component will be simplified and will gain access to the data object from context.
GalleryItem: This component will remain largely unchanged. With this refactor, this component will still accept props.