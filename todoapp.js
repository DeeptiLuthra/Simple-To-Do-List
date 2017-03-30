var todo=angular.module("todoapp",[]);

todo.controller("todocontroller",function($scope){
	$scope.pending=[];
	$scope.completed=[];
	$scope.counter=0;
	
	$scope.tasks=function(){
		$scope.pending.push({id: $scope.counter++,
					checked: false,
					description: $scope.description});
	
		$scope.description='';
	};
	
	$scope.taskCompleted=function(value){
			$scope.completed.push( { id: $scope.pending[value].id,
									checked: true,
									description: $scope.pending[value].description}
			);
			$scope.pending.splice(value,1);
	};
	
	$scope.taskPending=function(value){
			$scope.pending.push( { id: $scope.completed[value].id,
									checked: false,
									description: $scope.completed[value].description}
			);
			$scope.completed.splice(value,1);
	};
});