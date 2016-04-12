import routes from './routes';
import clientRouter from 'sails-hook-react-router/lib/router/client';

export default clientRouter(
  routes, {}, // extra props to pass to router
  // options - see clientRouter docs
  {
    reactRootElementId: 'react-root',
    isomorphicStyleLoader: true,
  }
);
