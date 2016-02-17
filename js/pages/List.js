
var List = new Vue({

   // The page element id
   el: '#page_list',

   // Data variables
   data: {

       l : ["א", "ב", "ג"],
       dummyDB : [
    ["ספרייה", "ספריות", "אור עקיבא", "צפון-מרכז"],
    ["כלבייה", "בעלי חיים", "תל אביב", "מרכז"],
    ["מגן דוד אדום", "רפואה", "אילת", "דרום"]
       ], 
       msg: 'Hello World'
   },

   // Methods
   methods: {

       // The main function
       onLoad: function() {
           debug('\'List\' module initialized.');

           // Hide the loading animation
           App.HideLoadingAnimation();
       }

   },
});

// Trigger the main function
List.onLoad();
