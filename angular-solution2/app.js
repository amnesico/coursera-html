(function(){
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyList.buyItem = function (itemIndex){
        //console.log("el indice ES:", itemIndex);
        ShoppingListCheckOffService.moveItem(itemIndex);
    };

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService(){
    var service = this;

    var toBuyItems = [
      {name:"cookies", quantity:10},
      {name:"apples", quantity:5},
      {name:"oranges", quantity:8},
      {name:"tomatoes", quantity:10},
      {name:"lemons", quantity:3}
    ];

    var boughtItems = [

    ];

    service.getToBuyItems = function(){
      return toBuyItems;
    };

    service.getBoughtItems = function(){
      return boughtItems;
    };

    service.moveItem = function (itemIndex) {
        //console.log("el indice es", itemIndex);
        boughtItems.push(toBuyItems[itemIndex]);
        toBuyItems.splice(itemIndex,1);
    };
  }
})();
