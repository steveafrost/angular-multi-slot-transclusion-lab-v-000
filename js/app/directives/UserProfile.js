function UserProfile() {
	return {
		transclude: {
			name: '?h4',
			position: '?h6',
			description: '?p'
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<h4>Name</h4>',
				'<div><span ng-transclude="name">No name</span></div>',
				'<h6>Position</h6>',
				'<div><span ng-transclude="position">No position</span></div>',
				'<h6>Description</h6>',
				'<div><span ng-transclude="description">No description</span></div>',
			'</div>'
		].join('')
	};
}

angular
	.module('app')
	.directive('userProfile', UserProfile);