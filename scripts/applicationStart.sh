#!/bin/bash

# Stop all servers and start the server as a daemon
pm2 ls
pm2 delete back-server
pm2 start /home/ubuntu/back-server/index.js --name "back-server"
