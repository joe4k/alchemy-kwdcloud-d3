# alchemy-kwdcloud-d3
A starter app using Node.js to leverage IBM Watson's Alchemy Language services to extract keywords from any URL and visualize results using D3 word cloud.

To run this code locally:

1- Clone the repository to your local space: 

git clone https://github.com/joe4k/alchemy-kwdcloud-d3.git

2- Change to alchemy-kwdcloud-d3 directory 

cd alchemy-kwdcloud-d3

3- Edit watson/config.js to add your Watson AlchemyAPI credentials. Replace ENTER_YOUR_APIKEY_HERE with your APIkey you obtained when you created an Alchemy service on Bluemix.

vi watson/config.js

4- Install dependencies

npm install

5- Run the app locally (monitor what port it starts on)

npm start

6- Verify functionality by pointing your browser to http://localhost:$port ==> port observed in step 5

7- Enter URL to analyze and hit Analyze.

Observe generated word cloud.
