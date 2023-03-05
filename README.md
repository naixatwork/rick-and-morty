# Rick and Morty App
### a user interface project for https://rickandmortyapi.com/

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
    - copy-on-write
  - favor `explicit argument` over `implicit argument`
  - pure functions first approach
  - naming conventions from uncle Bob's book
    - number of words based on the function or value's context
  - upto 3 parameters only
  - using the same level of abstraction in a unit of code
  - unit tests for low level code
- git
  - commit messages follow the conventional commit guideline https://www.conventionalcommits.org/en/v1.0.0/

### Main Features:
- [x] Each page shows a header that says “Hello, Guest”
- [x] Show a list of characters
- [x] Show a list of locations
- [x] For lists show a simple pagination, and filters by name (name and gender
  for characters)
- [x] Each location and character should have its own unique page
- [x] Each single location page should have a list of its residents/characters
- [x] Each character page should have a detail about the character, list of the
  episodes they played in and where they live
- [x] Each character should have a button to set the character as their favorite
  character and it should be saved
- [x] If a user has a favorite character instead of showing “Hello, Guest” show
  “Hello, {character name}” and it should also have a reset button at the
  header to reset the favorite character

### Fundamentals:
- [x] Use typescript
- [x] Saving the character for user should be on cookie and should be done by the server
- [x] Have at least 1 page using SSR the rest should have an SSG strategy with 10 minutes cache
- [x] The design does not matter, what matters is project structure and clean code

### Good to haves:
- [ ] implement unit tests for low level code
- [ ] implement rendering upon cookie change
- [x] add router loading
- [ ] host the app
- [ ] implement desktop screen
- [ ] introduce light theme and it's switcher
- [ ] respect aria-label, accessibility and correct tags
- [ ] implement active class for routes
- [ ] show a list of episodes
- [x] implement a cool drawer content
- [ ] tell me a secret button at header
- [ ] use scss
  - 7-1 file structure
