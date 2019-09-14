# Vue.js
This is educational purpose for learning the Vue.js. Here I will add references and examples.

# Installation Setup

#### Install globally to your machine

1. ```sudo npm install -g vue-cli``` 

2. Enter your password

3. Template simple webpack installation: ```vue init webpack-simple vue-cli```.

   - (Optional) Instead of vue-cli. You can enter whatever project name you want

     

You will get to confirm what the Project name, description etc. is:



1. **Project Name** [Enter the project name]

2. **Project description** [Enter a description]

3. **Author** [Enter your name]

4. **License** [Enter a license]

5. **Use sass?** [Optional]

   

Follow the command :

1. ```cd vue-cli```
2. ```npm install``` to pull down all of the dependencies, because this just created the template with the package.json and in this package.json file that's our dependency management file. All of  the dependencies of this project are listed and will installing all of these dependencies. You will get a long list on the terminal, but we only need for development 
   - This is almost only development only dependencies The only production dependency should be vue.js. The rest will be webpack etc.
3. Run the ```npm run dev``` inside the project folder. This will keep process running and automatically recompile everything and reload our server automatically when we change a file
4. You will get a url, e.g.: ```http://localhost:8000```. Copy the address and paste it on your browser url if it doesn't open automatically  

