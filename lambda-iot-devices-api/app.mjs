import express from 'express';
import mysql from 'mysql2/promise';
import AWS from 'aws-sdk';

const app = express()
const port = 3000

AWS.config.update({
    region: 'eu-central-1'
});

const sqs = new AWS.SQS({apiVersion: '2012-11-05'});
const accountId = '635296139884';
const queueName = 'IOTDevicesQueue';
const queueUrl = `https://sqs.eu-central-1.amazonaws.com/${accountId}/${queueName}`;
const params = {
    QueueUrl: queueUrl,
    MaxNumberOfMessages: 1,
    VisibilityTimeout: 0,
    WaitTimeSeconds: 0
};


app.get('/', async (req, res) => {
    // sqs.receiveMessage(params, (err, data) => {
    //     if (err) {
    //         console.log(err, err.stack);
    //     } else {
    //         if (!data.Message) {
    //             console.log('Nothing to process');
    //             return;
    //         }
    //
    //         const orderData = JSON.parse(data.Messages[0].Body);
    //         console.log('Order received', orderData);
    //
    //         // orderData is now an object that contains order_id and date properties
    //         // Lookup order data from data storage
    //         // Execute billing for order
    //         // Update data storage
    //
    //         // Now we must delete the message so we don't handle it again
    //         // const deleteParams = {
    //         //     QueueUrl: queueUrl,
    //         //     ReceiptHandle: data.Messages[0].ReceiptHandle
    //         // };
    //         // sqs.deleteMessage(deleteParams, (err, data) => {
    //         //     if (err) {
    //         //         console.log(err, err.stack);
    //         //     } else {
    //         //         console.log('Successfully deleted message from queue');
    //         //     }
    //         // });
    //     }
    // });

    const queueMessages = await sqs.receiveMessage(params).promise();

    if (queueMessages && queueMessages.Messages.length) {
        const data = JSON.parse(queueMessages.Messages[0].Body);

        const connection = await  mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'clouds'
        })


        await connection.execute(`
            INSERT INTO clouds.iot_devices (device_type, device_value, device_time, longitude, latitude) 
            VALUES ('${data.type}', '${data.value}', '${data.time}', '${data.location.longitude}', '${data.location.latitude}');
        `)

        // Now we must delete the message, so we don't handle it again
        const deleteParams = {
            QueueUrl: queueUrl,
            ReceiptHandle: queueMessages.Messages[0].ReceiptHandle
        };
        sqs.deleteMessage(deleteParams, (err, data) => {
            if (err) {
                console.log(err, err.stack);
            } else {
                console.log('Successfully deleted message from queue');
            }
        });
    }

    res.json({...queueMessages})
})

app.get('/healthcheck', async (req, res) => {
    res.json({
        version: '1.0.0',
        time: new Date().toISOString(),
        type: 'lambda',
        name: 'lambda-iot-devices-sqs-queues'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
