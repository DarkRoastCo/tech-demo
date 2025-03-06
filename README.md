# Tech Demo

Here we have an incredibly loose idea of a technical "test".  In reality this is just an excuse not to have a blank canvas.

In this repo you'll find an example Laravel project, this project displays a list of the original 151 Pokemon in a grid, you can view some basic stats on them and search for your favourites.

We will be imagining that this a real app (even though it's basically the worst real app there could ever be), and will be talking through adding a feature and solving a bug.

Below you'll find the "feature" and the "bug".

### Feature

We need to give our users the ability to save their favourite Pokemon.
- In each card in the grid please add a plus icon (➕) in a button that when clicked will save the pokemon to the logged in users favourites list.
- If a Pokemon is saved in the users favourites please show a checkmark (✔) instead of the plus.
- When the user clicks the checkmark it should remove the favourite and restore the plus icon.

### Bug

- When a user types in the search every works (generally) as expected, however when the backspace/clear the search the list isn't reset to the default state.
- When a user clears the search it should reset to the default state and display all 151 Pokemon.
