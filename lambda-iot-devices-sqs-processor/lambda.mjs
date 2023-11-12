import mysql from 'mysql2/promise';
export const handler = async (event) => {
    try {

        const records = await event['Records'];
        const body = records[0].body;
        const data = JSON.parse(body)

        const connection = await  mysql.createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
        })

        await connection.execute(`
            INSERT INTO clouds.iot_devices (device_type, device_value, device_time, longitude, latitude) 
            VALUES ('${data.type}', '${data.value}', '${data.time}', '${data.location.longitude}', '${data.location.latitude}');
        `);

        await console.log(data);

        return data;
    } catch (e) {
        console.log('> Error:', e);
    }
};
