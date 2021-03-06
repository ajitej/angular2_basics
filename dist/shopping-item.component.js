System.register(["angular2/core", 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.shopItems = [
                        { name: "Shirt" },
                        { name: "Pant" },
                        { name: "Sarees" },
                        { name: "Jeans" },
                        { name: "T-Shirt" },
                    ];
                    this.selectedItem = { name: "" };
                }
                ShoppingListComponent.prototype.onItemClicked = function (shopItem) {
                    this.selectedItem = shopItem;
                };
                ShoppingListComponent.prototype.setStyles = function (item) {
                    var styles = {
                        'font-size': item ? '24px' : 'none',
                        'visibility': !item ? 'hidden' : 'visible'
                    };
                    return styles;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: "shopping",
                        template: "\n       <h2>Shopping Items</h2>\n       <ul>\n          <li\n          *ngFor=\"#shopItem of shopItems\"\n          (click)=\"onItemClicked(shopItem)\"\n          >{{ shopItem.name }}</li>\n       </ul>\n\n       <span [ngSwitch]=selectedItem.name>\n         <p>You selected :\n            <span *ngSwitchWhen=\"'Shirt'\">Shirt</span>\n            <span *ngSwitchWhen=\"'Pant'\">Pant</span>\n            <span *ngSwitchWhen=\"'Sarees'\">Sarees</span>\n            <span *ngSwitchWhen=\"'Jeans'\">Jeans</span>\n            <span *ngSwitchWhen=\"'T-Shirt'\">T-Shirt</span>\n            <span *ngSwitchDefault>Nothing</span>\n         </p>\n       </span>\n\n       <div [ngStyle]=\"setStyles(selectedItem.name)\" class=\"text-success\">\n          Thank you for Selecting an item!!\n       </div>\n\n       <button [ngClass]=\"{active: isActive}\" (click)=\"isActive = !isActive\">Buy Items</button>\n   ",
                        styles: ["\n       .button {\n          width: 120px;\n          border: medium solid black;\n       }\n       .active {\n          background-color: red;\n       }\n       p{\n          font-weight: bold;\n       }\n   "],
                        directives: [common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});
//# sourceMappingURL=shopping-item.component.js.map