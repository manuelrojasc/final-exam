var kafka = require('kafka-node')
var client = new kafka.KafkaClient({ kafkaHost: '13.66.19.83:9091' })
        var consumer = new kafka.Consumer(client, [{ topic: 'prueba', offset:0 }], {autoCommit: true});

consumer.on('message',function(message){
    console.log(message)
})
/* 
function topic1(){
        var client = new kafka.KafkaClient({ kafkaHost: '168.63.41.72:9092' })
        var consumer = new kafka.Consumer(client, [{ topic: 'prueba', offset:0 }], {autoCommit: true});
        return consumer
    }
topic1.on('message',function(message){
    console.log(message)
})

/* function topic2(){
        var client = new kafka.KafkaClient({ kafkaHost: '168.63.41.72:9091' })
        var consumer = new kafka.Consumer(client, [{ topic: 'asitencia', offset:0 }], {autoCommit: true});
        return consumer
    } */
//module.exports={topic1} 
