class MainController {
  home({ params: {} }, req) {
    var obj = {
      date: new Date(),
      coder: 'trevo de cinco folhas',
      message: 'fale com o clover mods para ter acesso'
    };
    req.send(obj);
  }
}

module.exports = new MainController();