angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MessagesCtrl', function($scope,$http, $ionicLoading,$timeout,
  $rootScope,$ionicPopup,$ionicPopover,$cordovaCamera) {

 $rootScope.showFooter = true;

  $scope.messages = [
    {
      id:0,
      name: '回忆专用小马甲',
      text: "中午吃什么？",
      imgUrl:"./img/01.jpg",
      num:1
     },
   {
      id:1,
      name: '勾三股四',
      text: "晚上吃什么？",
      imgUrl:"./img/02.jpg",
      num:2
     },
   {
      id:2,
      name: '简文军',
      text: "早上吃什么？",
      imgUrl:"./img/03.jpg",
      num:3
     },
   {
      id:3,
      name: '占文威',
      text: "在吗？",
      imgUrl:"./img/04.jpg",
      num:4
     },
   {
      id:4,
      name: '王金鑫',
      text: "不在。",
      imgUrl:"./img/11.jpg",
      num:5
     },
   {
      id:5,
      name: '王灿',
      text: "好的。",
      imgUrl:"./img/06.gif",
      num:6
     },
   {
      id:6,
      name: '凯伦师哥',
      text: "O(∩_∩)O~",
      imgUrl:"./img/07.jpg",
      num:7
     },
   {
      id:7,
      name: '老大',
      text: "刷手机。。",
      imgUrl:"./img/12.jpg",
      num:8
     },
  ];

  // 临时数组
   $scope.tempArr =  $scope.messages;

    $scope.doRefresh = function(){
     $http.get('./json/userList.json')
     .success(function(newItems) {
      $ionicLoading.show({
        template: 'Loading..'
      });
      $timeout(function(){
       $scope.messages = newItems.concat($scope.messages);
        $ionicLoading.hide();
      },1000);


       // $scope.tempArr = $scope.messages;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning


       $scope.$broadcast('scroll.refreshComplete');
     });
     // $scope.$broadcast('scroll.refreshComplete');

  };

  $scope.deleteItem = function (item) {
     var confirmPopup = $ionicPopup.confirm({
        title: '你确定删除吗？',
        cancelText: '取消',
        okText:'确定',
        okType:'button-assertive'
     })
     .then(function(res){
      if(res){
          $scope.messages.splice($scope.messages.indexOf(item), 1);
      } else{
        console.log("Don't delete !");
      }
     });
     // $scope.messages.splice($scope.messages.indexOf(item), 1);
  };

  //右上角小弹出框
   $ionicPopover.fromTemplateUrl('templates/messagesPopover.html', {
    scope: $scope
  }).then(function(popover) {
    console.log("创建成功.");
    $scope.popover = popover;
  });

  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  }); //end 右上角小弹出框

  //摄像头
   $scope.openCamera = function () {
            var options = {
              quality: 100,
              destinationType: Camera.DestinationType.DATA_URL,
              sourceType: Camera.PictureSourceType.CAMERA,
              allowEdit: true,
              encodingType: Camera.EncodingType.JPEG,
              // targetWidth: 100,
              // targetHeight: 100,
              popoverOptions: CameraPopoverOptions,
              saveToPhotoAlbum: true
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {
              var image = document.getElementById('myImage');
              image.src = "data:image/jpeg;base64," + imageData;
            }, function(err) {
              // error
              console.log("摄像机调用失败");
            });
        };




})
.controller('LinkmanCtrl', function($scope,$rootScope) {
  $rootScope.showFooter = true;
  $scope.toggle_1 = false;
  $scope.toggle_2 = false;
  $scope.toggle_3 = false;
  $scope.toggle_4 = false;
  $scope.toggle_5 = false;

  $scope.doRefresh = function(){
     // $http.get('/new-items')
     // .success(function(newItems) {
     //   $scope.messages = newItems;
     // })
     // .finally(function() {
     //   // Stop the ion-refresher from spinning
     //   $scope.$broadcast('scroll.refreshComplete');
     // });
     // $scope.$broadcast('scr$rootScopeoll.refreshComplete');
     $scope.$broadcast('scroll.refreshComplete');
  };
})
.controller('ChatCtrl', function($scope, $stateParams,$rootScope,$timeout,chatService) {
  $rootScope.showFooter = false;
  $scope.chatName = $stateParams.name;
  $scope.text = "";
  $scope.items = chatService.dataArr;
  $scope.sendMessage = function(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();

    var data = {
    name:"Connor Hartigan",
    imgUrl:"./img/03.jpg",
    text:"不在！",
    type:false,
    time:"16:19"
  };

   if($scope.text){
      var obj = {};
      obj = {
          name:"写,乐",
          imgUrl:"./img/usr-ii.png",
          text: $scope.text,
          type:true,
          time: h+":"+m
      };
      chatService.setDataArr(obj);
      $timeout(function() {
        chatService.setDataArr(data);
      }, 1000);
      $scope.text = "";
  }
  };
})
.controller('businessCardCtrl', function($scope,$ionicActionSheet) {
  //show the action sheet
  $scope.show = function(){
    var hideSheet = $ionicActionSheet.show({
      buttons:[
      {text:'拍名片'},
      {text:'从相册选择'}
      ],
      cancelText: 'Cancel',
      buttonClicked:function(index){
        return true;
     }
    });
   //     // For example's sake, hide the sheet after two seconds
   // $timeout(function() {
   //   hideSheet();
   // }, 1000);
  };
})
.controller('MyAlbumCtrl', function($scope, $ionicModal, $timeout, $cordovaImagePicker) {
   // Form data for the login modal
        $scope.loginData = {};
        $scope.imgSrc = "";
        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });
        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };
        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };
        //image picker
        $scope.pickImage = function () {
            console.log("haha");
            var options = {
                maximumImagesCount: 1,
                width: 800,
                height: 800,
                quality: 80
            };
            $cordovaImagePicker.getPictures(options)
                .then(function (results) {
                    console.log(results);
                    $scope.imgSrc = results[0];
                }, function (error) {
                    // error getting photos
                    console.log("选择相片");
                });
        };
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
})


.factory('chatService', ['$interval', '$log', function($interval, $log) {
  var service = {};
  // service.dataArr = [];
  service.dataArr = [{
    name:"Connor Hartigan",
    imgUrl:"./img/03.jpg",
    text:"你好啊！竹筒饭！",
    type:false,
    time:"21:12"
  }];


  service.getDataArr = function(){
    return service.dataArr;
  };

  service.setDataArr = function(obj){
    service.dataArr.push(obj);
  
  };

  return service;
}]);
