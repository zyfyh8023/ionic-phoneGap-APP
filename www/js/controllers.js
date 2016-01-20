angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicSlideBoxDelegate, Chats) {
    //为了验证属性active-slide定义的模型，angularjs是mvc模式
    $scope.chats = Chats.all();
    $scope.model = {
      activeIndex:0
    };
    //此事件对应的是pager-click属性，当显示图片是有对应数量的小圆点，这是小圆点的点击事件
    $scope.pageClick = function(index){
      // console.log(index);
      $scope.model.activeIndex = index;
    };
    //当图片切换后，触发此事件，注意参数
    $scope.slideHasChanged = function($index){
        // console.log($index);
    };
    //这是属性delegate-handle的验证使用的，其实没必要重定义，直接使用$ionicSlideBoxDelegate就可以
    $scope.delegateHandle = $ionicSlideBoxDelegate;
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FindCtrl', function($scope) {
    $scope.playlists = [
        { title: 'Reggae', id: 1 },
        { title: 'Chill', id: 2 },
        { title: 'Dubstep', id: 3 },
        { title: 'Indie', id: 4 },
        { title: 'Rap', id: 5 },
        { title: 'Cowbell', id: 6 }
    ];
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        info: true,
        mess: false,
        friends: true,
        music: false,
        advise: false,
        vers: true
    };
})

.controller('LoginCtrl', function($scope, $ionicActionSheet, $timeout, $http) {
    $scope.actionSheet= function(){
        var hideSheet = $ionicActionSheet.show({
            buttons: [
              { text: '<b>Share</b> This' },
              { text: 'Move' }
            ],
            destructiveText: 'Delete',
            titleText: 'Modify your album',
            cancelText: 'Cancel',
            cancel: function() {
                 // add cancel code..
            },
            buttonClicked: function(index) {
              return true;
            }
        });

        $timeout(function() {
            hideSheet();
        }, 500000);
    };

    $scope.doRefresh = function() {
        $http.get('/link') 
            .success(function(newItems) {

            })
            .finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
        });
    };

})

.controller('HelpCtrl', function($scope) {
})

.controller('LinkCtrl', function($scope) {
      $scope.onDragDown=function(){
          alert("onDragDown")
      }
      $scope.onDragRight=function(){
          alert("onDragRight")
      }
      $scope.onSwipeUp=function(){
          alert("onSwipeUp")
      }
      $scope.onSwipeLeft=function(){
          alert("onSwipeLeft")
      }
})

.controller('JoinCtrl', function($scope, $ionicPopup, $timeout) {

    $scope.showDialog=function(){
        $scope.data = {
          wifi:''
        }
        // 一个精心制作的自定义弹窗
        var myPopup = $ionicPopup.show({
          template: '<div>WiFi密码：</div><input type="password" ng-model="data.wifi" style="border:1px solid gray">',
          title: '请输入WiFi密码',
          // subTitle: 'WiFi密码：',
          scope: $scope,
          buttons: [
            { text: '取消' },
            {
              text: '保存',
              type: 'button-positive',
              onTap: function(e) {
                if (!$scope.data.wifi) {
                  //不允许用户关闭，除非他键入wifi密码
                  e.preventDefault();
                } else {
                  return $scope.data.wifi;
                }
              }
            },
          ]
        });

        myPopup.then(function(res) {
          console.log('Tapped!', res);
        });

        $timeout(function() {
           myPopup.close(); //由于某种原因3秒后关闭弹出
        }, 5000);
    };

    // 一个确认对话框
    $scope.showConfirm = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Consume Ice Cream',
        template: 'Are you sure you want to eat this ice cream?'
      });
      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };

    //一个提示对话框
    $scope.showAlert = function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Don\'t eat that!',
        template: 'It might taste good'
      });
      alertPopup.then(function(res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });
    };

})

.controller('TestCtrl', function($scope, $cordovaCamera) {
    $scope.takePicture = function() {
        var options = {
            quality : 75,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
     
        $cordovaCamera.getPicture(options).then(function(imageData) {
          // Success! Image data is here
        }, function(err) {
          // An error occured. Show a message to the user
        });
      }
})

.controller('BindcardCtrl', function($scope) {

})

.controller('DeviceCtrl', function($scope) {

})

.controller('PhotoCtrl', function($scope) {
  
});

