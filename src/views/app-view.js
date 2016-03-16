function AppView() {

   this.showView(view) {
    if (this.currentView){
      this.currentView.close();
    }

    this.currentView = view;
    this.currentView.render();

    $("#container").html(this.currentView.el);
  }

}

module.exports = AppView;