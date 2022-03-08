# Implicit Measures Wizard Documentation
#### Written by Elinor Bengayev, elinorb240@gmail.com

This file presents minimal documentation for the Implicit Measures Wizard in the Dashboard and of its Stand Alone (SA) version. Only the major parts of the wizard is described, because the rest seem to be straightforward and intuitive, but don't hesitate to contact me for help.   

*(General Note: I created that project as a junior developer, and it was my first big programming project, so you may notice some design problems or actions that could be done more efficiently.)*

First and foremost, to get started working on the project, please install the minno-server following [this guide](https://docs.google.com/document/d/1ZbobgBbhOvoREsod0ms4BYWDsafiIQozZJBDmKfptYI). 
It will get you all the dahboard code, both server and client sides, but you will only need the client side and specific files in it. 

There are two versions for this GUI: a [stand-alone version](https://minnojs.github.io/minno-server/implicitMeasures/) and as a feature in the Dashboard (currently only on the Open Dashboard of the TAU server, and the project implicit's Dashboard).

For running the dashboard in the working environment, enter this command:
```js
npm run watch
```
This command won't update the changes made in the stand-alone files, only the Dashboard ones. For updating the SA files, enter this command:
```js
npm run watch-implicit
```
(Those commands and their functionality are defined in `package.json`.) 
#### I will address the two versions separately:
### Dashboard version:
The implicit measures folder is located in `minno-server/dashboard/src/study/files/wizards/implicitMeasures`. In this folder, there is a different folder for each task, and an additional folder called `resources`, which holds components that are used by multiple tasks wizards.
The style settings (i.e the css file) are defined in the global `style.scss` file which is located in `minno-server/dashboard/src/style/style.scss` (which bundled to a css file located in `minno-server/dashboard/dist/style.css`).

#### General Info regarding all tasks:
*Note: I will refer to the iat files but it applies to all of the other task files.*

#### fileActions.js `(minno-server/dashboard/src/study/files/sidebar/fileActions.js)`
> In the sidebar there is an option to create a file with a wizard. By pressing one of the wizards, a pop-up window appears and asks to name the file **without** an extension.
> Pressing the button calls `createImplicitMeasure()`, which is defined in `fileActions.js`.
> This function creates two files: newTASK.taskType (i.e `newIAT.iat`) and a .js file with the same name (i.e `newIAT.js`).

#### editorComponent.js `(minno-server/dashboard/src/study/files/editorComponent.js)`
> This file maps between the file type (identified by the file extrnsion) and it's appropriate editor.
> In our case, for example, for a `newIAT.iat` file the `editorComponent.js` calls `iat.js`, and for 'newSPF.spf', `spf.js` is called, etc. 

#### iat.js `(minno-server/dashboard/src/study/files/wizards/implicitMeasures/IAT/iat.js)`
> This file is the source of the wizard. 
> For identifying whether it's the dashboard or the stand-alone version that called the component, there is the `external` variable which is a flag with a default value of false (the default version is the dashboard).
>> The meaning of `external = True` is that the we are in the SA version, practically means:
>> - `Output` and `Import` tabs will be displayed
>> - `save` button won't be shown. 
>> - `Image URL` default value changing accordingly
>> - Qualtrics related parameters won't be shown.

> The roles of this file are :
> - Loading the previous session data from the server, and if there isn’t one, loading the default values of the task (`load()`). 
> - Display the task wizard by calling `tabsComponent.js`.
> - Save the data (`do_save()` that calls `save()` that in `implicitMeasuresGeneratorModel.js`)

#### implicitMeasuresGeneratorModel.js `(minno-server/dashboard/src/study/generator/implicitMeasuresGeneratorModel.js)`
> In this file we are sending the data of the gui file (`save()`) and the data of the .js file (`saveToJS()`) to the server. So, we could load it in the next session. 

#### tabsComponent.js `(minno-server/dashboard/src/study/files/wizards/implicitMeasures/resources/tabsComponent.js)`
> Every wizard has a tabs file (i.e `iatTabs.js`) and a default Settings (i.e `iatDefaultSettings.js`).
> The tabs file defines the wizard's tabs, and the parameters for each tab. 
> The file tabsComponent.js gets both of those files and loads all the tabs components and the sub-tab components (references the categories tab).  

#### iatDefaultSettings.js `(minno-server/dashboard/src/study/files/wizards/implicitMeasures/IAT/iatDefaultSettings.js)`
> defines the initial settings for the script, according to the values defined in the extension file (i.e `iat9.js`).

#### utilities.js `(minno-server/dashboard/src/study/files/wizards/implicitMeasures/resources/utilities.js)`
> Includes helper functions for all the wizards. 

#### iatOutputComponent.js `(minno-server/dashboard/src/study/files/wizards/implicitMeasures/IAT/iatOutputComponent.js)`
> There is an outputComponent for every wizard, that outputs a .js and JSON file. 
> #### createFile():
> Outputs the .js and json files.
> #### validityCheck():
> Checks the validity of the fields, main issues – No Category's titles, no image URL and there are pictures as stimuli, blocks values are zeros, etc. For every wizard, there are different tests. After every test, if there is an error, we push the error to the message displayed in the output tab if it's not empty.
> #### updateSettings():
> Creates an object according to the structure of the extension script. 
> *Note: There are wizards that the attributes are called in different names, for example, in IAT, the CSS of the category is called 'stimulusCss' and in the STIAT it called 'css'. So, as a shortcut, I changed it to stimulusCss in the defaultSettings and then changed it back to CSS in updateMediaSettings (the in the outputComponent file). I made those kinds of changes in multiple attributes in the various wizards.* 
> #### toScript(): 
> creates the actual script by adding the header of the extension URL.
> #### toString():
> returns the final script. 

#### iatImportComponent.js `(minno-server/dashboard/src/study/files/wizards/implicitMeasures/IAT/iatImportComponent.js)`
> converts the JSON file to an object.  Here, like the output component, there is a function updateMediaSettings that changes the attributes names that will be suitable to the gui fields names. 

### Stand-Alone (SA) Version:
The SA version is powered by `GitHub pages`. For this purpose, the pages tab in the directory settings must be enabled. In addition, the source of the publication needs to be the `docs` directory in the master branch. That’s the reason the SA is located in `docs/implicitMeasures`. 

> #### index.html `(minno-server/docs/implicitMeasures/index.html)`
> This is the main page that displays all the wizards. By clicking on a wizard button, the page referenced to `implicit.html` with the wizard's type. 
> #### implicit.html `(minno-server/docs/implicitMeasures/view/implicit.html)`
> Here, the file loads the page script by its type (given in the URL - i.e `href="view/implicit.html?type=iat"`). 
> The script loaded is `../jsFiles/type_index.js (i.e iat_index.js)`.
> #### iat_index.js `(minno-server/docs/implicitMeasures/jsFiles/iat_index.js)`
> Created with [rollup](https://rollupjs.org/guide/en/). Simply, it bundles all the components into one big .js file. The setting for the rollup is in `rollup.config-implicit.js`. This rollup is calling `iat.index.standalone.js` which calls the `iat.js` with the `external = True`, which indicates that we are calling the wizard for SA purposes. 
> #### style.css `(minno-server/docs/implicitMeasures/view/style.css)`
> Also rolled up, from `dashboard/src/style/style.scss`.




