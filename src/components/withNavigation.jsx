import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function withNavigation(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} location={useLocation()} />;
};
