import React, {useState} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {Private} from './components/Private'
import {Lobby} from './components/Lobby'
import {Group} from './components/Group'
import {Drawer} from './components/Drawer'
import {MessageUser} from './components/MessageUser'
import { User } from '../../../../client/user/User'
import { Profile, ProfileModel } from '../../../../client/user/Profile'
import { Chat } from '../../../../client/chat/Chat'

const chatBreadCrumbs: Array<PageLink> = [
  {
    title: 'Chat',
    path: '/apps/chat/private-chat',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const ChatPage: React.FC = () => {
  return (
    <Switch>
      <Route path='/apps/chat/private-chat'>
        <PageTitle breadcrumbs={chatBreadCrumbs}>Private chat</PageTitle>
        <Private />
      </Route>
      <Route path='/apps/chat/group-chat'>
        <PageTitle breadcrumbs={chatBreadCrumbs}>Group chat</PageTitle>
        <Group />
      </Route>
      <Route path='/apps/chat/drawer-chat'>
        <PageTitle breadcrumbs={chatBreadCrumbs}>Drawer chat</PageTitle>
        <Drawer />
      </Route>
      <Route path='/apps/chat/lobby-chat'>
        <PageTitle breadcrumbs={chatBreadCrumbs}>Lobby chat</PageTitle>
        <Lobby />
      </Route>
      <Route path={Chat.CHAT_ROUTE_MESSAGE_USER_BASE}>
        <PageTitle >Message User</PageTitle>
        <MessageUser />
      </Route>
      <Redirect from='/apps/chat' exact={true} to='/apps/chat/private-chat' />
      <Redirect to='/apps/chat/private-chat' />
    </Switch>
  )
}

export default ChatPage
