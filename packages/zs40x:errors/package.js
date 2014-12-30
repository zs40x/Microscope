Package.describe({
  name: 'zs40x:errors',
  summary: 'A pattern to display application errors to the user',
  version: '1.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export) 
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers'], 'client');  
  api.use('zs40x:errors','client');
  api.addFiles('zs40x:errors-tests.js','client');
});
