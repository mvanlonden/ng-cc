"use strict";angular.module("singleFieldCcApp",["ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/example.html"}).otherwise({redirectTo:"/"})}]),angular.module("singleFieldCcApp").directive("ccInput",function(){return{templateUrl:"views/ccinput.html",restrict:"E",replace:!0,scope:{},link:function(a,b){a.currentField="number",a.moveTo=function(b){a.currentField=b},a.validateCC=function(){b.find("input").addClass("valid"),b.addClass("valid")},a.$watch("number",function(){a.number&&(a.lastFour=a.number.substr(12))})}}}),angular.module("singleFieldCcApp").directive("ccNumber",function(){return{template:'<input type="text" ng-model="creditCard" format="creditcard" maxlength="19" placeholder="Credit card number">',restrict:"E",replace:!0,scope:{complete:"&onComplete",update:"=",number:"="},link:function(a,b){a.$watch("update",function(){"number"===a.update&&(b[0].focus(),b.addClass("current"))}),a.$watch("creditCard",function(){a.creditCard&&16===a.creditCard.length&&(a.complete(),a.number=a.creditCard)})}}}),angular.module("singleFieldCcApp").directive("format",["$filter",function(a){return{require:"?ngModel",link:function(b,c,d,e){e&&(e.$formatters.unshift(function(){return a(d.format)(e.$modelValue)}),e.$parsers.unshift(function(b){var e=b.replace(/[^\d|\-+|\.+]/g,"");return c.val(a(d.format)(e)),e}))}}}]),angular.module("singleFieldCcApp").filter("creditcard",function(){return String.prototype.splice=function(a,b,c){return this.slice(0,a)+c+this.slice(a+Math.abs(b))},function(a){if(a){var b=a.length;return 4>b?a:(b>4&&(a=a.splice(4,0," ")),b>8&&(a=a.splice(9,0," ")),b>12&&(a=a.splice(14,0," ")),a)}}}),angular.module("singleFieldCcApp").directive("ccDate",["$timeout",function(a){return{template:'<input type="text" ng-model="date" format="monthYear" maxlength="5" placeholder="MM/YY">',restrict:"E",replace:!0,scope:{complete:"&onComplete",update:"="},link:function(b,c){b.$watch("update",function(){"date"===b.update&&a(function(){c[0].focus(),c.addClass("current")},10)}),b.$watch("date",function(){b.date&&4===b.date.length&&(b.complete(),c.removeClass("current"))})}}}]),angular.module("singleFieldCcApp").filter("monthYear",function(){return String.prototype.splice=function(a,b,c){return this.slice(0,a)+c+this.slice(a+Math.abs(b))},function(a){return a?a.length<2?a:a.splice(2,0,"/"):void 0}}),angular.module("singleFieldCcApp").directive("ccZip",function(){return{template:'<input type="text" ng-model="zip" maxlength="5" placeholder="ZIP">',restrict:"E",replace:!0,scope:{complete:"&onComplete",update:"="},link:function(a,b){a.$watch("update",function(){"zip"===a.update&&(b[0].focus(),b.addClass("current"))}),a.$watch("zip",function(){a.zip&&5===a.zip.length&&(a.complete(),b.removeClass("current"))})}}}),angular.module("singleFieldCcApp").directive("ccCvc",function(){return{template:'<input type="text" ng-model="cvc" maxlength="3" placeholder="CVC">',restrict:"E",replace:!0,scope:{complete:"&onComplete",update:"="},link:function(a,b){a.$watch("update",function(){"cvc"===a.update&&(b[0].focus(),b.addClass("current"))}),a.$watch("cvc",function(){a.cvc&&3===a.cvc.length&&(a.complete(),b[0].blur(),b.removeClass("current"))})}}});