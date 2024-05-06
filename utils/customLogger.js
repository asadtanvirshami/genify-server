function log(functionName, message) {
    const timestamp = new Date().toISOString();
    console.log(`LOG:[${timestamp}] [${functionName}] ${message}`);
  }
  
  function debug(functionName, message) {
    const timestamp = new Date().toISOString();
    console.debug(`DEBUG:[${timestamp}] [${functionName}] ${message}`);
  }
  
  function error(functionName, message) {
    const timestamp = new Date().toISOString();
    console.error(`ERROR:[${timestamp}] [${functionName}] ${message}`);
  }
  
  module.exports = {
    log,
    error,
    debug
  };
  