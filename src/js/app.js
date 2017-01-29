(function () {

    let app = angular.module('app',[]);

    app.controller('GemStore', function ($http) {
        let vm = this;

        $http.get("mock/gemInfo.json").then(function (res) {
            vm.model = res.data;
        });

        vm.tabIndex = 0;

        this.setIndex = function (currentTab) {
            vm.tabIndex = currentTab;
        };

        this.isSet = function (tab) {
            return this.tabIndex === tab;
        };
    });

})();
