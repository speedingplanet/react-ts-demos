module.exports = function( api ) {
  api.cache( true );

  const presets = [ '@babel/env' ];
  const plugins = [ '@babel/plugin-syntax-class-properties' ];

  return {
    presets,
    plugins,
  };
};
