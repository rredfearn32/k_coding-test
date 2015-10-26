# Important Info
Please check that you have npm, nodeJS and python installed on your system
and npm and node are available in your path (console path).
Please note that this might work differently on a non/unix system
and you will have to figure out for yourself how to run node, npm
and a static web server for the files under app.

# Intro
This package contains two servers.
One of them is for the backend, written in node and runs on port 3000.
The other server serves the static files on localhost:8080 from
the directory app/

# Starting the servers
To start the servers run the shell script start.sh from the command line:
sudo chmod 755 start.sh (you might need to enter your password)
./start.sh

# Usage
The backend server serves only one route:
GET http://localhost:3000/
The response is a list of objects containing some information and
a geographical position.
To see the index.html for your front/end, open your browser at:
http://localhost:8080/

# What should I do?
We would like to see what your skills and imagination drives you
to build for a front/end, based on the data the back/end serves.

On the back/end server side, we would love it if you could help
us implement the
TODO (written as comment)
that is still roaming through the code.
