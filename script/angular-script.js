function partCtrl($scope) {

    //Initialization
    $scope.part2State = 'start';
    $scope.part3State = 'null';
    $scope.part4State = 'null';
    $scope.part5State = 'null';

    //Part2
    $scope.part2 = ['v1', 'v2'];

    $scope.showPart2 = function(version) {
        $scope.part2State = version;
        $scope.part3State = version + 'Chosen';
    }
    //Part3
    $scope.part3v1 = ['v1_1', 'v1_2'];
    $scope.part3v2 = ['v2_1', 'v2_2'];

    $scope.showPart3 = function (version) {
        $scope.part3State = version;
        $scope.part4State = version + 'Chosen';
    }
    //Part4
    $scope.part4v1_1 = ['v1_1_1', 'v1_1_2'];
    $scope.part4v1_2 = ['v1_2_1', 'v1_2_2'];
    $scope.part4v2_1 = ['v2_1_1', 'v2_1_2'];
    $scope.part4v2_2 = ['v2_2_1', 'v2_2_2'];

    $scope.showPart4 = function (version) {
        $scope.part4State = version;
        $scope.part5State = version + 'Chosen';
    }
    //Part5
    $scope.part5v1_1_1 = ['v1_1_1_1', 'v1_1_1_2'];
    $scope.part5v1_1_2 = ['v1_1_2_1', 'v1_1_2_2'];
    $scope.part5v1_2_1 = ['v1_2_1_0'];
    $scope.part5v1_2_2 = ['v1_2_2_1', 'v1_2_2_2'];
    $scope.part5v2_1_1 = ['v2_1_1_1', 'v2_1_1_2'];
    $scope.part5v2_1_2 = ['v2_1_2_1', 'v2_1_2_2'];
    $scope.part5v2_2_1 = ['v2_2_1_0'];
    $scope.part5v2_2_2 = ['v2_2_2_1', 'v2_2_2_2'];

    $scope.showPart5 = function (version) {
        $scope.part5State = version;
    }
}


/*
v1 : title
v2
v1_1
v1_2
v2_1
v2_2
v1_1_1
v1_1_2
v1_2_1
v1_2_2
v2_1_1
v2_1_2
v2_2_1
v2_2_2
v1_1_1_1
v1_1_1_2
v1_1_2_1
v1_1_2_2
v1_2_1_0
v1_2_2_1
v1_2_2_2
v2_1_1_1
v2_1_1_2
v2_1_2_1
v2_1_2_2
v2_2_1_0
v2_2_2_1
v2_2_2_2

*/