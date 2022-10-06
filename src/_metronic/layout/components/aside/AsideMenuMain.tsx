/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'
import { AsideMenuItem } from './AsideMenuItem'
import { Utils } from '../../../../client/system/Utils'

export function AsideMenuMain() {

  return (
    <>
      {Utils.checkAccess('readAny', 'chat') ? (
        <AsideMenuItemWithSub
          to='/apps/chat'
          title='Chat'
          fontIcon='bi-chat-left'
          icon='/media/icons/duotune/communication/com012.svg'
        >
          {Utils.checkAccess('readAny', 'chat-feed') && <AsideMenuItem
            to='/dashboard'
            title="Chat Feed"
            fontIcon='bi-app-indicator'
            hasBullet={true}
          />}
          {Utils.checkAccess('readAny', 'chat-logs') && <AsideMenuItem
            to='/chat-logs'
            title="Chat Logs"
            fontIcon='bi-app-indicator'
            hasBullet={true}
          />}
        </AsideMenuItemWithSub>
      ) : (
        <>
        </>
      )}

      {Utils.checkAccess('readAny', 'profile') && <AsideMenuItemWithSub
        to='#'
        title='Profile'
        fontIcon='bi-app-indicator'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        {Utils.checkAccess('createAny', 'profile') && <AsideMenuItem
          to='/profile-creation'
          title="Profile Creation"
          hasBullet={true}
        />}

        {Utils.checkAccess('readAny', 'profile-push') && <AsideMenuItem
          to='/profile-push'
          title="Profile Push"
          hasBullet={true}
        />}

        {Utils.checkAccess('readAny', 'profile-creator-list') && <AsideMenuItem
          to='/profile-creator-list'
          title="Profile Creators"
          hasBullet={true}
        />}

        {Utils.checkAccess('updateAny', 'profile-approval') && <AsideMenuItem
          to='/profile-approval-list'
          title='Profile Approval List'
          hasBullet={true}
        />}

        {Utils.checkAccess('updateAny', 'profile-declined-list') && <AsideMenuItem
          to='/profile-declined-list'
          title='Profile Declined List'
          hasBullet={true}
        />}
      </AsideMenuItemWithSub>
      }


      {Utils.checkAccess('readAny', 'analytics') &&
        <AsideMenuItemWithSub
          to='#'
          title='Analytics'
          fontIcon='bi-app-indicator'
          icon='/media/icons/duotune/communication/com012.svg'
        >
          {Utils.checkAccess('readAny', 'signups') && <AsideMenuItem
            to='/signup-count'
            title="Sign Ups"
            hasBullet={true}
          />}
          {Utils.checkAccess('readAny', 'users-by-status') && <AsideMenuItem
            to='/users-by-status'
            title="Users By Status"
            hasBullet={true}
          />}
          {Utils.checkAccess('readAny', 'double-opt-in-users') && <AsideMenuItem
            to='/double-opt-in-users'
            title="Double Opt-In Users"
            hasBullet={true}
          />}
          {Utils.checkAccess('readAny', 'revenue') && <AsideMenuItem
            to='#'
            title="Revenue"
            hasBullet={true}
          />}
          {Utils.checkAccess('readAny', 'chatters') && <AsideMenuItem
            to='#'
            title="Chatters"
            hasBullet={true}
          />}
        </AsideMenuItemWithSub>
      }

      {Utils.checkAccess('readAny', 'misc') &&
        <AsideMenuItemWithSub
          to='#'
          title='Misc'
          fontIcon='bi-app-indicator'
          icon='/media/icons/duotune/communication/com012.svg'
        >
          {Utils.checkAccess('createAny', 'chatter') && <AsideMenuItem
            to='/user-search'
            title="User Search"
            hasBullet={true}
          />}
          {Utils.checkAccess('createAny', 'chatter') && <AsideMenuItem
            to='/deleted-users'
            title="Deleted Users"
            hasBullet={true}
          />}
          {/* {Utils.checkAccess('createAny', 'chatter') && <AsideMenuItem
            to='/create-chatter'
            title="Create Chatter"
            hasBullet={true}
          />}
          {Utils.checkAccess('deleteAny', 'chatter') && <AsideMenuItem
            to='#'
            title="Delete Chatter"
            hasBullet={true}
          />}
          {Utils.checkAccess('readAny', 'chatter') && <AsideMenuItem
            to='/chatter-list'
            title="List Chatters"
            hasBullet={true}
          />} */}
          {/* {Utils.checkAccess('deleteAny', 'user') && <AsideMenuItem
            to='#'
            title="Delete User"
            hasBullet={true}
          />} */}
          {Utils.checkAccess('readAny', 'credits') && <AsideMenuItem
            to='/give-credits'
            title="Give Credits"
            hasBullet={true}
          />}
        </AsideMenuItemWithSub>
      }

      {Utils.checkAccess('readAny', 'misc') &&
        <AsideMenuItemWithSub
          to='#'
          title='Chatter'
          fontIcon='bi-app-indicator'
          icon='/media/icons/duotune/communication/com012.svg'
        >
          {Utils.checkAccess('readAny', 'chatter') && <AsideMenuItem
            to='/chatter-list'
            title="List Chatters"
            hasBullet={true}
          />}
        </AsideMenuItemWithSub>
      }

      {Utils.checkAccess('readAny', 'support') &&
        <AsideMenuItemWithSub
          to='#'
          title='Support'
          fontIcon='bi-app-indicator'
          icon='/media/icons/duotune/communication/com012.svg'
        >
          {Utils.checkAccess('createAny', 'ticket') && <AsideMenuItem
            to='#'
            title="Support Tickets"
            hasBullet={true}
          />}
        </AsideMenuItemWithSub>
      }
    </>
  )
}
