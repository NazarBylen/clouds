#!/bin/bash
set -xe

# Start application server.
pm2 start /home/ubuntu/clouds/app/main.js --name clouds