/**
 *
 * This file is used to build Angular Remote package from `src/*`
 *
 */
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/**\n' +
        ' * <%= pkg.name %> <%= pkg.version %>\n' +
        ' * \n' +
        ' * Date: <%= (new Date()).toString() %>\n' +
        '*/'
    },
    concat: {
      minimum_js: {
        src: [
          '<banner>',
          'src/sys/angular.1.0.2.js',
          'src/sys/angular-patch.js'
        ],
        dest: 'src/sys/angular-angularpatch.js'
      },
      with_bootstrap_js: {
        src: [
          '<banner>',
          'src/sys/jquery-1.8.2.js',
          'src/sys/angular.1.0.2.js',
          'src/sys/angular-patch.js',
          'src/sys/angular-ui-handsontable.full.js'
        ],
        dest: 'src/sys/jquery-angular-angularpatch-handsontable.js'
      },
      with_handsontable_js: {
        src: [
          '<banner>',
          'src/sys/jquery-1.8.2.js',
          'src/sys/angular.1.0.2.js',
          'src/sys/angular-patch.js',
          'src/sys/bootstrap-2.2.1.js'
        ],
        dest: 'src/sys/jquery-angular-angularpatch-bootstrap.js'
      },     
      with_bootstrap_handsontable_js: {
        src: [
          '<banner>',
          'src/sys/jquery-1.8.2.js',
          'src/sys/angular.1.0.2.js',
          'src/sys/angular-patch.js',
          'src/sys/bootstrap-2.2.1.js',
          'src/sys/angular-ui-handsontable.full.js'
        ],
        dest: 'src/sys/jquery-angular-angularpatch-bootstrap-handsontable.js'
      },
      handsontable_css: {
        src: [
          '<banner>',
          'src/css/angular-ui-handsontable.full.css'
        ],
        dest: 'src/css/jquery-angular-angularpatch-handsontable.css'
      },  
      bootstrap_handsontable_css: {
        src: [
          '<banner>',
          'src/css/bootstrap-2.2.1.css',
          'src/css/angular-ui-handsontable.full.css'
        ],
        dest: 'src/css/jquery-angular-angularpatch-bootstrap-handsontable.css'
      }     
    },
    min: {
      "src/sys/angular-angularpatch.min.js": [ "<banner>", "src/sys/angular-angularpatch.js" ],
      "src/sys/jquery-angular-angularpatch-bootstrap.min.js": [ "<banner>", "src/sys/jquery-angular-angularpatch-bootstrap.js" ],
      "src/sys/jquery-angular-angularpatch-handsontable.min.js": [ "<banner>", "src/sys/jquery-angular-angularpatch-handsontable.js" ],
      "src/sys/jquery-angular-angularpatch-bootstrap-handsontable.min.js": [ "<banner>", "src/sys/jquery-angular-angularpatch-bootstrap-handsontable.js" ]      
    },
    cssmin: {
      "src/css/jquery-angular-angularpatch-handsontable.min.css": [ "<banner>", "src/css/jquery-angular-angularpatch-handsontable.css" ],      
      "src/css/jquery-angular-angularpatch-bootstrap-handsontable.min.css": [ "<banner>", "src/css/jquery-angular-angularpatch-bootstrap-handsontable.css" ]      
    }    

});

  // Default task.
  grunt.registerTask('default', 'concat min cssmin');
  grunt.loadNpmTasks('grunt-css');
};