#!/bin/bash
#
# Wreditor's startup script
# Starts Python's SimpleHTTPServer and allows you to run Wreditor locally.

echo "Welcome to Wreditor!"
echo ""
echo "To start using Wreditor open a web browser and browser to 'http://localhost:8000'"
echo "To quit press 'Control+C'"

#cd ${BASEDIR}

#echo "Script executed from: ${PWD}"

#BASEDIR=$(dirname $0)
#echo "Script location: ${BASEDIR}"

python -m SimpleHTTPServer
