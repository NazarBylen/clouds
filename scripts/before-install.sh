#!/bin/bash
set -xe

# Delete the old  directory as needed.
if [ -d /home/ubuntu/clouds ]; then
    rm -rf /home/ubuntu/clouds
fi

mkdir -vp /home/ubuntu/clouds
