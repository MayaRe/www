
var List = new Vue({

   // The page element id
   el: '#page_list',

   // Data variables
   data: {

       l : ["�", "�", "�"],
       dummyDB : [
    ["������", "������", "��� �����", "����-����"],
    ["������", "���� ����", "�� ����", "����"],
    ["��� ��� ����", "�����", "����", "����"]
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
