@echo off

aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 882415107630.dkr.ecr.eu-central-1.amazonaws.com
