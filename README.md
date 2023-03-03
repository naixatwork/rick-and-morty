# Rick and Morty App
https://rickandmortyapi.com/

### Points:
- this is a mobile first app.
- File Structure:
  - follows the LIFT style guide from https://angular.io/guide/styleguide#lift
    - Locate
    - Identify
    - Flat
    - T-DRY (Try to be DRY)
  - feature modules
    - components, hooks, services, functions etc. will be in a folder related to their `feature` at first then their `type`
  - sibling tests 
- Used Paradigms
  - `functional programming`
  - `procedural programming`
  - `OOP` and design patterns related to OOP will `NOT` be used cause https://www.youtube.com/watch?v=QM1iUe6IofM
- Design and Architecture
  - Stratified design
    - Straightforward implementation
    - Abstraction barrier
    - Minimal interface
    - Comfortable layers
- Clean Code Guidelines
  - immutability
  - favor `explicit argument` over `implicit argument`
  - pure functions first approach
  - naming conventions from uncle Bob's book
    - number of words based on the function or value's context
  - upto 3 parameters only
  - using the same level of abstraction in a unit of code
  - unit tests for low level code

### Features:
- [x] Each page shows a header that says “Hello, Guest”
- [ ] Show a list of characters
- [ ] Show a list of locations
- [ ] For lists show a simple pagination, and filters by name (name and gender
  for characters)
- [ ] Each location and character should have its own unique page
- [ ] Each single location page should have a list of its residents/characters
- [ ] Each character page should have a detail about the character, list of the
  episodes they played in and where they live
- [ ] Each character should have a button to set the character as their favorite
  character and it should be saved
- [ ] If a user has a favorite character instead of showing “Hello, Guest” show
  “Hello, {character name}” and it should also have a reset button at the
  header to reset the favorite character

### Good to haves:
- [ ] implement desktop screen
- [ ] introduce light theme and it's switcher
- [ ] respect aria-label, accessibility and correct tags
- [ ] implement active class for routes
- [ ] show a list of episodes
- [x] implement a cool drawer content
- [ ] tell me a secret button at header 