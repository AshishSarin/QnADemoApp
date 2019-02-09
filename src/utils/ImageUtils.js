export const images = [
    {
        imgCd: "gym_chest",
        uri: require('../images/gym_chest.jpg')
    },
    {
        imgCd: "gym_leg",
        uri: require('../images/gym_legs.jpg')
    },
    {
        imgCd: "gym_shoulder",
        uri: require('../images/gym_shoulder.jpg')
    },
    {
        imgCd: "gym_back",
        uri: require('../images/gym_back.jpg')
    },
    {
        imgCd: "fruit_apple",
        uri: require('../images/fruit_apples.jpeg')
    },
    {
        imgCd: "fruit_mango",
        uri: require('../images/fruit_mangoes.jpg')
    },
    {
        imgCd: "fruit_carrot",
        uri: require('../images/fruit_carrot.jpg')
    },
    {
        imgCd: "fruit_grapes",
        uri: require('../images/fruit_grapes.jpeg')
    }
];

export const getImage = (imgCd) => {
    return images.find(image => image.imgCd === imgCd);
}