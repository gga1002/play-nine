playNine.controller('playNineController', function($scope){
    $scope.numbers =[
        {value: 1, status:''},
        {value: 2, status:''},
        {value: 3, status:''},
        {value: 4, status:''},
        {value: 5, status:''},
        {value: 6, status:''},
        {value: 7, status:''},
        {value: 8, status:''},
        {value: 9, status:''}
    ];

    $scope.result = '';
    $scope.stars= [];
    $scope.answers =[];
    $scope.getStars = function(){
        let numberOfStars = 1 + Math.floor(Math.random() *9);
        let arrayStars = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        $scope.stars = arrayStars.filter(e => e <= numberOfStars);
    }

    $scope.selectNumber = function(number){
        
        if($scope.answers.filter(e => 
                e.value === number.value).length > 0)
            return;

        if($scope.stars.length === 0){   
            $scope.getStars();
            return;
        }

        let answer ={
            value: number.value,
            result: ''
        };

        answer.result = 'wrong';
        if(number.value === $scope.stars.length)
            answer.result ='correct';

        $scope.answers.push(answer);

        $scope.getStars();
        number.status ='selected';
        setResult();
    }

    var setResult = function(){
        if($scope.answers.length === 9)
            $scope.result = $scope.answers
                .filter(a => a.result === 'correct').length + ' /' + 9;
        console.log($scope.answers.length);
    };

    $scope.resetGame = function(){
        $scope.answers =[];
        $scope.getStars();
        resetNumbers();
    };

    var resetNumbers = function(){
        $scope.numbers.forEach(function(e){
            e.status ='';
        });
    };

});