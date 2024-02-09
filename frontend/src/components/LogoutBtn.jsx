import { BiLogOut } from 'react-icons/bi';
import useLogout from '../hooks/useLogout';

const LogoutBtn = () => {
  const { logout } = useLogout();

  return (
    <div className='mt-auto'>
      <BiLogOut
        onClick={logout}
        className='w-5 h-5 text-white cursor-pointer'
      />
    </div>
  );
};

export default LogoutBtn;
