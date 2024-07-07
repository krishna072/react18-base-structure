# React JS guidelines

## Repository Structure

    react-app/
    │
    ├── public/
    │   └── ...
    ├── src/
    │   ├── assets/
    │   ├── lib/
    │   ├── data/
    │   │   ├── hooks/
    │   │   ├── contexts/
    │   │   └── ...
    │   ├── components/
    │   │   ├── ComponentName/
    │   │   │   ├── ComponentName.jsx
    │   │   │   ├── ComponentName.test.jsx
    │   │   │   ├── ComponentName.module.css
    │   │   │   └── index.js
    │   ├── routes/
    │   │   ├── ...
    │   │   │   └── index.js
    │   ├── services/
    │   ├── app.jsx
    │   ├── index.jsx
    │   └── ...
    ├──  index.html
    ├── .gitignore
    ├── package.json
    ├── tsconfig.json
    ├── README.md
    └── ...

## Coding Rules

### General Guidelines

- **Use TypeScript**: Ensure all JavaScript files use TypeScript.
- **Consistent Naming**: Use camelCase for variables and functions, PascalCase for component names, and kebab-case for CSS class names.
- **Code Linting**: Follow ESLint rules and fix any issues before committing.
- **Prettier**: Use Prettier for code formatting.


## File Descriptions

### public/

### src/

#### assets/

- Directory for storing static assets like images, fonts, and icons.

#### components/

- **ComponentName/**: Each component has its own directory, containing the component file, its styles, tests, and an index file for easy imports.

#### lib/contexts/

- Contains context providers for global state management using React Context API.

#### lib/hooks/

- Custom React hooks are stored in this directory to encapsulate reusable logic.

#### lib/
All common components and other common files will be written here.

#### data/

- All constant and content for components will be written here.

#### routes/ - 
**RouteName/**: Each route component has its own directory, similar to individual components, containing the main route file, styles, tests, and an index file.

#### services/

- Contains files for making API calls and handling business logic separate from the components.

#### app.jsx

- The main application component that sets up routes and provides a layout for the app.

#### index.jsx

- The entry point for the React application. This file renders the `App` component into the DOM.

### Root Files
- **index.html**: The main HTML file for the project. This is the entry point for the React application.
- **.gitignore**: Specifies which files and directories to ignore in version control.
- **package.json**: Contains metadata about the project, including dependencies and scripts.
- **tsconfig.json**: The TypeScript configuration file.
- **README.md**: Main documentation file for the project, including setup and usage instructions.

By following this structured approach, the project remains organized and maintainable, making it easier for developers to navigate and contribute to the codebase.


### JavaScript

- **Arrow Functions**: Prefer arrow functions for functional components and callbacks.
- **Destructuring**: Use object destructuring for props and state.

### React Components

- **Functional Components**: Use functional components and hooks instead of class components.
- **Props Validation**: Use TypeScript interfaces for props validation.
- **State Management**: Use the Context API or state management libraries like Redux when appropriate.
- **Side Effects**: Use `useEffect` for handling side effects.

### Styling

- **CSS Modules**: Use CSS modules for styling components.
- **BEM Naming**: Follow BEM naming conventions for class names.
- **Global Styles**: Avoid global styles; use them sparingly and scope styles to components.

### Testing

- **Unit Tests**: Write unit tests for all components using Jest and React Testing Library.
- **Coverage**: Aim for high test coverage, focusing on critical functionality.
- **Snapshots**: Use snapshot testing where appropriate but avoid over-reliance.

## Best Practices
* Use camel-case for naming of Folder, Files and Variables e.g. `helloWorld` instead of `~HelloWorld~`
* Use simple names for files or folders and keep the pattern consistent
* [Write clean code](https://github.com/ryanmcdermott/clean-code-javascript)
- **Commit Messages**: Write clear and descriptive commit messages.
- **Branching**: Follow a branching strategy (e.g., Gitflow) and name branches clearly.
- **Code Reviews**: Conduct code reviews for all pull requests.
- **Documentation**: Document all components, hooks, and utility functions.
- **Dependency Management**: Regularly update dependencies and remove unused ones.

# UX/UI Guidelines

## Design Principles 
### Consistency 
- **Uniformity**: Use consistent styling for similar elements to create a predictable user experience. 
- **Component Library**: Use a shared component library to maintain design consistency across the application. 
### Simplicity 
- **Minimalism**: Design with simplicity in mind. Avoid clutter and keep interfaces clean. 
- **Focus**: Ensure each screen or component has a clear primary action or purpose. 
### Feedback 
- **User Feedback**: Provide immediate and clear feedback for user interactions (e.g., button clicks, form submissions).
- **Error Handling**: Display helpful error messages and guide users on how to correct issues. 
### Accessibility 
- **Inclusivity**: Design and develop with accessibility in mind to ensure all users can interact with the application. 
- **Standards**: Follow WCAG (Web Content Accessibility Guidelines) standards. 
## Component Design 
### Reusable Components 
- **Modularity**: Design components to be reusable and self-contained. 
- **Props**: Use props to make components flexible and customizable. 
### Component States 
- **Loading**: Implement loading states for asynchronous actions. 
- **Empty**: Handle empty states gracefully with informative messages or visuals. 
- **Error**: Design error states to be clear and helpful. 
### Layout and Spacing 
- **Grid System**: Use a grid system to ensure consistent layout and spacing. 
- **Whitespace**: Use whitespace effectively to improve readability and focus. 
## Styling Guidelines 
### CSS Modules 
- **Scope**: Use CSS modules to scope styles locally and avoid global conflicts. 
- **Maintainability**: Keep CSS files small and maintainable. 
### BEM Naming Convention 
- **Block, Element, Modifier (BEM)**: Follow BEM naming conventions for CSS classes to maintain a clear and scalable stylesheet structure. 
### Responsive Design 
- **Mobile-First**: Design with a mobile-first approach and ensure the application is fully responsive. 
- **Breakpoints**: Use appropriate breakpoints for different screen sizes. 
## Accessibility 

### Keyboard Navigation 
- **Focusable Elements**: Ensure all interactive elements are focusable and navigable via keyboard. 
- **Focus States**: Provide clear focus states for interactive elements. 
### Screen Readers 
- **ARIA Labels**: Use ARIA (Accessible Rich Internet Applications) attributes to improve screen reader support. 
- **Semantic HTML**: Use semantic HTML elements to improve accessibility and SEO. 
### Color Contrast 
- **Contrast Ratios**: Ensure sufficient color contrast for text and background colors. 
- **Color Blindness**: Avoid relying solely on color to convey information. 
## Performance Considerations 
### Lazy Loading 
- **Images and Assets**: Implement lazy loading for images and other heavy assets to improve initial load times. 
- **Components**: Use React’s `Suspense` and `lazy` for lazy loading components. 
### Code Splitting 
- **Optimization**: Split code to load only necessary parts of the application, improving performance. 


# Branch Naming and Commit Messaging Guidelines

## Branch Naming
### Feature Branches

Feature branches are used to develop new features for the upcoming releases. They are created from the `main` or respective branches.

**Naming Convention**: `feature/<issue-number>-<feature-description>`
- **Example**: `feature/1234-add-login-page`

### Bugfix Branches
Bugfix branches are used to fix bugs in the upcoming releases. They are also created from the `main` or respective branches.

**Naming Convention**: `bugfix/<issue-number>-<bug-description>`
- **Example**: `bugfix/5678-fix-navbar-overflow`

### Hotfix Branches
Hotfix branches are used to quickly fix production issues. They are created from the `main` branch.
**Naming Convention**: `hotfix/<issue-number>-<hotfix-description>`
- **Example**: `hotfix/9101-fix-critical-login-bug`

## Commit Messaging
### Commit Message Format
A commit message consists of three parts:
1. **Header**: A brief summary of the changes (50 characters or less). 
2. **Body** (optional): A detailed explanation of the changes.
3. **Footer** (optional): Any references to issues or pull requests.

## Examples
### features:- 
feat: add user login functionality

Added login form and authentication logic.
- Implemented form validation
- Added API calls for login
- Updated Redux store with user data

### bugs:- 
fix: resolve navbar overflow issue

Fixed an issue where the navbar items were overflowing on smaller screens.
- Adjusted CSS styles for responsive design
- Updated media queries

# PR Description & Checklist
> **Note**: This markdown block can be used while creating PR.

## Description


### Type of change

- [ ] **Bug fix** _(non-breaking change which fixes an issue)_
- [ ] **New feature**  _(non-breaking change which adds functionality)_
- [ ] **Breaking change** _(fix or feature that would cause existing functionality to not work as before)_

### Checklist
- [ ] Read the Contributing Guide & Other Docs.
- [ ] Perform a code self-review
- [ ] Comment on the code, particularly in hard-to-understand areas
- [ ] Add documentation, if needed
- [ ] Make sure your code lints
- [ ] Cover changes with tests
- [ ] Covered with constants, if needed
- [ ] Covered with error boundaries, if needed

By following these guidelines and rules, we can maintain a high standard of code quality and consistency throughout the project. Happy coding!
