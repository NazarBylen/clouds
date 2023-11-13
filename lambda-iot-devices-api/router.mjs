import { Router } from 'express';
import mysql from 'mysql2/promise';

const router = Router();

async function dbConnect() {
    return await mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
    });
}

router.get('/healthcheck', async (req, res) => {
    try {
        res.status(200).json({
            version: '1.0.0',
            time: new Date().toISOString(),
            type: 'lambda',
            name: 'lambda-iot-devices-api'
        })
    } catch (error) {
        console.error('An error ocurred:', error);
        res.status(500).json(error);
    }
});

router.get('/device/humidity', async (req, res) => {
    try {

        const conn = await dbConnect();
        const data = await conn.execute(`
            SELECT * FROM iot_devices WHERE device_type = 'humidity';
        `)

        const mappedData = data[0].map(item => ({
            id: item.id,
            type: item.device_type,
            value: item.device_value,
            time: item.device_time,
            location: {
                longitude: item.longitude,
                latitude: item.latitude
            }
        }))

        const total = mappedData.length || 0;

        res.status(200).json({
            meta: {total},
            data: mappedData,
        })
    } catch (error) {
        console.error('An error ocurred:', error);
        res.status(500).json(error);
    }
});

router.get('/device/temperature', async (req, res) => {
    try {

        const conn = await dbConnect();
        const data = await conn.execute(`
            SELECT * FROM iot_devices WHERE device_type = 'temperature';
        `)

        const mappedData = data[0].map(item => ({
            id: item.id,
            type: item.device_type,
            value: item.device_value,
            time: item.device_time,
            location: {
                longitude: item.longitude,
                latitude: item.latitude
            }
        }))

        const total = mappedData.length || 0;

        res.status(200).json({
            meta: {total},
            data: mappedData,
        })
    } catch (error) {
        console.error('An error ocurred:', error);
        res.status(500).json(error);
    }
});

router.get('/device/illumination', async (req, res) => {
    try {

        const conn = await dbConnect();
        const data = await conn.execute(`
            SELECT * FROM iot_devices WHERE device_type = 'illumination';
        `)

        const mappedData = data[0].map(item => ({
            id: item.id,
            type: item.device_type,
            value: item.device_value,
            time: item.device_time,
            location: {
                longitude: item.longitude,
                latitude: item.latitude
            }
        }))

        const total = mappedData.length || 0;

        res.status(200).json({
            meta: {total},
            data: mappedData,
        })
    } catch (error) {
        console.error('An error ocurred:', error);
        res.status(500).json(error);
    }
});
export default router;
