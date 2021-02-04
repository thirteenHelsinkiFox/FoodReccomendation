const {Food} = require('../models')
const { Op } = require("sequelize");
const axios = require('axios');
const { response } = require('express');

class foodController {
    static  getFood (req, res, next){
        let weather 
        let food
        axios.get('http://api.weatherstack.com/current?access_key=7ad2f0064d52f415536ad4a1795e0fc9&query=Jakarta')
        .then((result) => {
            weather = result.data
            return Food.findAll({
                where:{
                    temp:{
                        [Op.lte]:weather.current.temperature
                    }
                }
            })
        }).then((food) => {
            food = food
            res.status(200).json({weather, food})
        }).catch((err) => {
            console.log(err);
        });
    }

    static getFoodId(req, res, next){
        let tempFood 
        let tempWikepedia
        Food.findOne({
            where:{
                id: +req.params.id
            }
        })
        .then((food) => {
            tempFood =food
            return axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${tempFood.name}`)
        })
        .then((wikepedia) => {
            tempWikepedia = wikepedia
            return axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&q=${tempFood.name}`,{
                headers:{
                    'user-key':'b33aca47499ffaf5e35d3df6b6d44ba7'
                }
            })
        })
         .then((restaurant) => { 
             res.status(200).json({food: tempFood,wikepedia:tempWikepedia.data, restaurant: restaurant.data})
        }).catch((err) => {
             console.log(err);
         });
    }
}

module.exports = foodController