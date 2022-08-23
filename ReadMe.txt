image processing API app

---use the following scripts to run the app--- 

start : to initialize the app

lint : to use eslint

prettier : to use prettier 

test : to start unit testing 

build : to build the dist file
........................................


---endPoint instructions---

app is running on localhost:8000

for displaying the image start adding "/image?file=Nasa&wid={the number you wanna check for width}&hei={the height}"
.........................................

---file Structure---

files names are the same as its folders, but to just make it clear :

spec
|___support
|      |
|      |____jasmine.json
|
src 
|___middleware
|       |_____middleware.ts 
|
|
|___reSize
|      |_____reSize.ts (for sharp processing image)
|
|___routes
|      |_____routes.ts (the app routes)
|
|___tests
|     |____helpers
|            |_____reporter.ts
|
|___indexSpec.ts
|
|
(other config files and package)




