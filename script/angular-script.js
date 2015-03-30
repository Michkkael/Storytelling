function partCtrl($scope) {

    //Initialization
    $scope.part2State = 'start';
    $scope.part3State = 'null';
    $scope.part4State = 'null';
    $scope.part5State = 'null';

    //Part2
    $scope.part2 = [
        {id: 'v1', title: "Tailing"}, 
        {id: 'v2', title: "The chase"}
    ];

    $scope.showPart2 = function(version) {
        $scope.part2State = version;
        $scope.part3State = version + 'Chosen';
    }
    //Part3
    $scope.part3v1 = [
        {id: 'v1_1', title: "An endless night"}, 
        {id: 'v1_2', title: "Chasing answers"}
    ];
    $scope.part3v2 = [
        {id: 'v2_1', title: "A cat and mouse game"}, 
        {id: 'v2_2', title: "Bad revelations"}
    ];

    $scope.showPart3 = function (version) {
        $scope.part3State = version;
        $scope.part4State = version + 'Chosen';
    }
    //Part4
    $scope.part4v1_1 = [
        {id: 'v1_1_1', title: "Personal reflections"},
        {id: 'v1_1_2', title: "Troubled past"}
    ];
    $scope.part4v1_2 = [
        {id: 'v1_2_1', title: "The Wedding"},
        {id: 'v1_2_2', title: "Wrong certainties"}
    ];
    $scope.part4v2_1 = [
        {id: 'v2_1_1', title: "A moonlight shadow"},
        {id: 'v2_1_2', title: "Calm before the storm"}
    ];
    $scope.part4v2_2 = [
        {id: 'v2_2_1', title: "The archive room"}, 
        {id: 'v2_2_2', title: "The call"}
    ];

    $scope.showPart4 = function (version) {
        $scope.part4State = version;
        $scope.part5State = version + 'Chosen';
    }
    //Part5
    $scope.part5v1_1_1 = [
        {id: 'v1_1_1_1',title: "Kill two birds with one stone"}, 
        {id: 'v1_1_1_2',title: "As in the good times"}
    ];
    $scope.part5v1_1_2 = [
        {id: 'v1_1_2_1', title: "The long black car"}, 
        {id: 'v1_1_2_2', title: "Hard truth"}
    ];
    $scope.part5v1_2_1 = [{id: 'v1_2_1_0', title: "From the margins to the mainstream"}];
    $scope.part5v1_2_2 = [
        {id: 'v1_2_2_1', title: "Birth of an hero"}, 
        {id: 'v1_2_2_2', title: "Revelation"}
    ];
    $scope.part5v2_1_1 = [{id: 'v2_1_1_0', title: "Bad aiming"}];
    $scope.part5v2_1_2 = [
        {id: 'v2_1_2_1', title: "The murderer river"}, 
        {id: 'v2_1_2_2', title: "It's almost the end"}
    ];
    $scope.part5v2_2_1 = [{id: 'v2_2_1_0', title: "50 shades of Blue"}];
    $scope.part5v2_2_2 = [
        {id: 'v2_2_2_1', title: "Bloody celebration"}, 
        {id: 'v2_2_2_2', title: "The double-personality"}
    ];

    $scope.showPart5 = function (version) {
        $scope.part5State = version;
    }
}