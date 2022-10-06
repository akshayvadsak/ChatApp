import React, { Suspense, lazy } from 'react'
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom'
import { FallbackView } from '../../_metronic/partials'
import DeletedUsers from '../modules/DeletedUsers/DeletedUsers'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { MenuTestPage } from '../pages/MenuTestPage'

export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const LiveChat = lazy(() => import('../modules/LiveChatProfile/LiveChat'))
  const ChatProfile = lazy(() => import('../modules/ChatProfile/ProfileCreation'))
  const ProfilePush = lazy(() => import('../modules/ChatProfile/ProfilePush'))
  const ProfileSelection = lazy(() => import('../modules/ChatProfile/ProfileSelection'))
  const ProfileApproval = lazy(() => import('../modules/ChatProfile/ProfileApproval'))
  const ProfileApprovalList = lazy(() => import('../modules/ChatProfile/ProfileApprovalList'))
  const ProfileDeclinedList = lazy(() => import('../modules/ChatProfile/ProfileDeclinedList'));
  const ProfileEdit = lazy(() => import('../modules/ChatProfile/ProfileEdit'))
  const ProfileCreatorList = lazy(() => import('../modules/ChatProfile/ProfileCreatorList'))
  const UserList = lazy(() => import('../modules/UserList/UserList'))
  const GiveCredits = lazy(() => import('../modules/GiveCredits/GiveCredits'))
  const CreateChatter = lazy(() => import('../modules/Misc/CreateChatter'))
  const ChatterList = lazy(() => import('../modules/Chat/ChattersList'))
  const UserSearch = lazy(() => import('../modules/UserSearch/UserSearch'))
  const SignupCount = lazy(() => import('../modules/ChatProfile/SignupCount'))
  const ChatLogs = lazy(() => import('../pages/dashboard/ChatLogs'))
  const UserCountByGenerationStatus = lazy(() => import('../modules/ChatProfile/UserCountByGenerationStatus'))
  const DoubleOptInCount = lazy(() => import('../modules/ChatProfile/DoubleOptInCount'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/builder' component={BuilderPageWrapper} />
        <Route path='/crafted/pages/profile' component={ProfilePage} />
        <Route path='/crafted/pages/wizards' component={WizardsPage} />
        <Route path='/crafted/widgets' component={WidgetsPage} />
        <Route path='/crafted/account' component={AccountPage} />
        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/menu-test' component={MenuTestPage} />
        <Route path='/live-chat/:site/:id' component={LiveChat} />
        <Route path='/profile-creation' component={ChatProfile} />
        <Route path='/profile-push' component={ProfilePush} />
        <Route path='/profile-selection/:site/:id' component={ProfileSelection} />
        <Route path='/profile-approval/:id' component={ProfileApproval} />
        <Route path='/profile-approval-list' component={ProfileApprovalList} />
        <Route path='/profile-declined-list' component={ProfileDeclinedList} />
        <Route path='/profile-edit/:id' component={ProfileEdit} />
        <Route path='/profile-creator-list' component={ProfileCreatorList} />
        <Route path='/user-list' component={UserList} />
        <Route path='/give-credits' component={GiveCredits} />
        <Route path='/create-chatter' component={CreateChatter} />
        <Route path='/chatter-list' component={ChatterList} />

        <Route path='/user-search' component={UserSearch} />

        <Route path='/signup-count' component={SignupCount} />

        <Route path='/users-by-status' component={UserCountByGenerationStatus} />
        
        <Route path='/double-opt-in-users' component={DoubleOptInCount} />

        <Route path='/chat-logs' component={ChatLogs} />
        <Route path='/deleted-users' component={DeletedUsers} />
        <Route path='/auth' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}

// Definition of IProps
export interface IProps extends RouteComponentProps<{ id?: string, site?: string }> {
  // other properties
}
