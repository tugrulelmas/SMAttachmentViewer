// Assigning modules to local variables
var gulp = require('gulp');
var header = require('gulp-header');
var pkg = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
    ' * abioka - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright 2016-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n',
    ' */\n',
    ''
].join('');

// Default task
gulp.task('default', ['copy-css-js', 'copy']);

gulp.task('copy-css-js', function() {
    return gulp.src(['core.js', 'core.css'])
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
    return gulp.src([
            'icon16.png',
            'icon32.png',
            'icon48.png',
            'icon64.png',
            'icon128.png',
            'loading.gif',
            'manifest.json'
        ])
        .pipe(gulp.dest('dist'))
});
