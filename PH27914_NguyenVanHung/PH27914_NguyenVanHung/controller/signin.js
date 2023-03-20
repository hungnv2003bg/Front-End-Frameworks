function signin($scope, $http, $window){
    const accountApi = 'http://localhost:3000/accounts'

    $http.get(accountApi)
        .then(res => {
            $scope.listAccounts = res.data;
        })

    $scope.account = "";
    $scope.password = "";

    $scope.handleSignIn = (e) => {
        e.preventDefault();
        let count = 0;
        $scope.currentValue = {
            "username": $scope.account,
            "password": $scope.password
        }
        $scope.listAccounts.map(acc => {
            if(acc.username == $scope.currentValue.username && acc.password == $scope.currentValue.password){
                count++;
            }
        })
        count > 0 ? $window.location.href = `#?username=${$scope.account}` : alert('Tài khoản mật khẩu không đúng')
    }
}
