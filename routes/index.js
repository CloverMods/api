let trevo = process.cwd()

const { download_Url } = require("./function");
const axios = require("axios");
const cheerio = require("cheerio");
var express = require('express');
var router = express.Router();
var { exec } = require('child_process')
var fetch = require('node-fetch')
var thiccysapi = require('textmaker-thiccy')
var fs = require('fs')
const path = require('path');
const {
PlayLinkMP3,
PlayLinkMP4,
PlayAudio,
PlayVideo,
ytSearch
} = require("./youtube");

const MainController = require('../controladores/main');
router.get('/', MainController.home);



const criador = ['CloverMods']; // Nome do criador
const key = "clover"//apikey das apis
const keyinexistente = trevo + 'keyerror.html' // html de apikey invalida //

msgs = { //MSGS DE ERROR
error: {
 status: false,
criador: `${criador}`,
mensagem: 
'ops :/ deu erro no servidor interno'
}
}

async function getBuffer(url) {
he = await fetch(url).then(c => c.buffer())
 return he
}
async function Kibar(url) {
he = await fetch(url).then(c => c.json())
 return he
}
function MathRandom(nans) {
he = nans[Math.floor(Math.random() * nans.length)]
 return he
}

//[ - ////////// --- Api's Youtube --- ////////// - ]\\

router.get('/youtube/playmp3', async(req, res, next) => {
apikey = req.query.apikey;
 q = req.query.q
if(apikey !== key) return res.sendFile(keyinexistente)
if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
PlayAudio(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `erro no servidor interno`
 })})})
 
 router.get('/youtube/playmp4', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
if(apikey !== key) return res.sendFile(keyinexistente)
if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
PlayVideo(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `erro no servidor interno`
 })})})

 router.get('/youtube/mp3', async(req, res, next) => {
 apikey = req.query.apikey;
 link = req.query.link
if(apikey !== key) return res.sendFile(keyinexistente)
if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: LINK"})
PlayLinkMP3(link).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `erro no servidor interno`
 })})})

 router.get('/youtube/mp4', async(req, res, next) => {
 apikey = req.query.apikey;
 link = req.query.link
if(apikey !== key) return res.sendFile(keyinexistente)
if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: LINK"})
PlayLinkMP4(link).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `erro no servidor interno`
 })})})

router.get('/youtube/pesquisar', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
 if(apikey !== key) return res.sendFile(keyinexistente)
 if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
 ytSearch(q).then(result => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: result
})}).catch(e => {
res.json({
msg: `erro no servidor interno`
})})})

 //[ - ///////// --- Api's Text Pro --- ///////// - ]\\

router.get('/textpro/summer', async(req, res, next) => {
apikey = req.query.apikey;
query = req.query.q
if(apikey !== key) return res.sendFile(keyinexistente)
if (!query) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
thiccysapi.textpro("https://textpro.me/create-a-summer-text-effect-with-a-palm-tree-1083.html", query
).then(async (linkdaimagem) => { 
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}})}})})

router.get('/textpro/3d_business', async(req, res, next) => {
apikey = req.query.apikey;
query = req.query.q
if(apikey !== key) return res.sendFile(keyinexistente)
if (!query) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
thiccysapi.textpro("https://textpro.me/3d-business-sign-text-effect-1078.html", query
).then(async (linkdaimagem) => { 
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}})}})})

router.get('/textpro/3dgoldenblack', async(req, res, next) => {
apikey = req.query.apikey;
query = req.query.q
if(apikey !== key) return res.sendFile(keyinexistente)
if (!query) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
thiccysapi.textpro("https://textpro.me/free-creative-3d-golden-text-effect-online-1075.html", query
).then(async (linkdaimagem) => { 
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}})}})})

router.get('/textpro/vintage', async(req, res, next) => {
apikey = req.query.apikey;
text1 = req.query.texto1
text2 = req.query.texto2
if(apikey !== key) return res.sendFile(keyinexistente)
if (!text1) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: texto1"})
if (!text2) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: texto2"})
thiccysapi.textpro("https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html",
[text1], [text2]
).then(async (linkdaimagem) => { 
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}})}})})

router.get('/textpro/halloween', async(req, res, next) => {
apikey = req.query.apikey;
text1 = req.query.texto1
text2 = req.query.texto2
if(apikey !== key) return res.sendFile(keyinexistente)
if (!text1) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: texto1"})
if (!text2) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: texto2"})
thiccysapi.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html",
[text1], [text2]
).then(async (linkdaimagem) => { 
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}})}})})

router.get('/textpro/thunder', async(req, res, next) => {
apikey = req.query.apikey;
query = req.query.q
if(apikey !== key) return res.sendFile(keyinexistente)
if (!query) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
thiccysapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", query
).then(async (linkdaimagem) => { 
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}})}})})



router.post('/post/body', async (req, res) => {
res.send(req.body)
})
 router.all('*', async (req, res) => {
 res.status(404).json({
status:404,
error: 'página não encontrada Ou e Inexiste',
endpoint: req.path
})
})


module.exports = router;
