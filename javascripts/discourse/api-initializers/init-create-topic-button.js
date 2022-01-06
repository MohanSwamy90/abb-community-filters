
import { apiInitializer } from "discourse/lib/api";
import { h } from 'virtual-dom';

export default apiInitializer("0.8", (api) => {    
  api.createWidget("create-topic-widget", {
    tagName: "div.create-topic-widget",

    html() {           
      return  h("button.start-discussion","Start a Discussion");;
    },
    click(arg) {
      $(".create-topic-backdrop").remove();
      $("body").append("<div class='create-topic-backdrop'></div>");
      $("html").addClass("create-topic");
      $('#create-topic').click();
    }
  });
});
