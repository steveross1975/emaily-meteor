Meteor course boilerplate

Default meteor app with signup/login features, complete with scss code.
To start, first:

0. FOR NEW COMPUTERS ONLY:
  0.a.: Generate an ssh key to exchange with github
    0.a.1.: type: ssh-keygen -t rsa -b 4096 -C "<the email to associate with this key>". Leave all the standard values when requested.
    0.a.2.: type: eval "$(ssh-agent -s)" to check if the ssh-agent is up and running or start it if not.
    0.a.3.: type: ssh-add ~/.ssh/id_rsa to associate the just generated private key to the ssh agent
    0.a.4.: type: less ~/.ssh/id_rsa.pub to grab the public key.
    0.a.5.: in github.com --> settings --> SHS and GPG keys --> add key with a unique name and paste the public key grabbed from the previous point
1. grab this project from github with the following command: git clone git@github.com:steveross1975/meteor-app-boilerplate.git
2. Type in the CLI the following commands:
  1.a.: Rename package_vanilla_app.json (referred only to the base app) or package_full_app.json (the one from the full course app) in <b>package.json</b>
  1.b.: meteor npm install
  1.c.: meteor add fourseven:scss accounts-password session react-meteor-data
  1.d.: meteor remove insecure autopublish (this will allow the app to manage publish and subscribe events correctly when the user is logged in)
3. To add a Mocha test package, add the following:
  3.a.: meteor add cultofcoders:mocha.
  3.b.: meteor npm install expect@1 --save-dev (DO NOT USE JEST)
  3.c.: meteor npm install --save-dev enzyme react-addons-test-utils (for client-side testing, React components testing)
  3.d.: meteor npm install --save-dev enzyme-adapter-react-16
  3.e.: for reference, see the .test.js files:
    3.e.1.: Server-Side under imports/api folder
    3.e.2.: Client-Side under imports/ui folder
4. Add to git / github the new app
  4.1.: in the app root folder type: git init
  4.2.: type: git status (to check if the repository has been created)
  4.3.: type: git add . (to add all the files to the local repository)
  4.4.: type: git commit -m "Initial commit"
  4.5.: visit github.com --> enter username / password (the usual ones)
  4.6.: add a repository (+ sign) with the app name: copy to clipboard the git@github address
  4.7.: in the command line, type: git remote add origin <git@github address pasted from above>
  4.8.: to push to github, in the command line type: git push -u origin master (origin is the local name of the remote repository, master is the master branch of the local repository. the -u flag allows you to simply type git push the following times).
5. Deploy to heroku.
  FOR NEW COMPUTERS ONLY
  5.firstofall: add in heroku the ssh public key created in the 0. section.
  5.secondofall: install the heroku CLI toolbelt by going to toolbelt.heroku.com

  5.a.: heroku create <app-name>
  5.b.: Add a Meteor BuildPack: heroku buildpacks:set https://github.com/AdmitHub/meteor-buildpacks-horse.git (to add a buildback necessary for heroku to deploy meteor apps)
  5.c.: change the package.json file adding the following code after the dependencies section (with the initial comma):
  "engines": {
    "node": "<result of the command node -v in the terminal>"
  }
  5.d.: Add the mongolab addon: heroku addons:create mongolab:sandbox
  5.e.: Add the ROOT_URL: heroku config:set ROOT_URL="<URL of the heroku app>"
6. Pray. hard.

Phusion Passenger

In general. all you need is an environement that has a PORT, ROOT_URL, and MONGO_URL environment variable (docs). This will let you work with any VPS service you want.
