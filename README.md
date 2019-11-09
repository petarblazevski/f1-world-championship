# F1 World Championship

This project aims to give an overview of the races between 2005 and 2015 and show the winners of each race. Additionally for each season, each race will be indicated with a banner if the winner driver was a world champion for the season.

The framework behind this app is Angular. The application has been scaffolded using `@angular/cli` and it uses the latest version of Angular (at the time of this writing the latest version is *8.1.3*)

## Getting started

For you to run the application, you just need to install all of the dependencies using one of the following commands:
```bash
yarn install
# OR
npm install
```

when the installation finishes, you just can run the application
```bash
yarn start
```

### Testing

I have also created a couple of unit tests. To run the tests you just need to execute this command

```bash
yarn test
```

## Project architecture

The project has only one module right now. Usually, if the scope of the project is larger, we can split the application into different modules. For example, our app can have a module called **ChampionshipsModule** (following Angular's naming convention). And store all of the components and related code in it. This will help us split the application into different chunks. 

Each chunk can be lazy-loaded, using the router. This will prevent loading the whole application at once, instead, every chunk can be loaded on demand.

The whole application is located in `src/app`. In the `app` you can see a list of folders:
* **components** - this folder contains all of the *presentational* components
* **containers** - the containers folder includes components which have *business logic* in it
* **models** - here I usually store the *interfaces*. I try to keep each interface into its file
* **pipes** - in this folder, I create all of the *custom pipes*
* **services** - includes all of the *services* needed for the application or specific module
* **store** - the store folder contains the *Redux store*. I will talk about redux a bit later in the readme

### Is this application scallable?

Yes, it is, with small modifications. As mentioned before, we can create a new module called **ChampionshipsModule** and store all of the related code in it. This way the **AppModule** will be the root module. This will enable us to create new modules as needed.

### Can we make it more scallable?

Yes, we can. Angular CLI is providing a way to generate libraries in the project/workspace. This way we can separate the presentational layer from the data layer for example.

```bash
ng generate library <name>
```

## State Management

In the *Project architecture* section we mentioned the use of Redux. In the Angular ecosystem, there is a package called **NGRX** which helps with the application state management.

In short, Redux is a state management library for managing the state of the application. Today each framework/library has its adaptation of Redux. For Angular the library is NGRX.

In this application, the redux code is located inside the **store** folder. For this application, I have everything on the first level of the folder. In more complex scenarios, I create sub-folders, **actions**, **reducers**, **effects** and **selectors**. Because in an Angular application, usually, each store should be connected with one module, this folder structure works pretty well. If there is a need for generalizing the store and make it available to the whole application, I will consider grouping the folders into a feature folder. For example:

```
.
+-- store
|   +-- championship
|   |   +-- actions
|   |   +-- effects
|   |   +-- reducers
|   |   +-- selectors
```

For the application-wide redux store, I will most likely create an angular library.

## Styling

For the styling of the application, I am using SCSS with Twitter Bootstrap. Twitter Bootstrap is mainly used for the resets and the grid system.

The location of the styling is changed a little bit from the default config. I have a **resources** folder where I store all of the resources that are getting compiled and don't need to be in the build folder.

For the SCSS, I am using 7-1 architecture. You can read more about it on [Sass Guidelines](https://sass-guidelin.es/). This approach keeps me more organized.

Another approach would be to use the components CSS. However, there is a downside to this. If you depend on SCSS variables, mixins, or functions you have to import them in each file.
