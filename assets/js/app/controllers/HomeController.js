(function() {
    'use strict';

    angular.module('Twitter')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Post'];
    function HomeController($scope, Post) {
        $scope.posts = Post.query();

        $scope.post = "";

        $scope.sendPost = function(post) {
            var post = new Post({post: post});
            post.$save().then(function(newPost) {
                $scope.posts.push(newPost);
                $scope.post = '';
            });
        };


        $scope.remove = function (post, $index) {
            if (!confirm('Are you sure ?')) {
                return;
            }
            post.$remove().then(function() {
                $scope.posts.slice($index, 1);
            })
        }
    }
})();
