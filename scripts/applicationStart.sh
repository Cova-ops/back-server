#!/bin/bash

# Stop all servers and start the server as a daemon
pm2 ls
pm2 delete back-server

ls -la /home/ubuntu/back-server

pm2 start /home/ubuntu/back-server/build/index.js --name "back-server"
