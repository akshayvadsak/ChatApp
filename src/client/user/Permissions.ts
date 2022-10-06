import { AccessControl } from "accesscontrol";

const ac = new AccessControl();

ac.grant('admin')
  .readAny('chat')
  .readAny('chat-feed')
  .readAny('chat-logs')
  .readAny('profile')
  .createAny('profile')
  .updateAny('profile')
  .readAny('profile-push')
  .updateAny('profile-approval')
  .readAny('profile-declined-list')
  .createAny('profile-declined-list')
  .updateAny('profile-declined-list')
  .readAny('profile-creator-list')
  .createAny('profile-creator-list')
  .updateAny('profile-creator-list')
  .readAny('analytics')
  .readAny('signups')
  .readAny('users-by-status')
  .readAny('double-opt-in-users')
  .readAny('revenue')
  .readAny('chatters')
  .readAny('misc')
  .createAny('chatter')
  .deleteAny('chatter')
  .readAny('chatter')
  .deleteAny('user')
  .readAny('credits')
  .readAny('support')
  .createAny('ticket')

ac.grant('chatter')
  .readAny('chat')
  .readAny('chat-feed')
  .readAny('profile-selection')

ac.grant('profile_creator')
  .readAny('profile')
  .createAny('profile')
  .updateAny('profile')

ac.grant('user')
  .readAny('chat')
  .readAny('chat-profiles')

ac.grant('moderator')
  .readAny('chat')
  .readAny('chat-feed')

export default ac;