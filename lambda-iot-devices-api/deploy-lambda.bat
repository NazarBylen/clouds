@echo off

rem Deleting a ZIP archive
del .\pkg\lambda-iot-devices-api.zip

rem Creating a ZIP archive
7z a -tzip .\pkg\lambda-iot-devices-api.zip .\lambda.mjs .\router.mjs .\node_modules\

rem Uploading code to the lambda function
aws lambda update-function-code --function-name lambda-iot-devices-api --zip-file fileb://pkg/lambda-iot-devices-api.zip
