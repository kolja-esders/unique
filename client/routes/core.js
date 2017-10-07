//import Polls from 'modules/polls/Polls';
//import PollsDetail from 'modules/polls/PollsDetail';
//import PollsResults from 'modules/polls/PollsResults';
import SharedBooks from 'modules/core/SharedBooks/SharedBooks';
import AddBookToBookshelf from 'modules/core/AddBookToBookshelf/AddBookToBookshelf';
import GroupView from 'modules/core/GroupView/GroupView';
import LoadingPage from 'components/LoadingPage/LoadingPage'
import ConfirmPage from 'modules/core/ConfirmPage/ConfirmPage';
import LandingPage from 'components/Landing/Landing';
import ModulePage from 'components/ModulePage/ModulePage'


const coreRoutes = [
  {
    path: '/shared-books',
    component: SharedBooks,
  },
  {
    path: '/add-book',
    component: AddBookToBookshelf,
  },
  {
    path: '/group/:name_url',
    component: GroupView,
  },
  {
    path: '/becoming-friends',
    component: LoadingPage,
  },
  {
    path: '/setup',
    component: ConfirmPage,
  },
  {
    path: '/home',
    component: ModulePage,
  }

  //{
    //path: '/polls/:id/detail',
    //component: PollsDetail,
  //},
  //{
    //path: '/polls/:id/results',
    //component: PollsResults,
  //},
  //{
    //path: '/polls/:id/vote',
    //component: PollsVote,
  //}

];

export default coreRoutes;
