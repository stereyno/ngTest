/*(function() {
    'use strict';

    var signupController = function(MenuService) {
        var vm = this;

        vm.user = {};
        vm.favoriteDish = {};

        vm.showError = false;       // When this value is true error about the favorite dish wiil be shown
        vm.showMessage = false;     // When this value is true message about successfull signup will be shown

        vm.signup = function(form) {
            vm.showError = false;
            vm.showMessage = false;
            // If the form is not valid don't submit
            if(form.$invalid) {
                console.log('The form is not valid');
                return;
            }

            MenuService.getFavoriteDish(vm.user.favoriteDish).then(function(response) {
                vm.user.favoriteDishDetails = response.data;
                console.log(vm.favoriteDish);
                MenuService.saveUser(vm.user);
                vm.showMessage = true;
            }, function(error) {
                console.log(error);
                vm.showError = true;
            });

        }
    };


    signupController.$inject = ['MenuService'];
    angular.module('public').controller('SignupController', signupController);
})();*/

(function() {
    'use strict';

    var signupController = function(MenuService) {
        var $ctrl = this;


        $ctrl.favoriteDish = {};

        $ctrl.showError = false;       // When this value is true error about the favorite dish wiil be shown
        $ctrl.showMessage = false;     // When this value is true message about successfull signup will be shown

        $ctrl.signup = function(form) {
            $ctrl.showError = false;
            $ctrl.showMessage = false;

            var user = {
              firstName: $ctrl.firstName,
              lastName: $ctrl.lastName,
              email: $ctrl.email,
              phone: $ctrl.phone,
              favoriteDish: $ctrl.favoriteDish
            };


            // If the form is not valid don't submit
            if(form.$invalid) {
                console.log('The form is not valid');
                return;
            }

            MenuService.getFavoriteDish($ctrl.user.favoriteDish).then(function(response) {
                $ctrl.user.favoriteDishDetails = response.data;
                console.log($ctrl.favoriteDish);
                MenuService.saveUser($ctrl.user);
                $ctrl.showMessage = true;
            }, function(error) {
                console.log(error);
                $ctrl.showError = true;
            });

        }
    };


    signupController.$inject = ['MenuService'];
    angular.module('public').controller('SignupController', signupController);
})();
