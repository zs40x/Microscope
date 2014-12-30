Package.describe({
  name: 'sx20kyz:errors',
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
  api.use('sx20kyzx:errors','client');
  api.addFiles('sx20kyz:errors-tests.js','client');
});
