#!/bin/bash

# Stop all servers and start the server as a daemon
pm2 delete back-server
pm2 start index.js --name "back-server"
