const data = [
    {
        "_id": "1",
        "name": "Athens",
        "url": "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/idfce8921a0420796/version/1483885988/athens.jpg"
    },
    {
        "_id": "2",
        "name": "Barcelona",
        "url": "https://www.caribbeannewsdigital.com/sites/default/files/sites/default/files/es/imagenes_noticias/barcelona3.jpg"
    },
    {
        "_id": "3",
        "name": "Bern",
        "url": "https://cdn.hostales.com/city_images/Switzerland/bern.jpg"
    },
    {
        "_id": "4",
        "name": "Brussels",
        "url": "https://mejorepocapara.net/wp-content/uploads/2018/10/mejor-epoca-para-viajar-a-Bruselas.jpg"
    },
    {
        "_id": "5",
        "name": "Dubai",
        "url": "https://www.allianz-assistance.es/blog/viajes/es-seguro-viajar-a-dubai/_jcr_content/root/stage/stageimage.img.jpeg/1559747197799/precauciones-viajar-dubai.jpeg"
    },
    {
        "_id": "6",
        "name": "London",
        "url": "https://cdn.civitatis.com/reino-unido/londres/guia/distritos.jpg"
    },
    {
        "_id": "7",
        "name": "Madrid",
        "url": "https://cdn2.civitatis.com/espana/madrid/guia/madrid.jpg"
    },
    {
        "_id": "8",
        "name": "Moscow",
        "url": "https://cdn.hostales.com/city_images/Russia/moscow.jpg"
    },
    {
        "_id": "9",
        "name": "Oslo",
        "url": "https://www.volksbank-reisebuero.de/wp-content/uploads/2019/11/Blog-Oslo-1200x600-1.jpg"
    },
    {
        "_id": "10",
        "name": "Paris",
        "url": "https://www.turismoviajar.com/wp-content/uploads/2019/09/paris-2020.jpg"
    },
    {
        "_id": "11",
        "name": "Rome",
        "url": "https://images.musement.com/cover/0002/37/top-view-of-rome-city-skyline-from-castel-sant-angelo-jpg_header-136539.jpeg?q=50&fit=crop&auto=format&w=1024&h=400"
    },
    {
        "_id": "12",
        "name": "Vienna",
        "url": "https://cdn-3.expansion.mx/dims4/default/93119bd/2147483647/strip/true/crop/1000x600+0+0/resize/800x480!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Ff1%2Ffd%2F3113a9734da988662d315b7aaf54%2Fviena-3.jpg"
    },
    {
        "_id": "13",
        "name": "Saragossa",
        "url": "https://latarde.com/wp-content/uploads/2020/03/zagaroza-hoteles.png"
    },
    {
        "_id": "14",
        "name": "Sidney",
        "url": "https://astelus.com/wp-content/viajes/Guia-turistica-de-Sidney.jpg"
    },
    {
        "_id": "15",
        "name": "Helsinki",
        "url": "https://d1bvpoagx8hqbg.cloudfront.net/originals/experiencia-erasmus-en-helsinki-finlandia-por-viliyana-a7ad5dfbffda403e321fcf47ed263b37.jpg"
    }
]


const cityController = {
    allCities: (req, res) => {
        res.json({
            respuesta: data
        })
    },
    oneCity: (req, res) => {
        const id = parseInt(req.params.id)
        data.map(city => {
            if(parseInt(city._id) === id){
                res.json({
                    res: city
                })
            }
        })
    }
}


module.exports = cityController