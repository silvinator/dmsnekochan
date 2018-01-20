const MusicBot = require('discord-musicbot');


const config = {
  // these 3 are always required.
  token: 'NDA0Mjc1MDc2NjI0NTQ3ODYw.DUTijg.8AO_TUt7roJrktpkVZHocSH2WCU',
  serverId: '404213840197320714',
  textChannelId: '404234773238775819',

  // permissions is technically optional, but if you want to access to all
  // permissions you'll need to at the very least make yourself an admin.
  permissions: {
    users: {
      '96564946304794624': 'admin',
    },
  }
};

const musicBot = new MusicBot(config);

musicBot.run();
