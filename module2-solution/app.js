(function () {
'use strict';




angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)




ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

    var toBuy = this;

    //LIST ITEMS
    toBuy.items = ShoppingListCheckOffService.getToBuyList();

    //MOVE ITEM WHEN BOUGHT

    toBuy.moveItem = function (itemIndex) {
      ShoppingListCheckOffService.moveItem(itemIndex);
    };





};




AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

    var bought = this;

    bought.items = ShoppingListCheckOffService.getBoughtList();


};




function ShoppingListCheckOffService() {

    var service = this;

    var toBuyList = [

      { name : "phone",
        quantity : 10
      },
      { name : "wallet",
        quantity : 5
      },
      { name : "cable",
        quantity : 3
      },
      { name : "speaker",
        quantity : 1
      },
      { name : "calculator",
        quantity : 7
      }

    ];


    var boughtList = [];


    service.moveItem = function (itemIndex) {


          boughtList.push(toBuyList[itemIndex]);

          toBuyList.splice(itemIndex, 1);


    }


    service.getToBuyList = function () {
      return toBuyList;
    };


    service.getBoughtList = function() {

      return boughtList;

    }




};



})();
