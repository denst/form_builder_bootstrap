define([
       "jquery" , "underscore" , "backbone"
       , "collections/snippets" , "collections/my-form-snippets"
       , "views/tab" , "views/my-form"
       , "text!data/input.json", "text!data/radio.json", "text!data/select.json", "text!data/buttons.json",
        "text!data/slider.json", "text!data/steps.json"
       , "text!templates/app/render.html" 
], function(
  $, _, Backbone
  , SnippetsCollection, MyFormSnippetsCollection
  , TabView, MyFormView
  , inputJSON, radioJSON, selectJSON, buttonsJSON, sliderJSON, stepsJSON
  , renderTab
){
  return {
    initialize: function(){

      //Bootstrap tabs from json.
      new TabView({
        title: "Input"
        , collection: new SnippetsCollection(JSON.parse(inputJSON))
      });
      new TabView({
        title: "Radios / Checkboxes"
        , collection: new SnippetsCollection(JSON.parse(radioJSON))
      });
      new TabView({
        title: "Select"
        , collection: new SnippetsCollection(JSON.parse(selectJSON))
      });
      new TabView({
        title: "Buttons"
        , collection: new SnippetsCollection(JSON.parse(buttonsJSON))
      });
      new TabView({
        title: "Slider"
        , collection: new SnippetsCollection(JSON.parse(sliderJSON))
      });
      new TabView({
        title: "Steps"
        , collection: new SnippetsCollection(JSON.parse(stepsJSON))
      });
      new TabView({
        title: "Rendered"
        , content: renderTab
      });
    

      //Make the first tab active!
      $("#components .tab-pane").first().addClass("active");
      $("#formtabs li").first().addClass("active");
      // Bootstrap "My Form" with 'Form Name' snippet.
      new MyFormView({
        title: "Original"
        , collection: new MyFormSnippetsCollection([
          { "title" : "Form Name"
            , "fields": {
              "name" : {
                "label"   : "Название формы"
                , "type"  : "input"
                , "value" : "Форма конверсии"
              },
              "description" : {
                "label"   : "Краткое описание"
                , "type"  : "textarea"
                , "value" : "краткое описание формы"
              },
              "redirect" : {
                "label"   : "Cтраница редиректа"
                , "type"  : "input"
                , "value" : ""
              },
              "action" : {
                "label"   : "Action"
                , "type"  : "input"
                , "value" : "http://axes.pro/form/conversion"
              }
            }
          }
        ])
      });
    }
  }
});
