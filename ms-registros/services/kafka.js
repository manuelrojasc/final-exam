const kafka =require('kafka-node')
const client=new kafka.KafkaClient({kafkaHost:'168.63.41.72:9091'})

const producer=new kafka.Producer(client)


payloads = [
        { topic: 'prueba', messages: 'hi', partition: 0 },
    ];
producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log(data);
    });
});
 
producer.on('error', function (err) {})

module.exports=producer