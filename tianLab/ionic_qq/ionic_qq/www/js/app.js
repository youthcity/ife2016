// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])

.run(function($ionicPlatform,$rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    //初始化显示底部
    $rootScope.showFooter = true;
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.messages', {
      url: '/messages',
      views: {
        'menuContent': {
          templateUrl: 'templates/messages.html',
          controller: 'MessagesCtrl'
        }
      }
    })
    .state('app.linkman', {
      url: '/linkman',
      views: {
        'menuContent': {
          templateUrl: 'templates/linkman.html',
          controller: 'LinkmanCtrl'
        }
      }
    })
    .state('app.dynamics', {
      url: '/dynamics',
      views: {
        'menuContent': {
          templateUrl: 'templates/dynamics.html',
          controller: 'LinkmanCtrl'
        }
      }
    })
    .state('app.businessCard', {
      url: '/businessCard',
      views: {
        'menuContent': {
          templateUrl: 'templates/businessCard.html',
          controller: 'businessCardCtrl'
        }
      }
    })
    .state('app.my_album', {
      url: '/my_album',
      views: {
        'menuContent': {
          templateUrl: 'templates/my_album.html',
          controller: 'MyAlbumCtrl'
        }
      }
    })

  .state('app.chat', {
    url: '/chat/:name',
    views: {
      'menuContent': {
        templateUrl: 'templates/chat.html',
        controller: 'ChatCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/messages');
});
