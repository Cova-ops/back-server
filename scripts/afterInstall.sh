#!/usr/bin/env bash

mkdir /home/ubuntu/back-server
cd /home/ubuntu/back-server

sudo npm install

cd /home/ubuntu/back-server
sudo ./node_modules/.bin/tsc
