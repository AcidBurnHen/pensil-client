# Pensil Client - In Development

# Useful links
https://nextjs.org/docs
https://nextjs.org/learn/foundations/about-nextjs
## Startup 
1. Clone the github repostiroy
2. Run "npm install" in terminal to run all the neccessary packages 
    -TIP: You can open the terminal with ctrl+j in vscode
3. Start the server with npm run dev

## Folder architecture 
1. App folder
    - Each page represents a URL path. Follows a mandatory folder structure of a "Route" named folder and page.tsx inside
    - Example: The  page.tsx located in the app folder is the root url of the website yourwebsite.com
    - Example: If the page.tsx is located in app/about-us then the url is yourwebsite.com/about-us 
2. Public folder
    - No mandatory folder strucure (same for the subfolders)
    - Used for CSS and images
    3. Styles 
        - Everything related to CSS/SASS
    4. Images
        - Static image assests, (not user assets) 
        - Preferably .svg
3. Components folder 
    - React re-usable components (building blocks) for pages

## TODO
- Change description in layout.tsx 
- Change favicon.ico with your logo, but the name of the file should stay the same
- Edit and style Header.tsx component 