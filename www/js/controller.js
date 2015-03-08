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
.controller('PlayCtrl', ['$scope', '$timeout', '$interval', '$compile', 'UserData', 'Helpers', function($scope, $timeout, $interval, $compile, UserData, Helpers) {

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
      $scope.domAccess.correctTranslation1 = ''
      $scope.domAccess.correctTranslation2 = ''
      $scope.domAccess.correctTranslation3 = ''

      $scope.currQData.first = ''
      $scope.currQData.second = ''
      $scope.currQData.third = ''

      
      if (UserData.getTranslationSettings()) {
        $timeout(function() {
          var arr = $scope.currQData.arr
          document.querySelector('.translation-list').innerHTML = ''

          for (var i = 1; i < 6; i++) {
            delete $scope.currQData['translation' + i + 'Input']
            delete $scope.currQData['translation' + i]
            delete $scope.domAccess['translation' + i + 'Label']
            delete $scope.domAccess['correctTranslation' + i]
          }

          for (var i = 4; i < arr.length; i++) {
            $scope.currQData['translation'+String(i-3)] = arr[i]
            $scope.currQData['translation'+String(i-3)+'Input'] = ''
            $scope.domAccess['translation'+String(i-3)+'Label'] = String(i-3) + '. Übersetzung'
            $scope.domAccess['correctTranslation'+String(i-3)] = ''
            var html = angular.element(" \
              <label class='item item-input'> \
                <span class='input-label' ng-bind='domAccess.translation" + String(i-3) + "Label'></span> \
                <input type='text' ng-model='currQData.translation" + String(i-3) + "Input' ng-class='domAccess.correctTranslation" + String(i-3) + "' autocorrcet='off' autocapitalize='off' spellcheck='false'></input> \
              </label> \
            ")
            e = angular.element(document.querySelector('.translation-list'))
            e.append(html)
            $compile(html)($scope)
          };
          console.log($scope.domAccess);
        }, 50)
      }
      

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

      // Translation Stuff (a lot of if)
      if (UserData.getTranslationSettings()) {

        //Check if at least one traslation
        if ($scope.currQData.arr.length >= 5) {
          console.log("theres at least one translation");
          var otherSolutions = []
          for (i = 2; i <= $scope.currQData.arr.length-4; i++) {
            otherSolutions.push($scope.currQData['translation'+i+'Input'])
          }
          if ($scope.currQData.arr.indexOf($scope.currQData.translation1Input) > 3  && otherSolutions.indexOf($scope.currQData.translation1Input) === -1) {
            $scope.domAccess.correctTranslation1 = 'right-answer'
          }
          else {
            $scope.domAccess.correctTranslation1 = 'wrong-answer'
            $scope.domAccess.translation1Label = $scope.currQData.translation1
          }
        }
        if ($scope.currQData.arr.length >= 6) {
          console.log("there are at least two translation");
          var otherSolutions = []
          for (i = 3; i <= $scope.currQData.arr.length-4; i++) {
            otherSolutions.push($scope.currQData['translation'+i+'Input'])
          }
          if ($scope.currQData.arr.indexOf($scope.currQData.translation2Input) > 3  && otherSolutions.indexOf($scope.currQData.translation2Input) === -1) {
            $scope.domAccess.correctTranslation2 = 'right-answer'
          }
          else {
            $scope.domAccess.correctTranslation2 = 'wrong-answer'
            $scope.domAccess.translation1Label = $scope.currQData.translation2
          }
        }
        if ($scope.currQData.arr.length >= 7) {
          console.log("there are at least three translation");
          var otherSolutions = []
          for (i = 4; i <= $scope.currQData.arr.length-4; i++) {
            otherSolutions.push($scope.currQData['translation'+i+'Input'])
          }
          if ($scope.currQData.arr.indexOf($scope.currQData.translation3Input) > 3  && otherSolutions.indexOf($scope.currQData.translation3Input) === -1) {
            $scope.domAccess.correctTranslation3 = 'right-answer'
          }
          else {
            $scope.domAccess.correctTranslation3 = 'wrong-answer'
            $scope.domAccess.translation3Label = $scope.currQData.translation3
          }
        }
        if ($scope.currQData.arr.length >= 8) {
          console.log("there are at least four translation");
          var otherSolutions = []
          for (i = 5; i <= $scope.currQData.arr.length-4; i++) {
            otherSolutions.push($scope.currQData['translation'+i+'Input'])
          }
          if ($scope.currQData.arr.indexOf($scope.currQData.translation4Input) > 3  && otherSolutions.indexOf($scope.currQData.translation4Input) === -1) {
            $scope.domAccess.correctTranslation4 = 'right-answer'
          }
          else {
            $scope.domAccess.correctTranslation4 = 'wrong-answer'
            $scope.domAccess.translation4Label = $scope.currQData.translation4
          }
        }
        if ($scope.currQData.arr.length >= 9) {
          console.log("there are at least five translation");
          var otherSolutions = []
          for (i = 6; i <= $scope.currQData.arr.length-4; i++) {
            otherSolutions.push($scope.currQData['translation'+i+'Input'])
          }
          if ($scope.currQData.arr.indexOf($scope.currQData.translation5Input) > 3  && otherSolutions.indexOf($scope.currQData.translation5Input) === -1) {
            $scope.domAccess.correctTranslation5 = 'right-answer'
          }
          else {
            $scope.domAccess.correctTranslation5 = 'wrong-answer'
            $scope.domAccess.translation5Label = $scope.currQData.translation5
          }
        }

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
  $scope.generalSetttings.translation = UserData.getTranslationSettings()


  $scope.$watch('lekData.selectedObj', function(newVal, oldVal) {
    UserData.setSelectionFromObj($scope.lekData.selectedObj)
  }, true)

  $scope.$watch('generalSetttings.emptyToDash', function() {
    UserData.setEmptyToDashSettings($scope.generalSetttings.emptyToDash)
  }, true)

  $scope.$watch('generalSetttings.translation', function() {
    UserData.setTranslationSettings($scope.generalSetttings.translation)
  }, true)
  
}])