app
.controller('StammformenCtrl', ['$scope', '$interval', 'UserData', function($scope, $interval, UserData) {

  $interval(function() {
    UserData.addToTotalTime(1000)
  }, 1000)

}])
.controller('HomeCtrl', ['$scope', function($scope) {

}])
.controller('StatsCtrl', ['$scope', 'UserData', 'Helpers', function($scope, UserData, Helpers) {

  $scope.stats = {
    totalTime: '0:00',
    totalRights: 0
  }

  // Binding
  $scope.stats.totalTime = Helpers.getTimeString(UserData.getTotalTime())
  $scope.stats.totalRights = UserData.getTotalRights()
  
}])
.controller('PlayCtrl', ['$scope', '$timeout', '$interval', 'UserData', 'Helpers', function($scope, $timeout, $interval, UserData, Helpers) {

  $timeout(function() {

    $scope.currQData = {
      first: '',
      second: '',
      third: '',
      id: 1,
      arr: []
    }

    $scope.$watch('currQData.id', function () {
      $scope.currQData.arr = UserData.getSelection()[$scope.currQData.id].split(', ')
    })

    $scope.domAccess = {
      labelFirst: '',
      labelSecond: '',
      labelThird: '',

      correctFirst: '',
      correctSecond: '',
      correctThird: '',

      output: ''

    }

    $scope.functions.newQ()
  }, 10)


  $scope.$on('$ionicView.enter', function(e, data) {
    console.log('$ionicView.enter called');
  });

  $scope.functions = {
    newQ: function () {

      $scope.domAccess.output += 'running newQ \n'

      var rand = Helpers.random(0, UserData.getSelection().length)
      console.log("running newQ with", rand);
      $scope.currQData.id = rand

      $scope.domAccess.labelFirst = '1. Stammform'
      $scope.domAccess.labelSecond = '2. Stammform'
      $scope.domAccess.labelThird = '3. Stammform'

      $scope.domAccess.correctFirst = ''
      $scope.domAccess.correctSecond = ''
      $scope.domAccess.correctThird = ''

      $scope.currQData.first = ''
      $scope.currQData.second = ''
      $scope.currQData.third = ''


    },
    check: function () {

      console.log("checking");
      $scope.domAccess.output += 'checking \n'

      var rights = 0
      var ordinals = ['first', 'second', 'third']

      if (UserData.getEmptyToDashSettings()) {
        for (var i = 0; i < ordinals.length; i++) {
          if ($scope.currQData[ordinals[i]] === '') {
            $scope.currQData[ordinals[i]] = '-';
          }
        }
      }

      if ($scope.currQData.arr[1] === $scope.currQData.first.toLowerCase()) {
        $scope.domAccess.correctFirst = 'right-answer'
        rights++
      } else {
        $scope.domAccess.correctFirst = 'wrong-answer'
        $scope.domAccess.labelFirst = $scope.currQData.arr[1]
      }

      if ($scope.currQData.arr[2] === $scope.currQData.second.toLowerCase()) {
        $scope.domAccess.correctSecond = 'right-answer'
        rights++
      } else {
        $scope.domAccess.correctSecond = 'wrong-answer'
        $scope.domAccess.labelSecond = $scope.currQData.arr[2]
      }

      if ($scope.currQData.arr[3] === $scope.currQData.third.toLowerCase()) {
        $scope.domAccess.correctThird = 'right-answer'
        rights++
      } else {
        $scope.domAccess.correctThird = 'wrong-answer'
        $scope.domAccess.labelThird = $scope.currQData.arr[3]
      }

      UserData.addToTotalRights(rights)

      $timeout(function () {
        document.querySelector('.first-input').focus()
        $scope.functions.newQ()
      }, 5000)


    }
  }

}])
.controller('SettingsCtrl', ['$scope', 'UserData', 'Questions', function ($scope, UserData, Questions) {

  $scope.lekData = {}
  $scope.generalSetttings = {}

  $scope.lekData.numbers = Questions.getArrayOfLektionNumbers()
  $scope.lekData.selectedObj = UserData.getSelectedLektionsAsObj()

  $scope.generalSetttings.emptyToDash = UserData.getEmptyToDashSettings()

  $scope.$watch('lekData.selectedObj', function(newVal, oldVal) {
    UserData.setSelectionFromObj($scope.lekData.selectedObj)
  }, true)

  $scope.$watch('generalSetttings.emptyToDash', function() {
    UserData.setEmptyToDashSettings($scope.generalSetttings.emptyToDash)
    console.log(UserData.getEmptyToDashSettings());
  }, true)
  
}])