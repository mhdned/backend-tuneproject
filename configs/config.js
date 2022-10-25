let dbUrl = 'http://127.0.0.1:6300/api/v3/';

module.exports = {
  ipdbregister: `${dbUrl}auth/register`,
  ipdblogin: `${dbUrl}auth/login`,
  ipdbuser_un: `${dbUrl}user/un`,
  ipdbuser: `${dbUrl}user`,
  ipdbwallet: `${dbUrl}wallet`,
  ipdbfile: `${dbUrl}file`,
  ipdbproduct: `${dbUrl}product`,
};
