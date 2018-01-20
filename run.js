const MusicBot = require('discord-musicbot');

const config = {
  // these 3 are always required.
  token: 'NDA0Mjc1MDc2NjI0NTQ3ODYw.DUTijg.8AO_TUt7roJrktpkVZHocSH2WCU',
  serverId: '404213840197320714',
  textChannelId: '404234773238775819',

  // override any default settings.
  // see `src/config/settings.js` for an idea of structure here.
  settings: {
    commandPrefix: '!',
  },

  // customize the replies you receive.
  // see `src/config/replies.js` for an idea of structure here.
  replies: {
    general: {
      unknownCommand: 'Looks like I don\'t know that one!',
    },
  },

  // customize log messages... I dunno why you'd want to do it, but I've
  // allowed for it all the same.
  // see `src/config/logging.js` for an idea of structure here.
  logging: {
    connected: 'Bot started and connected.',
  },

  // set up custom user permission groups and assign users to them.
  permissions: {
    groups: {
      // if you provide an already existing group, it will override that
      // groups default permissions.
      admin: {
        disconnect: true,
        setavatar: true,
        setusername: true,
      },

      // you can define new groups and add permissions to them. All groups
      // will still inherit the global permissions though so if you want to
      // restrict a group down you'll need to turn perms off.
      poweruser: {
        disconnect: true,
      },
    },
    // ... and you can define multiple users to a group.
    // note; there is no 'inheritance' between groups, if a group does not
    // have the permission set then it falls back to the global permissions.
    users: {
      'YOUR USER ID': 'admin',
      'FRIENDS USER ID': 'admin',
      'ANOTHER USER ID': 'poweruser',
      'YET ANOTHER USER ID': 'nogroup', // undefined group, will use global perms.
    },
  }
};

const musicBot = new MusicBot(config);

musicBot.run();