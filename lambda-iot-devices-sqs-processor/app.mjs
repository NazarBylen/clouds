import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: 'AKIAZH2UZZJWKMXDIIG6',
    secretAccessKey: '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',
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

export async function processSQSQueue() {
    try {
        const queueMessages = await sqs.receiveMessage(params).promise();
        console.log(queueMessages);
        return queueMessages;
    } catch (e) {
        console.log('> Error:', e);
    }
}

processSQSQueue()
