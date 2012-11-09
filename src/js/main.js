/*
 * Main Module 
 *
 */
var myModule = angular.module('ng-remote', ['ui','components', 'StarcounterLib'], function ($routeProvider, $locationProvider) {
 
});

function MyCtrl($scope, $filter) {
  $scope.dumpItems = function(){
    console.log("dump", $scope.Items);
  }

  $scope.getOptions = function (options) {
    var out = [];
    if (options !== null && typeof options === 'object' && options.length) {
      for (var i = 0, ilen = options.length; i < ilen; i++) {
        out.push(options[i].Description);
      }
    }
    return out;
  };
    
  $scope.autocompleteSelect = function () {
    /* modified version of typeahead.select from jquery.handsontable.js */
    var val = this.$menu.find('.active').attr('data-value') || keyboardProxy.val();
    var options = $scope.Items[$scope.currentRow].Product._Options;
    for(var i=0,ilen=options.length; i<ilen; i++) {
      if(options[i].Description === val){
        options[i].Pick = '$$null';
        $scope.$digest();
        $('.dataTable').data('handsontable').destroyEditor();
        break;
      }
    }   
    return this.hide();
  }
  
  $scope.autocompleteLookup = function (event) {
    /* modified version of typeahead.lookup from jquery.handsontable.js */
    var items;
    var query = this.query = $.trim(this.$element.val());
    $scope.$apply(function(){
      $scope.Items[$scope.currentRow].Product._Search = query;
    });
    items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source;
    return items ? this.process(items) : this;
  }
}




angular.module('components', []).
  directive('tabs', function () {
      return {
          restrict: 'E',
          transclude: true,
          scope: {},
          controller: function ($scope, $element) {
              var panes = $scope.panes = [];

              $scope.select = function (pane) {
                  angular.forEach(panes, function (pane) {
                      pane.selected = false;
                  });
                  pane.selected = true;
              }

              this.addPane = function (pane) {
                  if (panes.length == 0) $scope.select(pane);
                  panes.push(pane);
              }
          },
          template:
            '<div class="tabbable">' +
              '<ul class="nav nav-tabs">' +
                '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">' +
                  '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
                '</li>' +
              '</ul>' +
              '<div class="tab-content" ng-transclude></div>' +
            '</div>',
          replace: true
      };
  }).
  directive('pane', function () {
      return {
          require: '^tabs',
          restrict: 'E',
          transclude: true,
          scope: { title: '@' },
          link: function (scope, element, attrs, tabsCtrl) {
              tabsCtrl.addPane(scope);
          },
          template:
            '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
            '</div>',
          replace: true
      };
  })