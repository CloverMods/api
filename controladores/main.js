class MainController {
  home({ params: {} }, req) {
    var obj = {
      youtube: 'https://youtube.com/@clovermods',
      message: 'fale com o clover mods para ter acesso'
    };
    req.send(obj);
  }
}

module.exports = new MainController();