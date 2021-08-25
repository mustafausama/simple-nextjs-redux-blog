# Simple Blog Documentation
The simple-blog is a mini blog project built with the following stack:

 - React (User Interface)
 - Next.js (Server-side rendering)
 - Redux (With thunk middlewares) 
 - Styled-components

The app uses a simple REST-api to fetch blogs and comments. It's also capable of posting blogs and comments.

**Features**:

 - Unpublished content (such as new blog or comment) will be stored in Redux until the user goes back to publish them.
 - Store is updated after each API request.
 - Middlewares are used in actions that require API calls (asynchronous actions).
 * *Loading*, *status*, and *message* states could be added in the application later, but currently, they will not differ that much.

## Running the application

 1. First we install the packages by running:

    `npm install`

 2. Second we produce the production version by running:

    `npm run build`
    
 3. Lastly, we can find the production version in the **.next** folder 
 
 Another method:

 1. Initiate a git repository and push it to any git remote repository by running
 `git init`
 `git add .`
 `git commt -m "Commit message"`
 `git remote add RemoteName https://github.com/user/repo`
2. Create a Vercel (official Next.js host) account.
3. Create a new Project in Vercel and link it to the github repository created.

 Running in development:
 - Simply run `npm run dev`

# Redux state
Redux contains the following states:

 - `posts` state is supplied with all the posts to be viewed once the app loads.
 - `pendingPost` state contains the pending post if a user started creating one and has not published it yet.
 - `pendingComments` state contains any pending comments the user has not published yet.

# Files
## Root folder

 - `types.d.ts` file was created for storing general app types
## `redux` folder 
- `actionTypes.ts`  file was created for storing the names of actions
- `actionCreators.ts`  file was created for storing the actions (both direct- and middlware-actions) 
- `rootReudcer.ts` file was created to store the reducer and initial state
- `store.ts` file was created for configuring the redux store

## `components` folder
This folder contains styling components of the app like Header, Footer, Post View, etc..
It also contains a folder called `styled-components` which contains the components created using styled-components library.

