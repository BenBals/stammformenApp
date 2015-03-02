// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

// Wait till the device is done loading
ionic.platform.ready(function() {

angular.module('stammformen', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html'
  })
  .state('play', {
    url: '/play',
    templateUrl: 'templates/play.html'
  })
  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html'
  })

  $urlRouterProvider.otherwise('/')

}])

.factory('Questions', function() {

  var data = {
    1: ['agere, ago, egi, actum', 'audire, audio, audivi, auditum', 'esse, sum, fui, -', 'invenire, invenio, inveni, inventum', 'iuvare, iuvo, iuvi, iutum', 'ludere, ludo, lusi, lusum', 'reprehendere, reprehendo, reprehendi, reprehensum', 'respondere, respondeo, respondi, responsum', 'sedere, sedeo, sedi, sessum', 'tacere, taceo, tacui, tacitum', 'venire, venio, veni, ventum', 'videre, video, vidi, visum'],
    2: ['adiuvare, adiuvo, adiuvi, adiutum', 'cupere, cupio, cupivi, cupitum', 'currere, curro, cucurri, cursum', 'debere, debeo, debui, debitum', 'fugere, fugio, fugi, -', 'habere, habeo, habui, habitum', 'rapere, rapio, rapui, raptum', 'ridere, rideo, risi, risum', 'sumere, sumo, sumpsi, sumptum'],
    3: ['adesse, adsum, adfui, -', 'capere, capio, cepi, captum', 'considere, consido, consedi, consessum', 'dicere, dico, dixi, dictum', 'dormire, dormio, dormivi, dormitum', 'incipere, incipio, coepi, inceptum', 'irridere, irrideo, irrisi, irrisum', 'legere, lego, legi, lectum', 'monere, moneo, monui, monitum', 'scribere, scribo, scripsi, scriptum', 'timere, timeo, timui, -'],
    4: ['accedere, accedo, accessi, accessum', 'colligere, colligo, collegi, collectum', 'conspicere, conspicio, conspexi, conspectum', 'gaudere, gaudeo, gavisus sum, -', 'intellegere, intellego, intellexi, intellectum', 'pergere, pergo, perrexi, perrectum', 'tangere, tango, tetigi, tactum'],
    5: ['cadere, cado, cecidi, - fallen', 'caedere, caedo, cecidi, caesum', 'condere, condo, condidi, conditum', 'facere, facio, feci, factum'],
    6: ['accipere, accipio, accepi, acceptum', 'adducere, adduco, adduxi, adductum', 'aperire, aperio, aperui, apertum', 'dare, do, dedi, datum', 'ducere, duco, duxi, ductum', 'fallere, fallo, fefelli, -'],
    7: ['amittere, amitto, amisi, amissum', 'canere, cano, cecini, -', 'contendere, contendo, contendi, contentum', 'crescere, cresco, crevi, cretum', 'iacere, iaceo, iacui, -', 'mittere, mitto, misi, missum', 'petere, peto, petivi, petitum', 'scire, scio, scivi, scitum', 'sinere, sino, sivi, situm', 'surgere, surgo, surrexi, surrectum', 'vincere, vinco, vici, victum', 'vivere, vivo, vixi, -'],
    8: ['alere, alo, alui, altum', 'arcessere, arcesso, arcessivi, arcessitum', 'confidere, confido, confisus sum, -', 'consulere, consulo, consului, consultum', 'deesse, desum, defui, -', 'defendere, defendo, defendi, defensum', 'favere, faveo, favi, fautum', 'iubere, iubeo, iussi, iussum', 'recipere, recipio, recepi, receptum', 'tradere, trado, tradidi, traditum', 'valere, valeo, valui, -', 'vendere, vendo, vendidi, venditum'],
    9: ['deponere, depono, deposui, depositum', 'emere, emo, emi, emptum', 'exercere, exerceo, exercui, exercitum', 'placere, placeo, placui, placitum', 'quaerere, quaero, quaesivi, quaesitum', 'reperire, reperio, repperi, repertum'],
    10: ['apparere, appareo, apparui, -', 'consistere, consisto, constiti, -', 'credere, credo, credidi, creditum', 'custodire, custodio, custodivi, custoditum', 'decipere, decipio, decepi, deceptum', 'frangere, frango, fregi, fractum', 'manere, maneo, mansi, -', 'minuere, minuo, minui, minutum', 'parere, pareo, parui, -', 'punire, punio, punivi, punitum', 'relinquere, relinquo, reliqui, relictum', 'removere, removeo, removi, remotum', 'stare, sto, steti, -', 'trahere, traho, traxi, tractum'],
    11: ['accidere, accido, accidi, -', 'praebere, praebeo, praebui, praebitum', 'tenere, teneo, tenui, tentum'],
    12: ['abire, abeo, abii, abitum', 'afficere, afficio, affeci, affectum', 'decernere, decerno, decrevi, decretum', 'diligere, diligo, dilexi, dilectum', 'inire, ineo, inii, initum', 'interire, intereo, interio, interitum', 'ire, eo, ii, itum', 'praeterire, praetereo, praeterii, praeteritum', 'regere, rego, rexi, rectum', 'volvere, volvo, volvi, volutum'],
    13: ['arripere, arripio, arripui, arreptum', 'aspicere, aspicio, aspexi, aspectum', 'movere, moveo, movi, motum', 'neglegere, neglego, neglexi, neglectum', 'pendere, pendeo, pependi, -', 'perterrere, perterreo, perterrui, -', 'reddere, reddo, reddidi, redditum'],
    14: ['admovere, admoveo, admovi, admotum', 'advenire, advenio, adveni, adventum', 'animadvertere, animadverto, animadverti, animadversum', 'dividere, divido, divisi, divisum', 'imponere, impono, imposui, impositum', 'incendere, incendo, incendi, incensum', 'interficere, interficio, interfeci, interfectum', 'metuere, metuo, metui, -', 'perficere, perficio, perfeci, perfectum'],
    15: ['constituere, constituo, constitui, constitutum', 'edere, edo, edidi, editum', 'imminere, immineo, -, -', 'instituere, instituo, institui, institutum', 'parere, pario, peperi, partum', 'prohibere, prohibeo, prohibui, prohibitum', 'ruere, ruo, rui, rutum', 'tendere, tendo, tetendi, tentum'],
    16: ['carere, careo, carui, -', 'delere, deleo, delevi, deletum', 'dolere, doleo, dolui, -', 'persuadere, persuadeo, persuasi, persuasum', 'redire, redeo, redii, reditum', 'velle, volo, volui, -'],
    17: ['commovere, commoveo, commovi, commotum', 'convenire, convenio, conveni, conventum', 'effugere, effugio, effugi, -', 'invadere, invado, invasi, invasum', 'munire, munio, munivi, munitum', 'resistere, resisto, restiti, -'],
    18: ['abesse, absum, afui, -', 'cedere, cedo, cessi, cessum', 'cernere, cerno, crevi, cretum', 'descendere, descendo, descendi, -', 'gerere, gero, gessi, gestum', 'patere, pateo, patui, -', 'providere, provideo, providi, provisum'],
    19: ['constat, constitit, -, -', 'demittere, demitto, demisi, demissum', 'exponere, expono, exposui, expositum', 'instruere, instruo, instruxi, instructum', 'occidere, occido, occidi, occisum', 'oportet, oportuit, -, -', 'ostendere, ostendo, ostendi, ostentum', 'pervenire, pervenio, perveni, perventum', 'repetere, repeto, repetivi, repetitum', 'restituere, restituo, restitui, restitutum', 'videri, videor, visus sum, -'],
    20: ['conicere, conicio, conieci, coniectum', 'convertere, converto, converti, conversum', 'exstinguere, exstinguo, exstinxi, exstinctum', 'fungi, fungor, functus sum, -', 'hortari, hortor, hortatus sum, -', 'loqui, loquor, locutus sum, -', 'oriri, orior, ortus sum, -', 'sequi, sequor, secutus sum, -', 'solvere, solvo, solvi, solutum'],
    21: ['arbitrari, arbitror, arbitratus sum, -', 'audere, audeo, ausus sum, -', 'expellere, expello, expuli, expulsum', 'labi, labor, lapsus sum, -', 'oboedire, oboedio, oboedivi, oboeditum', 'proficisci, proficiscor, profectus sum, -', 'solere, soleo, solitus sum, -', 'suspicari, suspicor, suspicatus sum, -'],
    22: ['cavere, caveo, cavi, cautum', 'circumdare, circumdo, circumdedi, circumdatum', 'claudere, claudo, clausi, clausum', 'educere, educo, eduxi, eductum', 'mirari, miror, miratus sum, -', 'pellere, pello, pepuli, pulsum', 'perire, pereo, perii, -', 'permittere, permitto, permisi, permissum', 'polliceri, polliceor, pollicitus sum, -', 'ponere, pono, posui, positum', 'reri, reor, ratus sum, -', 'statuere, statuo, statui, statutum', 'traicere, traicio, traieci, traiectum'],
    23: ['adimere, adimo, ademi, ademptum', 'admonere, admoneo, admonui, admonitum', 'comperire, comperio, comperi, compertum', 'egere, egeo, egui, -', 'mori, morior, mortuus sum, -'],
    24: ['adhibere, adhibeo, adhibui, adhibitum', 'cogere, cogo, coegi, coactum', 'efficere, efficio, effeci, effectum', 'exire, exeo, exii, exitum', 'iungere, iungo, iunxi, iunctum', 'morari, moror, moratus sum, -', 'nocere, noceo, nocui, nocitum', 'parcere, parco, peperci, -', 'pati, patior, passus sum, -', 'poscere, posco, poposci, -', 'praestare, praesto, praestiti, -', 'subicere, subicio, subieci, subiectum'],
    25: ['adire, adeo, adii, aditum', 'aggredi, aggredior, aggressus sum, -', 'censere, censeo, censui, censum', 'concurrere, concurro, concurri, concursum', 'dissentire, dissentio, dissensi, dissensum', 'disserere, dissero, disserui, dissertum', 'fateri, fateor, fassus sum, -', 'mentiri, mentior, mentitus sum, -', 'nescire, nescio, nescivi, -', 'obicere, obicio, obieci, obiectum', 'sentire, sentio, sensi, sensum', 'versari, versor, versatus sum, -'],
    26: ['consentire, consentio, consensi, consensum', 'corrumpere, corrumpo, corrupi, corruptum', 'dedere, dedo, dedidi, deditum', 'desistere, desisto, destiti, -', 'eligere, eligo, elegi, electum', 'evenire, evenio, eveni, eventum', 'instare, insto, institi, -', 'invidere, invideo, invidi, invisum', 'studere, studeo, studui, -', 'uti, utor, usus sum, -'],
    27: ['cognoscere, cognosco, cognovi, cognitum', 'colere, colo, colui, cultum', 'comprehendere, comprehendo, comprehendi, comprehensum', 'consequi, consequor, consecutus sum, -', 'docere, doceo, docui, doctum', 'fingere, fingo, finxi, fictum', 'frui, fruor, fruitus sum, -', 'imitari, imitor, imitatus sum, -', 'occurrere, occurro, occurri, occursum', 'perdere, perdo, perdidi, perditum', 'praecipere, praecipio, praecepi, praeceptum'],
    28: ['decet, decuit, -, -', 'discere, disco, didici, -', 'eripere, eripio, eripui, ereptum', 'nasci, nascor, natus sum, -', 'novisse, novi, notum, -', 'praeesse, praesum, praefui, -', 'precari, precor, precatus sum, -', 'rumpere, rumpo, rupi, ruptum'],
    29: ['adipisci, adipiscor, adeptus sum, -', 'augere, augeo, auxi, auctum', 'conari, conor, conatus sum, -', 'concedere, concedo, concessi, concessum', 'conficere, conficio, confeci, confectum', 'dimittere, dimitto, dimisi, dimissum', 'iacere, iacio, ieci, iactum', 'ingredi, ingredior, ingressus sum, -', 'interesse, intersum, interfui, -', 'obstare, obsto, obstiti, -', 'praemittere, praemitto, praemisi, praemissum'],
    30: ['ardere, ardeo, arsi, -', 'avertere, averto, averti, aversum', 'componere, compono, composui, compositum', 'conscribere, conscribo, conscripsi, conscriptum', 'differre, differo, distuli, dilatum', 'ferre, fero, tuli, latum', 'inferre, infero, intuli, illatum', 'offerre, offero, obtuli, oblatum', 'perferre, perfero, pertuli, perlatum', 'perspicere, perspicio, perspexi, perspectum', 'praeferre, praefero, praetuli, praelatum', 'referre, refero, rettuli, relatum', 'servire, servio, servivi, servitum']
  }


  return {

    getLektion: function (lektion) {
      lektion = parseInt(lektion)
      return data[lektion]
    },

    getAll: function() {
      var allQ = []
      for (key in data) {
        allQ = allQ.concat(data[key])
      };
      return allQ
    },

    getRaw: function() {
      return data
    },

    getArrayOfLektionNumbers: function() {
      var arrOfLektionNumbers = []

      angular.forEach(this.getRaw(), function (val, key) {
        arrOfLektionNumbers.push(parseInt(key))
      })

      return arrOfLektionNumbers
    },

    getArrayOfLektionNumbersAsStrings: function() {
      var arrOfLektionNumbers = []

      angular.forEach(this.getRaw(), function (val, key) {
        arrOfLektionNumbers.push(String(key))
      })

      return arrOfLektionNumbers
    }

  }
})

.factory('UserData', ['Questions', '$window', function(Questions, $window) {
  return {

    getSelection: function () {

      if ($window.localStorage.selection === undefined || $window.localStorage.selection === '') {
        return Questions.getAll()
      } else {
        var raw = $window.localStorage.selection
        var arr = raw.split('||')
        var result = []
        for (var i = arr.length - 1; i >= 0; i--) {
          result = result.concat(Questions.getLektion(parseInt(arr[i])))
        };
        return result
      }
    },

    addToSelection: function (list) {
      console.log("addToSelection is run"); 
      console.log($window.localStorage.selection)
      list = String(list)
      var arr = list.split(',')
      var selecCheck = window.localStorage.selection || ''
      selecCheck = selecCheck.split('||')
      console.log(selecCheck);
      for (var i = arr.length - 1; i >= 0; i--) {
        console.log(String(arr[i]));
        console.log(selecCheck.indexOf(String(arr[i])))
        if (selecCheck.indexOf(String(arr[i])) != -1) {continue}

        if ($window.localStorage.selection === '' || $window.localStorage.selection === undefined) {
          console.log("its '' or undefined");
          console.log(arr[i]);
          window.localStorage.selection = arr[i]
        } else {
          window.localStorage.selection += '||' + arr[i]
        }
      };
    },

    getSelectedLektions: function () {
      if ($window.localStorage.selection === '' || $window.localStorage.selection === undefined) {
        return Questions.getArrayOfLektionNumbersAsStrings()
      } else {
        return $window.localStorage.selection.split('||')
      }
    },

    getSelectedLektionsAsObj: function() {
      var result = {}
      var arrOfLektionNumbers = Questions.getArrayOfLektionNumbers()

      selected = this.getSelectedLektions()

      console.log(selected)

      for (var i = arrOfLektionNumbers.length - 1; i >= 0; i--) {
        if (selected.indexOf(String(arrOfLektionNumbers[i])) != -1) {
          result[arrOfLektionNumbers[i]] = true
        } else {
          result[arrOfLektionNumbers[i]] = false
        }
      };
      return result
    },

    setSelectionFromObj: function(obj) {
      console.log(obj);

      $window.localStorage.selection = ""

      angular.forEach(obj, function (val, key) {

        if (val) {
          if ($window.localStorage.selection === "") {
            $window.localStorage.selection = key
          } else {
            $window.localStorage.selection += ('||' + key)
          }
        };

      })
    }

  }
}])
.factory('Helpers', function(){
  return {
    random: function (from, to) {
      return Math.floor((Math.random() * to) + from);      
    }
  }
})

.controller('StammformenCtrl', ['$scope', function($scope) {


}])
.controller('HomeCtrl', ['$scope', function($scope) { 

}])
.controller('PlayCtrl', ['$scope', '$timeout', 'UserData', 'Helpers', function($scope, $timeout, UserData, Helpers) {

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

      if ($scope.currQData.arr[1] === $scope.currQData.first.toLowerCase()) {
        $scope.domAccess.correctFirst = 'right-answer'
      } else {
        $scope.domAccess.correctFirst = 'wrong-answer'
        $scope.domAccess.labelFirst = $scope.currQData.arr[1]
      }

      if ($scope.currQData.arr[2] === $scope.currQData.second.toLowerCase()) {
        $scope.domAccess.correctSecond = 'right-answer'
      } else {
        $scope.domAccess.correctSecond = 'wrong-answer'
        $scope.domAccess.labelSecond = $scope.currQData.arr[2]
      }

      if ($scope.currQData.arr[3] === $scope.currQData.third.toLowerCase()) {
        $scope.domAccess.correctThird = 'right-answer'
      } else {
        $scope.domAccess.correctThird = 'wrong-answer'
        $scope.domAccess.labelThird = $scope.currQData.arr[3]
      }

      $timeout(function () {
        document.querySelector('.first-input').focus()
        $scope.functions.newQ()
      }, 5000)


    }
  }

  $scope.functions.newQ()

}])
.controller('SettingsCtrl', ['$scope', 'UserData', 'Questions', function ($scope, UserData, Questions) {

  $scope.lekData = {}

  $scope.lekData.numbers = Questions.getArrayOfLektionNumbers()
  $scope.lekData.selectedObj = UserData.getSelectedLektionsAsObj()

  $scope.$watch('lekData.selectedObj', function(newVal, oldVal) {

    UserData.setSelectionFromObj($scope.lekData.selectedObj)

  }, true)
  
}])
})