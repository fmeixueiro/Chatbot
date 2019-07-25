const sendAPI = require("./graphAPI");

const repliesSurvey ={
    texto:'Por favor llena esta encuesta y dime ¿Qué es lo que más te gusta de nuestro servicio?',
    replies:[
        {
            content_type:"text",
            title:'Pozole',
            payload:'servicio'
        },
        {
            content_type:"text",
            title:'Tamales',
            payload:'rapidez'
        },
        {
            content_type:"text",
            title:'Café',
            payload:'ubicacion'
        }
    ]
}
exports.quickReplies =( webhookEvent, replies)=>{
    if(!replies){
        replies = repliesSurvey;
    }
    let response = {
        recipient: {
            id: webhookEvent.sender.id
        },
        message:{
            text:replies.texto,
            quick_replies:replies.replies
        }
    }
    sendAPI.callSendAPI(response);
}
exports.sendTextMessage = (texto, webhookEvent)=>{
    let response = {
        recipient: {
            id: webhookEvent.sender.id
        },
        message:{
            text:texto
        }
    }
    sendAPI.getProfile(webhookEvent.sender.id);
    sendAPI.callSendAPI(response);
}

exports.stores = (webhookEvent) => {
    let response = {
        recipient: {
            id: webhookEvent.sender.id
        },
        message:{
            attachment:{
                type:"template",
                payload:{
                    template_type:"generic",
                    elements:[
                        {
                            title:"Tienda de Zibatá",
                            image_url:"http://www.grupocanton.com/all/imagenes/upload/2018/01/26/tamal2.jpg",
                            subtitle:"Dirección corta de la tienda",
                            default_action:{
                                type:"web_url",
                                url:"https://www.google.com.mx/maps/place/Residencial+Natura+II/@20.6887097,-100.3307379,17z/data=!3m1!4b1!4m5!3m4!1s0x85d35c218bf80425:0x533553861d3b8abd!8m2!3d20.6887097!4d-100.3285492",
                                messenger_extensions: "FALSE",
                                webview_height_ratio:"COMPACT"
                            },
                            buttons:[
                                {
                                    type:"web_url",
                                    url:"https://www.google.com.mx/maps/place/Residencial+Natura+II/@20.6887097,-100.3307379,17z/data=!3m1!4b1!4m5!3m4!1s0x85d35c218bf80425:0x533553861d3b8abd!8m2!3d20.6887097!4d-100.3285492",
                                    title:"Mostrar el mapa"
                                },
                                {
                                    type:"phone_number",
                                    title:"Llama a la tienda",
                                    payload:"+524421937639"
                                }
                                 
                            ]
                    },{
                        title:"Tienda del Centro",
                        image_url:"https://cdn.nrm.com.mx/cdn/enfoque/2016/imagenes/galerias/oaxaca2_3.jpg",
                        subtitle:"Dirección corta de la tienda",
                        default_action:{
                            type:"web_url",
                            url:"https://www.google.es/maps/place/Platzi/@4.6560716,-74.0595918,17z/data=!4m5!3m4!1s0x8e3f9a4333a1a275:0x91a59c01b85e3f59!8m2!3d4.6560663!4d-74.0574031",
                            messenger_extensions: "FALSE",
                            webview_height_ratio:"COMPACT"
                        },
                        buttons:[
                            {
                                type:"web_url",
                                url:"https://www.google.es/maps/place/Platzi/@4.6560716,-74.0595918,17z/data=!4m5!3m4!1s0x8e3f9a4333a1a275:0x91a59c01b85e3f59!8m2!3d4.6560663!4d-74.0574031",
                                title:"Mostrar el mapa"
                            },
                            {
                                type:"phone_number",
                                title:"Llama a la tienda",
                                payload:"+5211223344"
                            }
                             
                        ]
                }
                        
                    ]
                }
            }
        }
    }
    sendAPI.callSendAPI(response);
}

exports.webView = (webhookEvent) => {
    let response={
        recipient:{
           id: webhookEvent.sender.id
        },
        message:{
            attachment:{
                type:"template",
                payload:{
                    template_type:"generic",
                    elements:[{
                        title: "Comparte tu Usuario",
                        image_url:"https://cdn.nrm.com.mx/cdn/enfoque/2016/imagenes/galerias/oaxaca2_3.jpg",
                        subtitle:"La Cesta de Abue",
                        default_action:{
                            type:"web_url",
                            url:"https://www.defrak.mx/mv/vistachat2.html",
                            messenger_extensions: "true"
                        },
                        buttons:[{
                            type:"web_url",
                            url:"https://www.defrak.mx/mv/vistachat.html",
                            title:"Abrir Formulario",
                            messenger_extensions: "true"
                        }]

                    }]
                }
            }
        }
    }
    sendAPI.callSendAPI(response);

}