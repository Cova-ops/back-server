#!/bin/bash

# Install node.js
sudo apt-get install python-software-properties -y
sudo apt-add-repository ppa:chris-lea/node.js -y
sudo apt-get update
sudo apt-get install nodejs -y
sudo apt-get install npm -y

# Install pm2 module 
# https://pm2.keymetrics.io/
npm install pm2 -g
