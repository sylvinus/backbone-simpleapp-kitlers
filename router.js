Router = Backbone.Router.extend({

  routes: {
    "":"home",
    "kitlers":"list"
  },

  changePage:function(id) {
    $(".page").hide();
    $("#page_"+id).show();
  },

  home:function() {
    this.changePage("home");
  },

  list:function() {
    this.changePage("list");
    KLV = new KitlerListView();
  }

});

new Router();

$(function() {
  Backbone.history.start();
});